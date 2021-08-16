/**
 * @author SardineFish
 * https://github.com/SardineFish/raindrop-fx
 */

const self = globalThis || window
const canvas = document.querySelector('#canvas')
const body = document.body.getBoundingClientRect()
const rect = canvas.getBoundingClientRect()
const generatorRandom = num => Math.floor(Math.random() * num)
const { RaindropFX } = self
const { height, width } = body

const lightDesktopImgList = [
  'https://yaozhixiang.top/assets/images/desktop/1.png',
  'https://yaozhixiang.top/assets/images/desktop/2.png',
]
const darkDesktopImgList = [
  'https://yaozhixiang.top/assets/images/desktop/3.png',
  'https://yaozhixiang.top/assets/images/desktop/4.png',
  'https://yaozhixiang.top/assets/images/desktop/5.png',
  'https://yaozhixiang.top/assets/images/desktop/6.jpeg',
  'https://yaozhixiang.top/assets/images/desktop/7.jpeg',
]
const darkImgList = [
  'https://yaozhixiang.top/assets/images/mobile/3.jpeg',
  'https://yaozhixiang.top/assets/images/mobile/6.jpeg',
  'https://yaozhixiang.top/assets/images/mobile/7.jpeg',
]
const lightImgList = [
  'https://yaozhixiang.top/assets/images/mobile/2.jpeg',
  'https://yaozhixiang.top/assets/images/mobile/1.jpeg',
  'https://yaozhixiang.top/assets/images/mobile/4.jpeg',
  'https://yaozhixiang.top/assets/images/mobile/5.jpeg',
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
