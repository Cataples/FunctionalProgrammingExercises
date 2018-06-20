// const compose = ( fn, ...rest ) => {
//     rest.length === 0 ? fn : ( x ) => fn( compose( ...rest )( x ) );
// };

// const increment = a => a + 1;

// const double = a => a * 2;

// const square = a => a * a;

// const doubleIncrementAndSquare = compose( square, increment, double );

//  1. Write the PIPE function

const pipeArray = array => array.map( el => el * 2 )
    .map( el => el + 1 )
    .map( el => el * el );

export { pipeArray };

// 2. Compose/Pipe map and filter in order to create a function that extracts the odd ids from the array of objects
// HINT: Use the curried versions of map and filter

const returnId = array => array.map( element => element.id );
const returnOddId = elements => elements.filter( element => element % 2 === 0 );

const composedReturnOddIds = ( operation1, operation2 ) => array => operation2( operation1( array ) );
const returnOddIds = composedReturnOddIds( returnId, returnOddId );

export { returnOddIds };
