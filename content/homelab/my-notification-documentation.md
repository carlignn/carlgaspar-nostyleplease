---
title: My Notification Documentation
subtitle: null
draft: false
date: 2025-09-01T00:00:00.000Z
tags:
  - all
  - documentation
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

Go to Services > Monit > Settings > General Settings:

* Enable Monit
* Polling Interval - this is not so important that I'd need to put it to 30 seconds. Defaulting to default(120)
* Mail Server Address - smtp.protonmail.ch, this was given by ProtonMail
* Mail Server Port - 582, this was given by ProtonMail
* Mail Server Username - this was given by ProtonMail
* Mail Server Password - this was given by ProtonMail
* Mail Server SSL Connection - ProtonMail recommends that  enable this 

Go to Services > Monit > Settings > Alert Settings:

* Add entry
* Enable Alert
* Recipient - your ProtonMail email address
* Not on - reserve selection. If this box is checked, Monit will not send alerts for the selected events but for all others.
* Events - I've enabled Connection failed, Content failed, Link down, Monit instance changed, Ping failed, Status failed
* Mail format - you can use my custom template below. From field needs to be your email address.
```
From: validemailaddress@carlgaspar.com
Reply-To: noreply@carlgaspar.com
Subject: OPNSense Alerts $DATE
Message: $SERVICE $DATE $DESCRIPTION

Yours sincerely,
Tech Support
```
* Reminder - 10, it will wait for 10 more instances of the alert before sending a new email. I have to set this to none for now.

Go to Services > Monit > Settings > Service Settings:

* $HOST - monitor load average, CPU Usage, Memory Usage, etc.
* $RootFs - monitor for disk space usage, health, or errors
* carp_status_change - specific to CARP (Common Address Redundancy Protocol), which is used for high availability (HA) in OPNsense. You can use this variable to monitor the status of the CARP interfaces and get alerts when there is a failover or a change in the status of your HA system. For example, if your primary node fails, the secondary node will take over, and Monit will alert you that there has been a CARP status change
* gateway_alert - useful for alerting when a gateway becomes unreachable or is back online. If your system is configured with multiple gateways (e.g., for redundancy or load balancing), you can set up Monit to notify you if one of the gateways goes down or comes back online
  * Note - OPNSense uses a custom script for gateway_alert, which requires Gateways Group to be configured
* Custom Alerts - custom alerts are available

### TrueNAS

Go to Credentials > Users > Edit root > Add your email 

Go to System > General Settings > Email > Settings

* Send Mail Method - SMTP
* From Email - validemailaddress@carlgaspar.com
* From Name - Valid Name
* Outgoing Mail Server - this was given by ProtonMail
* Mail Server Port - this was given by ProtonMail
* Security - TLS
* SMTP Authentication
* Username - validemailaddress@carlgaspar.com
* Password - SMTP Token given by ProtonMail

Go to Alert Settings > You can leave everything to default

***

The email being duplicated is an issue with ProtonMail. It has something to do with the validemailaddress@carlgaspar.com being the sender and the recipient.