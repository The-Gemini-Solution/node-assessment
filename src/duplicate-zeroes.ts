
export function duplicateZeroes(nums: number[]) {
    let counter = [];
    for(let n of nums) {
        counter.push(n);
        if (n === 0) {
            counter.push(n);
        }
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i] = counter[i];
    }
}
