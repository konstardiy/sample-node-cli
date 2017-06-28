#!/usr/bin/env node
/**
 * Created by kote on 2017-06-28.
 */
function ensureLength(str, minLen, sym) {
    var ret = "" + str;
    minLen = minLen || 0;
    sym = sym || '0';
    while(ret.length < minLen) {
        ret = sym + ret;
    }
    return ret;
}
var d = new Date();
var parts = {
    yyyy: ensureLength(d.getUTCFullYear(), 4),
    MM: ensureLength(d.getUTCMonth()+1,2),
    dd: ensureLength(d.getUTCDate(), 2),
    hh: ensureLength(d.getUTCHours(), 2),
    mm: ensureLength(d.getUTCMinutes(), 2),
    ss: ensureLength(d.getUTCSeconds(), 2),
    fff: ensureLength(d.getMilliseconds(), 3)
};
var literal = "yyyy-MM-ddThh:mm:ss.fff";
for(var key in parts) {
    literal = literal.replace(key, parts[key]);
}
console.info(literal);