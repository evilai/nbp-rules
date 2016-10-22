# Rules
This is a library, that allows you to create immutable rules in your Node.js Bot Platform. It based on [reflecti](https://github.com/maxmert/reflecti) stores.

```js
import createRules from 'nbp-rules';
const rules = createRules({
    anyKey: 'anyValue',
    deepObject: {
        key: 'value',
        arr: [
            'hi',
            'bye'
        ]
    },
    silent: false
});

rules.get('silent'); // false
rules.get('deepObject.arr[1]'); // bye

// You can't mutate it directly, only with help of actions.
rules.set({ silent: true });
rules.get('silent'); // true

// There is a separate action for silent triggering
rules.silent(true);
rules.get('silent'); // true
rules.silent(false);
rules.get('silent'); // false

// If you want to run a certain skill outside from current skill cluster, use this action
rules.addSkills('skillName1', 'skillName2');
// Or remove skills from cluster traverse
rules.removeSkills('skillName1', 'skillName2');
```