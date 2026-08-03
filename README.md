# Personal Finance Tracker

A mobile-first fintech application featuring biometric authentication, real-time bank syncing, AI-driven transaction categorization, and a multi-currency ledger.

## Core Features
* **Biometric Auth:** FaceID/Fingerprint login with Secure Enclave token management.
* **Multi-Currency Engine:** ISO 4217 compliant, integer-based storage (cents) with daily exchange rate syncing.
* **Automated Sync:** Real-time bank transaction ingestion via Plaid webhooks.
* **AI Categorization:** LLM pipeline for mapping raw merchant strings to budget categories.
* **Smart Budgeting:** Zero-based budgeting with predictive overspending alerts.

## Tech Stack
* **Frontend:** React Native / Flutter
* **Backend:** Node.js / Go
* **Database:** PostgreSQL (Prisma ORM)
* **Integrations:** Plaid, Open Exchange Rates

## Database Schema (Core)
* `Users`: Stores preferences and `default_currency`.
* `Accounts`: Stores `account_currency` and synced balances.
* `Transactions`: Stores `amount_in_cents` and `currency_code`.
* `ExchangeRates`: Stores historical conversion rates for accurate point-in-time net worth calculation.

## Getting Started

### Prerequisites
* Node.js v18+
* Docker & Docker Compose
* Plaid API Keys
