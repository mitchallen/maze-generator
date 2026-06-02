'use strict';

module.exports = [
    {
        files: ['src/**/*.js'],
        languageOptions: {
            ecmaVersion: 2017,
            sourceType: 'commonjs',
            globals: {
                require: 'readonly',
                module: 'writable',
                exports: 'writable',
                console: 'readonly',
                process: 'readonly',
            },
        },
        rules: {
            'no-unused-vars': 'warn',
            'no-undef': 'error',
        },
    },
];
