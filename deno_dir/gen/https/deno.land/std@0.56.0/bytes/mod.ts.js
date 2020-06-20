// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.
import { copyBytes } from "../io/util.ts";
/** Find first index of binary pattern from a. If not found, then return -1
 * @param source soruce array
 * @param pat pattern to find in source array
 */
export function findIndex(source, pat) {
    const s = pat[0];
    for (let i = 0; i < source.length; i++) {
        if (source[i] !== s)
            continue;
        const pin = i;
        let matched = 1;
        let j = i;
        while (matched < pat.length) {
            j++;
            if (source[j] !== pat[j - pin]) {
                break;
            }
            matched++;
        }
        if (matched === pat.length) {
            return pin;
        }
    }
    return -1;
}
/** Find last index of binary pattern from a. If not found, then return -1.
 * @param source soruce array
 * @param pat pattern to find in source array
 */
export function findLastIndex(source, pat) {
    const e = pat[pat.length - 1];
    for (let i = source.length - 1; i >= 0; i--) {
        if (source[i] !== e)
            continue;
        const pin = i;
        let matched = 1;
        let j = i;
        while (matched < pat.length) {
            j--;
            if (source[j] !== pat[pat.length - 1 - (pin - j)]) {
                break;
            }
            matched++;
        }
        if (matched === pat.length) {
            return pin - pat.length + 1;
        }
    }
    return -1;
}
/** Check whether binary arrays are equal to each other.
 * @param source first array to check equality
 * @param match second array to check equality
 */
export function equal(source, match) {
    if (source.length !== match.length)
        return false;
    for (let i = 0; i < match.length; i++) {
        if (source[i] !== match[i])
            return false;
    }
    return true;
}
/** Check whether binary array starts with prefix.
 * @param source srouce array
 * @param prefix prefix array to check in source
 */
export function hasPrefix(source, prefix) {
    for (let i = 0, max = prefix.length; i < max; i++) {
        if (source[i] !== prefix[i])
            return false;
    }
    return true;
}
/** Check whether binary array ends with suffix.
 * @param source srouce array
 * @param suffix suffix array to check in source
 */
export function hasSuffix(source, suffix) {
    for (let srci = source.length - 1, sfxi = suffix.length - 1; sfxi >= 0; srci--, sfxi--) {
        if (source[srci] !== suffix[sfxi])
            return false;
    }
    return true;
}
/** Repeat bytes. returns a new byte slice consisting of `count` copies of `b`.
 * @param origin The origin bytes
 * @param count The count you want to repeat.
 */
export function repeat(origin, count) {
    if (count === 0) {
        return new Uint8Array();
    }
    if (count < 0) {
        throw new Error("bytes: negative repeat count");
    }
    else if ((origin.length * count) / count !== origin.length) {
        throw new Error("bytes: repeat count causes overflow");
    }
    const int = Math.floor(count);
    if (int !== count) {
        throw new Error("bytes: repeat count must be an integer");
    }
    const nb = new Uint8Array(origin.length * count);
    let bp = copyBytes(origin, nb);
    for (; bp < nb.length; bp *= 2) {
        copyBytes(nb.slice(0, bp), nb, bp);
    }
    return nb;
}
/** Concatenate two binary arrays and return new one.
 * @param origin origin array to concatenate
 * @param b array to concatenate with origin
 */
export function concat(origin, b) {
    const output = new Uint8Array(origin.length + b.length);
    output.set(origin, 0);
    output.set(b, origin.length);
    return output;
}
/** Check srouce array contains pattern array.
 * @param source srouce array
 * @param pat patter array
 */
export function contains(source, pat) {
    return findIndex(source, pat) != -1;
}
//# sourceMappingURL=file:///home/marian/Code/Senkapaj/core/deno_dir/gen/https/deno.land/std@0.56.0/bytes/mod.ts.js.map