import { Hash } from "./deps.ts";
export function readInt16BE(buffer, offset) {
    offset = offset >>> 0;
    const val = buffer[offset + 1] | (buffer[offset] << 8);
    return val & 0x8000 ? val | 0xffff0000 : val;
}
export function readUInt16BE(buffer, offset) {
    offset = offset >>> 0;
    return buffer[offset] | (buffer[offset + 1] << 8);
}
export function readInt32BE(buffer, offset) {
    offset = offset >>> 0;
    return ((buffer[offset] << 24) |
        (buffer[offset + 1] << 16) |
        (buffer[offset + 2] << 8) |
        buffer[offset + 3]);
}
export function readUInt32BE(buffer, offset) {
    offset = offset >>> 0;
    return (buffer[offset] * 0x1000000 +
        ((buffer[offset + 1] << 16) |
            (buffer[offset + 2] << 8) |
            buffer[offset + 3]));
}
const encoder = new TextEncoder();
function md5(bytes) {
    return new Hash("md5").digest(bytes).hex();
}
// https://www.postgresql.org/docs/current/protocol-flow.html
// AuthenticationMD5Password
// The actual PasswordMessage can be computed in SQL as:
//  concat('md5', md5(concat(md5(concat(password, username)), random-salt))).
// (Keep in mind the md5() function returns its result as a hex string.)
export function hashMd5Password(password, username, salt) {
    const innerHash = md5(encoder.encode(password + username));
    const innerBytes = encoder.encode(innerHash);
    const outerBuffer = new Uint8Array(innerBytes.length + salt.length);
    outerBuffer.set(innerBytes);
    outerBuffer.set(salt, innerBytes.length);
    const outerHash = md5(outerBuffer);
    return "md5" + outerHash;
}
export function parseDsn(dsn) {
    //URL object won't parse the URL if it doesn't recognize the protocol
    //This line replaces the protocol with http and then leaves it up to URL
    const [protocol, stripped_url] = dsn.match(/(?:(?!:\/\/).)+/g) ?? ["", ""];
    const url = new URL(`http:${stripped_url}`);
    return {
        driver: protocol,
        user: url.username,
        password: url.password,
        hostname: url.hostname,
        port: url.port,
        // remove leading slash from path
        database: url.pathname.slice(1),
        params: Object.fromEntries(url.searchParams.entries()),
    };
}
export function delay(ms, value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value);
        }, ms);
    });
}
//# sourceMappingURL=file:///home/marian/Code/Senkapaj/core/deno_dir/gen/https/deno.land/x/postgres/utils.ts.js.map