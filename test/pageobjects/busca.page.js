

const Page = require('./page');

class Busca extends Page {
    get btnLupa () {return $('button[id="search-open"]')}
    get iptBusca() {return $('div[class="desktop-search"] > form[role="search"] > label > input[type="search"]')}
    get btnPesquisar() {return $('div[class="desktop-search"] > form[role="search"] > input[type="submit"]')}
    get h1Erro() {return $('h1[class="entry-title"]')}
    get pErro() {return $('div[class="entry-content"] > p')}
    get resultadoOk() {return $('article[id="post-3154"]')}
    get h1Busca() {return $('h1[class="archive-title"]')}


    async realizarBusca(item){
        await this.btnLupa.click()
        await this.iptBusca.waitForDisplayed(10000)
        await this.iptBusca.click()
        await this.iptBusca.setValue(item)
        await this.btnPesquisar.click()
    }

    open() {
        return super.open()
    }

}

module.exports = new Busca();
