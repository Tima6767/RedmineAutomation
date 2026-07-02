# Redmine Playwright Automation

## Summary
This repository contains automated end-to-end tests for the Redmine website using Playwright and Page Object Model.

Website under test: https://www.redmine.org/

## Requirements
- Node.js
- npm
- Google Chrome / Chromium
- Playwright

## Installation
Clone the repository:

```bash
git clone <repo-link>
cd RedmineAutomation

Install dependencies:

npm install

Install Playwright browsers:

npx playwright install
Run tests

Run all tests in headless mode:

npm test

Run tests in headed mode:

npm run test:headed

Run tests in UI mode:

npm run test:ui
Report

After test execution, open HTML report:

npm run report
Project structure
pages/          Page Object files
tests/          Test spec files
test-cases/     Manual test cases
README.md       Project documentation