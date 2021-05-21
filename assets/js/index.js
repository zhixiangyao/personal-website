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

const dark = '/assets/img/light.png'
const light = '/assets/img/dark.png'

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
