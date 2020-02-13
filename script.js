$(document).ready(function() {
  //on click function for the save button.
  $(".saveBtn").on("click", function() {
    // stored values in variables
    var hour = $(this)
      .parent()
      .attr("id");
    var text = $(this)
      .siblings(".description")
      .val()
      .trim();

    console.log("text: ", text);
    console.log("hour: ", hour);

    // set local storage with hour and text
    localStorage.setItem(hour, text);
  });

  //a function that updates the background colors
  function updateBackground() {
    //get the time using moment.js
    var currenttime = moment().hours();

    console.log(moment())
    console.log(moment().hours())
    // looping through amBlock
    $(".time-block").each(function() {

    
      var amBlock = parseInt(
        $(this)  // pulling whole div with the class of time-block
          .attr("id") //pulling off the id of that div   "hour-9"
          .split("-")[1] //split makes an array and splits after what you pass in  var arr = ["hour-", "9"]  the [1] is accessing index 1 of the array so it returns "9"
      );
      if (amBlock < currenttime) {
        $(this).addClass("past");
      } else if (amBlock === currenttime) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
    //add and remove classes based off of if the current time is before or after the block time
  }

  updateBackground();

  //get values from local storage and set the text areas

  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
});
