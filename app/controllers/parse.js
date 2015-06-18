var args = arguments[0] || {};

$.parse.addEventListener('swipe',function(e){
	if(e.direction=='left'){
		$.parse.close(); 
	}
});

//IMPLEMENTAICON DEL MODULO DE PARSE meidante API REST 

if(!Ti.App.Properties.hasProperty("tokenDev")){
	Ti.App.Properties.setString("tokenDev","");
}

var plataforma = Titanium.Platform.osname;
var deviceToken;
var appId = '';
var apiKey = '';

if (plataforma == 'iphone' || plataforma == 'ipad') {

	function registerForPush() {
		Ti.Network.registerForPushNotifications({
			success : deviceTokenSuccess,
			error : deviceTokenError,
			callback : receivePush
		});
		// Remove event listener once registered for push notifications
		Ti.App.iOS.removeEventListener('usernotificationsettings', registerForPush);
	};

	// Wait for user settings to be registered before registering for push notifications
	Ti.App.iOS.addEventListener('usernotificationsettings', registerForPush);

	Ti.App.iOS.registerUserNotificationSettings({
		types : [Ti.App.iOS.USER_NOTIFICATION_TYPE_ALERT, Ti.App.iOS.USER_NOTIFICATION_TYPE_BADGE,Ti.App.iOS.USER_NOTIFICATION_TYPE_SOUND]
	});

	function receivePush(e) {
		alert('App Informa: ' + e.data.alert);
		Ti.API.info(JSON.stringify(e));
		if (e.data.badge > 0) { 
			Ti.App.iOS.scheduleLocalNotification({
			    date: new Date(new Date().getTime() + 3000),
			    badge: "-1"
			});
		}
	};

	function deviceTokenSuccess(e) {
		deviceToken = e.deviceToken;
		Ti.API.info('hay un token ' + deviceToken);
		if(Ti.App.Properties.getString("tokenDev")==""){
			RegisterParse(deviceToken);
		}
	};

	function deviceTokenError(e) {
		var a = Titanium.UI.createAlertDialog({
			title : 'Push',
			message : 'error en metodo subscripcion ' + e.error,
			ok : 'Ok'
		});
		a.show();
	};

	function RegisterParse(tokenDevice) {
		var url = 'https://api.parse.com/1/installations';
		var equipoxhr = Ti.Network.createHTTPClient({
			onload : function(e) {
				alert(this.responseText);
				Ti.App.Properties.setString("tokenDev",tokenDevice);
			},
			onerror : function(e) {

				var a = Titanium.UI.createAlertDialog({
					title : 'Push',
					message : e,
					ok : 'Ok'
				});
				a.show();

			},
			timeout : 60000

		});

		var params = {
			'deviceType' : 'ios',
			'deviceToken' : deviceToken,
			'channels' : ["alertas"]
		};
		paramsJSON = JSON.stringify(params);

		equipoxhr.open("POST", url);
		equipoxhr.setRequestHeader('Content-Type', 'application/json');
		equipoxhr.setRequestHeader('X-Parse-Application-Id', appId);
		equipoxhr.setRequestHeader('X-Parse-REST-API-Key', apiKey);
		equipoxhr.send(paramsJSON);

	};
}

$.parse.addEventListener('click',function(){
	$.parse.close();
});




///borrar dispositivo del servicio de push

var appId = '';
var MasterKey = ' añador la masterkey';
var urlDelete='https://api.parse.com/1/installations/'+ objectID //object id generado al registrar el dispositivo
function DeleteParse(tokenDevice) {
		var url = urlDelete;
		var equipoxhr = Ti.Network.createHTTPClient({
			onload : function(e) {
				alert(this.responseText);
			},
			onerror : function(e) {

				var a = Titanium.UI.createAlertDialog({
					title : 'Push',
					message : e,
					ok : 'Ok'
				});
				a.show();

			},
			timeout : 60000

		});


		equipoxhr.open("DELETE", url);
		equipoxhr.setRequestHeader('Content-Type', 'application/json');
		equipoxhr.setRequestHeader('X-Parse-Application-Id', appId);
		equipoxhr.setRequestHeader('X-Parse-Master-Key', MasterKey);
		equipoxhr.send();

	};

