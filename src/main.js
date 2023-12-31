const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

const main = document.querySelector("main")
const btn = document.querySelector(".flip")
const color = document.querySelector(".color")
const link = document.querySelector("a")

const getRandomNumber = () => {
  return Math.floor(Math.random() * hex.length)
}

const flip = () => {
  let hexColor = "#"
  
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()]
  }
  
  color.textContent = hexColor
  document.body.style.background = hexColor
  link.style.color = hexColor
}

btn.addEventListener("click", flip)
addEventListener("load", flip)