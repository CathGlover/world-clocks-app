function cityDates() {
  let locationOne = document.querySelector(".location-1");
  if (locationOne) {
    let locationOneDate = document.querySelector(".date-1");

    let locationOneTime = document.querySelector(".time-1");

    let locationOneAmPm = document.querySelector(".ampm-1");

    let locationOneLiveDate = moment()
      .tz("America/Los_Angeles")
      .format("dddd Do YYYY");

    locationOneDate.innerHTML = locationOneLiveDate;

    let locationOneLiveTime = moment()
      .tz("Europe/London")
      .format("HH:mm:ss [<small>]A[</small>]");

    locationOneTime.innerHTML = locationOneLiveTime;
  }

  let locationTwo = document.querySelector(".location-2");
  if (locationTwo) {
    let locationTwoDate = document.querySelector(".date-2");

    let locationTwoTime = document.querySelector(".time-2");

    let locationTwoLiveDate = moment()
      .tz("Asia/Kolkata")
      .format("dddd Do YYYY");

    locationTwoDate.innerHTML = locationTwoLiveDate;

    let locationTwoLiveTime = moment()
      .tz("Asia/Kolkata")
      .format("HH:mm:ss [<small>]A[</small>]");

    locationTwoTime.innerHTML = locationTwoLiveTime;

    let locationFour = document.querySelector(".location-4");
    if (locationFour) {
      let locationFourDate = document.querySelector(".date-4");

      let locationFourTime = document.querySelector(".time-4");

      let locationFourLiveDate = moment()
        .tz("Asia/Manila")
        .format("dddd Do YYYY");

      locationFourDate.innerHTML = locationTwoLiveDate;

      let locationFourLiveTime = moment()
        .tz("Asia/Manila")
        .format("HH:mm:ss [<small>]A[</small>]");

      locationFourTime.innerHTML = locationFourLiveTime;
    }
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities-times");
  citiesElement.innerHTML = `<div class = "row">
              <div class = "col">
              <h2>${cityName}</h2>
            <div class="date-3">${cityTime.format("dddd Do YYYY")}</div>
             </div>
              <div class = "col">
            <div class="time-3">${cityTime.format(
              "HH:mm:ss [<small>]A[</small>]"
            )}</div><small>
            </div>
            </div>
            <a href = "index.html">Home Page</a>`;
}
cityDates();

setInterval(cityDates, 1000);

let citiesSelectElement = document.querySelector("#country");

citiesSelectElement.addEventListener("change", updateCity);
