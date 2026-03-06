// const spinnerFrames = '◜◝◞◟'
// const spinnerFrames = '◐◑◒◓◔◕'
// const spinnerFrames = '⬖⬗⬘⬙'
// const spinnerFrames = '│/─\\'
// const spinnerFrames = '⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏'

// https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/named-color
const HTMLColors = {
    black:		    "000000",
    silver:		    "c0c0c0",
    gray:		    "808080",
    white:		    "ffffff",
    maroon:		    "800000",
    red:		    "ff0000",
    purple:		    "800080",
    fuchsia:	    "ff00ff",
    green:		    "008000",
    lime:		    "00ff00",
    olive:		    "808000",
    yellow:		    "ffff00",
    navy:		    "000080",
    blue:		    "0000ff",
    teal:		    "008080",
    aqua:		    "00ffff",

    aliceblue:		"f0f8ff",
    antiquewhite:	"faebd7",
    aqua:		    "00ffff",
    aquamarine:		"7fffd4",
    azure:		    "f0ffff",
    beige:		    "f5f5dc",
    bisque:		    "ffe4c4",
    black:		    "000000",
    blanchedalmond:	"ffebcd",
    blue:		    "0000ff",
    blueviolet:		"8a2be2",
    brown:		    "a52a2a",
    burlywood:		"deb887",
    cadetblue:		"5f9ea0",
    chartreuse:		"7fff00",
    chocolate:		"d2691e",
    coral:		    "ff7f50",
    cornflowerblue:	"6495ed",
    cornsilk:		"fff8dc",
    crimson:		"dc143c",
    cyan:           "00ffff",
    darkblue:		"00008b",
    darkcyan:		"008b8b",
    darkgoldenrod:	"b8860b",
    darkgray:		"a9a9a9",
    darkgreen:		"006400",
    darkgrey:		"a9a9a9",
    darkkhaki:		"bdb76b",
    darkmagenta:	"8b008b",
    darkolivegreen:	"556b2f",
    darkorange:		"ff8c00",
    darkorchid:		"9932cc",
    darkred:		"8b0000",
    darksalmon:		"e9967a",
    darkseagreen:	"8fbc8f",
    darkslateblue:	"483d8b",
    darkslategray:	"2f4f4f",
    darkslategrey:	"2f4f4f",
    darkturquoise:	"00ced1",
    darkviolet:		"9400d3",
    deeppink:		"ff1493",
    deepskyblue:	"00bfff",
    dimgray:		"696969",
    dimgrey:		"696969",
    dodgerblue:		"1e90ff",
    firebrick:		"b22222",
    floralwhite:	"fffaf0",
    forestgreen:	"228b22",
    fuchsia:		"ff00ff",
    gainsboro:		"dcdcdc",
    ghostwhite:		"f8f8ff",
    gold:		    "ffd700",
    goldenrod:		"daa520",
    gray:		    "808080",
    green:		    "008000",
    greenyellow:	"adff2f",
    grey:		    "808080",
    honeydew:		"f0fff0",
    hotpink:		"ff69b4",
    indianred:		"cd5c5c",
    indigo:		    "4b0082",
    ivory:		    "fffff0",
    khaki:		    "f0e68c",
    lavender:		"e6e6fa",
    lavenderblush:	"fff0f5",
    lawngreen:		"7cfc00",
    lemonchiffon:	"fffacd",
    lightblue:		"add8e6",
    lightcoral:		"f08080",
    lightcyan:		"e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray:		"d3d3d3",
    lightgreen:		"90ee90",
    lightgrey:		"d3d3d3",
    lightpink:		"ffb6c1",
    lightsalmon:	"ffa07a",
    lightseagreen:	"20b2aa",
    lightskyblue:	"87cefa",
    lightslategray:	"778899",
    lightslategrey:	"778899",
    lightsteelblue:	"b0c4de",
    lightyellow:	"ffffe0",
    lime:		    "00ff00",
    limegreen:		"32cd32",
    linen:		    "faf0e6",
    magenta:        "#ff00ff",
    maroon:		    "800000",
    mediumaquamarine: "66cdaa",
    mediumblue:		"0000cd",
    mediumorchid:	"ba55d3",
    mediumpurple:	"9370db",
    mediumseagreen:	"3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue:	"191970",
    mintcream:		"f5fffa",
    mistyrose:		"ffe4e1",
    moccasin:		"ffe4b5",
    navajowhite:	"ffdead",
    navy:		    "000080",
    oldlace:		"fdf5e6",
    olive:		    "808000",
    olivedrab:		"6b8e23",
    orange:		    "ffa500",
    orangered:		"ff4500",
    orchid:		    "da70d6",
    palegoldenrod:	"eee8aa",
    palegreen:		"98fb98",
    paleturquoise:	"afeeee",
    palevioletred:	"db7093",
    papayawhip:		"ffefd5",
    peachpuff:		"ffdab9",
    peru:		    "cd853f",
    pink:		    "ffc0cb",
    plum:		    "dda0dd",
    powderblue:		"b0e0e6",
    purple:		    "800080",
    rebeccapurple:	"663399",
    red:		    "ff0000",
    rosybrown:		"bc8f8f",
    royalblue:		"4169e1",
    saddlebrown:	"8b4513",
    salmon:		    "fa8072",
    sandybrown:		"f4a460",
    seagreen:		"2e8b57",
    seashell:		"fff5ee",
    sienna:		    "a0522d",
    silver:		    "c0c0c0",
    skyblue:		"87ceeb",
    slateblue:		"6a5acd",
    slategray:		"708090",
    slategrey:		"708090",
    snow:		    "fffafa",
    springgreen:	"00ff7f",
    steelblue:		"4682b4",
    tan:		    "d2b48c",
    teal:		    "008080",
    thistle:		"d8bfd8",
    tomato:		    "ff6347",
    transparent:    "",
    turquoise:		"40e0d0",
    violet:		    "ee82ee",
    wheat:		    "f5deb3",
    white:		    "ffffff",
    whitesmoke:		"f5f5f5",
    yellow:		    "ffff00",
    yellowgreen:	"9acd32",
}

