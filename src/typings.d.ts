/// <reference path="../typings/index.d.ts" />

/**
 * This file contains quick-fix typings for external libraries.
 * Should ideally be removed or empty.
 */

interface Array<T> {
    includes: (i: T) => boolean;
}
