export default function({
  buttonFlorestSound,
  buttonRainSound,
  buttonCoffeeShopSound,
  buttonFireplaceSound,
  sounds
}){
  // sounds controls
  buttonFlorestSound.addEventListener("click",() => {
    playFlorestSound()
    toggleFlorestButton()
  })

  buttonRainSound.addEventListener("click",() => {
    playRainSound()
    toggleRainButton()
  })

  buttonCoffeeShopSound.addEventListener("click",() => {
    playCoffeeShopSound()
    toggleCoffeeShopButton()
  })

  buttonFireplaceSound.addEventListener("click",() => {
    playFireplaceSound()
    toggleFireplaceButton()
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
  }
}