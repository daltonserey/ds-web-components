
class CliElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.root = this.attachShadow({mode: "open"});
        this.root.innerHTML = `
            <style>
                ds-cli div {
                    box-shadow: 33px 25px 41px 0px rgba(0,0,0,0.75);
                    width: 96%;
                    left: 2%;
                    right: 2%;
                    bottom: 1em;
                    border: 1px solid black;
                    border-radius: 10px;
                    padding: 1em 3em;
                    background: white;
                    position: fixed;
                }
            </style>
            <div>
                <input type="text" placeholder="digite seu comando aqui">
            </div>
        `;
    }
}

customElements.define("ds-cli", CliElement);
