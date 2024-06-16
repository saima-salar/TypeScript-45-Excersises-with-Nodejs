// Q.16  More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
var guestList = ["Umer", "Abeera", "Rayyan"];
for (var i = 0; i < guestList.length; i++) {
    console.log("Respected Sir/Maam, " +
        guestList[i] +
        "\n I would like to invite you for lavish dinner today.\nThank You.\n");
}
console.log("We just heard that ".concat(guestList[2], " can\u2019t make the dinner, so we need to send out a new invitation"));
var not_invited = "Rayyan";
var new_guest = "Yahya";
guestList[2] = new_guest;
for (var i = 0; i < guestList.length; i++) {
    console.log("Respected Sir/Maam, " +
        guestList[i] +
        "\n I would like to invite you for lavish dinner today.\nThank You.\n");
}
console.log("Mr.".concat(not_invited, " will not come for dinner"));
console.log("This is to inform you that now I have found a bigger dinner table. So, we are thinking of inviting three more guests for dinner");
guestList.unshift("usman");
guestList.push("Hashir");
var middleGuest = "Azmeer";
var middleIndex = guestList.length / 2;
guestList.splice(middleIndex, 0, middleGuest);
for (var i = 0; i < guestList.length; i++) {
    console.log("Respected Sir/Maam, " +
        guestList[i] +
        "\n I would like to invite you for lavish dinner today.\nThank You.\n");
}
