class HeroElement extends HTMLElement {
  connectedCallback() {
    fetch("./mainpage/Hero.html")
      .then(response => response.text())
      .then(data => {
        this.innerHTML = data;
      });
  }
}

customElements.define("hero-element", HeroElement);


function AvailableDogs(){
    window.alert("We have a variety of dogs available for adoption! Please visit our Dogs page to see all the wonderful dogs waiting for their forever homes.");
    //return "Hello World!";
}