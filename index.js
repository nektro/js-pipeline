//
'use strict';
//
export default function pipeline(input, ...methods) {
    const next = methods.shift();
    if (typeof next !== 'function') {
        return input;
    }
    return pipeline(next(input), ...methods);
}
