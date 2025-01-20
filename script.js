const sizeUp = document.querySelector('.sizeUp')
const sizeDown = document.querySelector('.sizeDown')
const colorBtn = document.querySelector('.color')
const p = document.querySelector('p')
let fontSize = 36

const increase = () => {
	fontSize += 5
	p.style.fontSize = fontSize + 'px'
}

const received = () => {
	if (fontSize <= 21) return

	fontSize -= 5
	p.style.fontSize = fontSize + 'px'
}

const colorChanger = () => {
	const r = Math.floor(Math.random() * 255)
	const g = Math.floor(Math.random() * 255)
	const b = Math.floor(Math.random() * 255)
	p.style.color = `rgb(${r},${g},${b})`
}

sizeDown.addEventListener('click', received)
sizeUp.addEventListener('click', increase)
colorBtn.addEventListener('click', colorChanger)
