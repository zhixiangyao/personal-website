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

const option = {
  canvas: canvas,
  background: './assets/img/bg.jpg',
}

const raindropFx = new RaindropFX(option)

self.onresize = () => {
  const rect = canvas.getBoundingClientRect()
  raindropFx.resize(rect.width, rect.height)
}

raindropFx.start()
