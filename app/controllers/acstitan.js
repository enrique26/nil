var args = arguments[0] || {};
//subscribir para push notifications con acs
var Cloud=require('ti.cloud');
//generar token de registro IOS
var deviceToken=null;
if(parseInt(Ti.Platform.version.split(".")[0]) >= 8){
	
    function registerForPush() {
 
 // Remove event listener once registered for push notifications
        Ti.App.iOS.removeEventListener('usernotificationsettings', registerForPush); 
 
        Ti.Network.registerForPushNotifications({
            success: deviceTokenSuccess,
            error: deviceTokenError,
            callback: receivePush
        });
    };
    
    // Wait for user settings to be registered before registering for push notifications
	Ti.App.iOS.addEventListener('usernotificationsettings', registerForPush);
 
 // Register notification types to use
    Ti.App.iOS.registerUserNotificationSettings({
	    types: [
            Ti.App.iOS.USER_NOTIFICATION_TYPE_ALERT,
            Ti.App.iOS.USER_NOTIFICATION_TYPE_BADGE,
            Ti.App.iOS.USER_NOTIFICATION_TYPE_SOUND
        ]
    });
}

//procesar las notificaiones entrantes
function receivePush(e){
	alert('notificaicon recibida'+JSON.stringify(e));
	//reiniciar el contador de notificaciones en el icono
	Ti.App.iOS.scheduleLocalNotification({
		    date: new Date(new Date().getTime() + 3000),
		    badge: "-1"
		});
};

function deviceTokenSuccess(e){
	deviceToken=e.deviceToken;
};

function deviceTokenError(e){
	alert('fallo la el registro de notificaiones '+e.error);
}

//registrar el dispositivo en el servicio de notificaiones usando el token generado
function subscribeToChannel () {
 // Subscribes the device to the 'news_alerts' channel
 // Specify the push type as either 'android' for Android or 'ios' for iOS
    Cloud.PushNotifications.subscribeToken({
        device_token: deviceToken,
        channel: 'alertas',
        type: Ti.Platform.name == 'android' ? 'android' : 'ios'
    }, function (e) {
 if (e.success) {
            alert('Subscribed');
            Ti.API.info('mi token_'+deviceToken);
        } else {
            alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
        }
    });
};
setTimeout(function(e){
	subscribeToChannel();
},10000);

