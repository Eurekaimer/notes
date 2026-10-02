"""Markdown conveniences scoped to callout prose."""

import re
from html.parser import HTMLParser
from xml.etree import ElementTree

from markdown.extensions import Extension
from markdown.treeprocessors import Treeprocessor
from markdown.util import AtomicString, HTML_PLACEHOLDER_RE


_TOKENS = re.compile(HTML_PLACEHOLDER_RE.pattern + r"|(?<!\n)\n(?!\n)")
_PROSE_TAGS = {"p", "li", "dd", "dt"}
_BLOCK_TAGS = {
    "div", "details", "blockquote", "ul", "ol", "dl", "table", "thead",
    "tbody", "tr", "td", "th", "hr", "section", "figure", "figcaption",
}
_SKIP_TAGS = {"code", "pre", "script", "style", "summary", "h1", "h2", "h3", "h4", "h5", "h6"}
_VOID_TAGS = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"}


class _RawHTMLScope(HTMLParser):
    """Track stashed inline tags across Markdown text and tail boundaries."""

    def __init__(self):
        super().__init__(convert_charrefs=False)
        self.tags = []

    def handle_starttag(self, tag, attrs):
        if tag not in _VOID_TAGS:
            self.tags.append(tag)

    def handle_startendtag(self, tag, attrs):
        pass

    def handle_endtag(self, tag):
        if tag in self.tags:
            index = len(self.tags) - 1 - self.tags[::-1].index(tag)
            del self.tags[index:]


class CalloutBreaksTreeprocessor(Treeprocessor):
    """Convert prose soft breaks after inline parsing, not Markdown source."""

    def _split(self, text, enabled, after_break=False):
        if not text or isinstance(text, AtomicString):
            return None
        matches = []
        for match in _TOKENS.finditer(text):
            if match.group(1) is not None:
                self._raw_html.feed(self.md.htmlStash.rawHtmlBlocks[int(match.group(1))])
            elif enabled and not self._raw_html.tags:
                # Existing hard breaks leave a formatting newline in their tail.
                if not (after_break and match.start() == 0):
                    matches.append(match)
        if not matches:
            return None
        pieces = []
        start = 0
        for match in matches:
            pieces.append(text[start:match.start()])
            start = match.end()
        pieces.append(text[start:])
        return pieces

    def _walk(self, element, in_callout=False, in_prose=False, excluded=False):
        classes = set(element.get("class", "").split())
        excluded = excluded or element.tag in _SKIP_TAGS or bool(
            classes & {"arithmatex", "admonition-title"}
        )
        in_callout = in_callout or element.tag in {"details", "blockquote"} or (
            element.tag == "div" and "admonition" in classes
        )
        if element.tag in _PROSE_TAGS:
            in_prose = True
        elif element.tag in _BLOCK_TAGS:
            in_prose = False
        enabled = in_callout and in_prose and not excluded
        children = list(element)
        pieces = self._split(element.text, enabled)
        if pieces:
            element.text = pieces[0]
            for index, piece in enumerate(pieces[1:]):
                br = ElementTree.Element("br")
                br.tail = piece
                element.insert(index, br)
        for child in children:
            self._walk(child, in_callout, in_prose, excluded)
            pieces = self._split(child.tail, enabled, after_break=child.tag == "br")
            if pieces:
                child.tail = pieces[0]
                index = list(element).index(child) + 1
                for offset, piece in enumerate(pieces[1:]):
                    br = ElementTree.Element("br")
                    br.tail = piece
                    element.insert(index + offset, br)

    def run(self, root):
        self._raw_html = _RawHTMLScope()
        self._walk(root)


class CalloutBreaksExtension(Extension):
    def extendMarkdown(self, md):
        md.treeprocessors.register(CalloutBreaksTreeprocessor(md), "callout_breaks", 15)


def makeExtension(**kwargs):
    return CalloutBreaksExtension(**kwargs)
