module.exports = {
  // https://codepen.io/rwaldron/full/eYOXrJX
  MATRIX_CHARS: {
    //symbols & punctuation
    " ": [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],
    "!": [0x04, 0x04, 0x04, 0x04, 0x00, 0x00, 0x04, 0x00],
    "\"": [0x0A, 0x0A, 0x0A, 0x00, 0x00, 0x00, 0x00, 0x00],
    "#": [0x0A, 0x0A, 0x1F, 0x0A, 0x1F, 0x0A, 0x0A, 0x00],
    "$": [0x04, 0x0F, 0x14, 0x0E, 0x05, 0x1E, 0x04, 0x00],
    "%": [0x18, 0x19, 0x02, 0x04, 0x08, 0x13, 0x03, 0x00],
    "&": [0x0C, 0x12, 0x14, 0x08, 0x15, 0x12, 0x0D, 0x00],
    "'": [0x0C, 0x04, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00],
    "(": [0x02, 0x04, 0x08, 0x08, 0x08, 0x04, 0x02, 0x00],
    ")": [0x08, 0x04, 0x02, 0x02, 0x02, 0x04, 0x08, 0x00],
    "*": [0x00, 0x04, 0x15, 0x0E, 0x15, 0x04, 0x00, 0x00],
    "+": [0x00, 0x04, 0x04, 0x1F, 0x04, 0x04, 0x00, 0x00],
    ",": [0x00, 0x00, 0x00, 0x00, 0x0C, 0x04, 0x08, 0x00],
    "-": [0x00, 0x00, 0x00, 0x1F, 0x00, 0x00, 0x00, 0x00],
    ".": [0x00, 0x00, 0x00, 0x00, 0x00, 0x0C, 0x0C, 0x00],
    "/": [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x00, 0x00],
    "[": [0x0E, 0x08, 0x08, 0x08, 0x08, 0x08, 0x0E, 0x00],
    "\\": [0x00, 0x10, 0x08, 0x04, 0x02, 0x01, 0x00, 0x00],
    "]": [0x0E, 0x02, 0x02, 0x02, 0x02, 0x02, 0x0E, 0x00],
    "^": [0x04, 0x0A, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00],
    "_": [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x1F, 0x00],
    "`": [0x10, 0x08, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00],
    ":": [0x00, 0x0C, 0x0C, 0x00, 0x0C, 0x0C, 0x00, 0x00],
    ";": [0x00, 0x0C, 0x0C, 0x00, 0x0C, 0x04, 0x08, 0x00],
    "<": [0x02, 0x04, 0x08, 0x10, 0x08, 0x04, 0x02, 0x00],
    "=": [0x00, 0x00, 0x1F, 0x00, 0x1F, 0x00, 0x00, 0x00],
    ">": [0x08, 0x04, 0x02, 0x01, 0x02, 0x04, 0x08, 0x00],
    "?": [0x0E, 0x11, 0x01, 0x02, 0x04, 0x00, 0x04, 0x00],
    "@": [0x0E, 0x11, 0x01, 0x0D, 0x15, 0x15, 0x0E, 0x00],
    "{": [0x02, 0x04, 0x04, 0x08, 0x04, 0x04, 0x02, 0x00],
    "|": [0x04, 0x04, 0x04, 0x00, 0x04, 0x04, 0x04, 0x00],
    "}": [0x08, 0x04, 0x04, 0x02, 0x04, 0x04, 0x08, 0x00],
    "~": [0x08, 0x15, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00],

    //standard numbers
    "0": [0x0E, 0x11, 0x13, 0x15, 0x19, 0x11, 0x0E, 0x00],
    "1": [0x04, 0x0C, 0x04, 0x04, 0x04, 0x04, 0x0E, 0x00],
    "2": [0x0E, 0x11, 0x01, 0x02, 0x04, 0x08, 0x1F, 0x00],
    "3": [0x1F, 0x02, 0x04, 0x02, 0x01, 0x11, 0x0E, 0x00],
    "4": [0x02, 0x06, 0x0A, 0x12, 0x1F, 0x02, 0x02, 0x00],
    "5": [0x1F, 0x10, 0x1E, 0x01, 0x01, 0x11, 0x0E, 0x00],
    "6": [0x06, 0x08, 0x10, 0x1E, 0x11, 0x11, 0x0E, 0x00],
    "7": [0x1F, 0x01, 0x02, 0x04, 0x04, 0x04, 0x04, 0x00],
    "8": [0x1E, 0x11, 0x11, 0x0E, 0x11, 0x11, 0x0E, 0x00],
    "9": [0x0E, 0x11, 0x11, 0x0F, 0x01, 0x02, 0x0C, 0x00],

    //capital letters
    "A": [0x08, 0x14, 0x22, 0x3E, 0x22, 0x22, 0x22, 0x22],
    "B": [0x3C, 0x22, 0x22, 0x3E, 0x22, 0x22, 0x3C, 0x00],
    "C": [0x3C, 0x40, 0x40, 0x40, 0x40, 0x40, 0x3C, 0x00],
    "D": [0x7C, 0x42, 0x42, 0x42, 0x42, 0x42, 0x7C, 0x00],
    "E": [0x7C, 0x40, 0x40, 0x7C, 0x40, 0x40, 0x40, 0x7C],
    "F": [0x7C, 0x40, 0x40, 0x7C, 0x40, 0x40, 0x40, 0x40],
    "G": [0x3C, 0x40, 0x40, 0x40, 0x40, 0x44, 0x44, 0x3C],
    "H": [0x44, 0x44, 0x44, 0x7C, 0x44, 0x44, 0x44, 0x44],
    "I": [0x7C, 0x10, 0x10, 0x10, 0x10, 0x10, 0x10, 0x7C],
    "J": [0x3C, 0x08, 0x08, 0x08, 0x08, 0x08, 0x48, 0x30],
    "K": [0x00, 0x24, 0x28, 0x30, 0x20, 0x30, 0x28, 0x24],
    "L": [0x40, 0x40, 0x40, 0x40, 0x40, 0x40, 0x40, 0x7C],
    "M": [0x81, 0xC3, 0xA5, 0x99, 0x81, 0x81, 0x81, 0x81],
    "N": [0x00, 0x42, 0x62, 0x52, 0x4A, 0x46, 0x42, 0x00],
    "O": [0x3C, 0x42, 0x42, 0x42, 0x42, 0x42, 0x42, 0x3C],
    "P": [0x3C, 0x22, 0x22, 0x22, 0x3C, 0x20, 0x20, 0x20],
    "Q": [0x1C, 0x22, 0x22, 0x22, 0x22, 0x26, 0x22, 0x1D],
    "R": [0x3C, 0x22, 0x22, 0x22, 0x3C, 0x24, 0x22, 0x21],
    "S": [0x00, 0x1E, 0x20, 0x20, 0x3E, 0x02, 0x02, 0x3C],
    "T": [0x00, 0x3E, 0x08, 0x08, 0x08, 0x08, 0x08, 0x08],
    "U": [0x42, 0x42, 0x42, 0x42, 0x42, 0x42, 0x22, 0x1C],
    "V": [0x42, 0x42, 0x42, 0x42, 0x42, 0x42, 0x24, 0x18],
    "W": [0x00, 0x49, 0x49, 0x49, 0x49, 0x2A, 0x1C, 0x00],
    "X": [0x00, 0x41, 0x22, 0x14, 0x08, 0x14, 0x22, 0x41],
    "Y": [0x41, 0x22, 0x14, 0x08, 0x08, 0x08, 0x08, 0x08],
    "Z": [0x00, 0x7F, 0x02, 0x04, 0x08, 0x10, 0x20, 0x7F],

    //question: do these need to stay or what?
    // "A": [0x0E, 0x11, 0x11, 0x11, 0x1F, 0x11, 0x11, 0x00],
    // "B": [0x1E, 0x09, 0x09, 0x0E, 0x09, 0x09, 0x1E, 0x00],
    // "C": [0x0E, 0x11, 0x10, 0x10, 0x10, 0x11, 0x0E, 0x00],
    // "D": [0x1E, 0x09, 0x09, 0x09, 0x09, 0x09, 0x1E, 0x00],
    // "E": [0x1F, 0x10, 0x10, 0x1F, 0x10, 0x10, 0x1F, 0x00],
    // "F": [0x1F, 0x10, 0x10, 0x1E, 0x10, 0x10, 0x10, 0x00],
    // "G": [0x0E, 0x11, 0x10, 0x13, 0x11, 0x11, 0x0F, 0x00],
    // "H": [0x11, 0x11, 0x11, 0x1F, 0x11, 0x11, 0x11, 0x00],
    // "I": [0x0E, 0x04, 0x04, 0x04, 0x04, 0x04, 0x0E, 0x00],
    // "J": [0x07, 0x02, 0x02, 0x02, 0x02, 0x12, 0x0C, 0x00],
    // "K": [0x11, 0x12, 0x14, 0x18, 0x14, 0x12, 0x11, 0x00],
    // "L": [0x10, 0x10, 0x10, 0x10, 0x10, 0x10, 0x1F, 0x00],
    // "M": [0x11, 0x1B, 0x15, 0x15, 0x11, 0x11, 0x11, 0x00],
    // "N": [0x11, 0x19, 0x19, 0x15, 0x13, 0x13, 0x11, 0x00],
    // "O": [0x0E, 0x11, 0x11, 0x11, 0x11, 0x11, 0x0E, 0x00],
    // "P": [0x1E, 0x11, 0x11, 0x1E, 0x10, 0x10, 0x10, 0x00],
    // "Q": [0x0E, 0x11, 0x11, 0x11, 0x15, 0x12, 0x1D, 0x00],
    // "R": [0x1E, 0x11, 0x11, 0x1E, 0x14, 0x12, 0x11, 0x00],
    // "S": [0x0E, 0x11, 0x10, 0x0E, 0x01, 0x11, 0x0E, 0x00],
    // "T": [0x1F, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04, 0x00],
    // "U": [0x11, 0x11, 0x11, 0x11, 0x11, 0x11, 0x0E, 0x00],
    // "V": [0x11, 0x11, 0x11, 0x11, 0x11, 0x0A, 0x04, 0x00],
    // "W": [0x11, 0x11, 0x11, 0x15, 0x15, 0x1B, 0x11, 0x00],
    // "X": [0x11, 0x11, 0x0A, 0x04, 0x0A, 0x11, 0x11, 0x00],
    // "Y": [0x11, 0x11, 0x11, 0x0A, 0x04, 0x04, 0x04, 0x00],
    // "Z": [0x1F, 0x01, 0x02, 0x04, 0x08, 0x10, 0x1F, 0x00],

    //lowercase letters
    "a": [0x00, 0x00, 0x0E, 0x01, 0x0F, 0x11, 0x0F, 0x00],
    "b": [0x10, 0x10, 0x16, 0x19, 0x11, 0x11, 0x1E, 0x00],
    "c": [0x00, 0x00, 0x0E, 0x11, 0x10, 0x11, 0x0E, 0x00],
    "d": [0x01, 0x01, 0x0D, 0x13, 0x11, 0x11, 0x0F, 0x00],
    "e": [0x00, 0x00, 0x0E, 0x11, 0x1F, 0x10, 0x0E, 0x00],
    "f": [0x02, 0x05, 0x04, 0x0E, 0x04, 0x04, 0x04, 0x00],
    "g": [0x00, 0x0D, 0x13, 0x13, 0x0D, 0x01, 0x0E, 0x00],
    "h": [0x10, 0x10, 0x16, 0x19, 0x11, 0x11, 0x11, 0x00],
    "i": [0x04, 0x00, 0x0C, 0x04, 0x04, 0x04, 0x0E, 0x00],
    "j": [0x02, 0x00, 0x06, 0x02, 0x02, 0x12, 0x0C, 0x00],
    "k": [0x08, 0x08, 0x09, 0x0A, 0x0C, 0x0A, 0x09, 0x00],
    "l": [0x0C, 0x04, 0x04, 0x04, 0x04, 0x04, 0x0E, 0x00],
    "m": [0x00, 0x00, 0x1A, 0x15, 0x15, 0x15, 0x15, 0x00],
    "n": [0x00, 0x00, 0x16, 0x19, 0x11, 0x11, 0x11, 0x00],
    "o": [0x00, 0x00, 0x0E, 0x11, 0x11, 0x11, 0x0E, 0x00],
    "p": [0x00, 0x16, 0x19, 0x19, 0x16, 0x10, 0x10, 0x00],
    "q": [0x00, 0x0D, 0x13, 0x13, 0x0D, 0x01, 0x01, 0x00],
    "r": [0x00, 0x00, 0x16, 0x19, 0x10, 0x10, 0x10, 0x00],
    "s": [0x00, 0x00, 0x0F, 0x10, 0x1E, 0x01, 0x1F, 0x00],
    "t": [0x08, 0x08, 0x1C, 0x08, 0x08, 0x09, 0x06, 0x00],
    "u": [0x00, 0x00, 0x12, 0x12, 0x12, 0x12, 0x0D, 0x00],
    "v": [0x00, 0x00, 0x11, 0x11, 0x11, 0x0A, 0x04, 0x00],
    "w": [0x00, 0x00, 0x11, 0x11, 0x15, 0x15, 0x0A, 0x00],
    "x": [0x00, 0x00, 0x11, 0x0A, 0x04, 0x0A, 0x11, 0x00],
    "y": [0x00, 0x00, 0x11, 0x11, 0x13, 0x0D, 0x01, 0x0E],
    "z": [0x00, 0x00, 0x1F, 0x02, 0x04, 0x08, 0x1F, 0x00],

    //misc.
    euro: [0x0e, 0x10, 0x7c, 0x20, 0x7c, 0x20, 0x10, 0x0e],
    cent: [0x00, 0x3c, 0x42, 0x40, 0x40, 0x52, 0x3c, 0x20],

    //emojis + objects
    angryface: [0x00, 0x66, 0x66, 0x00, 0x18, 0x24, 0x42, 0x81],
    circle: [0x3c, 0x42, 0x81, 0x81, 0x81, 0x81, 0x42, 0x3c],
    cdot: [0x3c, 0x42, 0x81, 0x99, 0x99, 0x81, 0x42, 0x3c],
    donut: [0x3c, 0x7e, 0xff, 0xe7, 0xe7, 0xff, 0x7e, 0x3c],
    equality: [0x00, 0xff, 0xff, 0x00, 0x00, 0xff, 0xff, 0x00],
    ball: [0x3c, 0x7e, 0xff, 0xff, 0xff, 0xff, 0x7e, 0x3c],
    thinsquare: [0xff, 0x81, 0x81, 0x81, 0x81, 0x81, 0x81, 0xff],
    thicksquare: [0xff, 0xff, 0xc3, 0xc3, 0xc3, 0xc3, 0xff, 0xff],
    centeredsquare1: [0x00, 0x00, 0x3c, 0x3c, 0x3c, 0x3c, 0x00, 0x00],
    centeredsquare2: [0x00, 0x00, 0x3c, 0x3c, 0x3c, 0x3c, 0x00, 0x00],
    arrowright: [0x00, 0x04, 0x06, 0xff, 0xff, 0x06, 0x04, 0x00],
    arrowleft: [0x00, 0x20, 0x60, 0xff, 0xff, 0x60, 0x20, 0x00],
    note: [0x04, 0x06, 0x07, 0x04, 0x3c, 0x7c, 0x7c, 0x38],
    clock: [0x3c, 0x52, 0x91, 0x91, 0x8f, 0x81, 0x42, 0x3c],
    heartoutline: [0x66, 0x99, 0x81, 0x81, 0x42, 0x24, 0x18, 0x00],
    heartfull: [0x66, 0xff, 0xff, 0xff, 0x7e, 0x3c, 0x18, 0x00],
    thincheck: [0x00, 0x00, 0x01, 0x02, 0x04, 0x88, 0x50, 0x20],
    thickcheck: [0x00, 0x01, 0x03, 0x06, 0x8c, 0xd8, 0x70, 0x20],
    speaker: [0x03, 0x07, 0x3f, 0x3f, 0x3f, 0x3f, 0x07, 0x03],
    sound: [0x00, 0x40, 0x80, 0x00, 0xc0, 0x00, 0x80, 0x40],
    xbig: [0xc3, 0xe7, 0x7e, 0x3c, 0x3c, 0x7e, 0xe7, 0xc3],
    target: [0x3c, 0x7e, 0xc3, 0xdb, 0xdb, 0xc3, 0x7e, 0x3c],
    bell: [0x18, 0x3c, 0x3c, 0x3c, 0x3c, 0x7e, 0x00, 0x18],
    smile: [0x00, 0x66, 0x66, 0x00, 0x00, 0x81, 0x42, 0x3c],
    frown: [0x00, 0x66, 0x66, 0x00, 0x00, 0x3c, 0x42, 0x81],
    winkright: [0x00, 0x60, 0x66, 0x00, 0x00, 0x81, 0x42, 0x3c],
    winkleft: [0x00, 0x06, 0x66, 0x00, 0x00, 0x81, 0x42, 0x3c],
    blink: [0x00, 0x00, 0x66, 0x00, 0x00, 0x81, 0x42, 0x3c],
    laughing: [0x00, 0x66, 0x66, 0x00, 0xff, 0x81, 0x42, 0x3c],
    tongueout: [0x00, 0x66, 0x66, 0x00, 0x00, 0x7e, 0x0a, 0x04],
    expressionless: [0x00, 0x66, 0x66, 0x00, 0x00, 0xff, 0x00, 0x00],

    //patterns
    ascprogress1: [0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80],
    ascprogress2: [0xc0, 0xc0, 0xc0, 0xc0, 0xc0, 0xc0, 0xc0, 0xc0],
    ascprogress3: [0xe0, 0xe0, 0xe0, 0xe0, 0xe0, 0xe0, 0xe0, 0xe0],
    ascprogress4: [0xf0, 0xf0, 0xf0, 0xf0, 0xf0, 0xf0, 0xf0, 0xf0],
    ascprogress5: [0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8],
    ascprogress6: [0xfc, 0xfc, 0xfc, 0xfc, 0xfc, 0xfc, 0xfc, 0xfc],
    ascprogress7: [0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe],
    fullprogress: [0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff],
    descprogress1: [0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f],
    descprogress2: [0x3f, 0x3f, 0x3f, 0x3f, 0x3f, 0x3f, 0x3f, 0x3f],
    descprogress3: [0x1f, 0x1f, 0x1f, 0x1f, 0x1f, 0x1f, 0x1f, 0x1f],
    descprogress4: [0x0f, 0x0f, 0x0f, 0x0f, 0x0f, 0x0f, 0x0f, 0x0f],
    descprogress5: [0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07],
    descprogress6: [0x03, 0x03, 0x03, 0x03, 0x03, 0x03, 0x03, 0x03],
    descprogress7: [0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01],
    ascchart1: [0xff, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],
    ascchart2: [0xff, 0xff, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],
    ascchart3: [0xff, 0xff, 0xff, 0x00, 0x00, 0x00, 0x00, 0x00],
    ascchart4: [0xff, 0xff, 0xff, 0xff, 0x00, 0x00, 0x00, 0x00],
    ascchart5: [0xff, 0xff, 0xff, 0xff, 0xff, 0x00, 0x00, 0x00],
    ascchart6: [0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x00, 0x00],
    ascchart7: [0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x00],
    ascchart8: [0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff],
    descchart1: [0x00, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff],
    descchart2: [0x00, 0x00, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff],
    descchart3: [0x00, 0x00, 0x00, 0xff, 0xff, 0xff, 0xff, 0xff],
    descchart4: [0x00, 0x00, 0x00, 0x00, 0xff, 0xff, 0xff, 0xff],
    descchart5: [0x00, 0x00, 0x00, 0x00, 0x00, 0xff, 0xff, 0xff],
    descchart6: [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xff, 0xff],
    descchart7: [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xff],
    descchart8: [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],
    borderleft1: [0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01],
    borderleft2: [0x03, 0x02, 0x02, 0x02, 0x02, 0x02, 0x02, 0x03],
    borderleft3: [0x07, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04, 0x07],
    borderleft4: [0x0f, 0x08, 0x08, 0x08, 0x08, 0x08, 0x08, 0x0f],
    borderleft5: [0x1f, 0x10, 0x10, 0x10, 0x10, 0x10, 0x10, 0x1f],
    borderleft6: [0x3f, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x3f],
    borderleft7: [0x7f, 0x40, 0x40, 0x40, 0x40, 0x40, 0x40, 0x7f],
    borderleft8: [0xff, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0xff],
    bordertopbottom5: [0xff, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xff],
    borderright1: [0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80],
    borderright2: [0xc0, 0x40, 0x40, 0x40, 0x40, 0x40, 0x40, 0xc0],
    borderright3: [0xe0, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0xe0],
    borderright4: [0xf0, 0x10, 0x10, 0x10, 0x10, 0x10, 0x10, 0xf0],
    borderright5: [0xf8, 0x08, 0x08, 0x08, 0x08, 0x08, 0x08, 0xf8],
    borderright6: [0xfc, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04, 0xfc],
    borderright7: [0xfe, 0x02, 0x02, 0x02, 0x02, 0x02, 0x02, 0xfe],
    borderright8: [0xff, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0xff],
    box1: [0xe0, 0xe0, 0xe0, 0x00, 0x00, 0x00, 0x00, 0x00],
    box2: [0x07, 0x07, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00],
    box3: [0xe7, 0xe7, 0xe7, 0x00, 0x00, 0x00, 0x00, 0x00],
    box4: [0x00, 0x00, 0x00, 0x00, 0x00, 0x07, 0x07, 0x07],
    box5: [0x07, 0x07, 0x07, 0x00, 0x00, 0x07, 0x07, 0x07],
    box6: [0xe0, 0xe0, 0xe0, 0x00, 0x00, 0x07, 0x07, 0x07],
    box7: [0xe7, 0xe7, 0xe7, 0x00, 0x00, 0x07, 0x07, 0x07],
    box8: [0x00, 0x00, 0x00, 0x00, 0x00, 0xe0, 0xe0, 0xe0],
    box9: [0x07, 0x07, 0x07, 0x00, 0x00, 0xe0, 0xe0, 0xe0],
    box10: [0xe0, 0xe0, 0xe0, 0x00, 0x00, 0xe0, 0xe0, 0xe0],
    box11: [0xe7, 0xe7, 0xe7, 0x00, 0x00, 0xe0, 0xe0, 0xe0],
    box12: [0x00, 0x00, 0x00, 0x00, 0x00, 0xe7, 0xe7, 0xe7],
    box13: [0x07, 0x07, 0x07, 0x00, 0x00, 0xe7, 0xe7, 0xe7],
    box14: [0xe0, 0xe0, 0xe0, 0x00, 0x00, 0xe7, 0xe7, 0xe7],
    box15: [0xe7, 0xe7, 0xe7, 0x00, 0x00, 0xe7, 0xe7, 0xe7],
    checkerboard1: [0xaa, 0x55, 0xaa, 0x55, 0xaa, 0x55, 0xaa, 0x55],
    checkerboard2: [0x55, 0xaa, 0x55, 0xaa, 0x55, 0xaa, 0x55, 0xaa],
    checkerboard3: [0x5d, 0xea, 0x57, 0xba, 0x55, 0xee, 0x55, 0xbb],
    checkerboard4: [0xcc, 0x33, 0x33, 0xcc, 0xcc, 0x33, 0x33, 0xcc],
    checkerboard5: [0xcc, 0xcc, 0x33, 0x33, 0xcc, 0xcc, 0x33, 0x33],
    checkerboard6: [0x33, 0xcc, 0xcc, 0x33, 0x33, 0xcc, 0xcc, 0x33],
    checkerboard7: [0x33, 0x33, 0xcc, 0xcc, 0x33, 0x33, 0xcc, 0xcc],
    pointerright: [0x20, 0x30, 0x38, 0x3c, 0x3c, 0x38, 0x30, 0x20],
    pointerup: [0x00, 0x00, 0x18, 0x3c, 0x7e, 0xff, 0x00, 0x00],
    pointerleft: [0x04, 0x0c, 0x1c, 0x3c, 0x3c, 0x1c, 0x0c, 0x04],
    pointerdown: [0x00, 0x00, 0xff, 0x7e, 0x3c, 0x18, 0x00, 0x00],
    arrowne: [0x00, 0x3e, 0x06, 0x0a, 0x12, 0x22, 0x40, 0x80],
    arrownw: [0x00, 0x7c, 0x60, 0x50, 0x48, 0x44, 0x02, 0x01],
    arrowsw: [0x01, 0x02, 0x44, 0x48, 0x50, 0x60, 0x7c, 0x00],
    arrowse: [0x80, 0x40, 0x22, 0x12, 0x0a, 0x06, 0x3e, 0x00],
    dice1: [0x00, 0x00, 0x00, 0x18, 0x18, 0x00, 0x00, 0x00],
    dice2: [0xc0, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x03],
    dice3: [0xc0, 0xc0, 0x00, 0x18, 0x18, 0x00, 0x03, 0x03],
    dice4: [0xc3, 0xc3, 0x00, 0x00, 0x00, 0x00, 0xc3, 0xc3],
    dice5: [0xc3, 0xc3, 0x00, 0x18, 0x18, 0x00, 0xc3, 0xc3],
    dice6: [0xc3, 0xc3, 0x00, 0xc3, 0xc3, 0x00, 0xc3, 0xc3],
    outlinedplus1: [0x3c, 0x24, 0xe7, 0x81, 0x81, 0xe7, 0x24, 0x3c],
    outlinedplus2: [0xff, 0xe7, 0xe7, 0x81, 0x81, 0xe7, 0xe7, 0xff],
    twoboxes1: [0xf0, 0x90, 0x90, 0xf0, 0x0f, 0x09, 0x09, 0x0f],
    twoboxes2: [0xf0, 0x90, 0x90, 0xfe, 0x12, 0x12, 0x1e, 0x00],
    twoboxes3: [0xf0, 0x90, 0xbc, 0xf4, 0x24, 0x3c, 0x00, 0x00],
    twoboxes4: [0xf0, 0xf8, 0xd8, 0xf8, 0x78, 0x00, 0x00, 0x00],
    twoboxes5: [0x0f, 0x09, 0x09, 0x0f, 0xf0, 0x90, 0x90, 0xf0],
    fourboxes: [0xff, 0x99, 0x99, 0xff, 0xff, 0x99, 0x99, 0xff],
    chain1: [0xf0, 0xf8, 0xd8, 0xf8, 0x78, 0x00, 0x00, 0x00],
    chain2: [0xf0, 0x90, 0xbc, 0xf4, 0x2f, 0x3d, 0x09, 0x0f],
  },

  SPECIAL_CHARS: {
    //thicker numbers
    "0": [0x3c, 0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x3c],
    "1": [0x18, 0x38, 0x78, 0x18, 0x18, 0x18, 0x18, 0x18],
    "2": [0x3c, 0x66, 0x06, 0x0c, 0x18, 0x30, 0x60, 0x7e],
    "3": [0x3c, 0x66, 0x06, 0x1c, 0x06, 0x06, 0x66, 0x3c],
    "4": [0x0e, 0x1e, 0x36, 0x66, 0x66, 0x7e, 0x06, 0x06],
    "5": [0x7e, 0x60, 0x60, 0x7c, 0x06, 0x06, 0x66, 0x3c],
    "6": [0x3c, 0x66, 0x60, 0x7c, 0x66, 0x66, 0x66, 0x3c],
    "7": [0x7e, 0x7e, 0x06, 0x0c, 0x18, 0x18, 0x18, 0x18],
    "8": [0x3c, 0x66, 0x66, 0x3c, 0x66, 0x66, 0x66, 0x3c],
    "9": [0x3c, 0x66, 0x66, 0x3e, 0x06, 0x06, 0x66, 0x3c],

    //Jory's double digits
    "10": [0x5e, 0x52, 0x52, 0x52, 0x52, 0x5e, 0x00, 0xff],
    "11": [0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x00, 0xff],
    "12": [0x5e, 0x42, 0x44, 0x48, 0x50, 0x5e, 0x00, 0xff],
    "13": [0x5e, 0x42, 0x4e, 0x42, 0x42, 0x5e, 0x00, 0xff],
    "14": [0x52, 0x52, 0x5e, 0x42, 0x42, 0x42, 0x00, 0xff],
    "15": [0x5e, 0x50, 0x5e, 0x42, 0x42, 0x5e, 0x00, 0xff],
    "16": [0x5e, 0x50, 0x5e, 0x52, 0x52, 0x5e, 0x00, 0xff],
    "17": [0x5e, 0x42, 0x44, 0x48, 0x48, 0x48, 0x00, 0xff],
    "18": [0x5e, 0x52, 0x5e, 0x52, 0x52, 0x5e, 0x00, 0xff],
    "19": [0x5e, 0x52, 0x5e, 0x42, 0x42, 0x5e, 0x00, 0xff],
  },

  // https://codepen.io/rwaldron/full/KKPERKe
  DIGIT_CHARS: {
    "0": 0x7E,
    "1": 0x30,
    "2": 0x6D,
    "3": 0x79,
    "4": 0x33,
    "5": 0x5B,
    "6": 0x5F,
    "7": 0x70,
    "8": 0x7F,
    "9": 0x7B,
    " ": 0x00,
    ".": 0x80,
    ":": 0xFF,
    "!": 0xB0,
    "A": 0x77,
    "a": 0x7D,
    "B": 0x7F,
    "b": 0x1F,
    "C": 0x4E,
    "c": 0x0D,
    "D": 0x7E,
    "d": 0x3D,
    "E": 0x4F,
    "e": 0x6f,
    "F": 0x47,
    "f": 0x47,
    "G": 0x5E,
    "g": 0x7B,
    "H": 0x37,
    "h": 0x17,
    "I": 0x30,
    "i": 0x10,
    "J": 0x3C,
    "j": 0x38,
    "K": 0x37,
    "k": 0x17,
    "L": 0x0E,
    "l": 0x06,
    "M": 0x55,
    "m": 0x55,
    "N": 0x15,
    "n": 0x15,
    "O": 0x7E,
    "o": 0x1D,
    "P": 0x67,
    "p": 0x67,
    "Q": 0x73,
    "q": 0x73,
    "R": 0x77,
    "r": 0x05,
    "S": 0x5B,
    "s": 0x5B,
    "T": 0x46,
    "t": 0x0F,
    "U": 0x3E,
    "u": 0x1C,
    "V": 0x27,
    "v": 0x23,
    "W": 0x3F,
    "w": 0x2B,
    "X": 0x25,
    "x": 0x25,
    "Y": 0x3B,
    "y": 0x33,
    "Z": 0x6D,
    "z": 0x6D,
  }
};
