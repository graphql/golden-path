---
title: Request size
---

GraphQL requests can become large due to dynamically created GraphQL documents,
increasing network transfer and server parsing/validation costs.

## Symptoms

- Large requests
- High memory usage
- Slow parsing and validation
- Execution overhead

## Why it matters

Large requests can be expensive to transmit, parse, validate and execute.

## Practices that address this

- [Trusted documents](/practices/trusted-documents)
- To document: limit request body size
