class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="hero">
                <div class="hero__text">
                    <h1 class="hero__title">Bingung mau makan apa?</h1>
                    <p class="hero__body">Nom Nom telah menyediakan berbagai pilihan restaurant yang menyajikan berbagai jenis makanan</p>
                </div>
            </div>
          `;
  }
}

customElements.define('custom-hero', Hero);
