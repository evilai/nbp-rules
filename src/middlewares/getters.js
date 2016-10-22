import getWithPath from 'lodash/get';

export default function(initialStore) {
    initialStore.use({
        store: Store => {
            // TODO: Check existing methods?
            Store.prototype.get = function(path) { return getWithPath(this.getData(), path); } // eslint-disable-line
            Store.prototype.set = function(data) { // eslint-disable-line
                return this.dispatch(oldData => Object.assign({}, oldData, data));
            };
            return Store;
        }
    });

    return initialStore;
}
