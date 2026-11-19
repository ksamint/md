import juice from 'juice'

export function fitArticleImages(html) {
  const template = document.createElement(`template`)
  template.innerHTML = html
  for (const image of template.content.querySelectorAll(`img`)) {
    image.removeAttribute(`width`)
    image.removeAttribute(`height`)
    image.style.width = `100%`
    image.style.maxWidth = `100%`
    image.style.height = `auto`
  }
  return template.innerHTML
}

export function solveWeChatImage() {
  const clipboardDiv = document.getElementById(`output`)
  const images = clipboardDiv.getElementsByTagName(`img`)
  for (let i = 0; i < images.length; i++) {
    const image = images[i]
    const width = image.getAttribute(`width`)
    const height = image.getAttribute(`height`)
    image.removeAttribute(`width`)
    image.removeAttribute(`height`)
    if (width) image.style.width = width
    if (height) image.style.height = height
  }
}

export function mergeCss(html) {
  return juice(html, {
    inlinePseudoElements: true,
    preserveImportant: true,
  })
}
