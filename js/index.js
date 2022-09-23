import Sounds from './sounds.js'
import Timer from './timer.js'
import Controls from './controls.js'
import SoundsControls from './sounds_controls.js'
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
  buttonFireplaceSound
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

const soundsControls = SoundsControls({
  buttonFlorestSound,
  buttonRainSound,
  buttonCoffeeShopSound,
  buttonFireplaceSound,
  sounds
})

