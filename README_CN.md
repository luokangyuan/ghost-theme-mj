[![HitCount](http://hits.dwyl.io/luokangyuan/ghost-theme-mj.svg)](http://hits.dwyl.io/luokangyuan/ghost-theme-mj)  [![GitHub issues](https://img.shields.io/github/issues/luokangyuan/ghost-theme-mj.svg)](https://github.com/luokangyuan/ghost-theme-mj/issues)  [![GitHub license](https://img.shields.io/github/license/luokangyuan/ghost-theme-mj.svg)](https://github.com/luokangyuan/ghost-theme-mj/blob/master/LICENSE)  [![Download](https://img.shields.io/badge/downloads-master-green.svg)](https://img.shields.io/badge/hexo-%3E%3D%203.0-blue.svg) [![GitHub forks](https://img.shields.io/github/forks/luokangyuan/ghost-theme-mjy.svg)](https://github.com/luokangyuan/ghost-theme-mj/network)  [![GitHub stars](https://img.shields.io/github/stars/luokangyuan/ghost-theme-mj.svg)](https://github.com/luokangyuan/ghost-theme-mj/stargazers)

[English Document](README.md) | [演示示例](http://luokangyuan.com/)

# 一、ghost-theme-mj主题简介

这是一个[Ghost](https://ghost.org)博客主题，Ghost博客是一个很不错的写作平台，这一点在各大网站都被不少人推荐，相信你也已经有了自己的Ghost博客，如果你还没有自己的博客，准备搭建，可以参考我的搭建博客教程，[Ghost博客搭建](http://luokangyuan.com/ghostbo-ke-an-zhuang/)，如果你已经搭建好了，那么我们一起看看吧，

## 1.1.Ghost主题功能简介

- [x] 博客文章首页展示功能
- [x] 文章分类功能
- [x] 文章根据时间归档功能
- [x] 在文章末尾添加打赏功能
- [x] 首页底部增加网站访问统计功能
- [ ] 集成文章分享功能
- [x] 集成fork me on github功能
- [x] 增加大佬链接页面
- [ ] 增加作者信息信息（可以给没有博客网站的人提供作者身份）
- [x] 增加赞助墙（将打赏的人的个人公开信息展示）
- [x] 增加关于我页面（根据作者发布的文章数量，类别，时间等维度，分析作者的能力和成长）
- [x] 增加文章目录功能
- [ ] 增加宠物功能（根据文章数量来促进宠物的成长)
- [x] 集成代码高亮功能
- [x] 文章详情集成TOC功能
- [x] 文章归档增加统计分析功能，根据作者发布文章的数量，标签分析作者擅长的领域

## 1.2.主题部分截图

### 首页

![image-20181125103346641](http://image.luokangyuan.com/2018-11-25-023351.png)

### 文章详情页

![image-20181125103640360](http://image.luokangyuan.com/2018-11-25-023645.png)

### 文章分类页面

![image-20181125103935427](http://image.luokangyuan.com/2018-11-25-023939.png)

### 文章归档页面

![image-20181125104020795](http://image.luokangyuan.com/2018-11-25-024025.png)

### 大佬页面

![image-20181125110357139](http://image.luokangyuan.com/2018-11-25-030401.png)

## 1.3.使用方法

**方法一：** 下载压缩包，在ghost后台上传主题包即可

**方法二：** 使用git命令下载在theme目录下，推荐使用方法一

## 配置信息

修改配置文件 /var/www/ghost/content/settings$ vim routes.yaml

```bash
routes:
  /about/me/: about-me
  /articles/classification/: articles-classification
  /articles/file/: articles-file
  /recard/list/people/: recard-list-people
  /friend/ship/: friend-ship
collections:
  /:
    permalink: /{slug}/
    template:
      - index

taxonomies:
  tag: /articles/classification/{slug}/
  author: /author/{slug}/
```

```bash
git clone git@github.com:luokangyuan/ghost-theme-mj.git
```

# 二、写在最后的话

## 2.1.不忘感谢他人

- [闪烁之狐](https://github.com/blinkfox)
- [杉木博客](http://w3more.cn/)
- ...

## 2.2.推荐主题

- [hexo-theme-matery](https://github.com/blinkfox/hexo-theme-matery)：Hexo主题；预览地址：[闪烁之狐](https://blinkfox.github.io/)
- [hackSeason](https://github.com/mrbin1573/hackSeason)：Ghost博客主题，预览地址：[杉木博客](http://w3more.cn/)

## 2.3.说明

`其他的功能的正在开发，由于工作加班时间多，但是每天晚上都坚持完善半个小时的主题，`如果，你觉得不错，欢迎给一个start支持一下，项目地址[ghost-theme-mj](https://github.com/luokangyuan/ghost-theme-mj),如果你支持了，留下你的名字，我会写到赞助墙，不忘每一个在我人生中给我帮助和支持的人，感谢有你！！！

## star趋势图

[![Sparkline](https://stars.medv.io/luokangyuan/ghost-theme-mj.svg)](https://stars.medv.io/luokangyuan/ghost-theme-mj)
