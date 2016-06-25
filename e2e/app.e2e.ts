import { CliSetupPage } from './app.po';

describe('cli-setup App', function() {
  let page: CliSetupPage;

  beforeEach(() => {
    page = new CliSetupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cli-setup works!');
  });
});
