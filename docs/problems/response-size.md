---
title: Response size
---

GraphQL responses can become large due to repeated fragments or deeply nested
selections, increasing execution, network transfer, and serialization costs.

## Symptoms

- Very large response payloads
- High bandwidth usage
- Slow execution

## Why it matters

Large responses increase computation and serialization costs and may lead to
denial of service. Large responses can be the result of malicious queries,
though regular queries if written with insufficient care may also lead to much
larger responses than expected. A carefully crafted malicious request can
produce a very large response with minimal input size.

## Practices that address this

- [Trusted documents](/practices/trusted-documents)
- [Pagination limits](/practices/pagination-limits)
- [Operation cost controls](/practices/operation-cost-controls)
