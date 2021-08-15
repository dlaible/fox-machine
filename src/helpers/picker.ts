import colorPalettes from './palette'
import IColorKey, { initIColorKey } from '../interfaces/icolorkey'

// Non-exported functions

const generateColorKey = (name: string, startIdx: number, endIdx: number, inputStr: string): IColorKey => {
  // Generate a color key, with the given name, using the provided
  // input string and indices
  const key = initIColorKey({
    name: name,
  })

  // Set the computed color key string/value
  key.keyStr = inputStr.substring(startIdx, endIdx + 1)
  key.keyVal = hexStrToNum(key.keyStr)
  return key
}

const getPaletteColors = (paletteKey: number, colorKeys: IColorKey[], masterColorKeys: IColorKey[]) => {
  // Given a palette and list of color keys, get the associated colors

  // Determine the palette to retrieve keys from
  const palette = colorPalettes[paletteKey % colorPalettes.length]

  // Pick unique colors from the palette using the color key's value
  const colorKeyVals = colorKeys.map((k) => k.keyVal)
  const colors = pickUniqueFromBag(colorKeyVals, palette)

  // Add the # to the hex colors, and push the color keys to the
  // master key list
  colorKeys.forEach((k, i) => {
    k.color = `#${colors[i]}`
    masterColorKeys.push(k)
  })
}

const hexStrToNum = (hexStr: string): number => (
  // Convert the given hex string into an array of decimal numbers
  [...hexStr].reduce((prev, crnt) => prev + parseInt(crnt, 16), 0)
)

const pickUniqueFromBag = (keys: number[], bag: string[]): string[] => {
  // Given a list of keys and items (bag), return the items associated
  // with the keys. Note that items will be non-repeating if the bag items
  // are unique, as choosing an item removes it from the bag.

  // Exit early if there are no keys or the bag isn't large enough
  if (keys.length <= 0 || keys.length > bag.length) {
    return []
  }

  // Create a copy of the bag
  const workingBag = [...bag]

  const results = keys.map((k) => {
    // Using the key, save off the chosen item
    const idx = k % workingBag.length
    const val = workingBag[idx]

    // Delete the chosen item from the bag
    workingBag.splice(idx, 1)
    return val
  })

  // Return the resulting items
  return results
}

// Exported functions

export const findKeyColor = (name: string, keys: IColorKey[], defaultColor: string): string => {
  // Find the color associated with the given key, or return the default
  // color if no such key exists
  const elem = keys.find((k) => k.name === name)
  return elem ? elem.color : defaultColor
}

export const getColorKeysFromMD5 = (inputStr: string): IColorKey[] => {
  // Returns the color keys associated with the given hex MD5 hash
  const expMD5StrSize = 32
  let keys: IColorKey[] = []

  // Ensure the MD5 hash is the correct size
  if (inputStr.length !== expMD5StrSize) {
    return keys
  }

  // Each of the MD5 hash bytes are used as follows: 
  // 0-2: foxPalette
  // 3-4: foxFace
  // 5-6: foxEars
  // 7-8: foxEarsInside
  // 9-10: foxNeck
  // 11-13: scoopPalette
  // 14-15: scoopTop
  // 16-17: scoopLeft
  // 18-19: scoopRight
  // 20-21: bowlPalette
  // 22-23: bowlStripe1
  // 24-25: bowlStripe2 (unused)
  // 26-27: strawPalette (unused)
  // 28-29: strawStripe1
  // 30-31: strawStripe2 (unused)

  // Generate the fox palette key
  let paletteKey = generateColorKey('foxPalette', 0, 2, inputStr)
  keys.push(paletteKey)

  // Generate the fox color keys
  let colorKeys = [
    generateColorKey('foxFace', 3, 4, inputStr),
    generateColorKey('foxEars', 5, 6, inputStr),
    generateColorKey('foxEarsInside', 7, 8, inputStr),
    generateColorKey('foxNeck', 9, 10, inputStr),
  ]
  getPaletteColors(paletteKey.keyVal, colorKeys, keys)

  // Generate the ice cream scoop palette key
  paletteKey = generateColorKey('scoopPalette', 11, 13, inputStr)
  keys.push(paletteKey)

  // Generate the ice cream scoop color keys
  colorKeys = [
    generateColorKey('scoopTop', 14, 15, inputStr),
    generateColorKey('scoopLeft', 16, 17, inputStr),
    generateColorKey('scoopRight', 18, 19, inputStr),
  ]
  getPaletteColors(paletteKey.keyVal, colorKeys, keys)

  // Generate the bowl palette key
  paletteKey = generateColorKey('bowlPalette', 20, 21, inputStr)
  keys.push(paletteKey)

  // Generate the bowl color keys
  colorKeys = [
    generateColorKey('bowlStripe1', 22, 23, inputStr),
    generateColorKey('strawStripe1', 24, 25, inputStr),
  ]
  getPaletteColors(paletteKey.keyVal, colorKeys, keys)

  return keys
}