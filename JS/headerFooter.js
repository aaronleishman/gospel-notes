

class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div style="margin: 1rem;">
            <a href="http://aaronleishman.com/gospel-notes/ComeFollowMe.html">Come Follow Me</a> |
            <a href="http://aaronleishman.com/gospel-notes/Covenants.html">Covenants</a> |
            <a href="http://aaronleishman.com/gospel-notes/GeneralConference.html">General Conference</a> |
            <a href="http://aaronleishman.com/gospel-notes/PlanOfSalvation.html">Plan of Salvation</a> |
            <a href="http://aaronleishman.com/gospel-notes/Talks.html">Sacrament Mtg Talks</a> |
            <a href="http://aaronleishman.com/gospel-notes/Temples.html">Temples</a>
            </div>
            <hr>
        </p>
    `
    }
}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <hr>
        <span>@ 2024 | Contact Me</span>
    `
    }
}

customElements.define('my-footer', MyFooter)