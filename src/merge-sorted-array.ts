export function mergeSortedArray(nums1: number[], m: number, nums2: number[], n: number){
    if (n === 0) return;

    for (let i = 0; i < nums2.length; i++) {
        nums1[i + m] = nums2[i]; 
    }

    nums1.sort((a,b) =>  a - b);
}