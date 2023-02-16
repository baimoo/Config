[toc]

# Config

## IDEA 配置

### 全局配置

![image-20220315103427267](https://s2.loli.net/2022/03/15/2omyhjbrvJLYVlx.png)

### 导入配置

`File` -> `Manage IDE Settings` -> `Import Settings...`

### 插件备份

![插件截图](https://s2.loli.net/2021/12/17/9vTEOCZ57aKLbyt.png)

## Typora 配置

图像：复制到指定路径 `D:\Work\学习笔记\images\${filename}`，不勾选自动复制

# SVN 全局忽略

```
*.o *.lo *.la *.al .libs *.so *.so.[0-9]* *.a *.pyc *.pyo __pycache__ *.rej *~ #*# .#* .*.swp .DS_Store *.iml *.class *target *.idea .project .settings *node_modules   *dist *.code
```

# ABP 去广告插件自定义规则

```
baijiahao.baidu.com###commentModule
163.com###post_comment_area
163.com##.tie-areas.post_comment
haokan.baidu.com###commentnum
haokan.baidu.com##.comment
haokan.baidu.com##.extrainfo-comments
mbd.baidu.com###commentContainer
mbd.baidu.com##.index-module_commentd_1dMPR
quanmin.baidu.com##.comment-wrapper
```

# 鼠标手势插件规则（CrxMouse）

```json
{
    "normal": {
        "autocancel": false,
        "autocancelvalue": 2,
        "cancelcontextmenu": true,
        "capturetype": "jpeg",
        "clickedOptin": false,
        "cursorimg": "chrome-extension://jlgkpaicikihijadgifklkbpdajbkhjo/image/cursors/002@3.png",
        "cursorimgscale": "1",
        "dbclicktime": 600,
        "drag": true,
        "gesture": true,
        "hidetrash": false,
        "jpegquality": 100,
        "lasttab": false,
        "minilength": 10,
        "newtabposition": "chrome",
        "scroll": false,
        "scrolleffects": true,
        "scrollgesture": false,
        "strokegesture": false
    },
    "gesture": {
        "direct": true,
        "directcolor": "#404040",
        "directopa": 0.9,
        "gesPos": "cc",
        "geskey": "right",
        "gesture": [
            {
                "action": "G_back",
                "direct": "L",
                "whitelist": []
            },
            {
                "action": "G_go",
                "direct": "R",
                "whitelist": []
            },
            {
                "action": "G_up",
                "direct": "U",
                "whitelist": []
            },
            {
                "action": "G_down",
                "direct": "D",
                "whitelist": []
            },
            {
                "action": "G_close",
                "direct": "DR",
                "moreCloseopts": "close",
                "moreClosesel": "chrome",
                "moreCloseurl": "chrome://newtab/",
                "whitelist": []
            },
            {
                "action": "G_none",
                "direct": "LU"
            },
            {
                "action": "G_reload",
                "direct": "RD"
            },
            {
                "action": "G_newtab",
                "direct": "RU",
                "moreDes": "",
                "morePinned": "unpinned",
                "morePosition": "chrome",
                "moreTarget": "newfront",
                "whitelist": []
            },
            {
                "direct": "UD",
                "action": "G_bottom"
            },
            {
                "action": "G_reloadclear",
                "direct": "UDU",
                "whitelist": []
            },
            {
                "action": "G_none",
                "direct": "UL"
            },
            {
                "action": "G_righttab",
                "direct": "UR",
                "whitelist": []
            },
            {
                "action": "G_newwindow",
                "direct": "DRU",
                "whitelist": []
            },
            {
                "action": "G_closewindow",
                "direct": "URD",
                "whitelist": []
            },
            {
                "action": "G_crxsettings",
                "direct": "RDLU",
                "moreDes": "CrxMouse settings",
                "morePinned": "unpinned",
                "morePosition": "chrome",
                "moreTarget": "newfront",
                "whitelist": []
            },
            {
                "action": "G_close",
                "direct": "LR",
                "moreCloseopts": "close",
                "moreClosesel": "chrome",
                "whitelist": []
            },
            {
                "action": "G_top",
                "direct": "DU"
            },
            {
                "action": "G_reclosedtab",
                "direct": "RL",
                "moreDes": "",
                "morePinned": "unpinned",
                "morePosition": "chrome",
                "moreTarget": "newfront",
                "whitelist": []
            }
        ],
        "gestureui": true,
        "gholdkey": "none",
        "gholdkeydisable": "alt",
        "gholdkeytype": "true",
        "stenable": false,
        "stroke": true,
        "strokecolor": "#0072f3",
        "strokeopa": 0.8,
        "strokewidth": 5,
        "tooltip": true,
        "tooltipcolor": "#121112",
        "tooltipopa": 0.9,
        "tooltipwidth": 18
    },
    "drag": {
        "ddirect": true,
        "ddirectcolor": "#778899",
        "ddirectopa": 0.9,
        "dholdkey": "none",
        "dragimage": true,
        "draginput": false,
        "draglink": true,
        "dragtext": true,
        "dragui": true,
        "dstroke": true,
        "dstrokecolor": "#4E1485",
        "dstrokeopa": 0.8,
        "dstrokewidth": 5,
        "dtooltip": true,
        "dtooltipcolor": "#120310",
        "dtooltipopa": 0.9,
        "dtooltipwidth": 18,
        "image": [
            {
                "action": "I_open",
                "direct": "L",
                "moreDes": "I_open newback",
                "morePinned": "unpinned",
                "morePosition": "left",
                "moreTarget": "newback"
            },
            {
                "action": "I_open",
                "direct": "R",
                "moreDes": "I_open newfront",
                "morePinned": "unpinned",
                "morePosition": "right",
                "moreTarget": "newfront"
            },
            {
                "action": "I_save",
                "direct": "D"
            }
        ],
        "imgfirst": "none",
        "imgfirstcheck": false,
        "link": [
            {
                "action": "L_open",
                "direct": "L",
                "moreDes": "L_open newback",
                "morePinned": "unpinned",
                "morePosition": "left",
                "moreTarget": "newback"
            },
            {
                "action": "L_open",
                "direct": "R",
                "moreDes": "L_open newfront",
                "morePinned": "unpinned",
                "morePosition": "right",
                "moreTarget": "newfront"
            },
            {
                "action": "L_copytext",
                "direct": "D"
            },
            {
                "action": "L_copyurl",
                "direct": "U"
            }
        ],
        "setdragurl": true,
        "text": [
            {
                "action": "T_search",
                "direct": "L",
                "moreDes": "New tab & Background",
                "morePinned": "unpinned",
                "morePosition": "left",
                "moreTarget": "newback",
                "moreTsearch": "sgoogle"
            },
            {
                "action": "T_search",
                "direct": "R",
                "moreDes": "New tab & Front",
                "morePinned": "unpinned",
                "morePosition": "right",
                "moreTarget": "newfront",
                "moreTsearch": "sgoogle"
            },
            {
                "action": "T_copytext",
                "direct": "D"
            }
        ]
    },
    "scroll": {
        "scrollaccele": 1,
        "scrollspeed": 3,
        "smooth": true
    },
    "scrollgesture": {
        "fastSwitch": false,
        "reverseFS": false,
        "sgsleft": [
            {
                "action": "G_top"
            },
            {
                "action": "G_bottom"
            }
        ],
        "sgsleftenable": true,
        "sgsright": [
            {
                "action": "G_top"
            },
            {
                "action": "G_bottom"
            }
        ],
        "sgsrightenable": false,
        "tablist": true,
        "tablistVisual": true,
        "tablistkey": "right"
    },
    "strokegesture": {
        "strleft": [
            {
                "action": "G_none"
            },
            {
                "action": "G_righttab"
            }
        ],
        "strleftenable": true,
        "strmiddle": [
            {
                "action": "G_lefttab"
            },
            {
                "action": "G_righttab"
            }
        ],
        "strmiddleenable": false,
        "strpress": "up",
        "strright": [
            {
                "action": "G_lefttab"
            },
            {
                "action": "G_none"
            }
        ],
        "strrightenable": true
    }
}
```

# Windows 设置

## 修改锁屏后的息屏时间

1. 修改注册表

按 `Win+R` ，输入 `regedit` ，进入注册表如下路径：

```
计算机\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Power\PowerSettings\7516b95f-f776-4464-8c53-06167f40cc99\8ec4b3a5-6868-48c2-be75-4f3044be88a7
```

修改其中 `Attributes` 的值为 `2` 。

![image-20220630175842808](https://s2.loli.net/2022/06/30/hFm37ArvjKaVMoG.png)

2. 修改高级电源设置

进入高级电源设置，设置 `显示->控制台锁定显示关闭超时` 的时间。

![image-20220630180319133](https://s2.loli.net/2022/06/30/QosGnWDcHvCdRKA.png)

## 【更改不可用设置】中没有【休眠】按钮的解决方法

```powershell
powercfg /h on
```