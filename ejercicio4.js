
let multiply = (times,str) => {

    console.log(times) 
    for(let i=0; i<times; i++) {
        console.log(str)
    }
    
}


multiply.apply("Hola mundo" , [10,"Hola mundo"])
