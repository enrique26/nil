
////-------
///usar el modulo de calnedario de tikal ------------------/////


//invcar el modulo com.obscure.tikal
var TiKal = require('com.obscure.tikal');
//instanciar la creacion de una vista
var kal = TiKal.createKalView({

});


//cargar tabla de horarios
function horariosTab(date){
var data2=[];
//control para sumar media hora 
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

kal.addEventListener('click',function(e){
	Ti.API.info(e.source);
});
//evento del calendario-dia seleccionado
kal.addEventListener('select', function(e) {
  // alert("selected "+e);
  Ti.API.info('seleccion'+JSON.stringify(e));
  var col=e.selectedDate;
  Ti.API.info('col '+col); 
 //disapra el llenado de la tabla de horarios
 horariosTab(col.selectedDate);
});

//crea la tabla
var tblecon=Ti.UI.createTableView({
	top:'50%',
	backgroundColor:'white'
});

tblecon.addEventListener('click',function(e){
	Ti.API.info('windows event:'+JSON.stringify(e));
	alert('nuevo evento recurrente se creara en al calendario, definir categoria');

});
// kal.add(tblecon);

$.index.add(kal);

var botones=Ti.UI.createButton({
	height:50,
	width:100,
	right:0,
	bottom:180,
	backgroundColor:'red'
});

var botones2=Ti.UI.createButton({
	height:50,
	width:100,
	right:0,
	bottom:120,
	backgroundColor:'blue'
});

var botones3=Ti.UI.createButton({
	height:50,
	width:100,
	right:0,
	bottom:60,
	backgroundColor:'green'
});
botones.addEventListener('click',function(){
	Alloy.createController('parse').getView().open();
});

botones2.addEventListener('click',function(){
	Alloy.createController('acstitan').getView().open();
});


botones3.addEventListener('click',function(){
	
	Alloy.createController('eventosAlarmas').getView().open();


});
//escuchar eventos desde cualquier parte de la app
// function registerForPush() {
		// Ti.Network.registerForPushNotifications({
			// success : function(){},
			// error : function(){Ti.API.info('error');},
			// callback : receivePush
		// });
		// Ti.App.iOS.removeEventListener('remotenotificationsettings', registerForPush);
	// };	
// 	
	// Ti.App.iOS.addEventListener('remotenotificationsettings', registerForPush);
// 
// function receivePush(e) {
		// alert('App Informa: ' + e.data.alert);
		// Ti.API.info(JSON.stringify(e));
		// if (e.data.badge > 0) { 
			// Ti.App.iOS.scheduleLocalNotification({
			    // date: new Date(new Date().getTime() + 3000),
			    // badge: "-1"
			// });
		// }
	// };

$.index.add(botones);
$.index.add(botones2);
$.index.add(botones3);


$.index.open();
