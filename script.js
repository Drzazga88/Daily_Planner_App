function headerDay() {
  let currentDay = moment().format("dddd, MMMM Do YYYY, HH:mm:ss");
  currentDay = $("#currentDay").text(currentDay);
}

headerDay();
