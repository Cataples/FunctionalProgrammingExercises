// 2. SUM all the values in the following structure

// const sumNestedArray = ( array ) => array.toString().split( "," )
//     .map( el => parseInt( el, 10 ) )
//     .reduce( ( accumulator, current ) => accumulator + current );

const FlattenArray = array => array.toString().split( "," );
const MakeArrayNumeric = array => array.map( el => parseInt( el, 10 ) );
const SumArray = array => array.reduce( ( accumulator, current ) => accumulator + current );

const sumGivenNestedArray = ( operation1, operation2, operation3 ) => array => ( operation3( operation2( operation1( array ) ) ) );
const sumNestedArray = ( sumGivenNestedArray( FlattenArray, MakeArrayNumeric, SumArray ) );

//  second composed function way
const NestedCalls = array => SumArray( MakeArrayNumeric( FlattenArray( array ) ) );

// 1. SUM the numeric values from the following array using only map, reduce, filter

// const sumNumericValues = ( array ) => array.filter( el => typeof el === "number" )
//     .reduce( ( accumulator, currentValue ) => ( accumulator + currentValue ), 0 );

const filterNumeric = array => array.filter( el => typeof el === "number" );
const sumNumbers = array => array.reduce( ( accumulator, currentValue ) => ( accumulator + currentValue ), 0 );
const SumNumbersFromArray = ( operation1, operation2 ) => array => ( operation2( operation1( array ) ) );

const sumNumericValues = SumNumbersFromArray( filterNumeric, sumNumbers );

// 3. TEST if the value 42 exists inside an array (HINT: with map and reduce)

// const ArrayIncludes = ( array, element ) => array.toString().split( "," )
//     .map( el => parseInt( el, 10 ) )
//     .includes( element );

const isElementIncluded = ( array, element ) => array.includes( element );
const ArrayIncludesPipe = ( operation1, operation2, operation3 ) => ( array, element ) => ( operation3( operation2( operation1( array ) ), element ) );

const ArrayIncludes = ArrayIncludesPipe( FlattenArray, MakeArrayNumeric, isElementIncluded );

export { sumNestedArray, sumNumericValues, ArrayIncludes, NestedCalls };
