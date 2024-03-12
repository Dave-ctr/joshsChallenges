let result

const calculation = ( clickedButton ) =>
{
  let input1 = parseFloat( document.getElementById( "input1" ).value )
  let input2 = parseFloat( document.getElementById( "input2" ).value )
  console.log( "clickedButton = " + clickedButton )
  console.log( "clickedButton.target = " + clickedButton.target )

  if ( clickedButton.target === addButton )
  {
    result = addNumbers( input1, input2 )
    console.log( "addButton = " + addButton )
  } else if ( clickedButton.target === subtractButton )
  {
    result = subtractNumbers( input1, input2 )
  } else if ( clickedButton.target === multiplyButton )
  {
    result = multiplyNumbers( input1, input2 )
  } else if ( clickedButton.target === divideButton )
  {
    result = divideNumbers( input1, input2 )
  }

  document.getElementById( "result" ).innerHTML = result

  console.log( input1 )
  console.log( typeof input1 )
  console.log( input2 )
  console.log( typeof input2 )
  console.log( "Result = " + result )
}

const addNumbers = ( num1, num2 ) => { return num1 + num2; }

const subtractNumbers = ( num1, num2 ) => { return num1 - num2 }

const multiplyNumbers = ( num1, num2 ) => { return num1 * num2 }

const divideNumbers = ( num1, num2 ) => { return num1 / num2 }

const addButton = document.getElementById( "addNumberButton" );
addButton.addEventListener( "click", calculation );

const subtractButton = document.getElementById( "subtractNumberButton" );
subtractButton.addEventListener( "click", calculation );

const multiplyButton = document.getElementById( "multiplyNumberButton" );
multiplyButton.addEventListener( "click", calculation );

const divideButton = document.getElementById( "divideNumberButton" );
divideButton.addEventListener( "click", calculation );

// console.log( addNumbers( 5, 2 ) )
// console.log( subtractNumbers( 5, 2 ) )
// console.log( multiplyNumbers( 5, 2 ) )
// console.log( divideNumbers( 5, 2 ) )




