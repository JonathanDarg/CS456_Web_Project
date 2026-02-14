class MissionElement extends HTMLElement {
  connectedCallback() {
    fetch("../src/mainpage/Mission.html")
      .then(response => response.text())
      .then(data => {
        this.innerHTML = data;
      });
  }
}

customElements.define("mission-element", MissionElement);