const Palette = {
    text: {
        black:      '\x1b[38;5;0m',
        white:      '\x1b[38;5;231m',
        grey:       '\x1b[38;5;249m',
        yellow:     '\x1b[38;5;221m',
        orange:     '\x1b[38;5;214m',
        blue:       '\x1b[38;5;26m', //'\x1b[38;5;45m',
        green:      '\x1b[38;5;42m',
        red:        '\x1b[38;5;196m',
        pink:       '\x1b[38;5;212m',
        purple:     '\x1b[38;5;133m',
    }
}

const Reset = '\x1b[0m'

const Styles = {
    
    color: {
        text:           Palette.text.black,
        label:          Palette.text.black,
        placeholder:    Palette.text.grey,
        muted:          Palette.text.grey,
        success:        Palette.text.green,
        error:          Palette.text.red,
        info:           Palette.text.blue,
        border:         Palette.text.grey,
    },

    symbol: {
        carret:         '►',
        current:        '○',
        skipped:        '○',
        finished:       '○',
        bullet:         '●',
        radioOn:        '●',
        radioOff:       '○',
        checkboxOn:     '■',
        checkboxOff:    '□',
        step:           '◆',
    },

    spinner: {
        circleFill:     '◐◑◒◓◔◕',
        circleLine:     '◜◝◞◟',
        circle:         '◌◯◉●◉◯◌',
        diamond:        '⬖⬗⬘⬙'
    },

    marker: {
        current: `\n${Palette.text.blue}◆${Reset}`,
        success: `\n${Palette.text.green}◆${Reset}`,
        error: `\n${Palette.text.red}◆${Reset}`,
    },

    border: `\n${Palette.text.grey}│${Reset}`,

    end: `\n${Palette.text.grey}└${Reset}`

}






