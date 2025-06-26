/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    theme: {
        extend: {
            colors: {
                'primary-green': '#5A7360',
                'light-green': '#D1D9AA',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}