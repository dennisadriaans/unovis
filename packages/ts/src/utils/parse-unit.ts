export default function parseUnit (str: string|number, out?: any[]): any[] {
  if (!out) {
    out = [0, '']
  }

  str = String(str)

  const num = parseFloat(str)
  out[0] = num


  const match = str.match(/[\d.\-+]*\s*(.*)/)

  out[1] = (match && match[1]) || ''

  return out
}
