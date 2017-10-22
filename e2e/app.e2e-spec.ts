import { MyDreenAppPage } from './app.po';

describe('my-dreen-app App', () => {
  let page: MyDreenAppPage;

  beforeEach(() => {
    page = new MyDreenAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
