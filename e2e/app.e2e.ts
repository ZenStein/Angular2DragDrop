import { RoboRenG2Page } from './app.po';

describe('robo-ren-g2 App', function() {
  let page: RoboRenG2Page;

  beforeEach(() => {
    page = new RoboRenG2Page();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('robo-ren-g2 works!');
  });
});
