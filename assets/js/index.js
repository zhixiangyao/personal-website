const canvas = document.querySelector('#canvas')
const body = document.body.getBoundingClientRect()
const rect = canvas.getBoundingClientRect()
const genRandom = num => Math.floor(Math.random() * num)

const { height, width } = body

const desktopPrefix = `${location.origin}/assets/images/desktop/`
const prefix = `${location.origin}/assets/images/mobile/`

const lightDesktopImgList = ['1.png', '2.png']
const darkDesktopImgList = ['3.png', '4.png', '5.png', '6.jpeg', '7.jpeg']
const darkImgList = ['3.jpeg', '6.jpeg', '7.jpeg']
const lightImgList = ['2.jpeg', '1.jpeg', '4.jpeg', '5.jpeg']

let dark = undefined
let light = undefined

if (height > width) {
  dark = darkImgList[prefix + genRandom(darkImgList.length)]
  light = lightImgList[prefix + genRandom(lightImgList.length)]
} else {
  dark = darkDesktopImgList[desktopPrefix + genRandom(darkDesktopImgList.length)]
  light = lightDesktopImgList[desktopPrefix + genRandom(lightDesktopImgList.length)]
}

canvas.width = rect.width
canvas.height = rect.height

const option = {
  canvas: canvas,
  background: light,
}

const query = '(prefers-color-scheme: dark)'

if (self.matchMedia && self.matchMedia(query).matches) {
  option.background = dark
} else {
  option.background = light
}

console.log(option)

const raindropFx = new window.RaindropFX(option)

self.onresize = () => {
  const rect = canvas.getBoundingClientRect()
  raindropFx.resize(rect.width, rect.height)
}

self.matchMedia(query).addEventListener('change', async e => {
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
