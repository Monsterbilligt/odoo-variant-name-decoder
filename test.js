/* globals it */

const assert = require('assert')
const decode = require('.').decodeVariantName

it('should decode test string 1', function () {
  assert.deepStrictEqual(
    decode('[C-RLUP-POLY-S] Roll-up (comp.) (Single Page, Polypropylen)'),
    {
      name: '[C-RLUP-POLY-S] Roll-up (comp.) (Single Page, Polypropylen)',
      variant: '(Single Page, Polypropylen)',
      sku: 'C-RLUP-POLY-S',
      product: 'Roll-up (comp.)'
    }
  )
})

it('should decode test string 2', function () {
  assert.deepStrictEqual(
    decode('[POST-A3-130-1000] Posters (A3 - (297x420), 130, 1000)'),
    {
      name: '[POST-A3-130-1000] Posters (A3 - (297x420), 130, 1000)',
      variant: '(A3 - (297x420), 130, 1000)',
      sku: 'POST-A3-130-1000',
      product: 'Posters'
    }
  )
})
