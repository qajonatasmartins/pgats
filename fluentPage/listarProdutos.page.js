import { $ } from '@wdio/globals'

export default class ListarProdutosPage {

    get lblListaProdutos() { return $('android=UiSelector().packageName("com.example.lojinha").text("Lista de Produtos")') }

    async getTextLblListaProdutos() {
        await this.lblListaProdutos.waitForDisplayed({ timeout: 30000, timeoutMsg: 'O label de lista de produtos não foi exibido' })
        return await this.lblListaProdutos.getText()
    }

    async validaSeExibiuListaDeProdutos(message) {
        expect(await this.getTextLblListaProdutos()).toEqual(message)
    }

}