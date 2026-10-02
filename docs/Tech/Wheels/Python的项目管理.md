---
tags:
  - Python
  - uv
  - Wheel
---
# Python 的项目管理

>第一次深入了解偏向工程的部分（项目管理），简要做一个记录

主流的一些工具：

+ Conda(Anaconda, Miniconda) 多语言支持 依赖管理 (DL) 虚拟环境
+ pip 经典但过时
+ uv 目前答案
+ poetry
+ PDM

## pip

>过时

创建虚拟环境

```shell
python -m venv .venv
```

指定版本的创建

```Shell
py -3.10 -m venv .venv
```

激活 (Linux/Mac)

```Shell
source .venv/bin/activate
```

激活 (Win)

```powershell
.\.venv\Scripts\Activate.ps1
```

注：实际上修改的是 sys.path 列表（将全局目录改为自己创建的环境）

!!! question "共享依赖"
    + pip freeze（打印所有安装的包）

```Shell
pip freeze > requirements.txt
```

根据 requirements 文件安装

```Shell
pip install -r requirements.txt
```

缺点是无法识别直接依赖和间接依赖，卸载包之后间接依赖在 `requirement.txt` 无法被删除

解决方法是 `pyproject.toml`

然后就可以直接安装

```Shell
pip install -e .
```

这里的 `-e` 是使用了一个链接文件，确保虚拟环境内不会有两份源代码

## uv

>底层仍然是 pip venv，但是可以理解为一个高级封装

+ References
	+ [Real Python](https://realpython.com/python-uv/)
	+ [Data camp](https://www.datacamp.com/tutorial/python-uv)
	+ [中文版本的简单教程-博客园](https://www.cnblogs.com/wang_yb/p/18635441)

我们只需要 `main.py` 和 `pyproject.toml`

之前的过程大概是：

```Shell
python -m venv .venv
source .venv/bin/activate
edit pyproject.toml
pip install -e .
```

现在可以使用

```Shell
uv add <package-name>
```

协作者可以直接使用

```Shell
uv sync
```

```Shell
# On windows
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```
