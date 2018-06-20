// 1. Starting from the left application example, write the right application function
//  left Applicetaion

function leftApplication( f, ...fixedArgs ) {
    return function( ...restArgs ) {
        return f( ...fixedArgs, ...restArgs );
    };
}

//  right Application

function rightApplication( f, ...fixedArgs ) {
    return function( ...restArgs ) {
        return f( ...restArgs, ...fixedArgs );
    };
}

// 2. Using the right application function, write the code that applies the array and accepts any transformation on the array
// HINT: You'll reverse engineer the array map function

const objects = [
    { id: 1, name: "Mai am" },
    { id: 2, name: "un singur" },
    { id: 3, name: "dor" },
    { id: 4, name: "Dragnea" },
    { id: 5, name: "scriitor" }
];

const map = ( fn, array ) => array.map( fn );
//  const pluck = ( key ) => ( obj ) => obj[ key ];

const rightApplicationMap = rightApplication( map, objects );
console.log( rightApplicationMap( el => el.name ) );
const leftApplicationMap = leftApplication( map, ( el => el.name ) );
console.log( leftApplicationMap( objects ) );

//  ----------------------------------------------------------

// function leftApplication( f, ...fixed ) {
//     return function( ...rest ) {
//         return f( ...fixed, ...rest )
//     }
// }

// function rightApplication( f, ...fixed ) {
//     return function( ...rest ) {
//         return f( ...rest, ...fixed )
//     }
// }

// const contains = (arr, str) => arr.includes(str);

// let str = "dick";

// const FindByStr = rightApplication(contains, str);
// console.log(FindByStr(["dick", "Asdasd"]));

// const findInArr = leftApplication(contains, ["dick", "Asdasd"])
// console.log(findInArr(str))

// const notCurry(str, srr)

// const curying = (str) => (arr) => arr.includes(str);
// const gotStr = curying(str);
// console.log(gotStr(["dick", "bla"]));

// const curryRight = (f) => (fixed) => (rest) => f(fixed, rest);
