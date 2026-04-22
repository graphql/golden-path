---
title: Operation cost controls
sidebar_position: 60
---

Enforce bounded operation cost before execution via validation rules and input
value constraints.

Think about:

- Document size (bytes, token count)
- Query depth
  - How many selection sets deep?
  - How many field selections deep?
  - How many _list_ field selections deep (since lists multiply complexity); and
    do these lists have bounded sizes?
  - Self-referential depth (cycle limit) - how many times is it reasonable to
    nest a field selection transitively within the selection set for the same
    field? (Note: you might want to limit this to a low limit such as 0 in
    general, but if you do, you should allow per-field-coordinate overrides -
    e.g. to allow for `{ viewer { parent { parent { parent { name } } } } }` to
    get the viewer's great grandparent's name)
  - Consider assigning costs to each field (more expensive fields should have
    higher costs, including list fields) and then estimating the total cost of
    the query statically. Place a limit.
- Introspection limits (limits like the above but honed to allow the most common
  introspection queries and forbid the known malicious ones)

TODO: document recommended limits for each

Apply caution:

- Attackers can attempt to cause denial of service through the validation rules
  designed to prevent denial of service; ensure that validation aborts before
  consuming too much CPU time or RAM.
- Attackers can attempt to cause denial of service by having GraphQL produce
  many errors. Implement a limit (e.g. 20 errors) after which no more validation
  errors are output.

## When to use this practice

Use this when your server accepts arbitrary documents from untrusted clients
(for example, third-party APIs, GraphiQL-like exploratory traffic, or
third-party integrations).

## Applies to

- GraphQL servers with open query surfaces
- Gateways and proxies with untrusted upstream traffic
- Security tooling

## Why this is conditional

If your deployment enforces trusted documents and controlled releases, you may
not need these controls at runtime, however you may wish to adopt them as "lint"
rules during development to help avoid developers accidentally authoring
expensive "trusted" documents.

## Solves

- [Execution cost spikes](/problems/execution-cost)
- [Excessive query complexity](/problems/query-complexity)
- [Excessive query depth](/problems/query-depth)
- [Parse-time denial of service](/problems/parse-dos)
- [DoS via validation](/problems/validation-dos)

## Implementing patterns

- [Query complexity limits](/patterns/query-complexity-limits)
- [Depth limits](/patterns/depth-limits)
- [Token limits](/patterns/token-limits)
- [Disabling introspection](/patterns/disabling-introspection)
