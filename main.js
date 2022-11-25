const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML ='<img src="./assets/8485559.png" alt="" />'
  title.innerHTML = 'Cyberpunk Edgerunners'
  excerpt.innerHTML ='Cyberpunk: Edgerunners is a 2022 Polish–Japanese cyberpunk web anime series based on the video game Cyberpunk 2077 by CD Projekt Red.'
  profile_img.innerHTML ='<img src="https://randomuser.me/api/portraits/men/31.jpg" alt="" />'
  name.innerHTML = 'Tech-Bantu'
  date.innerHTML = 'Nov 25, 2022'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}