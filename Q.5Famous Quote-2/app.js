// Q.5 Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famous_person = "Nelson Mandela";
var qoute = "\u201CDo not judge me by my successes,judge me by how many times I fell down and got back up again.\u201D";
var message = "".concat(famous_person, " once said,").concat(qoute);
console.log(message);
