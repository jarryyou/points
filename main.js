window.onload = () => {
  let mainBox = document.querySelector('.main-box')

  mainBox.onclick = e => {
    let el = document.createElement('div')
    let color = '#' + Math.random().toString(16).slice(2, 8)
    let width = 20 + Math.round(Math.random() * 80)
    let left = e.clientX + 'px'
    let top = e.clientY + 'px'
    el.className = 'inner-box'
    el.style.width = width + 'px'
    el.style.height = width + 'px'
    el.style.left = left
    el.style.top = top
    el.style.backgroundImage = 'radial-gradient(' + color + ' 15%, transparent 70%)'
    mainBox.appendChild(el)
    let t = 0
    let k = 1000
    let op
    let time = setInterval(() => {
      op = k - t
      width *= 1.003
      el.style.width = width + 'px'
      el.style.height = width + 'px'
      t++
      el.style.opacity = op / k
      if (op < 0.1) {
        clearInterval(time)
        mainBox.removeChild(el)
      }
    }, 1)
  }
}