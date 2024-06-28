'use strict'

const canvas = document.querySelector('#canvas')
const rect = canvas.getBoundingClientRect()
const genRandom = num => Math.floor(Math.random() * num)

const { origin } = location
const prefixPC = `${origin}/assets/images/desktop/`
const prefix = `${origin}/assets/images/mobile/`

const lightsPC = ['1.png', '2.png']
const darksPC = ['3.png', '4.png', '5.png', '6.jpeg', '7.jpeg']
const darks = ['3.jpeg', '6.jpeg', '7.jpeg']
const lights = ['2.jpeg', '1.jpeg', '4.jpeg', '5.jpeg']

let dark = prefixPC + darksPD[genRandom(darksPD.length)]
let light = prefixPC + lightsPC[genRandom(lightsPC.length)]

const { height, width } = document.body.getBoundingClientRect()

if (height > width) {
  dark = prefix + darks[genRandom(darks.length)]
  light = prefix + lights[genRandom(lights.length)]
}

canvas.width = rect.width
canvas.height = rect.height

const query = '(prefers-color-scheme: dark)'
const option = { canvas, background: self.matchMedia && self.matchMedia(query).matches ? dark : light }
const raindropFx = new window.RaindropFX(option)

self.onresize = () => {
  const rect = canvas.getBoundingClientRect()
  raindropFx.resize(rect.width, rect.height)
}

self.matchMedia(query).addEventListener('change', e => {
  const scheme = e.matches ? 'dark' : 'light'
  if (scheme === 'dark') {
    raindropFx.setBackground(dark)
  } else if (scheme === 'light') {
    raindropFx.setBackground(light)
  } else {
    raindropFx.setBackground(light)
  }
})

raindropFx.start()
