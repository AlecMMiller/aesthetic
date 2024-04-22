/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './lib/**/*.{ts,tsx}'
  ],
  plugins: [require('tailwindcss-animate')],
  theme: {
    extend: {
      colors: {
        slate: generateScale('slate'),
        indigo: generateScale('indigo'),
        red: generateScale('red'),
        green: generateScale('gold'),
        iris: generateScale('iris'),
        blue: generateScale('blue')
      }
    }
  }
}

function generateScale (name) {
  const scale = Array.from({ length: 12 }, (_, i) => {
    const id = i + 1
    return [
      [id, `var(--${name}-${id})`],
      [`a${id}`, `var(--${name}A${id})`]
    ]
  }).flat()

  return Object.fromEntries(scale)
}
