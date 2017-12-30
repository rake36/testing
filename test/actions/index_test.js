import { expect } from '../test_helper';
import { SAVE_COMMENT } from '../../src/actions/types';
import { saveComment } from '../../src/actions';

describe('Actions', () => {
    describe('saveComment', () => {
        let result;
        beforeEach(() => {
            result = saveComment('new comment');
        });
        it('has the correct type', () =>{
            expect(result.type).to.equal(SAVE_COMMENT);
        });
        it('has the correct payload', () =>{
            expect(result.payload).to.equal('new comment');
        });
    });
});
