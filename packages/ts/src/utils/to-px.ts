import parseUnit from './parse-unit'

const PIXELS_PER_INCH = 96

const defaults = {
  ch: 8,
  ex: 7.15625,
  em: 16,
  rem: 16,
  in: PIXELS_PER_INCH,
  cm: PIXELS_PER_INCH / 2.54,
  mm: PIXELS_PER_INCH / 25.4,
  pt: PIXELS_PER_INCH / 72,
  pc: PIXELS_PER_INCH / 6,
  px: 1,
}

export default function toPX (str: string | number | null | undefined): number | null {
  if (str === null || str === undefined || str === '') {
    return null
  }

  if (typeof str === 'string' && str in defaults) {
    return defaults[str as keyof typeof defaults]
  }

  // Detect number and unit
  const parts = parseUnit(str)
  const value = parts[0]
  const unit = parts[1]

  if (!isNaN(value)) {
    if (unit) {
      const px = toPX(unit)
      return typeof px === 'number' ? value * px : null
    } else {
      return value
    }
  }

  return null
}
