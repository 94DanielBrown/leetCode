const maximumWealth = (accounts: number[][]): number => {
    const totals: number[] = [];
    accounts.forEach((account) => {
        totals.push(account.reduce((accumulator, currentValue) => accumulator + currentValue, 0))
    })

    return Math.max(...totals)
}

const app = () => {
    console.log(maximumWealth([[1,5],[7,3],[3,5]]))
}

app();