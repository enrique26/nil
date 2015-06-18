
function createDataBase(){

	var db = Ti.Database.open('eventosMascota');
	db.execute('PRAGMA encoding = "UTF-8"');
	db.execute('CREATE TABLE IF NOT EXISTS categoria(id INTEGER PRIMARY KEY AUTOINCREMENT, idEvento TEXT, descEvento TEXT, lugarEvento TEXT);');
	db.close();
}

exports.creacion=function(){
	createDataBase();
};



//base de datos fija par apruebas eliminar para usar la funcion para el cliente
var jsonD = [{
		"id" : 1,
		"nombreP" : "Alka Seltzer",
		"imagen" : "/images/alkaseltser.jpg",
		"video" : "",
		"descripcion1" : "Es un producto antiácido indicado para el alivio sintomático de las molestias gástricas ocasionales relacionadas con la hiperacidez, como la acidez de estómago y adores.",
		"descripcion2" : "Es una combinación de aspirina (ácido acetilsalicílico), bicarbonato de sodio (NaHCO3), y ácido cítrico, diseñada para tratar el dolor y neutralizar simultáneamente la acidez del estómago.",
		"descripcion3" : "Compuestos: El ácido acetilsalicílico impide la formación de prostaglandinas en el organismo humano inhibiendo la enzima ciclooxigenasa. El ácido acetilsalicílico reduce la inflamación, la fiebre y el dolor.El fosfato de calcio es el principal componente de los huesos y juega un importante papel biológico en la actividad muscular y en la transmisión neuromuscular.El bicarbonato de sodio actúa neutralizando el ácido clorhídrico en el estómago. Además es un agente alcalinizante (aumenta el pH) a nivel sistémico y en la orina. El bicarbonato que no interviene en la reacción de neutralización del ácido del estómago se absorbe, y si no existe déficit de bicarbonato en el plasma, es excretado por orina."

	}, {
		"id" : 2,
		"nombreP" : "Aspirina",
		"imagen" : "/images/bay-aspirin.jpeg",
		"video" : "gIEnRiwtB9M",
		"descripcion1" : "Aspirina es la marca número uno de Bayer desde hace mucho tiempo, y tiene el privilegio de mantenerse siempre presente en la mente del consumidor mexicano. Cuando la gente escucha “Aspirina”, inmediatamente la relaciona con la enorme tradición, calidad y prestigio que respaldan a Bayer.",
		"descripcion2" : "A familia de Aspirina está conformada por cuatro productos que, aunque tienen una fórmula similar, cada uno está posicionado para el alivio eficaz de algún padecimiento en particular.",
		"descripcion3" : "Aspirina. Comprimidos de 500mg de ácido acetilsalicílico, indicada para aliviar los tradicionales dolores de cabeza y musculares. Cuenta con presentaciones de 40 y 100 comprimidos.Aspirina efervescente. Tabletas de 500mg de ácido acetilsalicílico en formato efervescente. Además de aliviar los dolores, está indicada para combatir los primeros síntomas de la gripa. Se comercializa en presentaciones de 12 y 60 unidades.Cafiaspirina. Comprimidos de 500mg de ácido acetilsalicílico y 30mg de cafeína. Alivia dolores de cabeza muy fuertes o migraña, y gracias a la cafeína que contiene, se potencializa la rapidez del alivio, además de que reanima el cuerpo. Presentación de 40 y 100 comprimidos."
	}, {
		"id" : 3,
		"nombreP" : "Baytril",
		"imagen" : "/images/baytril.jpeg",
		"video" : "5Ok5dfDOqTk",
		"descripcion1" : "Es un antimicrobiano de amplio espectro para el tratamiento de las enfermedades bacterianas y micoplásmicas de las aves, que viene listo para administrarse en el agua de bebida.",
		"descripcion2" : "La sustancia activa de Baytril® sintetizada por Bayer AG, es inhibidora de la girasa, por lo que su mecanismo de acción es diferente al de antibióticos comunes empleados en Medicina Veterinaria.",
		"descripcion3" : "Baytrjil® 10% Solución Oral se caracteriza por inhibir la acción enzimática de las topoisomerasas que actúan a nivel del ADN nuclear durante su replicación, transcripción, recombinación y mecanismos de reparación, provocando un efecto bactericida."

	}, {
		"id" : 4,
		"nombreP" : "Bayticol Dip",
		"imagen" : "/images/bayticol.jpg",
		"video" : "",
		"descripcion1" : "Tiene como principio activo la flumetrina,sustancia desarrollada por Bayer y que pertenece a la familia de los piretroides sintéticos de la tercera generación, la cual tiene la ventaja de poseer una vía metabólica diferente a la de los piretroides convencionales, atacando aun a cepas de garrapatas resistentes a garrapaticidas clorados y organofosforados.",
		"descripcion2" : "Bayticol empieza a actuar de inmediato, y la muerte de las garrapatas se manifiesta entre 1 y 8 horas. Sin embargo, el desprendimiento de las garrapatas tarda de 24 a 48 horas y se observa el efecto máximo al quinto día. Esta característica es muy positiva ya que evita que al desprenderse las garrapatas rápidamente, queden heridas abiertas en los animales que puedan infectarse o formen gusaneras.",
		"descripcion3" : "Es el ixodicida piretroide más potente del mercado, contra todos los gérmenes de garrapatas (flumetrina)"

	}, {
		"id" : 5,
		"nombreP" : "Bayfolan",
		"imagen" : "/images/bayfolan.jpg",
		"video" : "",
		"descripcion1" : "Es una fórmula especial concentrada de nutrimentos que contiene vitaminas y fitohormonas, actúa estimulando los procesos metabólicos de las plantas, vigorizándolas al proporcionarles los nutrimentos indispensables para su buen desarrollo, la planta los aprovecha íntegramente y su efecto se manifiesta en cultivos vigorosos y cosechas más abundantes y de calidad.",
		"descripcion2" : "Ayuda a resolver deficiencias de microelementos, frecuentes en zonas con aguas duras.Para optimizar los resultados del producto, aplíquelo cuando los cultivos estén en etapa de desarrollo vegetativo o en producción intensiva.",
		"descripcion3" : ""

	},  {
		"id" : 6,
		"nombreP" : "Calfon",
		"imagen" : "/images/calfon.jpg",
		"video" : "",
		"descripcion1" : "Reúne las cualidades necesarias para tratar las carencias de calcio en los animales. Su contenido de butafosfán ayuda a restablecer el metabolismofósforo calcio en el organismo",
		"descripcion2" : "Las tres sales cálcicas contenidas en Calfon fuerte, reúnen las cualidades necesarias para tratar las afecciones provocadas por falta de calcio. La adición a su fórmula de fósforo orgánico realiza una acción estimulante sobre el metabolismo y mejora el aprovechamiento del calcio. Posee una excelente tolerancia en los tejidos en el sitio de la aplicación.",
		"descripcion3" : ""

	}, {
		"id" : 7,
		"nombreP" : "MIRA",
		"imagen" : "/images/MIRA.jpeg",
		"video" : "eXs7Fff7H8M",
		"descripcion1" : "Mira es el nuevo alimento balanceado que Bayer ha desarrollado para la completa nutrición de perros y gatos y la satisfacción de sus amos.",
		"descripcion2" : "La alimentación es el primer y más importante paso en el cuidado de la salud de las mascotas. Por eso, un buen alimento es clave en su rutina diaria y debemos prestarle especial atención a la selección de qué producto ofrecerles.",
		"descripcion3" : "La fórmula única de Mira ha sido desarrollada pensando en las necesidades específicas de las mascotas, fabricado con la más alta tecnología y seguridad, teniendo como fin el cuidado integral de su salud, con un alto aporte energético, formulado con ingredientes de excelente calidad, excelente sabor y digestibilidad, Mira es todo lo que tu mascota necesita para mantenerse saludable, activa y feliz."
	},{
		"id" : 8,
		"nombreP" : "SIVANTO",
		"imagen" : "/images/sivanto/sivanto.jpeg",
		"video" : "JkLrnEJetkI",
		"descripcion1" : "Es un insecticida sistémico de aplicación flexible y que ofrece un control excelente de plagas chupadoras especialmente en estados inmaduros y adultos.",
		"descripcion2" : "La creación de flupyradifurone se inspiró en la estemofolina, un compuesto natural extraído de la Stemona japonica, una planta medicinal que crece, principalmente, en el sudeste asiático. La estemofolina es un alcaloide con interesantes propiedades insecticidas.",
		"descripcion3" : " Durante décadas, los científicos de todo el mundo han tratado de utilizar este conocimiento para desarrollar una protección de cultivos para uso comercial, pero han fracasado en sus intentos."

	}];
	
