// Q.15 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
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
