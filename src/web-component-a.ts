const template = document.createElement('template');
template.innerHTML = `<div class="card"><div class="card-body"></div></div>`;
class WebComponentA extends HTMLElement {
    private _shadowRoot: ShadowRoot;
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
      let $townName = document.createElement('p');
      $townName.innerHTML = `Town: My Town`;
      this._shadowRoot.appendChild($townName);
      let $temperature =  document.createElement('p');
      $temperature.innerHTML = `25 &deg;C`
      this._shadowRoot.appendChild($temperature);
    }
}
window.customElements.define('web-component-a', WebComponentA);
