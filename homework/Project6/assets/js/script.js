"use strict";
const validationList = document.getElementById("validation");

new URLSearchParams(window.location.search).forEach((data, value) => {
  if (value == "name" || value == "email") {
    validationList.append(`${value}: ${data}`);
    validationList.append(document.createElement("br"));
  } else if (value == "questions") {
    validationList.append(`The questions you had are:`);
    validationList.append(document.createElement("br"));
    validationList.append(`${data}`);
  } else {
    validationList.append("sorry something went wrong :(");
  }
});
