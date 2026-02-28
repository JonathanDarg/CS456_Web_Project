function AvailableDogs(){
    window.alert("We have a variety of dogs available for adoption! Please visit our Dogs page to see all the wonderful dogs waiting for their forever homes.");
}

function SayContact(){
    window.alert("Contact us on our social media pages or email us at ForeverPaws@gmail.com");
}

function AdditionalInfo() {
    let info = document.getElementById("additional-info");

    if (info.style.display === "none" || info.style.display === "") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
}

function HideAdditionalInfo() {
    let info = document.getElementById("additional-info");
    info.style.display = "none";
}

function ShowDogsPage2() {
    let dogsPage1 = document.getElementById("dogs_page1");
    dogsPage1.style.display = "none";
    let dogsPage2 = document.getElementById("dogs_page2");
    dogsPage2.style.display = "block";
}

function HideDogsPage2() {
    let dogsPage2 = document.getElementById("dogs_page2");
    let dogsPage1 = document.getElementById("dogs_page1");
    dogsPage1.style.display = "block";
    dogsPage2.style.display = "none";
}   

var Submit_Dog = function(){
    return window.confirm("Confirm your submission.");
}

function Upload_Picture() {
    window.alert("uploaded picture.")
}