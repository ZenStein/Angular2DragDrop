export class RoboRenG2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('robo-ren-g2-app h1')).getText();
  }
}
