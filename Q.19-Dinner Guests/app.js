// Q.19 Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var guestList = ["Umer", "Abeera", "Rayyan"];
guestList.unshift("usman");
guestList.push("Hashir");
var middleGuest = "Azmeer";
var middleIndex = guestList.length / 2;
guestList.splice(middleIndex, 0, middleGuest);
for (var i = 0; i < guestList.length; i++) {
    //   console.log(
    //     `Respected Sir/Maam, ` +
    //       guestList[i] +
    //       `\n I would like to invite you for lavish dinner today.\nThank You.\n`
    //   );
}
// console.log(
//   `\nunfortunatily we can not arranged a big dinner table,Now,only two people allow`
// );
while (guestList.length > 2) {
    var remove_guest = guestList.pop();
    //   console.log(
    //     `Sorry Sir/Madam, ${remove_guest} You are not invited for dinner. `
    //   );
}
for (var i = 0; i < guestList.length; i++) {
    //   console.log(
    //     `Respected Sir/Madam, ` +
    //       guestList[i] +
    //       ` ,\nYes you are still invited for tomorrow dinner\nThank you.\n`
    //   );
}
guestList.splice(0, 2);
// console.log(guestList);
console.log("the number of people we are inviting to dinner.", guestList.length);
