class CliElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <input type="text" placeholder="digite seu comando aqui">
        `;
    }
}

customElements.define("ds-cli", CliElement);
