

document.addEventListener("DOMContentLoaded", function () {
    const selectedElem = document.getElementById("dateToday");
    const newDate = new Date();

   
    const fullDate = newDate.toLocaleDateString("sv-SE");
    console.log(fullDate)
   
    selectedElem.textContent = fullDate;
});
