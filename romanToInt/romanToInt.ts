const romanToInt = (s: string): number => {
    const romMap: { [key: string]: number } = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
        'IV':4,
        'IX':9,
        'XL':40,
        'XC':90,
        'CD':400,
        'CM':900
    }

    let result: number= 0;
    for (let i = 0; i < s.length;) {
        const index: string = s[i] + s[i+1];
        const word: string = romMap[index] ? index: s[i];
        result += romMap[word]
        i += word.length;
    }

    return result;
}

const app = () => {
    console.log(romanToInt("III"));
    console.log(romanToInt("LVIII"));
    console.log(romanToInt("MCMXCIV"));
}

app()

