
obj1 = {
    "name":"John"
}

const url = 'https://dog.ceo/api/breeds/list/all'


class Raza {

    nombre;
    variedades;

    constructor(nombre, variedades) {
        this.nombre = nombre
        this.variedades = variedades
    }

    getPhoto() {
        let req = new XMLHttpRequest()
        req.open('GET',`https://dog.ceo/api/breed/${this.nombre}/images/random`,false)
        req.send(null)
        if(req.status == 200) {
            let res = JSON.parse(req.responseText)
            return res.message
        }
    } 

}

obtenerRaza = (nombre, variedades) => {
    let raza = new Raza(nombre, variedades)
    return raza
}



function load(url,callback) {

    let req = new XMLHttpRequest()
    req.onreadystatechange = () => {
        
        if(req.readyState == 4) {
            if(req.status == 200) {
                let res = JSON.parse(req.responseText)
                //console.log(res.message)
                let raza = []
                for(prop in res.message) {
                    //console.log(prop)
                    raza.push(obtenerRaza(prop, res.message[prop]))
                }
                callback(raza)
            }
        }
    }

    req.open('GET', url, true)
    req.send('')
}

load(url,(raza) => {

    for(r of raza){
       console.log(r.nombre+": "+r.getPhoto())
    }
})



