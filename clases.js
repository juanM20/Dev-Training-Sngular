/*
class Foo {

}

let myObj = new Foo

console.log(typeof myObj)
console.log(myObj instanceof Foo)


class Tools {
    static strToURL(str) {
        return encodeURIComponent(str).replace(/%20/g,'+')
    }
}

console.log(Tools.strToURL('La donna e mobile'))


let playerMap = new WeakMap();

class Player {
    constructor(life = 100) {
        playerMap.set(this, {
            life: life
        })
    }

    set publicLife(value) {
        playerMap.get(this).life = value
    }

    get life() {
        return playerMap.get(this).life;
    }

}


let player1 = new Player

player1.life = 40
console.log(player1.life)

player1.publicLife = 20
console.log(player1.life)

*/

class Device {

    constructor( params = {}) {

        ({
            status: this._status = 'off',
            brand: this._brand = 'ACME',
            firmware: this._firmware = 'unknown'
        
        } = params )

    }

    start() {

        this._status = 'on'
    }

    get status() {
        return this._status
    }

    get brand() {
        return this._brand
    }

    get firmware() {
        return this._firmware
    }

}


class VideoDevice extends Device {

    start( source = ''){

        super.start()
        return 'Rendering source...'
    }
}

class DiskDevice extends Device {

    constructor(params = {}) {
        super( {status: 'on'})
    }

    format(size=0) {
        return 'Formatting device | Firmware: ' + this._firmware
    }
}


let d1 = new Device
d1.status

let player = new VideoDevice({brand: 'Videodrome'})
console.log(player.brand)
console.log(player.status)
console.log(player.start())
console.log(player.status)

let hdd = new DiskDevice({firmware: '2.0'})
console.log(hdd.status)
console.log(hdd.format())
console.log(hdd.firmware)




