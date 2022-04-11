
obj1 = {
    "name":"John"
}

class Raza {

    nombre;
    variedades;

    constructor(nombre, variedades) {
        this.nombre = nombre
        this.variedades = variedades
    }

    getPhoto() {
        console.log(this.nombre)
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



let req = new XMLHttpRequest()
req.open('GET', 'https://dog.ceo/api/breeds/list/all', true)
req.onreadystatechange = (aEvt) => {    
    if(req.readyState == 4) {
        if(req.status == 200){
            let res = JSON.parse(req.responseText)
            //console.log(res.message)
            let raza = []
            for(prop in res.message) {
                raza.push(obtenerRaza(prop, res.message[prop]))
            }

            raza[0].getPhoto()
            // for(r of raza) {
            //     //console.log(r.getPhoto())
            // }

        }
        else
            console.log("Error loading page")
    }
}
req.send(null)


