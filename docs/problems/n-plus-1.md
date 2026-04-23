---
title: The N+1 problem
---

The N+1 problem occurs when a list is requested and when processed results in a
follow-up request related to each item in the list. An initial request for the
list of N items, then N follow-up requests: N+1 requests total.

GraphQL is designed to solve this problem between the client and the server by
ensuring the client requests everything it needs up front; however the default
resolver model of GraphQL execution can result in N+1 backend calls during
GraphQL execution.

The N+1 problem can be a symptom of under-fetching - you didn't fetch enough
information in the first request, so you need to go back and request more. It's
also from a lack of batching.

## Symptoms

- Many requests being sent from service to datastores (similar requests, each
  with their own different ID)
- Latency grows linearly with list size
- Latency grows exponentially with operation list depths
- Spikes in database or downstream service load

## Why it matters

N+1 can lead to significant backend load and increased latency for users. At the
extreme it can lead to denial of service.

## Practices that address this

- [Batched execution](/practices/batched-execution)

## Patterns that address this

- [Batch resolvers](/patterns/batch-resolvers)
- [Batching and caching (DataLoader)](/patterns/batching-caching)
