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
