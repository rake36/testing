import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {
    it('handles undefined action', () => {
        expect(commentReducer(undefined, undefined)).to.be.instanceOf(Array);
        expect(commentReducer(undefined, undefined)).to.eql([]);  // eql is deep comparison
    });
    it('handles action with undefined type', () => {
        expect(commentReducer(undefined, {})).to.be.instanceOf(Array);
        expect(commentReducer(undefined, {})).to.eql([]);  // eql is deep comparison
    });
    it('handles action of unknown type', () => {
        const action = { type: 'unknown', payload: 'comment1' };
        expect(commentReducer([], action)).to.eql([]);  // eql is deep comparison
    });
    it('handles action of type SAVE_COMMENT', () => {
        const action = { type: SAVE_COMMENT, payload: 'comment1' };
        expect(commentReducer([], action)).to.eql(['comment1']);
    });
});