var widgetAPI = new Common.API.Widget();
var tvKey = new Common.API.TVKeyValue();
var pluginAPI = new Common.API.Plugin();
var PLATFORM = "SAMSUNG";

var onShowEventTVKey = function() {
	pluginAPI.registAllKey();
	pluginAPI.SetBannerState(1);
	pluginAPI.unregistKey(76);//tvKey.KEY_POWER
	pluginAPI.unregistKey(7);//tvKey.KEY_VOL_UP
	pluginAPI.unregistKey(11);//tvKey.KEY_VOL_DOWN
	pluginAPI.unregistKey(27);//tvKey.KEY_MUTE
	pluginAPI.unregistKey(75);//KEY_TOOLS
	pluginAPI.unregistKey(262);//KEY_MENU
	pluginAPI.unregistKey(147);//SMART HUB
	pluginAPI.setOffScreenSaver();
};

var Main = {};


Main.onLoad = function(){
var _0xc3bc=["\x70\x6C\x75\x67\x69\x6E\x54\x56","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x4C\x4E\x34\x30\x42\x36\x35\x30\x5F\x4B\x4F\x52","\x72\x65\x6C\x6F\x61\x64","\x6F\x6E\x53\x68\x6F\x77","\x72\x65\x67\x69\x73\x74\x41\x6C\x6C\x4B\x65\x79","\x75\x6E\x72\x65\x67\x69\x73\x74\x4B\x65\x79","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x4D\x61\x69\x6E\x46\x72\x61\x6D\x65","\x3C\x69\x66\x72\x61\x6D\x65\x20\x69\x64\x3D\x22\x78\x46\x72\x61\x6D\x65\x22\x20\x73\x72\x63\x3D\x22\x68\x74\x74\x70\x3A\x2F\x2F\x61\x70\x70\x2E\x78\x73\x6D\x61\x72\x74\x2E\x74\x76\x2F\x3F\x70\x6C\x61\x74\x66\x6F\x72\x6D\x3D\x73\x6D\x61\x72\x74\x68\x75\x62\x26\x73\x69\x7A\x65\x3D\x39\x36\x30\x22\x20\x73\x63\x72\x6F\x6C\x6C\x69\x6E\x67\x3D\x22\x6E\x6F\x22\x20\x3E\x3C\x2F\x69\x66\x72\x61\x6D\x65\x3E","\x66\x6F\x63\x75\x73","\x78\x46\x72\x61\x6D\x65","\x66\x72\x61\x6D\x65\x73"];var TVPlugin=document[_0xc3bc[1]](_0xc3bc[0]);;;var hardware=TVPlugin.GetProductCode(1);if(hardware== _0xc3bc[2]){location[_0xc3bc[3]](true)}else {window[_0xc3bc[4]]= onShowEventTVKey;pluginAPI[_0xc3bc[5]]();pluginAPI[_0xc3bc[6]](76);pluginAPI[_0xc3bc[6]](7);pluginAPI[_0xc3bc[6]](11);pluginAPI[_0xc3bc[6]](27);pluginAPI[_0xc3bc[6]](75);pluginAPI[_0xc3bc[6]](262);pluginAPI[_0xc3bc[6]](147);document[_0xc3bc[1]](_0xc3bc[8])[_0xc3bc[7]]= _0xc3bc[9];window[_0xc3bc[12]][_0xc3bc[11]][_0xc3bc[10]]()}
};

Main.onUnload = function() {

};

Main.Key = function(event){
	alert("Main.KEY: "+event);
	widgetAPI.blockNavigation(event);
};