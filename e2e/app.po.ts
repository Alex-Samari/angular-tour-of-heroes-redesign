import { browser, element, by } from "protractor";

export class BlankPage {
  navigateTo() {
    return browser.get("/");
  }

  getParagraphText() {
    return element(by.scss("my-root h1")).getText();
  }
}
