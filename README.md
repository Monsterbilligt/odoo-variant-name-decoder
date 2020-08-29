# odoo-variant-name-decoder

Seperate variant names into sku, product and variant.

## Usage

```js
import { decodeVariantName } from 'odoo-variant-name-decoder'

const result = decodeVariantName('[C-RLUP-POLY-S] Roll-up (comp.) (Single Page, Polypropylen)')

console.log(result)

{
  name: '[C-RLUP-POLY-S] Roll-up (comp.) (Single Page, Polypropylen)',
  variant: '(Single Page, Polypropylen)',
  sku: 'C-RLUP-POLY-S',
  product: 'Roll-up (comp.)'
}
```

## Test

`npm run test`
