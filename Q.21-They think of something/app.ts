// Q 21 They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface item {
  name: string;
  price: number;
}

// creat two object
const book: item = {
  name: `Essential Typescript`,
  price: 500,
};

const fruit: item = {
  name: "mango",
  price: 200,
};

console.log(book);
console.log(fruit);