function cargarBase(){
	//esto se ejecutara en el cliente
	for (var i = 0; i < jsonD.length; i++) {
					var id = jsonD[i].id;
					var nombreP=(jsonD[i].nombreP).toLowerCase();
					var imagen = jsonD[i].imagen;
					var video = jsonD[i].video;
					var descripcion1= jsonD[i].descripcion1;
					var descripcion2= jsonD[i].descripcion2;
					var descripcion3= jsonD[i].descripcion3;
					

					var db = Ti.Database.open('eventosMascota');
					db.execute('PRAGMA encoding = "UTF-8"');
					db.execute('INSERT INTO categoria VALUES(?,?,?,?,?,?,?)', id, nombreP, imagen, video, descripcion1,descripcion2,descripcion3);
					// Ti.API.info('base db cargada');
					db.close();
				}
};
exports.cargarDemo=function(){	
	cargarBase();
};

exports.borrado=function() {
	var db = Ti.Database.open('eventosMascota');
	db.execute('DROP TABLE IF EXISTS categoria');
	db.close();
	// Ti.API.info('Todos los registros borrados');
};

/////////


function countCategoria(){
	var db = Ti.Database.open('eventosMascota');
	var row = db.execute('SELECT * FROM categoria');
	var count = row.rowCount;
	row.close();
	db.close();
	return count;
}

