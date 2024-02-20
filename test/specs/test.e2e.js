const LoginPage = require('../pageobjects/login.page')
const HomePage = require('../pageobjects/home.page')

describe('Swag Labs', () => {
    it('should login with standard_user credentials', async () => {
        await LoginPage.open()
        await LoginPage.login()
        await HomePage.validateHomePage()
    })

    it('should get login error with locked_out_user credentials', async () => {
        await LoginPage.open()
        await LoginPage.login()
        await LoginPage.validateLockedOutUserError()
    })

    it('should get login error with problem_user credentials', async () => {
        // TODO: akan dibuatkan scenario negatif case
    })

    it('should get login error with performance_glitch_user credentials', async () => {
        // TODO: akan dibuatkan scenario negatif case
    })

    it('should get login error with error_user credentials', async () => {
        // TODO: akan dibuatkan scenario negatif case
    })

    it('should get login error with visual_user credentials', async () => {
        // TODO: akan dibuatkan scenario negatif case
    })
})
