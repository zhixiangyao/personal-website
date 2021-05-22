const self = globalThis || window
const canvas = document.querySelector('#canvas')
const rect = canvas.getBoundingClientRect()
canvas.width = rect.width
canvas.height = rect.height

/**
 * @author SardineFish
 *
 * https://github.com/SardineFish/raindrop-fx
 */
const { RaindropFX } = self

const dark = 'https://cdn.jsdelivr.net/gh/xiaojun996/CDN/images/anime/fate/751262.png'
const light = 'https://cdn.jsdelivr.net/gh/xiaojun996/CDN/images/anime/fate/843699.png'

const option = {
  canvas: canvas,
  background: light,
}

const raindropFx = new RaindropFX(option)

self.onresize = () => {
  const rect = canvas.getBoundingClientRect()
  raindropFx.resize(rect.width, rect.height)
}

self.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', async e => {
  const newColorScheme = e.matches ? 'dark' : 'light'
  if (newColorScheme === 'dark') {
    await raindropFx.setBackground(dark)
  } else if (newColorScheme === 'light') {
    await raindropFx.setBackground(light)
  } else {
    await raindropFx.setBackground(light)
  }
})

raindropFx.start()

console.group('Inspired by Even You: https://evanyou.me')
console.groupEnd()

console.group('raindropFx author: SardineFish')
console.group('GitHub: https://github.com/SardineFish/raindrop-fx')
console.groupEnd()
