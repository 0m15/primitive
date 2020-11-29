import { useMemo } from 'react'

const camelToDash = (str) => str.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase())

function toCssValue(key, value, unit) {
  let floatValue = parseFloat(value)

  if (
    (key === 'width' || key === 'height') &&
    typeof value === 'string' &&
    floatValue <= 1 &&
    floatValue > 0
  ) {
    return parseFloat(value) * 100 + '%'
  }

  return typeof value !== 'number' ? value : value + unit
}

const propsToCss = (props, defaultUnit) => {
  let temp = {}

  for (let key in props) {
    let value = props[key]

    let isNumber = typeof value === 'number'
    let isString = typeof value === 'string'
    let isArray = Array.isArray(value)
    let cssPropName = camelToDash(key)

    if (isNumber || isString) {
      temp[cssPropName] = toCssValue(key, value, defaultUnit)
    }

    if (isArray) {
      temp[cssPropName] = value
        .map((d) => toCssValue(key, d, defaultUnit))
        .join(' ')
    }
  }

  const styleString = Object.keys(temp)
    .map((key) => `${key}:${temp[key]}`)
    .join(';\n')

  return styleString
}
export default function usePrimitive(props, { defaultUnit = 'px' } = {}) {
  const styles = useMemo(() => propsToCss(props, defaultUnit), [
    props,
    defaultUnit
  ])

  return styles
}

export function useMediaQueries(mediaProp, { defaultUnit = 'px' } = {}) {
  const styles = useMemo(() => {
    return Object.keys(mediaProp).map((key) => {
      return [key, propsToCss(mediaProp[key], defaultUnit)]
    })
  }, [mediaProp, defaultUnit])

  return styles
}
