class CliElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div>
                <input type="text" placeholder="digite seu comando aqui">
            </div>
        `;
    }
}

customElements.define("ds-cli", CliElement);
