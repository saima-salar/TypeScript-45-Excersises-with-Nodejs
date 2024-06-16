// Q.43 Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


function show_magicians(magicians: string[]) {
    magicians.forEach((name) => console.log(name));
  }
  
  function make_great(magicians: string[]) {
    return magicians.map(name => `The great ${name}`);
  }
  let magician_names = ["Teller", "Dynamo", "Ricky jay"];

  let copy_magician_names=magician_names.slice(); 
  
  let copy_great_megicians=make_great(copy_magician_names);
  
  show_magicians(magician_names);
  show_magicians(copy_great_megicians);
  
  
  