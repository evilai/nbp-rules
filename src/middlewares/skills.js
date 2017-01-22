import isArray from 'lodash/isArray';
import isString from 'lodash/isString';
import without from 'lodash/without';

const ERROR_EXPECT_ARRAY_OF_SKILL_NAMES = 'Can\'t perform operations with skills in rules. Expected array of skill names or a string.';

export default function(initialStore) {
    initialStore.use({
        store: Store => {
            Store.prototype.addSkills = function(skills) {
                const currentSkills = this.get('skills') || [];
                if (!isArray(skills) && !isString(skills)) {
                    throw new Error(`${ERROR_EXPECT_ARRAY_OF_SKILL_NAMES} Got ${typeof skills}.`);
                }

                const newSkills = isString(skills) ? [skills] : skills;

                return this.dispatch(oldData => Object.assign({}, oldData, { skills: newSkills.concat(currentSkills) }));
            };

            Store.prototype.removeSkills = function(skills) {
                const currentSkills = this.get('skills') || [];
                if (!isArray(skills) && !isString(skills)) {
                    throw new Error(`${ERROR_EXPECT_ARRAY_OF_SKILL_NAMES} Got ${typeof skills}.`);
                }

                const skillsToRemove = isString(skills) ? [skills] : skills;

                return this.dispatch(oldData => Object.assign({}, oldData, { skills: without(currentSkills, ...skillsToRemove) }));
            };

            return Store;
        }
    });

    return initialStore;
}
