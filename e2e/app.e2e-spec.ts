import { CostSplitterPage } from './app.po';

describe('cost-splitter App', () => {
  let page: CostSplitterPage;

  beforeEach(() => {
    page = new CostSplitterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
