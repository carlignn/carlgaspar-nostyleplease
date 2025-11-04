---
title: Proxmox LXC and VM Primer
subtitle: ''
draft: false
date: 2025-08-27T00:00:00+08:00
tags:
  - all
  - primer
---

## Storage Increase
* Go to Datacenter > Node > LXC or VM > Resources > Root Disk.
* Click Resize disk and add the extra GBs.
### ext4
```bash
resize2fs /dev/mapper/pve-vm--<ID>--disk--0
```
### xfs
```bash
xfs_growfs /
```
### zfs
```bash
No need to do anything.
```