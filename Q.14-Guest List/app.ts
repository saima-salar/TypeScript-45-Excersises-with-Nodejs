// Q.14 Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guestList: String[] = [`Umer`, `Abeera`, `Rayyan`];
for (let i = 0; i < guestList.length; i++) {
  console.log(
    `Respected Sir/Maam, ` +
      guestList[i] +
      `\nI would like to invite you for lavish dinner today.\nThank You,`
  );
}
