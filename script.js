$(document).ready(function () {
  // This function shows the current time on the top of the page
  function headerDay() {
    let currentDay = moment().format("dddd, MMMM Do YYYY, HH:mm:ss");
    currentDay = $("#currentDay").text(currentDay);
  }
  headerDay();
  setInterval(headerDay, 1000); // This interval updates time every 1s

  // This function change the color of the time background based on the current time and classes in HTML
  function timeNow() {
    //current number of hours
    let thisTimeNow = moment().hours();

    // jQuery to get element by class time block in HTML
    var timeBlockElements = $(".time-block");

    // This loop serves to go through every hour from 9 until 17
    for (var i = 0; i < timeBlockElements.length; ++i) {
      // This helps to get all time IDs as a string (as a text)
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
  }

  // Saving user input to local storage (we need to save hour and plan for this hour)
  // Help - week 6 day 3 exercise 2

  // Object listener for save button
  $(".saveBtn").on("click", function (event) {
    event.preventDefault(); // this prevents from automatic page 'cleaning'

    var savePlan = $(this).siblings(".text-area").val(); // we go through all text-areas related to save button
    var saveTime = $(this).parent().attr("id"); // we look for parent of save button with id class
    // Save text in local storage
    localStorage.setItem(saveTime, JSON.stringify(savePlan));
    alert("saved");
  });

  // we retrieve data from local storage for each saved hour (if any)
  $("#9 .text-area").val(localStorage.getItem("9"));
  $("#10 .text-area").val(localStorage.getItem("10"));
  $("#11 .text-area").val(localStorage.getItem("11"));
  $("#12 .text-area").val(localStorage.getItem("12"));
  $("#13 .text-area").val(localStorage.getItem("13"));
  $("#14 .text-area").val(localStorage.getItem("14"));
  $("#15 .text-area").val(localStorage.getItem("15"));
  $("#16 .text-area").val(localStorage.getItem("16"));
  $("#17 .text-area").val(localStorage.getItem("17"));

  timeNow(); // calling out the function
  setInterval(timeNow(), 1000 * 60 * 10); // this interval checks timeNow function every 10 mins
});