exports.countCategoria2=function(){
	var db = Ti.Database.open('eventosMascota');
	var row = db.execute('SELECT * FROM categoria');
	var count = row.rowCount;
	while(row.isValidRow()) {
		data.push({
			id:result.fieldByName('id'),
			nombreP:result.fieldByName('nombreP'),
			imagen:result.fieldByName('imagen'),
			video:result.fieldByName('video'),
			descripcion1:result.fieldByName('descripcion1'),
			descripcion2:result.fieldByName('descripcion2'),
			descripcion3:result.fieldByName('descripcion3'),
		});
		row.next();
	}
	row.close();
	db.close();
	return count;
};



function addCategorias(){

	if (Ti.Network.online) {


		var data = {
			'UID':'listaCategorias',
			 	
			
		};



		var clienteCategorias = Ti.Network.createHTTPClient({
			onload: function(e){
				var result = JSON.parse(this.responseData);
				Ti.API.info(result);

				// alert(result.length);
				// alert()

				for (var i = 0; i < result.length; i++) {
					var id = result[i].id;
					var nombreP=result[i].nombreP;
					var descripcion1= result[i].descripcio1;
					var descripcion2= result[i].descripcion2;
					var descripcion3= result[i].descripcion3;
					var imagen = result[i].imagen;
					var video = result[i].video;

					var db = Ti.Database.open('eventosMascota');
					db.execute('PRAGMA encoding = "UTF-8"');
					db.execute('INSERT INTO categoria(id, nombreP, imagen, video, descripcion1,descripcion2,descripcion3) VALUES(?,?,?,?,?,?,?)', id, nombreP, imagen, video, descripcion1,descripcion2,descripcion3);
					db.close();

					Ti.API.info(countCategoria());

				};


			},
			onerror: function(e){
				alert(e.error);
			},
			timeout:5000,
		});

		clienteCategorias.open('POST', Alloy.Globals.urlBase);
		clienteCategorias.send(data);


	}else{
		alert('sin internet');
	}

}



exports.productos = function(type){
	var data = [];
	var db = Ti.Database.open('eventosMascota');
	db.execute('PRAGMA encoding = "UTF-8"');
	var result = db.execute("SELECT * FROM categoria WHERE nombreP LIKE \'%" + type + "%\' ");
	while(result.isValidRow()) {
		data.push({
			//id:result.fieldByName('id'),
			id:result.fieldByName('id'),
			nombreP:result.fieldByName('nombreP'),
			imagen:result.fieldByName('imagen'),
			video:result.fieldByName('video'),
			descripcion1:result.fieldByName('descripcion1'),
			descripcion2:result.fieldByName('descripcion2'),
			descripcion3:result.fieldByName('descripcion3'),
		});
		result.next();
	}
	result.close();
	db.close();
	return data;
};

exports.addAll = function(){
	addCategorias();
};

// addCategorias();
// alert(countCategoria())


