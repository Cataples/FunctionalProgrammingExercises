// 2. SUM all the values in the following structure

const sumNestedArray = ( array ) => array.toString().split( "," )
    .map( el => parseInt( el, 10 ) )
    .reduce( ( accumulator, current ) => accumulator + current );

// 1. SUM the numeric values from the following array using only map, reduce, filter

const sumNumericValues = ( array ) => array.filter( el => typeof el === "number" )
    .reduce( ( accumulator, currentValue ) => ( accumulator + currentValue ), 0 );

// 3. TEST if the value 42 exists inside an array (HINT: with map and reduce)

const ArrayIncludes = ( array, element ) => array.toString().split( "," )
    .map( el => parseInt( el, 10 ) )
    .includes( element );

export { sumNestedArray, sumNumericValues, ArrayIncludes };
