// function add(a: number, b: number): number {
//     return a + b;
// }
  
// export { add };

function pow(x: number, n: number) {
    if (n < 0) return NaN;
    if (Math.round(n) != n) return NaN;

    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}  

export { pow };