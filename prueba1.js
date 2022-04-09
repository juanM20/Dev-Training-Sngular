const api_ciudades = "https://www.metaweather.com/api/location/search/?query=san"
const api_ciudadesID = "https://www.metaweather.com/api/location/"

async function ejercicio() {

    const api = await fetch(api_ciudades, {
        method: 'GET',
        mode: 'cors',
        cache: 'default',
        credentials:'same-origin',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if(!api.ok) {
        const message = `An error has occured: ${response.status}`
        throw new Error(message)
    }

    const resp = await api.json()
    //console.log(resp)
    let humidity_prom = []
    let currentSum = 0

    for (x of resp) {
        const city_api = await fetch(api_ciudadesID+x.woeid+"/", {
            mode: 'cors',
            cache: 'default',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const resp_city = await city_api.json()
        console.log(resp_city.consolidated_weather)

        let sum = resp_city.consolidated_weather.reduce((total, w) => total + w.humidity, 0)
        
       
        currentSum = currentSum + sum
        console.log(currentSum)
        
    }

    return resp
}

ejercicio().then(resp => {

    console.log(resp)
})




