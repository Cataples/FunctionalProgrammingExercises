import { sumNestedArray, sumNumericValues, ArrayIncludes } from "./highFunctions";

const nested = [ 1, 2, [ 3, 4 ], [ [ 5 ], [ 6, 7 ] ], 9 ];

console.log( sumNestedArray( nested ) );

const values = [ 0, 1, undefined, -10, "0", 42 ];

console.log( sumNumericValues( values ) );

const array = [ 101, 67, 213, 94, 59, [ 42, 50 ], 62, 40 ];

console.log( ArrayIncludes( array, 42 ) );
