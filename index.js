const {obtenerPromedio, argv} = require('./datos.js');
console.log(argv);

if (argv._[0]=='promedio'){
	console.log	('el promedio de ' + argv.n + ' es ' + obtenerPromedio);
}else{
	console.log	('promedio no calculado ');
}