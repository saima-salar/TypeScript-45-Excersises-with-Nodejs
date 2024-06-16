// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
var guestList = ["Umer", "Abeera", "Rayyan"];
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
console.log("\nunfortunatily we can not arranged a big dinner table,Now,only two people allow");
while (guestList.length > 2) {
    var remove_guest = guestList.pop();
    console.log("Sorry Sir/Madam, ".concat(remove_guest, " You are not invited for dinner. "));
}
for (var i = 0; i < guestList.length; i++) {
    console.log("Respected Sir/Madam, " + guestList[i] + " ,\nYes you are still invited for tomorrow dinner\nThank you.\n");
}
guestList.splice(0, 2);
console.log(guestList);
