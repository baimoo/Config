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