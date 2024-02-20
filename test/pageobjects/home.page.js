const { $, expect } = require('@wdio/globals')
const Page = require('./page');

class HomePage extends Page {
    get iconCart () { return $('.shopping_cart_link'); }

    async validateHomePage() {
        expect(browser).toHaveUrlContaining('/inventory.html')
        expect(this.iconCart).toBeDisplayed()
    }

    open () {
        return super.open('/inventory.html');
    }
}

module.exports = new HomePage();

1. npm init wdio . -- --yes // NOTE: auto install default setup webdriverio
2. buat scenario di folder specs, berupa describe dan it
3. buat function kosongan di scenario specs dengan dummy page
4. buat page object untuk page-page yang ingin dibuatkan scenario (contoh: login & home page)
5. buat variable name untuk element kosongan
6. buat function kosongan untuk di page object yang diinginkan
7. inspect element dengan cara click kanan di browser, kemudian search element apakah ada atau tidak
8. panggil element di function-function kosong yang sudah ditentukan (harus step by step)
