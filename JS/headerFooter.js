

class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div style="margin: 1rem;">
            <a href="./ComeFollowMe.html">Gospel Topics</a> |
            <a href="./Covenants.html">Covenants</a> |
            <a href="./GeneralConference.html">General Conference</a> |
            <a href="./PlanOfSalvation.html">Plan of Salvation</a> |
            <a href="./Talks.html">Sacrament Mtg Talks</a> |
            <a href="./Temples.html">Temples</a>
            </div>
            <hr>
        </p>
    `
    }
}

customElements.define('my-header', MyHeader)

class ArticleHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div style="margin: 1rem;">
            <a href="../ComeFollowMe.html">Gospel Topics</a> |
            <a href="../Covenants.html">Covenants</a> |
            <a href="../GeneralConference.html">General Conference</a> |
            <a href="../PlanOfSalvation.html">Plan of Salvation</a> |
            <a href="../Talks.html">Sacrament Mtg Talks</a> |
            <a href="../Temples.html">Temples</a> |
            <br>
            <a href="../index.html">Home</a> |
            <a href="#" onclick="history.back()">Back</a>
            <hr>
            </div>
    `
    }
}

customElements.define('art-header', ArticleHeader)

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <hr>
        <span>@ 2024 | Contact Me</span>
    `
    }
}

customElements.define('my-footer', MyFooter)