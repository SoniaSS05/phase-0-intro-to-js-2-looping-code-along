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
    while (number >= 0){
        console.log(number);
        number--;
    }
}

wrapGifts(gifts);
console.log(writeCards(["Ada", "Brendan", "Ali"], "birthday"));
countDown(10);
countDown (4);