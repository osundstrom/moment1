
//eventlistener vid laddad sida (DOM)
document.addEventListener("DOMContentLoaded", function () {
    //väljer element
    const selectedElem = document.getElementById("dateToday");

    //nytt datum
    const newDate = new Date();

   //sätter till localt datum
    const fullDate = newDate.toLocaleDateString("sv-SE");
    console.log(fullDate)
   
    //sätter elemnt till fullDate
    selectedElem.textContent = fullDate;
});
