import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('Comment Box', () => {

    let component;
    beforeEach(() => {
        component = renderComponent(CommentBox);
    });

    it('has class comment-box', () => {
        expect(component).to.have.class("comment-box");
    });

    it('has a text area', () => {
        expect(component.find('textarea')).to.exist;
    });

    it('has a button', () => {
        expect(component.find('button')).to.exist;
    });

    describe('Entering some text', () => {
        const comment1 = 'new comment';
        const empty = '';

        // console.log(comment1);

        beforeEach(() => {
            component.find('textarea').simulate('change', comment1);
        });

        it('shows text in textarea', () => {
            expect(component.find('textarea')).to.have.value(comment1);
        });

        it('when submitted, clears the input', () => {
            // component.find('button').simulate('click');
            component.simulate('submit');
            expect(component.find('textarea')).to.have.value(empty);
        });
    });

});
