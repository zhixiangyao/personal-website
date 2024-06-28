const canvas = document.querySelector('#canvas')
const body = document.body.getBoundingClientRect()
const rect = canvas.getBoundingClientRect()
const generatorRandom = num => Math.floor(Math.random() * num)

const { height, width } = body

const desktopPrefix = '/assets/images/desktop/'
const lightDesktopImgList = ['1.png', '2.png']
const darkDesktopImgList = ['3.png', '4.png', '5.png', '6.jpeg', '7.jpeg']
const prefix = '/assets/images/mobile/'
const darkImgList = ['3.jpeg', '6.jpeg', '7.jpeg']
const lightImgList = ['2.jpeg', '1.jpeg', '4.jpeg', '5.jpeg']

let dark = undefined
let light = undefined

if (height > width) {
  dark = darkImgList[prefix + generatorRandom(darkImgList.length)]
  light = lightImgList[prefix + generatorRandom(lightImgList.length)]
} else {
  dark = darkDesktopImgList[desktopPrefix + generatorRandom(darkDesktopImgList.length)]
  light = lightDesktopImgList[desktopPrefix + generatorRandom(lightDesktopImgList.length)]
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
