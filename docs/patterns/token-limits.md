---
title: Token limits
---

Limit the number of lexer/parser tokens in a GraphQL document during parse to
prevent excessively complex validation.

## Practices implemented

- [Operation cost controls](/practices/operation-cost-controls)

## Applies to

- GraphQL servers
- Gateways and proxies
- Parser/security middleware

## Configuration (suggested defaults)

| Parameter         | Default  | Notes                                               |
| ----------------- | -------- | --------------------------------------------------- |
| `maxTokens`       | `5000`   | Maximum tokens allowed for application operations.  |
| `onLimitExceeded` | `reject` | One of: `reject`, `warn`.                           |
| `ignoreIgnored`   | `true`   | Ignored tokens don't make validation more expensive |

## Implementation notes

- Count tokens from the lexer stream before expensive parse/validation phases.
- Ignored tokens (comments, commas, whitespace, etc) can be ignored, they may
  increase memory usage linearly but should not have significant impact on
  validation duration.
- Return stable error codes/messages so users can tune limits safely.

## Cautions

- Very low limits can break legitimate operations with many fragments.
- Token limits are not a replacement for depth/complexity controls.

## Problems addressed

- [Parse-time denial of service](/problems/parse-dos)
- [DoS via validation](/problems/validation-dos)
