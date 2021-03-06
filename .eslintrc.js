/**
 * These rules enforce the Hack Reactor Style Guide
 *
 * Visit this repo for more information:
 *   https://github.com/reactorcore/eslint-config-hackreactor
 */

module.exports = {
    "extends": "airbnb",
    "env": {
    "browser": true,
    "node": true,
    "jest": true,
    "commonjs": true
    },
    "ignorePatterns": ["database/data/"],
    "rules": {
    "no-console": "off",
    "import/extensions": "off"
    }
};
