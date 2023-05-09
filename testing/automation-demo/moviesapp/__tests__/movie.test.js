const { Builder, Browser, By, until, Key } = require("selenium-webdriver");

let driver

beforeEach(async () => {
    driver = await new Builder().forBrowser(Browser.CHROME).build()
})

afterEach(async () => {
    await driver.quit()
})

describe("Testing the deleting the movie", () => {
    //Navigate to the web app
    test('Can delete a movie', async () => {
        await driver.get('http://localhost:3000')
        //Type the new movie
        await driver.findElement(By.css('input[name="movieTitle"]')).sendKeys('Test')
         //Find the add button and click it
        await driver.findElement(By.css('button[type="submit"]')).click()
        //Type the new movie
        await driver.findElement(By.css('input[name="movieTitle"]')).sendKeys('Test1')
         //Find the add button and click it
        await driver.findElement(By.css('button[type="submit"]')).click()

        //Deleting a movie
        await driver.findElement(By.css('button[class="delete-btn"]')).click()
        //Check if the movie is in the list
        await driver.sleep(2000) 
        try {
            await driver.findElement(By.xpath(("//*[text()='Test']"))).isDisplayed();
        }
        catch (e) {
            expect(String(e).includes('NoSuchElement')).toBe(true)
        }
    })
})

describe("Checking a movie", () => {
    //Navigate to the web app
    test('Can check a movie', async () => {
        await driver.get('http://localhost:3000')
         //Type the new movie
        await driver.findElement(By.css('input[name="movieTitle"]')).sendKeys('Test')
         //Find the add button and click it
        await driver.findElement(By.css('button[type="submit"]')).click()
        await driver.findElement(By.id('movie-0')).click()
    })
})

describe("Notifications are displayed", () => {
    //Navigate to the web app
    test('Can receive the notification when watched movie ', async () => {
        await driver.get('http://localhost:3000')
         //Type the new movie
        await driver.findElement(By.css('input[name="movieTitle"]')).sendKeys('Test')
         //Find the add button and click it
        await driver.findElement(By.css('button[type="submit"]')).click()
        await driver.findElement(By.id('movie-0')).click()

        const currentPage = await driver.wait(
            until.elementLocated(By.id('message')),
            1000
        );
        expect(await currentPage.getText()).toBe("Watched Test");
    })
})