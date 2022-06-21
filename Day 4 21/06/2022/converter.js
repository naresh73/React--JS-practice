function km_miles(km){
    // 1 km = 0.62 miles
    return km * 0.62;
}

function miles_km(miles){
    // 1 miles = 1.6 km
    return miles * 1.60;
}

let km = 17;
let miles = 43;

console.log(km,"KILOMETRE = ",km_miles(km),"MILES")
console.log(miles,"MILES = ",miles_km(miles),"KILOMETRE")