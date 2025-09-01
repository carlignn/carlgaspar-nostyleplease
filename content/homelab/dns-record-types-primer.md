---
title: DNS Record Types Primer
subtitle: ''
draft: false
date: 2022-10-25T00:00:00.000Z
tags:
  - all
  - homelab
---

When you start trying to manage your domain’s DNS for the first time, everything can seem very confusing. Don’t panic! DNS records can be intimidating, but they’re not so hard once you get a feel for them. Below are explanations of the more common types.

## A Records

These are also called Address Records or sometimes **Host Records**. A record only resolves to IP addresses. These records point your domain to the IP address of your website or hosting. Let’s say that you own the domain name name.com and the IP address of your hosting server is 127.0.0.1. Usually you would have two DNS records to point your domain to the hosting that look like this:

* `A name.com 127.0.0.1`
* `A *.name.com 127.0.0.1`

The first A record in this example is pointing the “bare” version of your domain. The second A record is the wildcard version.

If you have any specific subdomains that you need to set records for, you would also do that with A records the same way. So, if in the example above, you wanted to make a subdomain called test.name.com, then you would create an A record that looks like this:

* `A test.name.com 127.0.0.1`

Using this method, you can also point subdomains to different servers than your main site, depending on your needs.

## CNAME Records

CNAME stands for Canonical Name Record. CName records only resolves to domains and subdomains. A CNAME record points one of your subdomains to a different domain name. A CNAME cannot be set up on your bare domain! You could set up a CNAME record on www.name.com but not on simply name.com. One thing that CNAME records are commonly used for is to direct a part of your site to a site you have set up elsewhere, such as an eCommerce shop or something similar.

## MX Records

MX stands for Mail Exchange. MX record does resolves to text and not IP-records. These records are used to direct emails sent to your domain name to the correct server to then send it to your specific email address. Your email provider will provide you with the necessary MX records for your email. Keep in mind that you can only have one set of MX records on your domain. All of your mail needs to be directed to the same place, and will then get sorted from there. This means that you cannot have two separate email providers on one domain. It also means that any email forwarding you set up has to be set up with your email provider, and not on the domain itself.

### How To Do A DNS Lookup Of An MX Record Using CMD

Related: [NSLookup Primer](/homelab/nslookup-primer "NSLookup Primer")

`nslookup` can be used in two modes: interactive and non-interactive. to initiate interactive mode, type the command name only: `nslookup`

```
C:\>nslookup
Default Server:  UnKnown
Address:  10.0.1.9
```

Set the type to `mx`

```
> set type=mx
```

Put your target, in this case it is `google.com`

```
> google.com
Server:  UnKnown
Address:  10.0.1.9

Non-authoritative answer:
google.com      MX preference = 30, mail exchanger = alt2.aspmx.l.google.com
google.com      MX preference = 50, mail exchanger = alt4.aspmx.l.google.com
google.com      MX preference = 40, mail exchanger = alt3.aspmx.l.google.com
google.com      MX preference = 20, mail exchanger = alt1.aspmx.l.google.com
google.com      MX preference = 10, mail exchanger = aspmx.l.google.com

alt2.aspmx.l.google.com internet address = 74.125.115.27
alt1.aspmx.l.google.com internet address = 74.125.91.27
aspmx.l.google.com      internet address = 74.125.157.27
```

Notice that there are multiple MX records each with a different **preference value**. The preference is basically a way of setting the priority of each MX record. The lowest preference is the MX with the highest priority, is the one that a sending mail server should try first.

The purpose of multiple MX records is to either:

* Provide some load balancing by using multiple MX records with the same preference set
* Provide a backup MX that can be used if the primary one is unavailable

## TXT Records

TXT just stands for Text. These records do not change anything on your domain, but they can be searched for your domain. These records are commonly used by services such as Google, which will ask you to add a string of characters to a TXT record, so that they can search for the record and verify that you are the domain’s owner/have access to the domain’s DNS records.
