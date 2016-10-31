import { complement, isNil } from 'ramda';


export const not = complement;
export const isSet = complement(isNil);
export const assert = <T>(val: T, assertion: (val: T) => boolean, errorMsg?: string) => {
    if (!assertion(val)) { throw new Error(errorMsg || 'assertion failed'); }
};
