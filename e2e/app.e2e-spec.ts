import { ArmadaPage } from './app.po';

describe('armada App', () => {
  let page: ArmadaPage;

  beforeEach(() => {
    page = new ArmadaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
