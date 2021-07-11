const self = globalThis || window
const canvas = document.querySelector('#canvas')
const rect = canvas.getBoundingClientRect()
const body = document.body.getBoundingClientRect()
canvas.width = rect.width
canvas.height = rect.height

/**
 * @author SardineFish
 *
 * https://github.com/SardineFish/raindrop-fx
 */
const { RaindropFX } = self

const { height, width } = body

const darkDesktopImgList = [
  'https://cdn.jsdelivr.net/gh/yao-zhixiang/CDN/images/anime/fate/751262.png',
  'https://cdn.jsdelivr.net/gh/yao-zhixiang/CDN/images/anime/fate/917480.png',
  'https://cdn.jsdelivr.net/gh/yao-zhixiang/CDN/images/anime/fate/999332.png',
]
const lightDesktopImgList = [
  'https://cdn.jsdelivr.net/gh/yao-zhixiang/CDN/images/anime/fate/843699.png',
  'https://cdn.jsdelivr.net/gh/yao-zhixiang/CDN/images/anime/fate/862789.png',
]

const darkImgList = ['https://cdn.jsdelivr.net/gh/yao-zhixiang/CDN/images/anime/twitter/3.jpeg']
const lightImgList = [
  'https://cdn.jsdelivr.net/gh/yao-zhixiang/CDN/images/anime/twitter/2.jpeg',
  'https://cdn.jsdelivr.net/gh/yao-zhixiang/CDN/images/anime/twitter/1.jpeg',
]

let dark = undefined
let light = undefined

const generatorRandom = num => {
  return Math.floor(Math.random() * num)
}

if (height > width) {
  // mobile
  dark = darkImgList[generatorRandom(darkImgList.length)]
  light = lightImgList[generatorRandom(lightImgList.length)]
} else {
  // desktop
  dark = darkDesktopImgList[generatorRandom(darkDesktopImgList.length)]
  light = lightDesktopImgList[generatorRandom(lightDesktopImgList.length)]
}

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
