const twoSum = (nums: number[], target: number): number[] => {
    let current: number;
    let indexes: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        for (let x = 0; x < nums.length; x++) {
            if (nums[i] + nums[x] === target && i !== x) {
                indexes.push(i,x);
                return indexes;
            }
        }
    }
}

const app = () => {
    console.log(twoSum([2, 7, 11, 15], 9));
    console.log(twoSum([3, 2, 4], 6));
}

app();