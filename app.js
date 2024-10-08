// Q-1

// var date = new Date ();
// console.log (date);


// Q-2

// var daysArr = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
// alert (daysArr[date.getDay()]);



// Q-3

// var daysArr = [ "Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat" ];
// alert (daysArr[date.getDay()]);



// Q-4

// var today = new Date();
// var dayOfWeek = today.getDay ();

// if (dayOfWeek === 0 || dayOfWeek === 6 ){
//     console.log ( "It's Fun day !... ")
// }

// else {
//     console.log ( "Today is weekend" )
// }


// Q-5

// var today = new Date();
// var date = today.getDate ();

// if ( date < 16 ){
//     console.log ("First fifteen day of the month")
// }

// else {
//     console.log ("LAst fifteen day of thr month")
// }


// Q-6

// var date = new Date ();
// var minutes = Math.floor (date.getTime ()/60000 );

// console.log ( minutes ); 


// Q-7

// var date = new Date ();
// var hours = date.getHours();

// if (hours < 12){
//     alert ("It's AM")
// }

// else {
//     alert ("It's PM")
// }


// Q-8

// var laterdate = new Date(" Thurs 31 Dec, 2020 13:25:00");

// console.log (laterdate);


// Q-9

// var date = new Date ();
// var difference = date.getTime();
// var dayPassed =  1000 * 60 * 60 * 24 ;

// console.log ( dayPassed );


// Q-10

// var date = new Date () ;
// var hours = date.getHours();

// console.log ("Current Hours :", hours);

// date.setHours (hours + 1 );
// console.log ("Updated Date :" + date)


// Q-11

var age = +prompt ("Enter your age");
var currentyear = new Date().getFullYear();
var birthyear = currentyear - age

document.write ( birthyear )