# Test Strategy

## Objective

Verify that customers can discover products, inspect reliable product information and manage their cart without critical errors.

## Scope for sprint 1

### In scope

- Search and filters
- Product details
- Cart operations
- Essential API checks
- Chromium and Firefox

### Out of scope

- Real payment execution
- Performance and load testing
- Native mobile applications
- Production monitoring

## Test levels and techniques

- UI end-to-end tests for critical customer journeys
- API tests for faster validation of services and error responses
- Equivalence partitioning for valid and invalid input groups
- Boundary-value analysis for quantity and price limits
- Exploratory testing for usability and unexpected behavior

## Automation selection

Automate stable, repeatable and business-critical scenarios. Keep rapidly changing features and subjective usability checks exploratory until their behavior becomes stable.

## Entry criteria

- Test environment is accessible
- Critical requirements are understood
- Required test data is available

## Exit criteria

- All critical tests executed
- No unresolved blocker or critical defect
- Smoke suite passes in CI
- Failures contain enough evidence for diagnosis

## Defect severity

- Blocker: testing or the complete purchase journey cannot continue
- Critical: a core feature is unusable and no workaround exists
- Major: important behavior is incorrect but a workaround exists
- Minor: limited functional or visual impact
