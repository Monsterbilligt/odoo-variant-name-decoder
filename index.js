exports.decodeVariantName = function (variantName) {
  let rest = variantName
  const result = {
    name: variantName
  }

  if (/\)$/.test(variantName)) {
    let level = 0
    let traverse = true
    let marker = variantName.length - 1

    while (traverse && marker >= 0) {
      marker--
      if (variantName[marker] === ')') {
        level++
      } else if (variantName[marker] === '(') {
        if (level === 0) {
          traverse = false
        } else {
          level--
        }
      }
    }

    result.variant = variantName.substring(marker).trim()
    rest = variantName.substring(0, marker - 1).trim()
  }

  if (/^\[/.test(variantName)) {
    const match = rest.match(/^\[(.*?)\]\s(.*)/)

    result.sku = match[1].trim()
    result.product = match[2].trim()
  } else {
    result.sku = null
    result.product = rest.trim()
  }

  return result
}
