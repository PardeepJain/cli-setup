export class CliSetupPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cli-setup-app h1')).getText();
  }
}
