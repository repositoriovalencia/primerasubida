const opciones = {
	nombre:{
		alias: 'n',
		demand: true
	},
	matematicas:{
		alias: 'm',
		demand: true
	},
	ingles:{
		demand: true,
		alias: 'i'
	},
	programacion:{
		alias: 'p',
		demand: true
	}
}

let obtenerPromedio = (n1,n2,n3)=>(n1+n2+n3)/3;
const	argv = require('yargs')
			   .command('promedio','calcular promedio',opciones)
			   .argv

module.exports = {obtenerPromedio, argv};