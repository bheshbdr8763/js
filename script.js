// const pi = 3.1415
// //pi =2
// document.write(pi, "<br>")


// let a=7
// a= 5
// //document.write (a)

// let fname= "Mt.Annapurna"
// let lname= "Campus"
// document.write(fname)
// document.write(lname, "<br>")
// document.write (fname + " "+ lname)

//conditional stateament

// let myage =18;

// if (myage > 18) {
//     document.write("you can vote.")

// }
// else if (myage == 18){
//     document.write ("make your voter ID.")
// }
// else {
//     document.write ("you cannot vote.")
// }
// function showDate(){
//     document.getElementById("btn").innerHTML = Date();
// }
function showDate() {
    var currentTime = new Date ();
    var currentHour = currentTime.getHours();
    var cutrrentMinutes = currentTime.getMinutes();
    var greeting;
    
    if (currentHour >= 0 && currentHour <= 12) {
        greeting ="Good Morning"
    }
    else if ( currentHour > 12 && currentHour <= 18){
        greeting= "Good Afternoon"
    }
    else if ( currentHour >10 && currentHour <=20){
        greeting ="Good Evening"
    }
    else {
        greeting ="Good Night"
    }
    var timeString = currentHour + " " + cutrrentMinutes;
    var finalMessage = greeting + "!" +" " + "The current time is : " + timeString;
    document.getElementById('btn').innerHTML = finalMessage;

}