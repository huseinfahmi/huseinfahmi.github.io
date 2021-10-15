export class Lookup extends HTMLElement {
    constructor() {
        super()
    }
}

window.customElements.define('my-rating', Lookup, {extends: 'div'})