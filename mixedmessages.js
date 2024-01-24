
const messageMiddle = ["should", "must", "will"]

const messageEnd = ["be brave.", "smile.", "take a chance.", "take a second to reflect."]

//console.log(messageStart, messageMiddle[2], messageEnd[0])

var rMiddle = messageMiddle[Math.floor(Math.random()*messageMiddle.length)];

var rEnd = messageEnd[Math.floor(Math.random()*messageEnd.length)];

let text = ("You" + " " + rMiddle + " " + rEnd);

console.log(text)
