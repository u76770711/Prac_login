let webdriver = require('selenium-webdriver'),
         By   = webdriver.By,
         until = webdriver.until;
 let waitTime = 10000;

   // navigate to login page for internet banking 
   describe('Login Test website and selct a product', function () {
       this.timeout(50000);
       chromeCapabilities = webdriver.Capabilities.chrome();
       //setting chrome options to start the browser fully maximized
       let chromeOptions = {
          // 'args': ['--start-fullscreen']
       };
       chromeCapabilities.set('chromeOptions', chromeOptions);
       let browser = new webdriver.Builder().withCapabilities(chromeCapabilities).build();

      // it('navigate to Test homepage', function (done){
        browser.get('https://www.Test.com/online-banking/home.asp');
       //   done();
       //});
       
    

       it('should wait for cookie button and accept it', function (done) {
           let CookieButton = browser.wait(until.elementLocated(By.xpath("//span[@id='accept']")));
           CookieButton.click()
           done();
       });
     
       /*it('should search for logon menu and click Personnel', function () {
            var loginUrl = "https://online.Test.co.uk/personal/logon/login.jsp?WT.ac=PLO0512";
            // let loginLink = browser.wait(until.elementLocated(By.xpath("//ul[contains(@class, 'primary-header-links')]/li[4]// header[contains(@class,'primary-header-btn logon') ]")));
            let loginLink = browser.wait(until.elementLocated(By.xpath("//a[@href='" + loginUrl + "']")));
            loginLink.click().then(function () {
                    let PersonalBanking = browser.wait(until.elementLocated(By.xpath("//div[contains(@class,'header-sub-panel')]//ul[contains(@class,'header-sub-panel-button-list')]/li//a[@href='" + loginUrl + "']")));
                    PersonalBanking.click()
            });
       });*/

       it('should search for products', function (done) {
           var productsURL = "/personal.asp";
           // let loginLink = browser.wait(until.elementLocated(By.xpath("//ul[contains(@class, 'primary-header-links')]/li[4]// header[contains(@class,'primary-header-btn logon') ]")));
           let productsLink = browser.wait(until.elementLocated(By.xpath("//a[@href='" + productsURL + "']")));
           productsLink.click().then(function () {
              // let PersonalBanking = browser.wait(until.elementLocated(By.xpath("//div[contains(@class,'header-sub-panel')]//ul[contains(@class,'header-sub-panel-button-list')]/li//a[@href='" + loginUrl + "']")));
               console.log('want to  you...')
               //PersonalBanking.click()
               done();
           });
        });
            after(function(){
                browser.sleep(waitTime);
                browser.quit();
                }) 
});
    
  







    
