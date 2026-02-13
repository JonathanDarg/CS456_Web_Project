class FooterElement extends HTMLElement {
  connectedCallback() {
    fetch("../src/mainpage/Footer.html")
      .then(response => response.text())
      .then(data => {
        this.innerHTML = data;
      });
  }
}

customElements.define("footer-element", FooterElement);
