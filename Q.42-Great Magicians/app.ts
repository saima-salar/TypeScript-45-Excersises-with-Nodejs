// Q.42 Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


function show_magicians(magicians: string[]) {
  magicians.forEach((name) => console.log(name));
}

function make_great(magicians: string[]) {
  return magicians.map(name => `The great ${name}`);
}
let magician_names = ["Teller", "Dynamo", "Ricky jay"];

let great_megicians=make_great(magician_names);

show_magicians(great_megicians);


