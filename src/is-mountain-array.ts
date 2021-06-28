export function isMountainArr(arr: number[]) {
    if (arr && arr.length < 3) return false;

    let l = arr.indexOf(Math.max(...arr));

    if (l === arr.length - 1 || l === 0) return false;
    
    let s1 = arr.slice(0, l + 1);
    let s2 = arr.slice(l, arr.length + 1).reverse();
    
    for (let a of [s1, s2]) {
        for (let i = 0; i < a.length; i++) {
            if (a[i] >= a[i+1]) {
                return false;
            }
        }
    }
    
    return true;
}
