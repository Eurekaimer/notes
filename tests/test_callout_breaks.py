import unittest
from xml.etree import ElementTree

import markdown
from markdown.util import AtomicString

from notes_extensions import CalloutBreaksTreeprocessor


EXTENSIONS = [
    "admonition", "pymdownx.details", "pymdownx.superfences",
    "pymdownx.arithmatex", "notes_extensions",
]


def render(source):
    return markdown.markdown(
        source, extensions=EXTENSIONS,
        extension_configs={"pymdownx.arithmatex": {"generic": True}},
    )


def tree(source):
    return ElementTree.fromstring("<main>" + render(source) + "</main>")


def content_signature(node):
    return (
        node.tag, node.attrib, node.text,
        [(content_signature(child), child.tail) for child in node],
    )


def prose_lines(node):
    lines = [""]

    def collect(element):
        lines[-1] += element.text or ""
        for child in element:
            if child.tag == "br":
                lines.append("")
            else:
                collect(child)
            lines[-1] += child.tail or ""

    collect(node)
    return [" ".join(line.split()) for line in lines]


class CalloutBreaksTests(unittest.TestCase):
    def test_inline_text_and_tails(self):
        root = tree('''!!! note "Title"
    first *emphasis
    continued* and [link](https://example.com)
    last
''')
        paragraph = root.find("./div/p[2]")
        self.assertEqual(prose_lines(paragraph), ["first emphasis", "continued and link", "last"])
        self.assertEqual(prose_lines(paragraph.find("em")), ["emphasis", "continued"])
        self.assertEqual(prose_lines(paragraph.find("a")), ["link"])

    def test_details_nested_callouts_lists_and_paragraph_boundaries(self):
        root = tree('''??? note "Details"
    first
    second

    !!! tip "Nested"
        nested
        next

    + item
      continued
    + other

    final paragraph
''')
        details = root.find("details")
        self.assertEqual(details.find("summary").text, "Details")
        self.assertIsNone(details.find("summary/br"))
        self.assertEqual(prose_lines(details.find("p")), ["first", "second"])
        self.assertEqual(prose_lines(details.find("div/p[2]")), ["nested", "next"])
        self.assertEqual(len(details.findall("ul/li")), 2)
        self.assertEqual(prose_lines(details.find("ul/li")), ["item", "continued"])
        self.assertEqual(details.findall("p")[-1].text, "final paragraph")

    def test_existing_hard_break_and_non_callout_soft_break(self):
        root = tree('''outside
soft break

!!! note
    first  
    second
    third

> quote
> next
''')
        self.assertEqual(root.find("p").text, "outside\nsoft break")
        self.assertIsNone(root.find("p/br"))
        paragraph = root.find("div/p[2]")
        self.assertEqual(prose_lines(paragraph), ["first", "second", "third"])
        self.assertEqual(prose_lines(root.find("blockquote/p")), ["quote", "next"])

    def test_code_math_and_raw_html_are_unchanged(self):
        source = '''!!! note
    before `inline code`
    after $x + y$
    final

    ```python
    print("first")
    print("second")
    ```

    $$
    x + y
    = z
    $$

    <span data-value="a">raw
    HTML</span>
'''
        actual = render(source)
        baseline = markdown.markdown(
            source, extensions=EXTENSIONS[:-1],
            extension_configs={"pymdownx.arithmatex": {"generic": True}},
        )
        actual_root = ElementTree.fromstring("<main>" + actual + "</main>")
        baseline_root = ElementTree.fromstring("<main>" + baseline + "</main>")
        for selector in (".//code", ".//*[@class='arithmatex']", ".//span[@data-value='a']"):
            actual_nodes = actual_root.findall(selector)
            baseline_nodes = baseline_root.findall(selector)
            self.assertTrue(baseline_nodes, selector)
            self.assertEqual(
                [content_signature(node) for node in actual_nodes],
                [content_signature(node) for node in baseline_nodes],
            )
        self.assertEqual(len(actual_root.findall("./div/p[2]/br")), 2)

    def test_raw_html_scope_crosses_inline_nodes_without_leaking(self):
        root = tree('''!!! note
    before
    <span>raw *nested
    emphasis*
    end</span>
    after <img src="image.png" />
    final
''')
        paragraph = root.find("div/p[2]")
        self.assertIsNone(paragraph.find("span").find(".//br"))
        self.assertEqual(
            prose_lines(paragraph),
            ["before", "raw nested emphasis end", "after", "final"],
        )

    def test_atomic_strings_and_excluded_elements(self):
        root = ElementTree.fromstring(
            '<div class="admonition"><p class="admonition-title">title\nline</p>'
            '<p><code>code\nline</code>\nprose'
            '<span class="arithmatex">math\nline</span>\nend</p>'
            '<script>script\nline</script><style>style\nline</style></div>'
        )
        root.find("p[2]").text = AtomicString("atomic\ntext")
        CalloutBreaksTreeprocessor().run(root)
        self.assertIsInstance(root.find("p[2]").text, AtomicString)
        self.assertEqual(len(root.findall(".//br")), 2)
        for selector in ("p[1]", "p/code", "p/span", "script", "style"):
            self.assertIn("\n", root.find(selector).text)
            self.assertIsNone(root.find(selector).find("br"))


if __name__ == "__main__":
    unittest.main()
