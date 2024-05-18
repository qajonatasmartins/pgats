import { $ } from '@wdio/globals'
import ListarProdutosPage from './listarProdutos.page.js'

export default class LoginPage {

    get inpUsuario() { return $('android=UiSelector().packageName("com.example.lojinha").className("android.widget.EditText").instance(0)') }
    get inpSenha() { return $('//android.view.View[@text="Senha"]/../android.widget.EditText') }
    get btnEntrar() { return $('android=UiSelector().packageName("com.example.lojinha").text("ENTRAR")') }

    async setValueInpUsuario(usuario) {
        await this.inpUsuario.waitForDisplayed({ timeoutMsg: 'O campo "Usuário" não foi exibido.' })
        await this.inpUsuario.addValue(usuario)
    }

    async setValueInpSenha(senha) {
        await this.inpSenha.waitForDisplayed({ timeoutMsg: 'O campo "Senha" não foi exibido.' })
        await this.inpSenha.addValue(senha)
    }

    async clickBtnEntrar() {
        await this.btnEntrar.waitForDisplayed({ timeoutMsg: 'O botão [Entrar] não foi exibido.' })
        await this.btnEntrar.click()
    }

    async login(usuario, senha) {
        await this.setValueInpUsuario(usuario)
        await this.setValueInpSenha(senha)
        await this.clickBtnEntrar()
        return await new ListarProdutosPage()
    }
}

