---
title: My Backblaze Documentation
subtitle: null
draft: false
date: 2025-08-27T00:00:00.000Z
tags:
  - all
  - documentation
---

I'm worried about the state of my digital memories and personal data after seeing a lot of people failed by their NAS. I'm thinking about putting this existing one onto my parents house as an offsite backup and build a new one that I can rack to save space. I thought that was a good idea but at the same time, it's really expensive, so I've just decided (maybe for the meantime, until I can find another reason to build a new computer LOL) to put the backup in the cloud.

My options where Amazon Glacier, Backblaze, and Wasabi. I ended up with Backblaze due to its simplicity although they only have their datacenter in the US.

Direct link to [Backblaze](https://www.backblaze.com/).

It's really easy to do, I just followed the instructions from this [YouTube video](https://youtu.be/jc7bUFBl4RQ?si=BczxUdkHNfCfEshG). It's from Lawrence Systems, I followed a lot of this guy's tutorial in homelabbing. He's good.

So far, I have 2 buckets: for the **important** and **critical** datasets. You can see [my truenas documentation](/homelab/my-truenas-documentation) for more information about these datasets.

Connect Backblaze to TrueNAS, select SYNC, set the schedule of backup to midnight everyday and you're good to go.

Reference

* [TrueNAS Backup To BackBlaze
  ](https://youtu.be/jc7bUFBl4RQ?si=BczxUdkHNfCfEshG)
