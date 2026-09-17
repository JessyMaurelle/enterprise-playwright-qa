# Product Risk Analysis

| ID | Risk | Impact | Likelihood | Priority | Planned coverage |
|---|---|---:|---:|---:|---|
| R-01 | Search returns incorrect or no relevant products | High | Medium | High | UI + API |
| R-02 | Product price differs between details and cart | High | Medium | High | UI integration |
| R-03 | Out-of-stock product can be ordered | High | Medium | High | UI + API |
| R-04 | Cart loses products or calculates totals incorrectly | Critical | Medium | Critical | UI regression |
| R-05 | Invalid quantity is accepted | Medium | High | High | Boundary tests |
| R-06 | User can access protected data without authentication | Critical | Low | High | API security check |
| R-07 | Slow or failed API leaves the UI in a misleading state | Medium | Medium | Medium | Exploratory + mocked response |

Priority is based on business impact and likelihood. Sprint 1 starts with R-01, R-02 and R-04 because they protect the main customer journey.
