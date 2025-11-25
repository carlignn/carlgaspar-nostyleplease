---
title: My OPNSense Documentation
subtitle: 
draft: false
date: 2025-08-27T00:00:00+08:00
tags:
  - all
  - documentation
---

## Hardware

I have no choice but to buy a new hardware because we moved to a new place, therefore the internet has changed too - for the worse. Just like before, it has the option to configure subnet but it's not working!

My options were the NanoPI R5S router, Gl.inet stuff, then this one - the Lenovo m720q - the best mini PC that you could get for cheap.

I chose this one because of the upgradability and *aesthetics*, and the price difference is also not that high so might as well settle for the one that pleases my eyes the most.

* Chassis - [Lenovo m720q mini PC](https://shopee.ph/Lenovo-M710Q-M720Q-M73-Mini-Desktop-Computer-I3i5-Quad-Core-Commercial-Office-Finance-Mini-Host-i.1290300602.27804148815)
* CPU - Intel i5 8500T
* System storage - [Kingston NV1 M.2 Nvme](https://shopee.ph/Kingston-NV1-M.2-Nvme-SSD-250GB-500GB-1TB-PcIe-2280-Solid-State-Hard-Drive-For-Laptop-Desktop-PC-i.745034587.22835084403) - 120gb * 1
* RAM - [Kingston Hyperx 2666mhz](https://shopee.ph/Kingston-Hyperx-Impact-Laptop-DDR4-RAM-4GB-8GB-16GB-2133-2400Mhz-2666Mhz-3200Mhz-SOIDMM-RAM-Memory-i.745034587.24265223941) - 16gb \* 1 (this is from one of my Lenovo mini PC, I can't justify buying a new 8gb stick for this)
* NIC - [2-Port Gigabit PCIe network card](https://shopee.ph/2-Port-Gigabit-PCIe-Network-Card-1000M-Dual-Ports-PCI-Express-Ethernet-Adapter-with-82571EB-LAN-NIC-Card-for-Windows-i.181060955.19440116949) - this is an old NIC that I was planning on using with my NAS but ended up not doing so. Good thing I remembered I have this before buying a new one
* Misc - [Riser card adapter](https://shopee.ph/-UTnus9ddL-PCI-E-Graphic-Card-Adapter-Card-Tiny-4-Riser-Card-for-Lenovo-Tiny4-Series-Models-M720Q-01AJ940-PCIE-Riser-Card-i.371192636.26516030851)

## Setup

Diagram: Modem/Router > OPNSense Firewall > Switch > Devices

For this setup, I've decided to not put my modem into bridge mode and use it as a regular WiFi. I don't want to go through the stress of routing all our (mobile phones) traffic through my entire network. So this will just do for now.

From the command line (directly connected to OPNSense) setup the interface. Bind the **WAN** to the port between the firewall and the modem, and **LAN** to the port between the firewall and the switch.

* WAN IP 192.168.0.2
* LAN IP 10.10.0.1

In the web interface (LAN IP) > Go to System > Firmware > Updates and update OPNSense.

I'd like my setup to be as simple as possible, a WAN and a LAN (I only have one switch, for now).

Go to Interface > WAN/LAN > Enable Interface > Set the IP address to static on IPv4 (because I want it to be static) > Disable IPv6 (case-to-case basis) > The subnet will be at /16 for the meantime.

### Firewall

For some reason, the NATting is not working automatically by default. I have to set it to hybrid for it to work. Go to Firewall > NAT > Outbound > Chec Hybrid > Add any to any rule.

### DNS

For some reason, the machines are not being provided with DNS (only DHCP). You need to check what services are running. Go to Lobby > Dashboard > Services. There I found the culprit - Dnsmasq DNS & DHCP are enabled. I just had to disable it  in Services > Dnsmasq DNS & DHCP > General > Uncheck Enable.

Then set it up with the (outdated) ISC DHCPv4. Go to Servcices > LAN > Enable > And setup the DHCP Range, DNS servers (10.10.10.5, 1.1.1.1), and Gateway (10.10.0.1).

#### Unbound

~~I just found out the Unbound DNS was enabled by default. If I'm not using pihole, I'd just use this one since it's better looking and easier to manage. Disabling..~~

* Go to Services > Unbound DNS > General > Enable Unbound
  * Blocklist > Type of DNSBL > Steven Black List (This one blocks ads)
* Change DNS  servers in Services > ISC DHCPv4 > LAN > DNS servers > Put the OPNSense IP
  * Same on System > Settings > General > DNS servers
* Enable Unbound DNS Reporting, go to Reporting > Unbound DNS > Go to the Reporting configuration > Enable local gathering of statistics
  * Reset DNS on devices

[Guide](https://www.youtube.com/watch?v=NdvKIAMfnUM)


## VLANs

I want to configure VLANs but I don't have the capacity for that yet. I think I'm not smart enough as of the moment. For the meantime, everything is on /16 subnet so that they could all see each other :))

## Tailscale

Wow, OPNSense has a Tailscale plugin. This had made things a lot easier. Go to System > Firmware > Plugins > Check Show community plugins > Add tailscale > Tailscale should start showing up in the VPN tab together with other VPN providers

I chose tailscale because of ease of use. I want people to be able to connect to my network then my NAS for their storage needs, and tailscale is the app for that.

To set it up, go to VPN > Tailscale > Authentication and put in the auth keys from your Tailscale client. Then go to settings and enable it. If you want to use it as an Exit Node, just check the box. Make sure to add your subnet to the Advertised Routes tab. I have added 10.10.0.0/16 to cover the entire [homelab](/tags/homelab). It feels unsafe but it can change in the future after researching more.

### Problems

* My DNS is not resolving when I'm connected to the VPN but on LAN.
  * I have to add the IP of my OPNSense in Tailscale Web > DNS > Global name servers
  * Then Override DNS servers
  * Bonus - enable split tunneling to make accessing websites other than the homelab faster
* When ssh-ing to a machine using the dns name, it's redirecting to NGINX Proxy Manager instead of the machine itself.
  * I have to add an additional entry in OPNSense (hl1proxmox1-**ssh**..) and assign it with the actual IP of the machine

## ~~Ntop~~

* This has been uninstalled. I just don't see any use for it as of the moment
* Go to System > Firmware > Plugins and install nTop and redis
* Go to Services > Enable Redis
* Go to Services > Enable Ntopng
  * HTTPS Port - 3001
  * Certificate - Web GUI TLS certificate

## Notification

[My Notification Documentation](/homelab/my-notification-documentation)

## Backup

To backup the configuration, I figured it would be easier to do it automatically. Go to System > Firmware > Plugins > Show comunity plugins > Search for backup > Install os-sftp-backup

This is too much, I think. Aborting..

[Guide](https://docs.opnsense.org/manual/sftp-backup.html)