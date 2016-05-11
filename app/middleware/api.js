import superAgent from 'superagent';
import Promise from 'bluebird';
import _ from 'lodash';
import config from 'config';

export const CALL_API = Symbol('CALL_API');

export default store => next => action => {
    if (!action[CALL_API]) {
        return next(action);
    }
    let request = action[CALL_API];
    let {getState} = store;
    let deferred = Promise.defer();
    let {method, path, successType, errorType, afterSuccess, afterError, data} = request;
    let url = `${config.API_BASE_URL}${path}`;

    if (method == 'get') {
        superAgent[method](url)
            .end((err, res)=> {
                if (err) {
                    if (errorType) {
                        next({
                            type: errorType,
                            error: err.response.body
                        })
                    }

                    if (_.isFunction(afterError)) {
                        afterError({getState});
                    }
                } else {
                    next({
                        type: successType,
                        response: res.body
                    });

                    if (_.isFunction(afterSuccess)) {
                        afterSuccess({getState});
                    }
                }
                deferred.resolve();
            });

        return deferred.promise;
    } else {
        superAgent[method](url)
            .send(data)
            .end((err, res)=> {
                if (err) {
                    if (errorType) {
                        next({
                            type: errorType,
                            error: err.response.body
                        })
                    }

                    if (_.isFunction(afterError)) {
                        afterError({getState});
                    }
                } else {
                    next({
                        type: successType,
                        error: {message: ''}
                    });

                    if (_.isFunction(afterSuccess)) {
                        afterSuccess({getState});
                    }
                }
                deferred.resolve();
            });

        return deferred.promise;
    }
};
