'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.default = function (initialStore) {
    initialStore.use({
        store: function store(Store) {
            Store.prototype.addSkills = function (skills) {
                var currentSkills = this.getData('skills') || [];
                if (!(0, _isArray2.default)(skills) && !(0, _isString2.default)(skills)) {
                    throw new Error(ERROR_EXPECT_ARRAY_OF_SKILL_NAMES + ' Got ' + (typeof skills === 'undefined' ? 'undefined' : _typeof(skills)) + '.');
                }

                var newSkills = (0, _isString2.default)(skills) ? [skills] : skills;

                return this.dispatch(function (oldData) {
                    return Object.assign({}, oldData, { skills: newSkills.concat(currentSkills) });
                });
            };

            Store.prototype.removeSkills = function (skills) {
                var currentSkills = this.getData('skills') || [];
                if (!(0, _isArray2.default)(skills) && !(0, _isString2.default)(skills)) {
                    throw new Error(ERROR_EXPECT_ARRAY_OF_SKILL_NAMES + ' Got ' + (typeof skills === 'undefined' ? 'undefined' : _typeof(skills)) + '.');
                }

                var skillsToRemove = (0, _isString2.default)(skills) ? [skills] : skills;

                return this.dispatch(function (oldData) {
                    return Object.assign({}, oldData, { skills: _without2.default.apply(undefined, [currentSkills].concat(_toConsumableArray(skillsToRemove))) });
                });
            };

            return Store;
        }
    });

    return initialStore;
};

var _isArray = require('lodash/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _isString = require('lodash/isString');

var _isString2 = _interopRequireDefault(_isString);

var _without = require('lodash/without');

var _without2 = _interopRequireDefault(_without);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var ERROR_EXPECT_ARRAY_OF_SKILL_NAMES = 'Can\'t perform operations with skills in rules. Expected array of skill names or a string.';