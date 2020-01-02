[![HitCount](http://hits.dwyl.io/luokangyuan/ghost-theme-mj.svg)](http://hits.dwyl.io/luokangyuan/ghost-theme-mj)  [![GitHub issues](https://img.shields.io/github/issues/luokangyuan/ghost-theme-mj.svg)](https://github.com/luokangyuan/ghost-theme-mj/issues)  [![GitHub license](https://img.shields.io/github/license/luokangyuan/ghost-theme-mj.svg)](https://github.com/luokangyuan/ghost-theme-mj/blob/master/LICENSE)  [![Download](https://img.shields.io/badge/downloads-master-green.svg)](https://img.shields.io/badge/hexo-%3E%3D%203.0-blue.svg) [![GitHub forks](https://img.shields.io/github/forks/luokangyuan/ghost-theme-mjy.svg)](https://github.com/luokangyuan/ghost-theme-mj/network)  [![GitHub stars](https://img.shields.io/github/stars/luokangyuan/ghost-theme-mj.svg)](https://github.com/luokangyuan/ghost-theme-mj/stargazers)

[中文说明](README_CN.md) | [DEMO](http://luokangyuan.com/)

# 一、ghost-theme-mj themeIntroduction

This is a[Ghost](https://ghost.org) blog theme. Ghost blog is a very good writing platform. This is recommended by many people on major websites. I believe you already have your own [Ghost blog]((http://luokangyuan.com/ghostbo-ke-an-zhuang/)). If you don't have your own blog, be prepared. To build, you can refer to my build blog tutorial, Ghost blog build, if you have already set up, then let's take a look,

## 1.1.Ghost Introduction to the theme function

- [x] Blog post home display function
- [x] Article classification function
- [x] Article based on time archiving function
- [x] Add a reward at the end of the article
- [x] Add website access statistics at the bottom of the homepage
- [ ] Integrated article sharing
- [x] Integrated fork me on github function
- [x] Add big link page
- [ ] Add author information (you can provide authorship to people who don't have a blog site)
- [x] Increase the sponsorship wall (personal public information display of the person who will be rewarded)
- [x] Add about my page (analyze author's abilities and growth based on the number of articles, categories, time, etc. published by the author)
- [x] Increase article directory function
- [ ] Increase pet function (promoting pet growth based on the number of articles)
- [x] Integrated code highlighting
- [x] Article details integrated TOC function
- [x] Article archiving adds statistical analysis capabilities, based on the number of articles published by the author, the label analyzes areas in which the author excels

## 1.2.Screenshot of the theme section

### Home

![image-20181125103346641](http://image.luokangyuan.com/2018-11-25-023351.png)

### Article details page

![image-20181125103640360](http://image.luokangyuan.com/2018-11-25-023645.png)

### Article classification page

![image-20181125103935427](http://image.luokangyuan.com/2018-11-25-023939.png)

### Article archive page

![image-20181125104020795](http://image.luokangyuan.com/2018-11-25-024025.png)

### Big page

![image-20181125110357139](http://image.luokangyuan.com/2018-11-25-030401.png)

## 1.3.Instructions

**method one**： Download the zip package and upload the theme package in the ghost background.

**Method Two**： Use the git command to download in the theme directory, the recommended method one

## configuration information

Modify profile /var/www/ghost/content/settings$ vim routes.yaml

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

# 二、Written in the last words

## 2.1.Don't forget to thank others

- [闪烁之狐](https://github.com/blinkfox)
- [杉木博客](http://w3more.cn/)
- ...

## 2.2.recommended topic

- [hexo-theme-matery](https://github.com/blinkfox/hexo-theme-matery)：Hexo theme；Preview address：[闪烁之狐](https://blinkfox.github.io/)
- [hackSeason](https://github.com/mrbin1573/hackSeason)：Ghost theme，Preview address：[杉木博客](http://w3more.cn/)

## 2.3.Description

**Other functions are being developed. Due to the overtime hours of work, but the theme of perfecting for half an hour every night**, if you feel good, welcome to a start support, the project address[ghost-theme-mj](https://github.com/luokangyuan/ghost-theme-mj), if you support Leave your name, I will write to the sponsorship wall, don't forget everyone who gives me help and support in my life, thank you! ! !
