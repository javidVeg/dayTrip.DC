// // "strict use"

// // /* make 4 functions that randomly select a
// // 1. destination
// // 2. restaurant
// // 3. mode of transportation
// // 4. entertainment */

// function dayTripGen (){

// // Below is Destination.

// alert("Welcome to the Washington D.C. Day Trip Generator! If you want to give the generator one more spin just select the cancel button so that you may re-generate a new plan.")


// function generateDestination (places){

//     return places [Math.floor(Math.random () * places.length)];

// }

// var places = ["Ballston.", "Rosslyn.", "Georgetown.", "North DC.", "South DC."];
// var placesSpew = ("On your Day Trip you will visit the beautiful district of ")

// var placesPrompt = (placesSpew + generateDestination (places));


// var proceed = confirm(placesPrompt)
// if (proceed) {
//     console.log(placesPrompt)
// } else {
//     var placesPromptTwo = (placesSpew + generateDestination (places));
//     confirm(placesPromptTwo)
//     console.log(placesPromptTwo)
// }

// // Below is method of transportion. 

// function generateTrans (trans){

//     return trans [Math.floor(Math.random () * trans.length)];

// }

// var trans = ["Uber.", "Moped.", "Bird Scooter.", "nice walk.", "Metro Train."]

// var transSpew = ("Your method of transportation will be taking a ")

// var transPrompt = (transSpew + generateTrans(trans))


// var proceed = confirm(transPrompt)
// if (proceed) {
//     console.log(transPrompt)
// } else {
//     var transPromptTwo = (transSpew + generateTrans (trans));
//     confirm(transPromptTwo)
//     console.log(transPromptTwo)
// }

// // Below is restuarant

// function generateFood (food){

//     return food [Math.floor(Math.random () * food.length)];

// }
//  var food = ["NuVegan.", "Hipcity Veg.", "Bustboy and Poets.", "South Block.", "Silver Dinner.", "Cava."];

//  var foodSpew = ("While in the city you will be dining at one of thee best places in the city with Vegan options, ")

// var foodPrompt = (foodSpew + generateFood (food))


// var proceed = confirm(foodPrompt)
// if (proceed) {
//     console.log(foodPrompt)
// } else {
//     var foodPromptTwo = (foodSpew + generateFood (food));
//     confirm(foodPromptTwo)
//     console.log(foodPromptTwo)
// }

// // Below is the Entertainment

// function generateEnt (entertainUs){

//     return entertainUs [Math.floor(Math.random () * entertainUs.length)];
// }
// var entertainUs = ["Smithsonian Museum.", "Zoo.", "DC Art Gallery.", "Movie Theaters.", "Key Bridge Kayake Adventure."];

// var entertainSpew = ("During your visit to the city, have some fun at the ")


// var entertainPrompt = (entertainSpew + generateEnt(entertainUs))


// var proceed = confirm(entertainPrompt)
// if (proceed) {
//     console.log(entertainPrompt)
// } else {
//     var entertainPromptTwo = (entertainSpew + generateEnt (entertainUs));
//     confirm(entertainPromptTwo)
//     console.log(entertainPromptTwo)
// }
// }

// console.log(" **NEW TRIP BELOW IF APPLICABLE** " + "   " + dayTripGen())

// var proceed = confirm("Satisfied? Select cancel to give the generator one more spin.")
// if (proceed){
// } else {
//     dayTripGen()
// }

// var endNote = ("Enjoy your Day Trip in DC!!")
// alert(endNote)

var arr = [10, 20, 30, 40, 50]

for (let val of arr) {
    console.log(`array value: ${ val }`);
}