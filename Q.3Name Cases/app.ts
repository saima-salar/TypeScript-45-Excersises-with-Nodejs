// Q.3 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName: string = "Saima Salar";

// person’s name in lowercase,
console.log("lowercase:", personName.toLowerCase());

// person’s name in uppercase,
console.log("uppercase:", personName.toUpperCase());

// person’s name in titlecase.
console.log(
  "titlecase:",
  personName.replace(/\bw/g, (c) => c.toUpperCase())
);
