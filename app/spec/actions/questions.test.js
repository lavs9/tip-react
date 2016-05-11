import { CALL_API } from 'middleware/api';

// setup
import * as actionCreator from 'actions';
import * as ActionType from 'actions';

describe('Action::Question', function(){
  describe('#loadQuestions()', function(){
    it('returns action `CALL_API` info', function(){
      // execute
      let action = actionCreator.loadQuestions();

      // verify
      expect(action[CALL_API]).to.deep.equal({
        method: 'get',
        path: '/questions',
        successType: ActionType.LOADED_QUESTIONS
      });
    });
  });
});
