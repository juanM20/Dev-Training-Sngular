window.onload = () => {

    let botones = document.getElementsByTagName('button')
    let result = document.getElementById('result')

    for(let i=0; i<botones.length; i++) {

        botones[i].addEventListener('click', () => {

            console.log(botones[i].id)
            if(botones[i].id === 'boton10'){

            }


        })
    }

}

