# Enterprise QA Portfolio – Playwright

Portfolio project demonstrating an enterprise-style quality assurance workflow on the Practice Software Testing application.

## Quality approach

The project begins with requirements, product risks and test design before automation. It combines UI and API testing, separates smoke and regression coverage, and produces diagnostic evidence when a test fails.

## Planned coverage

- Product search and filtering
- Product detail and stock information
- Cart management
- Checkout validation without a real purchase
- Authentication and authorization
- API response and error handling
- Cross-browser smoke tests

## Stack

- Playwright + TypeScript
- GitHub Actions
- Playwright HTML reports, traces, screenshots and videos
- Docker (second iteration)

## Commands

```bash
npm install
npx playwright install
npm run test:smoke
npm run test:regression
npm run test:api
npm run report
```

## Documentation

- [Test strategy](docs/test-strategy.md)
- [Product risks](docs/risk-analysis.md)
- [Test cases](docs/test-cases.md)

## Current status

Foundation created. The first implementation sprint focuses on the critical customer journey: search → product details → cart.
