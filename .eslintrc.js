module.exports = {
    root: true,
    env: {
        node: true,
        'vue/setup-compiler-macros': true
    },
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/standard',
        '@vue/typescript/recommended',
        'standard'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        "indent": ["off", 2],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'vue/multi-word-component-names': 'off',
        semi: 0,
        'space-before-function-paren': 0,
        'comma-dangle': 0,
        'eol-last': 0
    }
}