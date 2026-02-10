# Privacy Policy

**CSE Reviewer**
**Developer:** Gaspar Labs
**Effective Date:** February 10, 2026

## Introduction

Gaspar Labs ("we," "our," or "us") built CSE Reviewer as a free, ad-supported application. This Privacy Policy explains what data is collected, how it is used, and your choices regarding your data when you use our app.

## Data We Do NOT Collect

CSE Reviewer does **not** collect, store, or transmit any of the following:

- Personal information (name, email address, phone number)
- Location data
- Contacts or address book data
- Photos, camera, or microphone data
- Account credentials (there is no login or account system)
- Device identifiers collected directly by the app

## Data Stored Locally on Your Device

The app stores the following data locally on your device using SharedPreferences. This data never leaves your device and is not accessible to us:

- **Quiz scores** per category
- **Question of the Day answer history** (retained for 14 days, then automatically deleted)
- **Answer streak count**
- **User preferences** (theme selection, notification time, ad preference)
- **Admin mode state**

This data persists until you uninstall the app or clear the app's data through your device settings.

## Third-Party Services

CSE Reviewer uses the following third-party services that may collect data independently, subject to their own privacy policies:

### Google AdMob

We use Google AdMob to display advertisements. AdMob may collect device identifiers, ad interaction data, and other information as described in [Google's Privacy Policy](https://policies.google.com/privacy).

### Firebase Cloud Firestore

We use Firebase Cloud Firestore as a read-only question database. The app retrieves questions from this service but does **not** write or upload any user data to it.

### Firebase Remote Config

We use Firebase Remote Config to fetch app configuration values (such as minimum app version and feature settings). No user data is sent to this service.

### Firebase App Check (Play Integrity)

We use Firebase App Check with the Play Integrity API for device attestation to help prevent abuse. This service verifies that requests come from a genuine instance of the app but does not collect personal data.

### Google Play Services

The app relies on Google Play Services as underlying infrastructure for the services listed above. Google Play Services may collect data as described in [Google's Privacy Policy](https://policies.google.com/privacy).

## App Permissions

| Permission | Purpose |
|---|---|
| `INTERNET` | Required to access the Firebase question database and serve advertisements |
| `POST_NOTIFICATIONS` | Used to send daily "Question of the Day" reminder notifications |
| `SCHEDULE_EXACT_ALARM` | Used to schedule notification reminders at the user's preferred time |
| `RECEIVE_BOOT_COMPLETED` | Used to restore scheduled notifications after device restart |
| `WAKE_LOCK` | Used to ensure notification delivery while the device is idle |
| `VIBRATE` | Used for notification feedback |

## Children's Privacy

CSE Reviewer is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided personal information through a third-party service used by this app, please contact us so we can take appropriate action.

## Data Retention

- **Local data** persists on your device until you uninstall the app or clear its data.
- **Question of the Day history** is automatically cleaned after 14 days.
- **No user data is stored on our servers.** We do not operate any servers that store user data.

## Changes to This Privacy Policy

We may update this Privacy Policy from time to time. Any changes will be reflected by updating the "Effective Date" at the top of this page. We encourage you to review this Privacy Policy periodically.

## Contact Us

If you have any questions or concerns about this Privacy Policy, please contact us at:

**Email:** gasparlabs@protonmail.com
