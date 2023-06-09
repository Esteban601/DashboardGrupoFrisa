var centro_A = "Centroamérica y el Caribe";
var mexico = "México"
if(locale == "en") {
	centro_A = "Central American and Caribbean"
	mexico = "Mexico"
}
var map = AmCharts.makeChart("amchart", {
    "type": "map",
    "theme": "light",
	"dragMap": false,                // disables map dragging/panning
    "zoomOnDoubleClick": false,      // disables zoom on double click

	"zoomControl": {
    	    "homeButtonEnabled": false,

		"zoomControlEnabled": false,
		"panControlEnabled":false
	},
	"fontFamily":"roboto",


    "balloon": {
        horizontalPadding: 20,
        verticalPadding: 10,
        maxWidth: 250,
        borderAlpha: 0,
        borderThickness: 0,
        pointerWidth: 0,
		fontFamily:"roboto",
		fontSize:"14",
    },

    "dataProvider": {
        "map": "worldLow",
        "zoomLevel": 2.4,
        "zoomLongitude": -60,
        "zoomLatitude": 0,
        "getAreasFromMap": true,
        "areas": [
                        {
							titleL: centro_A,
							id: "CU",
							color: "#437634",
							customData: centro_A+": 93 MWp",
							groupId: "centro_america",
							rollOverOutlineColor:"#112E3A"

						}, {
							titleL: centro_A,
							id: "GT",
							color: "#437634",
							customData: centro_A+": 93 MWp",
							groupId: "centro_america",
							rollOverOutlineColor:"#112E3A"

						}, {
							titleL: centro_A,
							id: "PA",
							color: "#437634",
							customData: centro_A+": 93 MWp",
							groupId: "centro_america",
							rollOverOutlineColor:"#112E3A"

						}, {
							titleL: centro_A,
							id: "NI",
							color: "#437634",
							customData: centro_A+": 93 MWp",
							groupId: "centro_america",
							rollOverOutlineColor:"#112E3A"

						}, {
							titleL: centro_A,
							id: "CR",
							color: "#437634",
							customData: centro_A+": 93 MWp",
							groupId: "centro_america",
							rollOverOutlineColor:"#112E3A"

						},{
							titleL: centro_A,
							id: "HN",
							color: "#437634",
							customData: centro_A+": 93 MWp",
							groupId: "centro_america",
							rollOverOutlineColor:"#112E3A"

						},{
							titleL: centro_A,
							id: "SV",
							color: "#437634",
							customData: centro_A+": 93 MWp",
							groupId: "centro_america",
							rollOverOutlineColor:"#112E3A"

						},{
							titleL: centro_A,
							id: "BZ",
							color: "#437634",
							customData: centro_A+": 93 MWp",
							groupId: "centro_america",
							rollOverOutlineColor:"#112E3A"

						}, {
							titleL: centro_A,
							id: "JM",
							color: "#437634",
							customData: centro_A+": 93 MWp",
							groupId: "centro_america",
							rollOverOutlineColor:"#112E3A"

						},
                            {
							titleL: centro_A,
							id: "HT",
							color: "#437634",
							customData: centro_A+": 93 MWp",
							groupId: "centro_america",
							rollOverOutlineColor:"#112E3A"

						},  {
							titleL: centro_A,
							id: "DO",
							color: "#437634",
							customData: centro_A+": 93 MWp",
							groupId: "centro_america",
							rollOverOutlineColor:"#112E3A"

						},{
							titleL: centro_A,
							id: "PR",
							color: "#437634",
							customData: centro_A+": 93 MWp",
							groupId: "centro_america",
							rollOverOutlineColor:"#112E3A"

						},
						{
							titleL: mexico,
							id: "MX",
							color: "#63b54e",
							customData: mexico+": 1,028 MWp",
							groupId: mexico,
							rollOverOutlineColor:"#112E3A"

						}, {
							titleL: "Colombia",
							id: "CO",
							color: "#63b54e",
							customData: "Colombia: 108 MWp",
							groupId: "Colombia",
							rollOverOutlineColor:"#112E3A"

						}, {
							titleL: "Chile",
							id: "CL",
							color: "#437634",
							customData: "Chile: 579 MWp",
							groupId: "Chile",
							rollOverOutlineColor:"#112E3A"
						}
        ],


    },
    "areasSettings": {
        "unlistedAreasColor": "#CBC4BC",
        "balloonText": "[[customData]]",
        "selectable": false,
		"color":"#CBC4BC",
		"rollOverOutlineColor":undefined
    }
});
// ["#1c809d","#8eb4e3","#25abd1","#073855","#a8dded","#396077","#91919"]
