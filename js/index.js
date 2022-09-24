import Sounds from './sounds.js'
import Timer from './timer.js'
import Controls from './controls.js'
import SoundsControls from './sounds_controls.js'
import Modes from './modes.js'
import {
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonMinus,
  buttonFlorestSound,
  buttonRainSound,
  buttonCoffeeShopSound,
  buttonFireplaceSound,
  buttonAreaFlorest,
  buttonAreaRain,
  buttonAreaCoffeeShop,
  buttonAreaFireplace,
  florestVolume,
  rainVolume,
  coffeeShopVolume,
  fireplaceVolume,
  buttonLight,
  buttonDark,
  root
} from './elements.js'

const sounds = Sounds()

const timer = Timer({
  minutesDisplay,
  secondsDisplay
})

const controls = Controls({
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonMinus,
  timer
})

const modes = Modes({
  buttonLight,
  buttonDark,
  root
})

const soundsControls = SoundsControls({
  buttonFlorestSound,
  buttonRainSound,
  buttonCoffeeShopSound,
  buttonFireplaceSound,
  buttonAreaFlorest,
  buttonAreaFlorest,
  buttonAreaRain,
  buttonAreaCoffeeShop,
  buttonAreaFireplace,
  florestVolume,
  rainVolume,
  coffeeShopVolume,
  fireplaceVolume,
  sounds
})

