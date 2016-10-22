export default function(initialStore) {
    initialStore.use({
        store: Store => {
            Store.prototype.silent = function(silent) { return this.set({ silent }); } // eslint-disable-line
            return Store;
        }
    });

    return initialStore;
}
