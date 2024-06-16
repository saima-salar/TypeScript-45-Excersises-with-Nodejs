// Q.16  More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.

let guestList: String[] = [`Umer`, `Abeera`, `Rayyan`];
for (let i = 0; i < guestList.length; i++) {
  console.log(
    `Respected Sir/Maam, ` +
      guestList[i] +
      `\n I would like to invite you for lavish dinner today.\nThank You.\n`
  );
}
console.log(
  `We just heard that ${guestList[2]} can’t make the dinner, so we need to send out a new invitation`
);

let not_invited: string = "Rayyan";
let new_guest: string = "Yahya";
guestList[2] = new_guest;
for (let i = 0; i < guestList.length; i++) {
  console.log(
    `Respected Sir/Maam, ` +
      guestList[i] +
      `\n I would like to invite you for lavish dinner today.\nThank You.\n`
  );
}
console.log(`Mr.${not_invited} will not come for dinner`);

console.log(
  `This is to inform you that now I have found a bigger dinner table. So, we are thinking of inviting three more guests for dinner`
);

guestList.unshift(`usman`);

guestList.push(`Hashir`);

let middleGuest: string = `Azmeer`;
let middleIndex = guestList.length / 2;
guestList.splice(middleIndex, 0, middleGuest);
for (let i = 0; i < guestList.length; i++) {
  console.log(
    `Respected Sir/Maam, ` +
      guestList[i] +
      `\n I would like to invite you for lavish dinner today.\nThank You.\n`
  );
}
