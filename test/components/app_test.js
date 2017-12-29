import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';
import CommentBox from '../../src/components/comment_box';
// to turn on continous testing listener
// npm run test:watch

// Mocha testing framework

// use describe to group together similar tests
// first parameter is just a label for reporting
describe('App', () => {
  // Use 'it' to test a single attribute of a target
  //  first parameter is just a label for reporting
  // it('Displays correct default text', () => {
  //   // create an instance of App
  //   const component = renderComponent(App);
  //   // Use expect to make assertion about target
  //   expect(component).to.contain('React simple starter');
  // });

  let component;
  beforeEach(() => {
    component = renderComponent(App);
  });

  it('has a comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  });
});
