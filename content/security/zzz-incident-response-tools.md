---
title: 'Incident Response: Detection and Analysis'
description: The primary example is ransomware.
subtitle: Write up from Aaron Rosenmund's lecture in PluralSite
draft: true
date: 2022-11-09T00:00:00+08:00
tags:
  - all
  - write-up
  - security
---

## Research The Domain

### [DNS Dumpster](https://dnsdumpster.com/ "DNS Dumpster")

Doing a research on the domain using DNS Dumpster will provide [DNS Records](/posts/dns-record-types-primer "DNS Record Types Primer"), much like the same information you'll get when you register a web server.

### [Shodan.io](https://www.shodan.io/ "Shodan.io")

Used to identify externally exposed ports, web servers, and devices. Using this tool will give you the perspective of an attacker scanning an entity.

### [VirusTotal](https://www.virustotal.com/gui/home/upload "VirusTotal")

If an organization is compromised by an actor who is then leveraging that compromised infrastructure to attack other organizations, other organizations may have already reported that to virus total.

### [Have I Been Pwned](https://haveibeenpwned.com/ "Have I Been Pwned")

Used to Identify credentials if they have been stolen.

## Preparation

### [Github / WinPmem](https://github.com/Velocidex/WinPmem "WinPmem")

* Memory acquisition driver and userspace.
* Best way is to attach directly to removable media.

## Detection and Analysis

Used the code on Run-Initial-Triage.ps1.

## Intel

[CyberChef](https://gchq.github.io/CyberChef/ "CyberChef") - Common tool used for decoding things.

[URLhaus -](https://urlhaus.abuse.ch/ "URLhaus") Tool for sharing malicious URLs that are being used for malware distribution.

[VirusTotal ](https://www.virustotal.com/gui/home/upload "VirusTotal")- Used the graph feature for better analysis and allows to view it as a node.

## Collect Host Data

Collect by order of volatility.

IOC - Indicators of Compromise

## Reference

[Pluralsight](https://app.pluralsight.com/course-player?courseId=54e73c9c-ca9e-43db-ad50-1cd272a13f78 "PluralSight")
