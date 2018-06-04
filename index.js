// Code your solutions in this file
function printBadges(newArray){
  for(let i = 0; i< newArray.length; i++){
    // console.log(i);
    num = i+1
    console.log('Welcome '+newArray[i]+'! You are employee #'+ num +'.');
  }
return newArray;
}

function tailsNeverFails(){
  let tails = 0;
  while (Math.random() >= 0.5){
    tails++;
  }
  return 'You got '+tails+' tails in a row!';
}
