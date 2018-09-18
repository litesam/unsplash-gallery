import unsplashFetcher from './unsplash-fetcher'
import render, { renderIndividualData } from './unsplash-functions'

const startImages = async () => {
    return await unsplashFetcher()
}

const startServer = async () => {
    const datas =  await unsplashFetcher()
    render(datas)
    renderIndividualData(datas[0])
}

startServer()