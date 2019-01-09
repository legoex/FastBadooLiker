
var oldurl = "";

var AutoYesService;
var RemoveAlertService;
var serv;
var running = 1;

var URLHandlerService = setInterval(URLHandler, 1000);

function URLHandler() {
	if(window.location.href.indexOf("encounters") > -1) {
		if(window.location.href != oldurl){
			AutoYesService = setInterval(AutoYes, 50);
			RemoveAlertService = setInterval(RemoveAlert, 50);
		}
	}
	else
	{
		if(running == 1){
			clearInterval(AutoYesService);
		}

		clearInterval(RemoveAlertService);
	}

	oldurl = window.location.href;
}

function AutoYes() {
	if(window.location.href.indexOf("encounters") > -1) {
		if(typeof document.getElementsByClassName('wizard_cloud')[0] == "undefined" && running == 1){
			document.getElementsByClassName('js-profile-header-vote-yes')[0].click();
			
		}
		else
		{
			running = 0;
			clearInterval(AutoYesService);
		}
	}
}

function RemoveAlert() {
	if(window.location.href.indexOf("encounters") > -1) {
		if(typeof document.getElementsByClassName('wizard_cloud')[0] == "undefined" || running == 0){
			for (i = 0; i < document.getElementsByClassName('js-ovl-close').length; i++) {
				document.getElementsByClassName('js-ovl-close')[i].click();
				serv = serv + 1;
			
			}
		}
	}
}

console.log('Liked ' + serv);