import LoginPage from "../../fluentPage/login.page.js"
import allureReporter from "@wdio/allure-reporter"

describe("Lojinha App", () => {

    it("CT001 - Realizar login na lojinha", async () => {
        allureReporter.addFeature("Login")
        allureReporter.addTestId("CT001")
        allureReporter.addSeverity("critical")
        const loginPage = new LoginPage()
        await (await loginPage.login("admin", "admin")).validaSeExibiuListaDeProdutos("Lista de Produtos")
        // await driver.saveScreenshot('./teste.png')
    })
})




