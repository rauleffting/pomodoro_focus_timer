export default function({
  buttonLight,
  buttonDark,
  root
}) {
  buttonLight.addEventListener("click", () => {
    buttonLight.classList.add('hide')
    buttonDark.classList.remove('hide')
    root.classList.add('dark-mode')
  })

  buttonDark.addEventListener("click", () => {
    buttonLight.classList.remove('hide')
    buttonDark.classList.add('hide')
    root.classList.remove('dark-mode')
  })
}