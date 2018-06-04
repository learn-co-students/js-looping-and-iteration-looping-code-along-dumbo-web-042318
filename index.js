

function printBadges(array){
  //'Welcome Joe! You are employee #1.'
  for(let i = 0; i < array.length; i++)
  console.log(`Welcome ${array[i]}! You are employee #${i + 1}.`);
  return array;
}

function tailsNeverFails(){
  let tails = 0;
  //let heads = 0;

  while(Math.random() >= 0.5){
    tails += 1;
  }

  return `You got ${tails} tails in a row!`;

}
