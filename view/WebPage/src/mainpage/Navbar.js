class NavbarElement extends HTMLElement {
  connectedCallback() {
    fetch("../src/mainpage/Navbar.html")
      .then(response => response.text())
      .then(data => {
        this.innerHTML = data;
      });
  }
}

customElements.define("navbar-element", NavbarElement);
