'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (init) {
    var rules = (0, _store2.default)(init);
    (0, _storage2.default)(rules);
    (0, _getters2.default)(rules);
    (0, _silent2.default)(rules);
    (0, _skills2.default)(rules);

    return rules;
};

var _store = require('reflecti/store');

var _store2 = _interopRequireDefault(_store);

var _storage = require('reflecti/middlewares/storage');

var _storage2 = _interopRequireDefault(_storage);

var _getters = require('./middlewares/getters');

var _getters2 = _interopRequireDefault(_getters);

var _silent = require('./middlewares/silent');

var _silent2 = _interopRequireDefault(_silent);

var _skills = require('./middlewares/skills');

var _skills2 = _interopRequireDefault(_skills);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }