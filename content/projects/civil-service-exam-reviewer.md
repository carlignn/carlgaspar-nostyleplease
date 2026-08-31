---
title: Exam Reviewer Apps
draft: false
date: 2026-03-04T00:00:00+08:00
tags:
  - app
  - android
  - flutter
  - python
  - firebase
  - docker
  - automation
comments: true
---

A family of Philippine licensure exam reviewers built on one shared engine. The Civil Service Exam (CSE) reviewer is live on Google Play with 11,000+ questions; a Licensure Exam for Teachers (LET) reviewer is in closed testing. Built under Gaspar Labs, my product umbrella. [Link to Google Play Store](https://play.google.com/store/apps/details?id=com.gasparlabs.csereviewer1). [Link to Website](https://gasparlabs.com/cse-reviewer/).

![](/images/projects/cse-reviewer-banner.png)

## One engine, many reviewers

The apps started as a single CSE reviewer. Rather than fork the codebase for each new exam, roughly 90% of the code now lives in a shared `reviewer_core` package behind a single config seam — each app is a thin shell supplying its own config file and Firebase project. A new reviewer is a config, not a fork, and fixes ship to every app at once.

The same core-plus-profile split repeats in both Python services, so adding an exam means one profile file in three places:

| Codebase | Shared | Per-exam |
|---|---|---|
| Flutter monorepo | `reviewer_core` — screens, services, data | `apps/<exam>/` shell + config |
| Admin CMS | Flask app | `profiles/<exam>.py` |
| Social poster | Flask + generators | `profiles/<exam>.py` |

Each reviewer writes to its own Firebase project and runs in its own container with its own data volume, so one exam can be taken off the air without touching the others.

## Features

- 11,000+ questions across 6 categories: Numerical, Analytical, Clerical, Verbal, General Information, and Random
- Timed mock exams mirroring the real exam's sections and time limits
- Question of the Day with daily notifications
- Score tracking per category
- Math/LaTeX rendering for numerical questions
- Zoomable images for questions and explanations
- Shareable score cards
- Light and dark theme

## Question bank

Questions are compiled from publicly available reference material and bulk-loaded via CSV, then checked against a canonical tag-coverage matrix so every syllabus topic has questions behind it — coverage gaps get found before users find them.

## Admin

Web-based question management system built with Flask/Python, serving every reviewer from one codebase:

- Dashboard with question database statistics
- Single question entry with validation
- Bulk CSV import/export
- Search and filtering by category, difficulty, and status

## Question of the Day

Automated social poster built with Flask/Python:

- Generates 1080x1080 stylized images with category-specific gradient backgrounds
- Posts daily at 5:00 PM to Facebook, TikTok, and YouTube
- Posts answer reveal comment 23 hours later
- Weekly and monthly recap videos, plus holiday and special-day theming
- Deterministic question selection — same question for all users on the same date
- Per-reviewer auto-post switch to take one exam off the air without stopping the service

The recap reels are produced end to end with no editor. Question text is detected as Filipino or English and voiced with the matching neural TTS voice, then mixed over a music bed using ffmpeg sidechain compression so the music ducks automatically under the narration. Video is encoded as a single still frame held under an ffmpeg scroll rather than per-frame compositing — a tradeoff that keeps encoding cheap enough to run on a homelab container.

## Operations

A Telegram bot reports into a forum group with one topic per reviewer: post confirmations, skipped and paused days, and failures. The dashboard exposes scheduler status, live previews, and manual post controls.

## Infrastructure

Runs on my [homelab](/homelab/): Proxmox LXC hosts, Nginx Proxy Manager for routing, Docker Compose for the services. Pushes to `main` auto-deploy through a self-hosted GitHub Actions runner with a post-deploy health check. The Flutter app is built and uploaded to the Play Console manually.

Firebase Remote Config drives in-app announcements, promos, and minimum-version gating, so messaging and rollout changes ship without a store release.

## Technologies Used

- **Mobile** — Flutter, Dart, Provider, go_router, LaTeX rendering, local notifications, AdMob
- **Firebase** — Cloud Firestore, Remote Config, Analytics, App Check, Cloud Storage
- **Backend** — Python, Flask, APScheduler, Pillow, matplotlib, ffmpeg
- **Integrations** — Make.com, Telegram Bot API
- **Infrastructure** — Proxmox VE, Docker, Docker Compose, Nginx Proxy Manager, GitHub Actions
