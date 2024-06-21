class footerBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div>
            <p>Dicoding Restaurant App Project &#169; 2024, Sarah Nurhasna Khairunnisa</p>
        </div>
        `;
  }
}

customElements.define('custom-footer', footerBar);
