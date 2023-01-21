let locationOne = document.querySelector(".location-1");

let locationOneDate = document.querySelector(".date-1");

let locationOneTime = document.querySelector(".time-1");

let locationOneAmPm = document.querySelector(".ampm-1");

let locationOneLiveDate = moment()
  .tz("America/Los_Angeles")
  .format("dddd Do YYYY");

locationOneDate.innerHTML = locationOneLiveDate;

let locationOneLiveTime = moment()
  .tz("America/Los_Angeles")
  .format("HH:mm:ss [<small>]A[</small>]");

locationOneTime.innerHTML = locationOneLiveTime;

let locationTwo = document.querySelector(".location-2");

let locationTwoDate = document.querySelector(".date-2");

let locationTwoTime = document.querySelector(".time-2");

let locationTwoLiveDate = moment().tz("Europe/Paris").format("dddd Do YYYY");

locationTwoDate.innerHTML = locationTwoLiveDate;

let locationTwoLiveTime = moment()
  .tz("America/Los_Angeles")
  .format("HH:mm:ss [<small>]A[</small>]");

locationTwoTime.innerHTML = locationTwoLiveTime;
