export default function({
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
  sounds
}){
  let volume
  
  // sounds controls
  buttonFlorestSound.addEventListener("click",() => {
    playFlorestSound()
    toggleFlorestButton()
  })

  florestVolume.addEventListener("change", () => {
    volume = florestVolume.value / 100
    sounds.florestSound.volume = volume
  })

  buttonRainSound.addEventListener("click",() => {
    playRainSound()
    toggleRainButton()
  })

  rainVolume.addEventListener("change", () => {
    volume = rainVolume.value / 100
    sounds.rainSound.volume = volume
  })

  buttonCoffeeShopSound.addEventListener("click",() => {
    playCoffeeShopSound()
    toggleCoffeeShopButton()
  })

  coffeeShopVolume.addEventListener("change", () => {
    volume = coffeeShopVolume.value / 100
    sounds.coffeeShopSound.volume = volume
  })

  buttonFireplaceSound.addEventListener("click",() => {
    playFireplaceSound()
    toggleFireplaceButton()
  })

  fireplaceVolume.addEventListener("change", () => {
    volume = fireplaceVolume.value / 100
    sounds.fireplaceSound.volume = volume
  })

  function playFlorestSound() {
    sounds.rainSound.pause()
    sounds.coffeeShopSound.pause()
    sounds.fireplaceSound.pause()
    sounds.florestSound.play()

    if(buttonFlorestSound.classList.contains('pressed')){
      sounds.florestSound.pause()
    }
  }
  function toggleFlorestButton() {
    buttonRainSound.classList.remove('pressed')
    buttonCoffeeShopSound.classList.remove('pressed')
    buttonFireplaceSound.classList.remove('pressed')
    buttonFlorestSound.classList.toggle('pressed')

    buttonAreaRain.classList.remove('pressed')
    buttonAreaCoffeeShop.classList.remove('pressed')
    buttonAreaFireplace.classList.remove('pressed')
    buttonAreaFlorest.classList.toggle('pressed')
  }

  function playRainSound() {
    sounds.florestSound.pause()
    sounds.coffeeShopSound.pause()
    sounds.fireplaceSound.pause()
    sounds.rainSound.play()

    if(buttonRainSound.classList.contains('pressed')){
      sounds.rainSound.pause()
    }
  }
  function toggleRainButton() {
    buttonFlorestSound.classList.remove('pressed')
    buttonCoffeeShopSound.classList.remove('pressed')
    buttonFireplaceSound.classList.remove('pressed')
    buttonRainSound.classList.toggle('pressed')

    buttonAreaCoffeeShop.classList.remove('pressed')
    buttonAreaFireplace.classList.remove('pressed')
    buttonAreaFlorest.classList.remove('pressed')
    buttonAreaRain.classList.toggle('pressed')
  }

  function playCoffeeShopSound() {
    sounds.florestSound.pause()
    sounds.rainSound.pause()
    sounds.fireplaceSound.pause()
    sounds.coffeeShopSound.play()

    if(buttonCoffeeShopSound.classList.contains('pressed')){
      sounds.coffeeShopSound.pause()
    }
  }
  function toggleCoffeeShopButton() {
    buttonFlorestSound.classList.remove('pressed')
    buttonRainSound.classList.remove('pressed')
    buttonFireplaceSound.classList.remove('pressed')
    buttonCoffeeShopSound.classList.toggle('pressed')

    buttonAreaFireplace.classList.remove('pressed')
    buttonAreaFlorest.classList.remove('pressed')
    buttonAreaRain.classList.remove('pressed')
    buttonAreaCoffeeShop.classList.toggle('pressed')
  }

  function playFireplaceSound() {
    sounds.florestSound.pause()
    sounds.rainSound.pause()
    sounds.coffeeShopSound.pause()
    sounds.fireplaceSound.play()

    if(buttonFireplaceSound.classList.contains('pressed')){
      sounds.fireplaceSound.pause()
    }
  }
  function toggleFireplaceButton() {
    buttonFlorestSound.classList.remove('pressed')
    buttonRainSound.classList.remove('pressed')
    buttonCoffeeShopSound.classList.remove('pressed')
    buttonFireplaceSound.classList.toggle('pressed')

    buttonAreaFlorest.classList.remove('pressed')
    buttonAreaRain.classList.remove('pressed')
    buttonAreaCoffeeShop.classList.remove('pressed')
    buttonAreaFireplace.classList.toggle('pressed')
  }
}