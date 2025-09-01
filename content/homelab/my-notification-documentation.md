---
title: My Notification Documentation
subtitle: null
draft: false
date: 2025-09-01T00:00:00.000Z
tags:
  - all
  - homelab
---

For this project, I've seen options between Discord, SMS, and email. I ended up with email as it seems like it's the best for my use case: open industry standard, has been around forever, and isn't going anywhere.

## Problem

The guides are only set for Gmail. Why? They already offer a standard SMTP interface. I use ProtonMail - and they don't.

## Fix

I've done my research and here are the options that I found:

* ProtonMail Bridge - makes sense, I have the prerequisites that were needed
* SMTP Relay Service - I have an AWS account for my homelab and there's AWS SES for cheap!
* Gmail - **BIG NOPE!**

It looks like my ProtonMail subscription already supports SMTP Relay, might as well use the one that already exists instead of reinventing the wheel.

## Main Setup

### Protonmail SMTP Relay

Go to Settings > Proton Mail > IMAP/SMTP > SMTP submission > Generate token > Input Token name

It is advisable to use a different token for each service. When a token gets compromised, you'll only need to change that single one.

## Per App Setup

### OPNSense

Go to Services > Monit > Settings:

* Enable Monit
* Polling Interval - this is not so important that I'd need to put it to 30 seconds. Defaulting to default(120)
