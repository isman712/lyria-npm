const buscar = require('./index.js')


const cancion = buscar('La locura esta en mi').then(e => console.log(e))
