---
title: Civil Service Exam Reviewer
draft: false
date: 2026-03-04T00:00:00+08:00
tags:
  - app
comments: true
---

A mobile quiz app for Philippine Civil Service Exam preparation. Covers Numerical Ability, Analytical Ability, Clerical Ability, Verbal Ability, and General Information. Includes a Question of the Day system that automatically posts daily to Facebook.

[Play Store](https://play.google.com/store/apps/details?id=com.gasparlabs.csereviewer1)

## Features

- Over 3000 questions avaialable
- 6 quiz categories: Numerical, Analytical, Clerical, Verbal, General Information, and Random
- Question of the Day with daily notifications
- Score tracking per category
- Math/LaTeX rendering for numerical questions
- Zoomable images for questions and explanations
- Light and dark theme

## Admin

Web-based question management system built with Flask/Python:

- Dashboard with question database statistics
- Single question entry with validation
- Bulk CSV import/export
- Search and filtering by category, difficulty, and status

## Question of the Day

Automated social media poster built with Flask/Python:

- Generates 1080x1080 stylized images with category-specific gradient backgrounds
- Automatically posts to Facebook daily at 5:00 PM
- Posts answer reveal comment 23 hours later
- Telegram notifications for monitoring
- Deterministic question selection — same question for all users on the same date

## Technologies Used

- Flutter
- Python
- Firebase
  - Cloud Firestore
  - Remote Config
  - App Check
- Docker
- GitHub Actions
