---
title: 'Incident Response: Phishing Email Investigation Cheatsheet'
subtitle: ''
date: 2022-12-08T00:00:00+08:00
draft: true
tags:
  - all
  - cheatsheet
  - security
---

## URLs

\*[VirusTotal](https://www.virustotal.com/gui/home/upload) - will give a reputation.

[Google Safe Browsing](https://transparencyreport.google.com/safe-browsing/search?hl=en) - will tell if it's on a blacklist

[urlscan](https://urlscan.io/) - best and quickest, it will flag if they are active phishing, will give a screenshot, and has an awesome API.

(NOTE) If you detect any as malicious, block them on your firewalls and do a search across your logs.

[CheckPhish](https://checkphish.ai/)

[PhishCheck](https://phishcheck.me/)

[DNSDumpster](https://dnsdumpster.com/)

\*[Hybrid Analysis](https://www.hybrid-analysis.com/)

\*[any.run](https://app.any.run/)

[URLhaus](https://urlhaus.abuse.ch/browse/)

[JOE Sandbox](https://www.joesandbox.com/#windows)

\*Can scan files

### IPs

[IPVOID](https://www.ipvoid.com/)

[CyberChef](https://gchq.github.io/CyberChef/) - Decoder

[Email Header Analyzer](https://mxtoolbox.com/EmailHeaders.aspx) - Analyze email headers

[Blockchain Explorer](https://www.blockchain.com/explorer) - Track blockchain activities

## Attachments

Check the hash of the attachments. If it's there, check the reputation, if it's not, upload the file and scan analyze it privately in a sandbox

[VirusTotal](https://www.virustotal.com/gui/home/upload) - will give a reputation.

\*[Hybrid Analysis](https://www.hybrid-analysis.com/)

### Sandboxes
