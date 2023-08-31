const canConstruct = (ransomNote: string, magazine: string): boolean => {
    const hashMap: {[key: string]: number} = {};

    for(const char of ransomNote) {
        hashMap[char] = (hashMap[char] || 0) + 1;
    }

    for(const char of magazine) {
       if (!hashMap[char] || hashMap[char] === 0) {
           return false;
       } else {
           hashMap[char] = (hashMap[char]) - 1;
       }
    }

    console.log(hashMap);
    return true
}


const app = () => {
    console.log(canConstruct("aa", "ab"));
}

app()

