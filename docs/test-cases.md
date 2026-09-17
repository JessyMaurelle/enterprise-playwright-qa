# Test Cases – Sprint 1

| ID | Type | Priority | Scenario | Expected result | Automation |
|---|---|---|---|---|---|
| TC-001 | Positive | Critical | Search for an existing product | Relevant results are displayed | Yes – smoke |
| TC-002 | Negative | High | Search for an unknown product | Clear empty-state feedback is displayed | Yes |
| TC-003 | Boundary | Medium | Search using one character | Application handles input without error | Later |
| TC-004 | Positive | Critical | Open a product from results | Correct name, price and availability appear | Yes – smoke |
| TC-005 | Integration | Critical | Add product to cart | Correct item and quantity appear in cart | Yes – smoke |
| TC-006 | Boundary | High | Set quantity to minimum allowed value | Minimum valid quantity is accepted | Yes |
| TC-007 | Negative | High | Enter quantity below minimum | Invalid quantity is rejected | Yes |
| TC-008 | Integration | Critical | Compare detail and cart prices | Prices remain consistent | Yes |
| TC-009 | Exploratory | Medium | Interrupt the network during cart update | User receives useful feedback and data stays consistent | Manual first |
| TC-010 | Compatibility | High | Run critical journey in Firefox | Same business result as Chromium | Yes – smoke |

## First automated slice

We will automate TC-001, TC-004 and TC-005 as one critical journey, while keeping assertions at every important transition so that failures remain easy to diagnose.
