export function trim(val) {
    return val.trim();
}
export function compact(obj) {
    return Object.keys(obj).reduce((result, key) => {
        if (obj[key]) {
            result[key] = obj[key];
        }
        return result;
    }, {});
}
export function difference(arrA, arrB) {
    return arrA.filter((a) => arrB.indexOf(a) < 0);
}
//# sourceMappingURL=file:///home/marian/Code/Senkapaj/core/deno_dir/gen/https/deno.land/x/dotenv@v0.4.3/util.ts.js.map