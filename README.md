~~This is and should always be a copy of the [Puppet - Getting Started](https://carlgaspar.com/posts/puppet-getting-started/) post~~

Puppet is a responsive, simple and clean [Hugo](https://gohugo.io/) theme based on the [Huxblog Jekyll theme](https://github.com/Huxpro/huxpro.github.io).

<!--more-->

## Install Hugo

Make sure you have installed the latest version of [Hugo-extented](https://gohugo.io/getting-started/installing/).

## Create a New Site

```shell
hugo new site mysite
```

## Add the Theme

You can download and unpack the theme manually from Github or use git to clone the theme into your site's `themes` directory.

```shell
cd mysite
git init
git clone https://github.com/roninro/hugo-theme-puppet.git themes/puppet
```

Or you can add the theme as a submodule.

```shell
cd mysite
git init
git submodule add https://github.com/roninro/hugo-theme-puppet.git themes/puppet
git submodule update --init --recursive
```

That’s all, Puppet is ready to be used.

## Add Config Files

For getting started, you can copy the `config.toml` file from the theme's exampleSite directory to the root directory of your site.

```shell
cp themes/puppet/exampleSite/config.toml .
```

> Note: You may need to delete the `themesDir` line in the config file.

## Add Some Content

Create a new post with the following command.

```shell
hugo new posts/my-first-post.md
```

Edit the content of the post.

```markdown
+++
title = "{{ replace .Name "-" " " | title }}"
date = {{ .Date }}
description = ""
draft = true
subtitle = ""
header_img = ""
toc = true
tags = []
categories = []
series = []
comment = true
+++

Your content here...
```

Some front-matter used for SEO, others used for displaying contents, configuration, etc.

## Run Example Site

From the root of themes/puppet/exampleSite:

```shell
hugo server --themesDir ../..
```

## Run Tina Locally

```javascript
npx tinacms dev - c "hugo server -D"
```

## Rules

### Layout a Post

```markdown
The main title will only be H1
Succeeding titles will be H2 and lower
```

## Conditional Rules

### Images

Inline images: Uploaded to imgur, then linked\
Header_img: Uploaded to tina media manager\

```html
![](https://imgur.com/SdQF4AX.jpg)
```

Screenshots: Uploaded to imgur, then coded

```html

[Screenshots](imgur.com/a/2cHNX0i) of the game uploaded to Imgur.

```

### Write-up

References on the bottom: Write-up from Kevin Henry's Risk Assessment and Management in Pluralsight

### Draft

Subtitle: (Draft) ...\
Tags: draft

#### Search for Drafts

Use search: (Draft)

### References

Bulleted Links: Risk Assessment and Management by Kevin Henry on Pluralsight

## Errors

### Shortcodes

Temporarily removed due to being unsupported in TinaCMS. So far, only the "Rich Content" is not working.
