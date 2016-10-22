'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (initialStore) {
    initialStore.use({
        store: function store(Store) {
            // TODO: Check existing methods?
            Store.prototype.get = function (path) {
                return (0, _get2.default)(this.getData(), path);
            }; // eslint-disable-line
            Store.prototype.set = function (data) {
                // eslint-disable-line
                return this.dispatch(function (oldData) {
                    return Object.assign({}, oldData, data);
                });
            };
            return Store;
        }
    });

    return initialStore;
};

var _get = require('lodash/get');

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }