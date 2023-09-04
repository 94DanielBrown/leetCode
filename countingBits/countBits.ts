const countBits = (n: number): number[] => {
    const arr = new Uint8Array(n+1);

    for(let i =0; i < n + 1; i++){
        arr[i] = arr[i >> 1] + (i & 1);
    }

    // @ts-ignore
    const ans: number[] = [...arr]
    return ans
}

const app = () => {
    console.log(countBits(10));

}

app()