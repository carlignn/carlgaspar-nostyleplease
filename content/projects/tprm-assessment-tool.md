---
title: "TPRM Assessment Tool"
slug: tprm
draft: true
date: 2026-04-23T00:00:00+08:00
tags:
  - app
  - security
comments: true
---

Personal project. A web app that ingests SIG questionnaires via drag-and-drop, auto-scores responses, and generates PDF risk reports.

![](/images/projects/tprm-hero.png)

## What It Does

1. **Enter vendor info and tier the vendor.** A short questionnaire (data access, system access, business criticality, regulatory scope) produces an auto-calculated tier from 1 to 4, with a manual override.
2. **Drag and drop the SIG questionnaire.** A completed SIG 2025 workbook is parsed in-browser — questions and vendor responses are extracted automatically.
3. **Auto-scoring.** Each SIG response is validated against the vendor's stated controls. Every answer is marked *supported*, *contradicted*, or *no evidence*, with quoted excerpts and a confidence score.
4. **Export a PDF risk report.** The report includes the vendor tier, domain impacts, per-question findings, and a gap summary — ready to attach to a risk review package.
5. **Runs locally.** One screen replaces the spreadsheet juggling that used to drive this workflow.

## Screenshot

![](/images/projects/tprm-screenshot.png)

## Sample Output

[Download sample report (PDF)](/tprm-sample-report.pdf)

## Privacy by Design

Files are parsed in memory and discarded — nothing is written to disk on the server. All form state lives in the browser's `sessionStorage` and is cleared when the tab closes. The app is meant to run locally on trusted hardware.

## Technologies Used

* Python
* Flask
* Jinja2
* Anthropic SDK (Claude Sonnet 4)
* openpyxl
* Vanilla JavaScript
* HTML / CSS
