const runningSum = (nums: number[]): number[] => {
    const arr: number[] = [];
    let x: number = 0;
    for (let i = 0; i < nums.length; i++) {
        x = x + nums[i];
        arr.push(x)
    }
    return arr
}

const app = () => {
    console.log(runningSum([1,2,3,4]));
}

app();