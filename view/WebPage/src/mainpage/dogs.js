class dogElement extends HTMLElement {
  connectedCallback() {
    fetch("../src/mainpage/dogs.html")
      .then(response => response.text())
      .then(data => {
        this.innerHTML = data;
      });
  }
}

customElements.define("dog-element", dogElement);
