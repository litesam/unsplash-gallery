const unsplashFetcher = async () => {
    const response = await fetch('//api.unsplash.com/photos/?client_id=b254fce3a08e101f80bd6ee73dc2f9d6a873376d25b8921411c3bef08c17979f')
    if (response.ok) {
        const data = await response.json()
        return data
    } else {
        return Error('An error has occured while retreiving the message')
    }
}

export { unsplashFetcher as default }