
import ListarProdutosPage from "../../pageObjects/listarProdutos.page.js"
import LoginPage from "../../pageObjects/login.page.js"
import allureReporter from "@wdio/allure-reporter"

describe("Lojinha App", () => {

    it("CT002 - Realizar login na lojinha", async () => {
        // Arrange (Preparação)
        allureReporter.addFeature("Login")
        allureReporter.addTestId("CT002")
        allureReporter.addSeverity("critical")
        const loginPage = new LoginPage()
        const listarProdutosPage = new ListarProdutosPage()
        // Act (Ação)
        await loginPage.login("admin", "admin")
        // Assert (Assertiva)
        expect(await listarProdutosPage.getTextLblListaProdutos()).toEqual("Lista de Produtos")
        // await driver.saveScreenshot('./teste.png')
    })

})




