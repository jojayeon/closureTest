// function outerFunction(outterData) {
//   let innerData = 10;

//   function innerFunction() {
//     console.log(innerData + outterData);
//   }
//   return innerFunction
// }


// let someData = 5;

// const closure = outerFunction(someData);

// closure();

function outerFunction(outterData) {
  let innerData = 10;

  function innerFunction() {
    console.log(innerData + outterData);
  }
  return innerFunction
}

function another() {
  outerData = 20;
}


let someData = 5;

const closure = outerFunction(someData);
another()

closure();