const Theme = {
    reset:              '\x1b[0m',
    accentColor:        '',
    neutralColor:       '',
    textColor:          '',
    placeholderColor:   '\x1b[38;5;249m',
    mutedColor:         '',
    borderColor:        '',
    infoColor:          '',
    successColor:       '',
    warningColor:       '',
    errorColor:         '',
    spinnerColor:       'rgb(0,0,0)',
    // spinner:            '◜◝◞◟',
    spinner:            '⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏',
    padding: {
        top:            2,
        right:          10,
        bottom:         2,
        left:           10,
    },
    carret:             '►',
    groupStart:         '┌',
    groupMarker: {
        current:        '◆',
        success:        '◆',
        error:          '◆',
    },
    groupBorder:        '│',
    groupEnd:           '└',
    frame:              '│┌─┬┐├─┼┤└─┴┘',
    checkbox: {
        checked:        '■',
        unchecked:      '□',
    },
    radio: {
        selected:       '●',
        unselected:     '○'
    },
    template:           {}
}

Theme.template.message = `\n${Theme.groupMarker.current} {{label}}\n${Theme.groupBorder}`
// Theme.template.message = `\n┌${''.padEnd(80, '─')}┐\n│ {{label | asciiFill(79)}}│\n└${''.padEnd(80, '─')}┘`

Theme.template.select = {
    current: `\n${Theme.groupMarker.current} {{label}} {{filter}}\n${Theme.groupBorder} {{options}}\n${Theme.groupEnd}`,
    finished: `\n${Theme.groupMarker.current} {{label}} {{filter}}\n${Theme.groupBorder} {{options}}\n${Theme.groupEnd}`,
    option: {
        selected: `\n${Theme.groupBorder} ► {{title}}`,
        unselected: `\n${Theme.groupBorder}   {{title}}`,
    },
}

Theme.template.multiselect = {
    current: `\n${Theme.groupMarker.current} {{label}} {{filter}}\n${Theme.groupBorder} {{options}}\n${Theme.groupEnd}`,
    finished: `\n${Theme.groupMarker.current} {{label}} {{filter}}\n${Theme.groupBorder} {{options}}\n${Theme.groupEnd}`,
    option: {
        startCurrent: `\n${Theme.groupBorder} ►`,
        start: `\n${Theme.groupBorder}  `,
        selected: ` [X] {{title}}`,
        unselected: ` [ ] {{title}}`,
    },
}

Theme.template.confirm = {
    current: `\n${Theme.groupMarker.current} {{label}} \n${Theme.groupBorder}{{options}}\n${Theme.groupEnd}`,
    finished: `\n${Theme.groupMarker.current} {{label}} \n${Theme.groupBorder}{{options}}\n${Theme.groupBorder}`,
    option: {
        selected: ` ● {{title}}`,
        unselected: ` ○ {{title}}`
    }
}

Theme.template.question = `{{if finished}}\n${Theme.groupMarker.current} {{label}} \n${Theme.groupBorder} {{value}}\n${Theme.groupBorder}{{else}}\n${Theme.groupMarker.current} {{label}} \n${Theme.groupBorder} {{if value}}{{value}}{{else}}\x1b[38;5;249m{{placeholder}}\x1b[0m{{endif}}\n${Theme.groupEnd}{{endif}}`
// Theme.template.question = `\n┌${''.padEnd(80, '─')}┐
// │ \x1b[1m{{label | asciiFill(79)}}\x1b[0m│
// ├${''.padEnd(80, '─')}┤
// {{if finished}}│ {{value | asciiFill(79)}}│{{else}}│ {{if value}}{{value | asciiFill(79)}}│{{else}}\x1b[38;5;249m{{placeholder | asciiFill(79)}}\x1b[0m│{{endif}}{{endif}}
// └${''.padEnd(80, '─')}┘`
Theme.template.error = `\n${Theme.groupMarker.current} ${Styles.color.error}[ ERROR ]${Reset} {{label}}\n${Theme.groupBorder}`
Theme.template.wait = `${Styles.marker.error} {{label}}\n${Theme.groupBorder}`
Theme.template.func = `\n${Theme.groupMarker.current} Running function... {{label}}\n${Theme.groupBorder}`

export default Theme