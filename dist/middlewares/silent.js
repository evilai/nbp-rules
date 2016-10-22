"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (initialStore) {
    initialStore.use({
        store: function store(Store) {
            Store.prototype.silent = function (silent) {
                return this.set({ silent: silent });
            }; // eslint-disable-line
            return Store;
        }
    });

    return initialStore;
};