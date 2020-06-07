/*!
 * Adapted directly from media-typer at https://github.com/jshttp/media-typer/
 * which is licensed as follows:
 *
 * media-typer
 * Copyright(c) 2014-2017 Douglas Christopher Wilson
 * MIT Licensed
 */
const SUBTYPE_NAME_REGEXP = /^[A-Za-z0-9][A-Za-z0-9!#$&^_.-]{0,126}$/;
const TYPE_NAME_REGEXP = /^[A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126}$/;
const TYPE_REGEXP = /^ *([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126}) *$/;
class MediaType {
    constructor(
    /** The type of the media type. */
    type, 
    /** The subtype of the media type. */
    subtype, 
    /** The optional suffix of the media type. */
    suffix) {
        this.type = type;
        this.subtype = subtype;
        this.suffix = suffix;
    }
}
/** Given a media type object, return a media type string.
 *
 *       format({
 *         type: "text",
 *         subtype: "html"
 *       }); // returns "text/html"
 */
export function format(obj) {
    const { subtype, suffix, type } = obj;
    if (!TYPE_NAME_REGEXP.test(type)) {
        throw new TypeError("Invalid type.");
    }
    if (!SUBTYPE_NAME_REGEXP.test(subtype)) {
        throw new TypeError("Invalid subtype.");
    }
    let str = `${type}/${subtype}`;
    if (suffix) {
        if (!TYPE_NAME_REGEXP.test(suffix)) {
            throw new TypeError("Invalid suffix.");
        }
        str += `+${suffix}`;
    }
    return str;
}
/** Given a media type string, return a media type object.
 *
 *       parse("application/json-patch+json");
 *       // returns {
 *       //   type: "application",
 *       //   subtype: "json-patch",
 *       //   suffix: "json"
 *       // }
 */
export function parse(str) {
    const match = TYPE_REGEXP.exec(str.toLowerCase());
    if (!match) {
        throw new TypeError("Invalid media type.");
    }
    let [, type, subtype] = match;
    let suffix;
    const idx = subtype.lastIndexOf("+");
    if (idx !== -1) {
        suffix = subtype.substr(idx + 1);
        subtype = subtype.substr(0, idx);
    }
    return new MediaType(type, subtype, suffix);
}
//# sourceMappingURL=file:///home/marian/Code/Senkapaj/core/deno_dir/gen/https/deno.land/x/oak@v5.1.0/mediaTyper.ts.js.map