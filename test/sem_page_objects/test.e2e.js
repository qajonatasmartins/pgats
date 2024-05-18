
import allureReporter from "@wdio/allure-reporter"
import { $ } from '@wdio/globals'

describe("Lojinha App", () => {

    it("CT003 - Realizar login na lojinha", async () => {
        allureReporter.addFeature("Login")
        allureReporter.addTestId("CT003")
        allureReporter.addSeverity("critical")
        // Arrange (Preparação)
        const inpUsuario = $('android=UiSelector().packageName("com.example.lojinha").className("android.widget.EditText").instance(0)')
        const inpSenha = $('android=UiSelector().packageName("com.example.lojinha").className("android.widget.EditText").instance(1)')
        const btnEntrar = $('android=UiSelector().packageName("com.example.lojinha").text("ENTRAR")')
        const lblListaProdutos = $('android=UiSelector().packageName("com.example.lojinha").text("Lista de Produtos")')

        /** Espera explicita */
        /** Espera obrigatóriamente por 5 segundos para depois continuar */
        await driver.pause(5000)

        /** Espera implicita */
        /** Se uma espera implícita for definida,
         * o driver aguardará a duração do valor fornecido antes de retornar o erro.
         * Observe que assim que o elemento for localizado, o driver retornará 
         * a referência do elemento e o código continuará em execução.
        */
        await inpUsuario.waitForDisplayed()
        await inpSenha.waitForDisplayed()
        await btnEntrar.waitForDisplayed()


        // Act (Ação)
        await inpUsuario.addValue("admin")
        await inpSenha.setValue("admin")
        await btnEntrar.click()

        // Assert (Assertiva)
        await lblListaProdutos.waitForDisplayed({ timeout: 30000 })
        expect(await lblListaProdutos.getText()).toEqual("Lista de Produtos")

        // await driver.saveScreenshot('./teste.png')
    })

})




