// Q.39 City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"


function city_country(nameOfcity:string,country:string):string{
    return`${nameOfcity}, ${country}`;
 }
 console.log(city_country("Karachi","Pakistan"))
 console.log(city_country("Hyderabad Deccan","India"))
 console.log(city_country("Dubai","UAE"))
 