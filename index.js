// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

function writeCards(guest, message){
    const messageArray = [];
    for (let i = 0; i < guest.length; i++){
        messageArray.push(`Thank you, ${guest[i]}, for the wonderful ${message} gift!`);
    }
    return messageArray;
}

function countDown(number){
    let i = 0;
    while (number >= 0){
        i++;
        console.log(`This is the number ${number}`);
        number--;
    }
    return i;
}

wrapGifts(gifts);
console.log(writeCards(["Ada", "Brendan", "Ali"], "birthday"));
console.log(countDown(10));
console.log(countDown (4));