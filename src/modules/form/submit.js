import dayjs from "dayjs";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");

const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

selectedDate.value = inputToday;

selectedDate.min = inputToday;

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    const name = clientName.value.trim();

    if(!name) {
      return alert("Please enter your name.");
    }

    const hourSelected = document.querySelector(".hour-selected");

    if(!hourSelected) {
      return alert("Please select an hour.");
    }


    const [hour] = hourSelected.textContent.split(":");

    const when = dayjs(selectedDate.value).add(hour, "hour");

    const id = new Date().getTime();
  } catch (error) {
    alert("An error occurred. Please try again later.");
    console.error(error);
    
  }
};