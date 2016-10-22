import createStore from 'reflecti/store';
import storageMiddleware from 'reflecti/middlewares/storage';
import gettersMiddleware from './middlewares/getters';
import silentMiddleware from './middlewares/silent';
import skillsMiddleware from './middlewares/skills';

export default function(init) {
    const rules = createStore(init);
    storageMiddleware(rules);
    gettersMiddleware(rules);
    silentMiddleware(rules);
    skillsMiddleware(rules);

    return rules;
}
