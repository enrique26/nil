var win = Ti.UI.createWindow({
	backgroundColor:'white',layout:'vertical'
});

//invcar el modulo com.obscure.tikal
var TiKal = require('com.obscure.tikal');
//instanciar la creacion de una vista
var kal = TiKal.createKalView({
});

//cargar tabla de horarios
function horariosTab(date){
var data2=[];
//control par asumar media hora 
var control=0;
//horas controla el inicio del listado del horario
var horas=6;
	for(i=0;i<33;i++){
		if(control==0){
			var x=horas+":00:00";
			control=1;
		}else if(control==1){
			var x=horas+":30:00";
			//cuando @control equivale a 1 regresa a 0 y suma 1 a @horas
			control=0;
			horas+=1;
		}
		//asignar horarios mediante un arreglo todas las horas del dia
		var row=Ti.UI.createTableViewRow({
			title:x,
			editable:true,
			contenido:date
			
		}) ;
		data2.push(row);	
	};
	tblecon.data=data2;
};

//evento del calendario-dia seleccionado

kal.addEventListener('select', function(e) {
  // alert("selected "+e);
  Ti.API.info('seleccion'+JSON.stringify(e));
  var col=e;
  Ti.API.info('col '+col.selectedDate); 
 //disapra el llenado de la tabla de horarios
 horariosTab(col.selectedDate);
});

//crea la tabla
var tblecon=Ti.UI.createTableView({
	top:'50%',
	backgroundColor:'blue'
});


kal.addEventListener('click',function(e){
	Ti.API.info('windows event:'+JSON.stringify(e));
});

kal.add(tblecon);
$.index.add(kal);


$.index.open();
