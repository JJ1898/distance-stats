module.exports = {
    env: {
        es2021: true,
        node: true
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/essential",
        "@vue/standard"
    ],
    parserOptions: {
        ecmaVersion: "12",
        sourceType: "module",
        parser: "babel-eslint"
    },
    plugins: [
        "vue"
    ],
    rules: {
        indent: [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        quotes: [
            "error",
            "double"
        ],
        semi: [
            "error",
            "always"
        ],
        "no-unused-vars": [
            "warn"
        ],
        "no-multiple-empty-lines": ["warn", { max: 2 }],
        "no-trailing-spaces": ["warn"],
        "space-before-function-paren": "off"
    }
};
