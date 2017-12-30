import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('Comment List', () => {

    let component;
    beforeEach(() => {
        const props = {
            comments: ['comment1', 'comment2']
        };
        component = renderComponent(CommentList, null, props);
    });

    it('has class comment-list', () => {
        expect(component).to.have.class("comment-list");
    });

    it('has a LI for each comment', () => {
        expect(component.find('li').length).to.equal(2);
    });

    it('shows each comment that is provided', () => {
        expect(component).to.contain('comment1');
        expect(component).to.contain('comment2');
    });

});
