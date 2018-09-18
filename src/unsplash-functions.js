const photosEl = document.querySelector('#pics')
const detailEl = document.querySelector('.detail-image-frame')


const render = (datas) => {
    datas.forEach((data) => {
        const listEl = document.createElement('li')
        const picEl = document.createElement('a')
        const imgEl = document.createElement('img')
        const spanEl = document.createElement('span')
        picEl.setAttribute('href', data.urls.regular)
        imgEl.classList.add('thumbnail-image')
        imgEl.setAttribute('src', data.urls.regular)
        spanEl.textContent = `${data.user.name}`
        spanEl.classList.add('thumbnail-item-title')
        listEl.classList.add('thumbnail-item')
        photosEl.appendChild(listEl)
        listEl.appendChild(picEl)
        picEl.appendChild(imgEl)
        picEl.appendChild(spanEl)
    })
}

const renderIndividualData = (data) => {
    const imgEl = document.createElement('img')
    const spanEl = document.createElement('span')
    imgEl.classList.add('detail-image')
    spanEl.classList.add('detail-image-title')
    imgEl.setAttribute('src', data.urls.regular)
    spanEl.textContent = data.user.name
    detailEl.appendChild(imgEl)
    detailEl.appendChild(spanEl)
}

const workAnchor = () => {
    photosEl.addEventListener('click', e => {
        e.preventDefault()
        if (e.target.tagName === 'IMG') {
            const src = e.target.getAttribute('src')
            document.querySelector('.detail-image').setAttribute('src', src)
        }
        if (e.target.nextElementSibling.tagName === 'SPAN') {
            document.querySelector('.detail-image-title').textContent = e.target.nextElementSibling.textContent
        }
    })
}

workAnchor()

export { render as default, renderIndividualData }