export interface IColorKey {
  name: string
  keyStr: string
  keyVal: number
  color: string
}

export const initIColorKey = (opts: Partial<IColorKey>): IColorKey => {
  return {
    name: opts.name || '',
    keyStr: opts.keyStr || '',
    keyVal: opts.keyVal || 0,
    color: opts.color || '#000000',
  }
}

export default IColorKey
