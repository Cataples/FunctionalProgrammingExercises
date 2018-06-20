import { sumNestedArray, sumNumericValues, ArrayIncludes, NestedCalls } from "./highFunctions";
import { pipeArray, returnOddIds } from "./functionComposition";

const nested = [ 1, 2, [ 3, 4 ], [ [ 5 ], [ 6, 7 ] ], 9 ];

console.log( sumNestedArray( nested ) );

const values = [ 0, 1, undefined, -10, "0", 42 ];

console.log( sumNumericValues( values ) );

const array = [ 101, 67, 213, 94, 59, [ 42, 50 ], 62, 40 ];

console.log( ArrayIncludes( array, 42 ) );

console.log( NestedCalls( nested ) );

const numericArray = [ 3, 4, 5 ];

console.log( pipeArray( numericArray ) );

//  return Ids
const objects = [
    { id: 1, name: "Mai am" },
    { id: 2, name: "un singur" },
    { id: 3, name: "dor" },
    { id: 4, name: "Dragnea" },
    { id: 5, name: "scriitor" }
];

console.log( returnOddIds( objects ) );
