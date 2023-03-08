class WebComponentA extends HTMLElement {
    private _shadowRoot: ShadowRoot;
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    }
    connectedCallback() {
      const a = document.createElement('article');
      a.innerHTML = `<header><h2>Header</h2></header><p>Body</p><footer><small>Footer</small></footer>`;
      this._shadowRoot.appendChild(a);
    }
}
window.customElements.define('web-component-a', WebComponentA);
