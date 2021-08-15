// Each row is a color palette consisting of complimentary, unique colors within the palette.
// Each palette must contain at least 4 colors, as that is currently the maximum number of
// unique colors retrieved from a palette. This requirement may be checked programatically
// in the future. Note that the color values are hex values *without* the preceding hash (#) -
// that is added within the code.
// 
// Modifying the color palettes will invalidate all other color combinations made with previous
// palettes.
export const colorPalettes = [
    ['264653', '2a9d8f', 'e9c46a', 'f4a261', 'e76f51'],
    ['f72585', 'b5179e', '7209b7', '560bad', '480ca8', '3a0ca3', '3f37c9', '4361ee', '4895ef', '4cc9f0'],
    ['03071e', '370617', '6a040f', '9d0208', 'd00000', 'dc2f02', 'e85d04', 'f48c06', 'faa307', 'ffba08'],
    ['d9ed92', 'b5e48c', '99d98c', '76c893', '52b69a', '34a0a4', '168aad', '1a759f', '1e6091', '184e77'],
    ['f94144', 'f3722c', 'f8961e', 'f9844a', 'f9c74f', '90be6d', '43aa8b', '4d908e', '577590', '277da1'],
    ['590d22', '800f2f', 'a4133c', 'c9184a', 'ff4d6d', 'ff758f', 'ff8fa3', 'ffb3c1', 'ffccd5', 'fff0f3'],
    ['012a4a', '013a63', '01497c', '014f86', '2a6f97', '2c7da0', '468faf', '61a5c2', '89c2d9', 'a9d6e5'],
    ['7400b8', '6930c3', '5e60ce', '5390d9', '4ea8de', '48bfe3', '56cfe1', '64dfdf', '72efdd', '80ffdb'],
    ['001219', '005f73', '0a9396', '94d2bd', 'e9d8a6', 'ee9b00', 'ca6702', 'bb3e03', 'ae2012', '9b2226'],
    ['d8f3dc', 'b7e4c7', '95d5b2', '74c69d', '52b788', '40916c', '2d6a4f', '1b4332', '081c15'],
]

export default colorPalettes
