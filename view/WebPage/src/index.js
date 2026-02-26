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