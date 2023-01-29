// This function shows the current time on the top of the page
function headerDay() {
  let currentDay = moment().format("dddd, MMMM Do YYYY, HH:mm:ss");
  currentDay = $("#currentDay").text(currentDay);
}
headerDay();
setInterval(headerDay, 1000); // This interval updates time every 1s

// Variable for local storage
//let button = $('saveBtn');
//button.on("click", function(event){
// event.preventDefault();
//}); //not finished yet

// This function change the color of the time background based on the current time and classes in HTML
let timeNow = function () {
  //current number of hours
  let thisTimeNow = moment().hours();

  // jQuery to get element by class time block in HTML
  var timeBlockElements = $(".time-block");

  // This loop serves to go through every hour from 9 until 17
  for (var i = 0; i < timeBlockElements.length; ++i) {
    // This helps to get all time IDs as a string
    var timeBlockElementsID = timeBlockElements[i].id;

    // This gets element by ID
    var newID = document.getElementById(timeBlockElements[i].id);

    // This applies new class based on current time and removes any old class
    if (timeBlockElementsID === thisTimeNow) {
      $(newID).removeClass("past");
      $(newID).removeClass("future");
      $(newID).addClass("present");
      console.log("present" + timeBlockElementsID + thisTimeNow);
    } else if (timeBlockElementsID < thisTimeNow) {
      $(newID).removeClass("present");
      $(newID).removeClass("future");
      $(newID).addClass("past");
      console.log("past" + timeBlockElementsID + thisTimeNow);
    } else {
      $(newID).removeClass("past");
      $(newID).removeClass("present");
      $(newID).addClass("future");
      console.log("future" + timeBlockElementsID + thisTimeNow);
    }
  }
};
timeNow();
setInterval(timeNow(), 1000 * 60 * 10);
