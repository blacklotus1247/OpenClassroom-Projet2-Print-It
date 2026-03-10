const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// ----- Carrousel (bannière) -----
let currentIndex = 0

const bannerImg = document.querySelector("#banner .banner-img")
const bannerText = document.querySelector("#banner p")
const dotsContainer = document.querySelector("#banner .dots")
const leftArrow = document.querySelector("#banner .arrow_left")
const rightArrow = document.querySelector("#banner .arrow_right")

// Sliders
function renderSlide() {
	const slide = slides[currentIndex]
	bannerImg.src = `./assets/images/slideshow/${slide.image}`
	bannerText.innerHTML = slide.tagLine

	const dots = dotsContainer.querySelectorAll(".dot")
	dots.forEach((dot, idx) => {
		if (idx === currentIndex) {
			dot.classList.add("dot_selected")
		} else {
			dot.classList.remove("dot_selected")
		}
	})
}

// Points (selecteur)
function initDots() {
	dotsContainer.innerHTML = ""
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement("div")
		dot.classList.add("dot")
		if (i === 0) dot.classList.add("dot_selected")
		dotsContainer.appendChild(dot)
	}
}

// Initialisation
initDots()
renderSlide()

// Fleches
rightArrow.addEventListener("click", () => {
	console.log("Clic flèche droite")
	currentIndex = (currentIndex + 1) % slides.length
	renderSlide()
})

leftArrow.addEventListener("click", () => {
	console.log("Clic flèche gauche")
	currentIndex = (currentIndex - 1 + slides.length) % slides.length
	renderSlide()
})
