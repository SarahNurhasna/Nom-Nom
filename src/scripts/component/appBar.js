class appBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="app-bar">
        <div class="app-bar__menu">
            <button id="hamburgerButton">☰</button>
        </div>
        <div class="app-bar__logo">
            <img src="./images/logo-nav.svg" alt="logo-nav" class="btn">
        </div>
        <nav id="navigationDrawer" class="app-bar__navigation">
            <ul>
                <li><a href="#/home" class="btn">Home</a></li>
                <li><a href="#/favorite" class="btn">Favorite</a></li>
                <li><a href="https://github.com/SarahNurhasna/" class="btn">About Us</a></li>
            </ul>
        </nav>
      </div>
    `;
  }
}

customElements.define('custom-header', appBar);
