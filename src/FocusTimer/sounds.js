import {
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundCoffeeShop,
  buttonSoundFireplace
} from "./elements.js"

export default function() {
  const buttonPressAudio = new Audio('./assets/sounds/button-press.wav')
  const kitchenTimer = new Audio('./assets/sounds/kichen-timer.mp3')
  const bgAudioForest = new Audio('./assets/sounds/forest.wav')
  const bgAudioCoffeeShop = new Audio('./assets/sounds/coffee-shop.wav')
  const bgAudioRain = new Audio('./assets/sounds/rain.mp3')
  const bgAudioFireplace = new Audio('./assets/sounds/firePlace.wav')

  bgAudioForest.loop = true
  bgAudioRain.loop = true
  bgAudioCoffeeShop.loop = true
  bgAudioFireplace.loop = true
  
  function pressButton() {
      buttonPressAudio.play()
  }

  function timeEnd() {
      kitchenTimer.play()
  }

  function audioForest() {
      buttonSoundForest.classList.contains('active')
      ? bgAudioForest.play()
      : bgAudioForest.pause()
  }

  function audioRain() {
      buttonSoundRain.classList.contains('active')
      ? bgAudioRain.play()
      : bgAudioRain.pause()
  }

  function audioCoffeeShop() {
      buttonSoundCoffeeShop.classList.contains('active')
      ? bgAudioCoffeeShop.play()
      : bgAudioCoffeeShop.pause()
  }

  function audioFireplace() {
      buttonSoundFireplace.classList.contains('active')
      ? bgAudioFireplace.play()
      : bgAudioFireplace.pause()
  }

  return {
      pressButton,
      timeEnd,
      audioForest,
      audioRain,
      audioCoffeeShop,
      audioFireplace
  }
}