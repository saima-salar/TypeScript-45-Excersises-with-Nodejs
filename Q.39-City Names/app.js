// Q.39 City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
function city_country(nameOfcity, country) {
    return "".concat(nameOfcity, ", ").concat(country);
}
//  city_country("Karachi","Pakistan");
//  city_country("Hyderabad Deccan","India");
//  city_country("Dubai","UAE");
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Hyderabad Deccan", "India"));
console.log(city_country("Dubai", "UAE"));
