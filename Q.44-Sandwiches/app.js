// Q.44 Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function make_Sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with following itmes : \n");
    items.forEach(function (singleitem) { return console.log(singleitem); });
    console.log("\n Now enjoy sandwich");
}
make_Sandwich("Chicken", "Chees", "Egg", "Mayo");
make_Sandwich("Chicken", "Chees", "butter");
make_Sandwich("Chicken", "Egg", "Chees", "Tomato", "butter");
