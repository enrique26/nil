
var args = arguments[0] || {};
//creacion de eventos de forrma local

var Cloud=require('ti.cloud');

var mitexto=Ti.UI.createLabel({
	textAlign:'center',
	text:'generar evento en el calendario interno del dispositivo',
	top: 40,
	backgroundColor:'white'
}); 

$.eventosAlarmas.add(mitexto);

//añadir crear usaurio ACS

$.crearUsuario.addEventListener('click',function(){
  if(Ti.Calendar.eventsAuthorization == Ti.Calendar.AUTHORIZATION_AUTHORIZED) {
	crearEvento();
    
} else {
    Ti.Calendar.requestEventsAuthorization(function(e){
            if (e.success) {
                crearEvento();
            } else {
                alert('El acceso al calendario no esta avtivado, Activelo en Configuraciones -> privacidad-> fotos en tu dispositivo IOS');
            }
        });
}
});


function crearEvento(){
	var defcalendar=Ti.Calendar.defaultCalendar;
	var date1 = new Date(new Date().getTime());
	var date2 = new Date(new Date().getTime()+900000);
	Ti.API.info('fecha 1'+date1+' fecha 2 '+date2);
	
	var miEvento=defcalendar.createEvent({
		title:'nuevo evento',
		notes:'mascota',
		location:'este lugar',
		begin:date1,
		end:date2,
		allDay: false
	});
	
	//reglas de recurrencia
	//repetir el evento cada dia durante 5 dias apartir del dia de creacion
	var eventoRegla0=miEvento.createRecurenceRule({
		frequency: Ti.Calendar.RECURRENCEFREQUENCY_WEEKLY,
		interval: 1, //intervalo de recurrencia en la que aparecera la recurrencia (cada 1 , cada n dias/semana/meses/años etc)
		daysOfTheWeek: [{dayOfWeek:4},{dayOfWeek:5}], //dias de la semana que se repite el evento, junto con el valor de recurrencia cada n tiempo 
		end: {occurrenceCount:6} //se repetira 6 veces o n veces cada semena
	});
	
	//repetir el evento cada dia durante 5 dias apartir del dia de creacion
	var eventoRegla1=miEvento.createRecurenceRule({
		frequency: Ti.Calendar.RECURRENCEFREQUENCY_DAILY,
		interval: 1, //intervalo de recurrencia en la que aparecera la recurrencia (cada 1 , cada n dias/meses/años etc)
		daysOfTheWeek: [{dayOfWeek:1},{dayOfWeek:2}], //dias de la semana que se repite el evento, junto con el valor de recurrencia ,define en que semana del mes aparecera la recurrencia
		end: {occurrenceCount:5} // durente 5 veces o n veces diariamente
	});
	
	//repetir cada 2 meses la segunda semana del mes correcpondiente
	var eventoRegla2=miEvento.createRecurenceRule({
		frequency: Ti.Calendar.RECURRENCEFREQUENCY_MONTHLY,
		interval: 2, //intervalo de recurrencia en la que aparecera la recurrencia cada 2 meses
		daysOfTheMonth: [4], //dia o dias del mes en los que la rrecuerencia aparecera cada mes
		end: {occurrenceCount:3}//el evento se repetira n veces contanto el evento que lo creo
	});
	
	//repetir el cada año el primer lunes del mes de abril
	var eventoRegla3=miEvento.createRecurenceRule({
		frequency: Ti.Calendar.RECURRENCEFREQUENCY_YEARLY,
		interval: 1, //intervalo de recurrencia en la que aparecera la recurrencia cada 2 meses
		daysOfTheWeek: [{dayOfWeek:2,week:1}], //dias de la semana que se repite el evento, junto con el valor de recurrencia ,week define en que semana del mes aparecera el evento
		end: {occurrenceCount:1} // durente 1 ves o n veces cada año
	});
	
	miEvento.recurrenceRules=[eventoRegla0];
	//salver el evento y añadirlo a la calendario
	miEvento.save(Ti.Calendar.SPAN_THISEVENT);
	Ti.API.info(miEvento.id); //id del evento cuando se creo con createEvent
	Ti.API.info(JSON.stringify(miEvento));//custom id asignado al evento
	
	//guardar el id del evento en base de datos para leerlo, jnto con la nota que categorize este evento como de la aplicacion
	//crear la referencia desde la nota 

};


function leerCalendario(){
	var elyear=new Date();
	Ti.API.info('este año '+elyear.getFullYear());
	var leerCal=Ti.Calendar.defaultCalendar;
	var misEventos=leerCal.getEventById('C21117E1-C02A-4689-AD13-0045DA31DADE:94DFE174-916E-4518-B2C2-705E15DED8BD');
	
	Ti.API.info('mis eventos'+JSON.stringify(misEventos));
	
}

leerCalendario();


$.eventosAlarmas.addEventListener('swipe',function(e){

	$.eventosAlarmas.close();
});

