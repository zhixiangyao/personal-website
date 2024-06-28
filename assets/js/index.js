const canvas = document.querySelector('#canvas')
const body = document.body.getBoundingClientRect()
const rect = canvas.getBoundingClientRect()
const generatorRandom = num => Math.floor(Math.random() * num)

const { height, width } = body

const lightDesktopImgList = ['/assets/images/desktop/1.png', '/assets/images/desktop/2.png']
const darkDesktopImgList = [
  '/assets/images/desktop/3.png',
  '/assets/images/desktop/4.png',
  '/assets/images/desktop/5.png',
  '/assets/images/desktop/6.jpeg',
  '/assets/images/desktop/7.jpeg',
]
const darkImgList = ['/assets/images/mobile/3.jpeg', '/assets/images/mobile/6.jpeg', '/assets/images/mobile/7.jpeg']
const lightImgList = [
  '/assets/images/mobile/2.jpeg',
  '/assets/images/mobile/1.jpeg',
  '/assets/images/mobile/4.jpeg',
  '/assets/images/mobile/5.jpeg',
]

let dark = undefined
let light = undefined

if (height > width) {
  dark = darkImgList[generatorRandom(darkImgList.length)]
  light = lightImgList[generatorRandom(lightImgList.length)]
} else {
  dark = darkDesktopImgList[generatorRandom(darkDesktopImgList.length)]
  light = lightDesktopImgList[generatorRandom(lightDesktopImgList.length)]
}

canvas.width = rect.width
canvas.height = rect.height

const option = {
  canvas: canvas,
  background: light,
}

if (self.matchMedia && self.matchMedia('(prefers-color-scheme: dark)').matches) {
  option.background = dark
} else {
  option.background = light
}

const raindropFx = new window.RaindropFX(option)

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
