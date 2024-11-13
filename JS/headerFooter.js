

class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <p style="text-align: left;">
        <ul>
            <li><a href="./index.html">Home</a></li>
            <li><a href="./ComeFollowMe.html">Come Follow Me</a></li>
            <li><a href="./Covenants.html">Covenants</a></li>
            <li><a href="./GeneralConference.html">General Conference</a></li>
            <li><a href="./PlanOfSalvation.html">Plan of Salvation</a></li>
            <li><a href="./Talks.html">Sacramenting Talks</a></li>
            <li><a href="./Temples.html">Temples</a></li>
        </ul>
        </p>
    `
    }
}

customElements.define('my-header', MyHeader)