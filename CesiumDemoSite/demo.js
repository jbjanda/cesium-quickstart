$(document).ready(function(){
      var viewer;
      var button = $('#startDemo');
      var lat = $('#lat');
      var lon = $('#lon');


      viewer = new Cesium.Viewer('cesiumContainer');
      button.on('click', init);
      var scene = viewer.scene;



    var entity = viewer.entities.add({
        label : {
            show : false
        }
    });
 // Event handler code for displaying the cartographic degrees and selecting them.
    var cartesian;
    var cartographic;
    var longitudeString;
    var latitudeString;
    var demoStarted=false; // checks if the demo is started
    // Mouse over the globe to see the cartographic position
    handlerMove = new Cesium.ScreenSpaceEventHandler(scene.canvas);
    handlerMove.setInputAction(function(movement) {
        cartesian = viewer.camera.pickEllipsoid(movement.endPosition, scene.globe.ellipsoid);
        if (cartesian && !demoStarted) {
            cartographic = Cesium.Cartographic.fromCartesian(cartesian);
            longitudeString = Cesium.Math.toDegrees(cartographic.longitude).toFixed(2);
            latitudeString = Cesium.Math.toDegrees(cartographic.latitude).toFixed(2);

            entity.position = cartesian;
            entity.label.show = true;
            entity.label.text = '(' + longitudeString + ', ' + latitudeString + ')';

        } else {
            entity.label.show = false;
        }

    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
-

   // click globe to select values
   viewer.canvas.addEventListener('click', function(){
      if (cartesian && !demoStarted) {

        console.log(longitudeString + ', ' + latitudeString);

        // below code is for demo purposes only. Need to wire up form to this event
         lat.empty();
         lon.empty();
         lat.append("<p>"+latitudeString+"</p>");
         lon.append("<p>"+longitudeString+"</p>");

        //---> insert wire up code here for lat and long form controls

      } else {

        console.log('Globe was not picked');

      }

    }, false);


//<------------------------end of events code ------------------------->




      //Function Start
      function init(){
        console.log('Here')
       // viewer = new Cesium.Viewer('cesiumContainer');
          // This is the formatted websar data. All data is hardcoded in at this time. Used in description for CZML
      var websar = "<p>CONDITIONS AT MAP CENTER 35-34.0N 073-46.0N VALID ON 2412900Z NOV2015</P>" +
      "<TABLE style=\"font-size:7pt\">" +

      "<TR><TD>WIND SPEED</TD><TD></TD><TD></TD><TD style=\"text-align:right\">020</TD>" +
      "<TD></TD><TD>KNOTS</TD><TD></TD><TD></TD><TD></TD><TD>(NAVGEM)</TD></TR>" +

      "<TR><TD>WIND DIRECTION (FROM)</TD><TD></TD><TD></TD><TD style=\"text-align:right\">375</TD>" +
      "<TD></TD><TD>DEGREES</TD><TD></TD><TD></TD><TD></TD><TD>(NAVGEM)</TD></TR>"  +

      "<TR><TD>WAVE HEIGHT</TD><TD></TD><TD></TD><TD style=\"text-align:right\">4.6</TD>" +
      "<TD></TD><TD>FEET</TD><TD></TD><TD></TD><TD></TD><TD>(WW3-NWATL)</TD></TR>" +

      "<TR><TD>PRIMARY PERIOD</TD><TD></TD><TD></TD><TD style=\"text-align:right\">O6</TD>" +
      "<TD></TD><TD>SEC</TD><TD></TD><TD></TD><TD></TD><TD>(WW3-NWATL)</TD></TR>" +

      "<TR><TD>PRIMARY DIRECTION</TD><TD></TD><TD></TD><TD style=\"text-align:right\">036</TD>" +
      "<TD></TD> <TD>DEGREES</TD> <TD></TD> <TD></TD> <TD></TD> <TD>(WW3-NWATL)</TD> </TR>" +

      "<TR> <TD>SECONDARY PERIOD</TD> <TD></TD> <TD></TD> <TD style=\"text-align:right\">08</TD>" +
      "<TD></TD> <TD>SEC</TD> <TD></TD> <TD></TD> <TD></TD> <TD>(WW3-NWATL)</TD> </TR>" +

      "<TR> <TD>SECONDARY DIRECTION</TD> <TD></TD> <TD></TD> <TD style=\"text-align:right\">013</TD>" +
      "<TD></TD> <TD>DEGREES</TD> <TD></TD> <TD></TD> <TD></TD> <TD>(WW3-NWATL)</TD> </TR>" +

      "<TR> <TD>WHITE CAPS</TD> <TD></TD> <TD></TD> <TD style=\"text-align:right\">000</TD>" +
      "<TD></TD> <TD>PROB</TD> <TD></TD> <TD></TD> <TD></TD> <TD>(WW3-NWATL)</TD> </TR>" +

      "<TR> <TD>CLOUD COVER</TD> <TD></TD> <TD></TD> <TD style=\"text-align:right\">6</TD>" +
      "<TD></TD> <TD>TENTHS</TD> <TD></TD> <TD></TD> <TD></TD> <TD>(NAVGEM)</TD> </TR>" +

      "<TR> <TD>AIR TEMPERATURE</TD> <TD></TD> <TD></TD> <TD style=\"text-align:right\">11</TD>" +
      "<TD></TD> <TD>C</TD> <TD>( 052 F)</TD> <TD></TD> <TD></TD> <TD>(NAVGEM)</TD> </TR>" +

      "<TR> <TD>SEA TEMPERATURE</TD> <TD></TD> <TD></TD> <TD style=\"text-align:right\">25</TD>" +
      "<TD></TD> <TD>C</TD> <TD>( 077 F)</TD> <TD></TD> <TD></TD> <TD>(HYCOM_GLOBAL)</TD> </TR>" +

      "<TR> <TD>CURRENT SPEED</TD> <TD></TD> <TD></TD> <TD style=\"text-align:right\">1.5</TD>" +
      "<TD></TD> <TD>KNOTS</TD> <TD></TD> <TD></TD> <TD></TD> <TD>(HYCOM_GLOBAL)</TD> </TR>" +

      "<TR> <TD>CURRENT DIRECTION (TO)</TD> <TD></TD> <TD></TD> <TD style=\"text-align:right\">032</TD>" +
      "<TD></TD> <TD>DEGREES</TD> <TD></TD> <TD></TD> <TD></TD> <TD>(HYCOM_GLOBAL)</TD> </TR>" +

      "<TR> <TD>BEGIN TWILIGHT (NAUT.)</TD> <TD></TD> <TD></TD> <TD style=\"text-align:right\">1041</TD>" +
      "<TD></TD> <TD>ZULU</TD> <TD style=\"text-align:right\">0.0151</TD> <TD></TD> <TD>LUX</TD> <TD></TD> <TD></TD> </TR>" +

      "<TR> <TD>SUNRISE</TD> <TD></TD> <TD></TD> <TD style=\"text-align:right\">1140</TD>" +
      "<TD></TD> <TD>ZULU</TD> <TD style=\"text-align:right\">438.9607</TD> <TD></TD> <TD>LUX</TD> <TD></TD> <TD> </TD> </TR>" +

      "<TR> <TD>SUN TRANSIT</TD> <TD></TD> <TD></TD> <TD style=\"text-align:right\">1642</TD>" +
      "<TD></TD> <TD>ZULU</TD> <TD style=\"text-align:right\">54489.9375</TD> <TD></TD> <TD>LUX</TD><TD style=\"text-align:right\">33.75</TD><TD></TD></TR>" +

      "<TR> <TD>SUNSET</TD> <TD></TD> <TD></TD> <TD style=\"text-align:right\">2144</TD> <TD></TD>" +
      "<TD>ZULU</TD> <TD style=\"text-align:right\">426.0207</TD> <TD></TD> <TD>LUX</TD> <TD></TD> <TD></TD> </TR>" +

      "<TR> <TD>END TWILIGHT (NAUT.)</TD> <TD></TD> <TD></TD> <TD style=\"text-align:right\">2242</TD> <TD></TD>" +
      "<TD>ZULU</TD> <TD style=\"text-align:right\">0.0293</TD> <TD></TD> <TD>LUX</TD> <TD></TD> <TD></TD> </TR>" +

      "<TR> <TD>MOON TRANSIT</TD> <TD></TD> <TD></TD> <TD style=\"text-align:right\">0402</TD> <TD></TD>" +
      "<TD>ZULU</TD> <TD style=\"text-align:right\">0.2092</TD> <TD></TD> <TD>LUX</TD> <TD style=\"text-align:right\">99\\</TD> <TD style=\"text-align:right\">68.45</TD></TR>" +


      "<TR> <TD>MOONSET</TD> <TD></TD> <TD></TD> <TD style=\"text-align:right\">1102</TD> <TD></TD> <TD>ZULU</TD>" +
      "<TD style=\"text-align:right\">0.3532</TD> <TD></TD> <TD>LUX</TD> <TD style=\"text-align:right\">100\\</TD> <TD></TD> </TR>" +

      "<TR> <TD>MOONRISE</TD> <TD></TD> <TD></TD> <TD style=\"text-align:right\">2157</TD> <TD></TD> <TD>ZULU</TD>" +
      "<TD style=\"text-align:right\">59.4582</TD> <TD></TD> <TD>LUX</TD> <TD style=\"text-align:right\">100\\</TD> <TD></TD> </TR>" +

      "<TR> <TD>WIND CHILL FACTOR</TD> <TD></TD> <TD></TD> <TD style=\"text-align:right\">011</TD> <TD></TD>" +
      "<TD>C</TD> <TD>( 052 F)</TD> <TD></TD> <TD></TD> <TD>(NAVGEM)</TD> </TR>" +

      "<TR> <TD>SURVIVAL TIME WITH SUIT SPEED</TD> <TD></TD> <TD></TD> <TD style=\"text-align:right\">25</TD> <TD></TD>" +
      "<TD>HOURS</TD> <TD></TD> <TD></TD> <TD></TD> <TD>(HYCOM_GLOBAL)</TD> </TR>" +

      "<TR> <TD>SURVIVAL TIME WITHOUT SUIT</TD> <TD></TD> <TD></TD> <TD style=\"text-align:right\">13</TD> <TD></TD>" +
      "<TD>HOURS</TD> <TD></TD> <TD></TD> <TD></TD> <TD>(HYCOM_GLOBAL)</TD> </TR> </TABLE>";
        var czml = [
                {
                  "id" : "document",
                  "name" : "CZML Point",
                  "version" : "1.0"
                },
                {
                  "id" : "path",
                  "name" : "Object Float Path",

                  "availability" : "2016-04-20T00:00:00Z/2016-04-21T00:00:00Z",
                  "path" : {
                    "material" : {
                      "solidColor" : {
                        "color" : {
                          "rgba" : [255, 255, 255, 255]
                        },

                      }
                    },
                    "width" : 1,
                    "leadTime" : 10,
                    "trailTime" : 82800,
                    "resolution" : 5
                  },

                  "position" : {
                    "epoch" : "2016-04-20T00:00:00Z",
                    "cartographicDegrees" : [
                      0,-79.6509,30.3729,-1,
              3600,-79.60867185,30.4871365,-1,
              7200,-79.55759526,30.59606461,-1,
              10800,-79.49869911,30.6998218,-1,
              14400,-79.43386428,30.79634123,-1,
              18000,-79.36412024,30.88418625,-1,
              21600,-79.29093208,30.96412595,-1,
              25200,-79.21273013,31.03810863,-1,
              28800,-79.12979165,31.10808336,-1,
              32400,-79.04302747,31.17406482,-1,
              36000,-78.95261838,31.23574241,-1,
              39600,-78.8575486,31.2935129,-1,
              43200,-78.7610983,31.34533333,-1,
              46800,-78.66659308,31.38997543,-1,
              50400,-78.57519658,31.42724211,-1,
              54000,-78.48670209,31.46012378,-1,
              57600,-78.40330455,31.48986536,-1,
              61200,-78.32578206,31.51768292,-1,
              64800,-78.25219855,31.54599326,-1,
              68400,-78.17999362,31.57512073,-1,
              72000,-78.10745289,31.6044718,-1,
              75600,-78.0335967,31.63328579,-1,
              79200,-77.95861544,31.66156867,-1,
              82800,-77.88363803,31.69149173,-1
                    ]
                  }
                },
                {
                  "id" : "point 1",
                  "name": "2016-04-20T00:00:00Z",
                  //"availability": "2016-04-20T00:00:00Z/2016-04-21T00:00:00Z",
                  "description" :websar,

                  "position" : {
                    "interval":"2016-04-20T00:00:00Z/9999-12-31T24:00:00Z",
                    "cartographicDegrees" : [-79.6509,	30.3729, 0]
                  },
                  "point": {
                    "color": {
                      "rgba": [255,0, 0, 255]
                    },
                    "outlineColor": {
                      "rgba": [255,0, 200, 255]
                    },
                    "pixelSize": {
                      "number": 15
                    }
                  }
                },
                  {
                  "id" : "point 2",
                  "name": "2016-04-20T01:00:00Z",
                     //"availability": "2016-04-20T00:00:00Z/2016-04-21T00:00:00Z",
                    "description" :websar,

                  "position" : {
                    "interval":"2016-04-20T01:00:00Z/9999-12-31T24:00:00Z",
                    "cartographicDegrees" : [-79.60867185,	30.4871365, 0]
                  },
                  "point": {
                    "color": [
                    {
                      "interval": "2016-04-20T01:00:00Z/2016-04-20T02:00:00Z",
                      "rgba": [0,0, 255, 255]
                    },
                    {
                      "interval" : "2016-04-20T02:00:00Z/9999-12-31T24:00:00Z",
                        "rgba": [128, 128, 128, 255]
                    }
                    ],
                    "outlineColor": {
                      "rgba": [0,0, 255, 150]
                    },
                    "pixelSize": {
                      "number": 15
                    }
                  }
                },

                 {
                  "id" : "point 3",
                  "name": "2016-04-20T02:00:00Z",
                  "description" :websar,

                  "position" : {
                    "interval":"2016-04-20T02:00:00Z/9999-12-31T24:00:00Z",
                    "cartographicDegrees" : [-79.55759526,30.59606461, 0]
                  },
                  "point": {
                    "color": [
                    {
                      "interval": "2016-04-20T02:00:00Z/2016-04-20T03:00:00Z",
                      "rgba": [0,0, 255, 255]
                    },
                    {
                      "interval" : "2016-04-20T03:00:00Z/9999-12-31T24:00:00Z",
                        "rgba": [128, 128, 128, 255]
                    }
                    ],
                    "outlineColor": {
                      "rgba": [0,0, 255, 150]
                    },
                    "pixelSize":{
                      "number": 15
                    }
                  }
                },
					      {
                  "id" : "point 4",
                  "name": "2016-04-20T03:00:00Z",
                  "description" :websar,

                  "position" : {
                    "interval":"2016-04-20T03:00:00Z/9999-12-31T24:00:00Z",
                    "cartographicDegrees" : [-79.49869911,30.6998218, 0]
                  },
                  "point": {
                    "color": [
                    {
                      "interval": "2016-04-20T03:00:00Z/2016-04-20T04:00:00Z",
                      "rgba": [0,0, 255, 255]
                    },
                    {
                      "interval" : "2016-04-20T04:00:00Z/9999-12-31T24:00:00Z",
                        "rgba": [128, 128, 128, 255]
                    }
                    ],
                    "outlineColor": {
                      "rgba": [0,0, 255, 150]
                    },
                    "pixelSize": {
                      "number": 15
                    }
                  }
                },
                {
                  "id" : "point 5",
                  "name": "2016-04-20T04:00:00Z",
                  "description" :websar,

                  "position" : {
                    "interval":"2016-04-20T04:00:00Z/9999-12-31T24:00:00Z",
                    "cartographicDegrees" : [-79.43386428,30.79634123, 0]
                  },
                  "point": {
                    "color": [
                    {
                      "interval": "2016-04-20T04:00:00Z/2016-04-20T05:00:00Z",
                      "rgba": [0,0, 255, 255]
                    },
                    {
                      "interval" : "2016-04-20T05:00:00Z/9999-12-31T24:00:00Z",
                        "rgba": [128, 128, 128, 255]
                    }
                    ],
                    "outlineColor": {
                      "rgba": [0,0, 255, 150]
                    },
                    "pixelSize": {
                      "number": 15
                    }
                  }
                },
				        {
                  "id" : "point 6",
                  "name": "2016-04-20T05:00:00Z",
                  "description" :websar,

                  "position" : {
                    "interval":"2016-04-20T05:00:00Z/9999-12-31T24:00:00Z",
                    "cartographicDegrees" : [-79.36412024, 30.88418625, 0]
                  },
                  "point": {
                    "color": [
                    {
                      "interval": "2016-04-20T05:00:00Z/2016-04-20T06:00:00Z",
                      "rgba": [0,0, 255, 255]
                    },
                    {
                      "interval" : "2016-04-20T06:00:00Z/9999-12-31T24:00:00Z",
                        "rgba": [128, 128, 128, 255]
                    }
                    ],
                    "outlineColor": {
                      "rgba": [0,0, 255, 150]
                    },
                    "pixelSize": {
                      "number": 15
                    }
                  }
                },
					      {
                  "id" : "point 7",
                  "name": "2016-04-20T06:00:00Z",
                  "description" :websar,

                  "position" : {
                    "interval":"2016-04-20T06:00:00Z/9999-12-31T24:00:00Z",
                    "cartographicDegrees" : [-79.29093208,30.96412595, 0]
                  },
                  "point": {
                    "color": [
                    {
                      "interval": "2016-04-20T06:00:00Z/2016-04-20T07:00:00Z",
                      "rgba": [0,0, 255, 255]
                    },
                    {
                      "interval" : "2016-04-20T07:00:00Z/9999-12-31T24:00:00Z",
                        "rgba": [128, 128, 128, 255]
                    }
                    ],
                    "outlineColor": {
                      "rgba": [0,0, 255, 150]
                    },
                    "pixelSize": {
                      "number": 15
                    }
                  }
                },
						    {
                  "id" : "point 8",
                  "name": "2016-04-20T07:00:00Z",
                  "description" :websar,

                  "position" : {
                    "interval":"2016-04-20T07:00:00Z/9999-12-31T24:00:00Z",
                    "cartographicDegrees" : [-79.21273013,31.03810863, 0]
                  },
                  "point": {
                    "color": [
                    {
                      "interval": "2016-04-20T07:00:00Z/2016-04-20T08:00:00Z",
                      "rgba": [0,0, 255, 255]
                    },
                    {
                      "interval" : "2016-04-20T08:00:00Z/9999-12-31T24:00:00Z",
                        "rgba": [128, 128, 128, 255]
                    }
                    ],
                    "outlineColor": {
                      "rgba": [0,0, 255, 150]
                    },
                    "pixelSize": {
                      "number": 15
                    }
                  }
                },
						    {
                  "id" : "point 9",
                  "name": "2016-04-20T08:00:00Z",
                  "description" :websar,

                  "position" : {
                    "interval":"2016-04-20T08:00:00Z/9999-12-31T24:00:00Z",
                    "cartographicDegrees" : [-79.12979165,31.10808336, 0]
                  },
                  "point": {
                    "color": [
                    {
                      "interval": "2016-04-20T08:00:00Z/2016-04-20T09:00:00Z",
                      "rgba": [0,0, 255, 255]
                    },
                    {
                      "interval" : "2016-04-20T09:00:00Z/9999-12-31T24:00:00Z",
                        "rgba": [128, 128, 128, 255]
                    }
                    ],
                    "outlineColor": {
                      "rgba": [0,0, 255, 150]
                    },
                    "pixelSize": {
                      "number": 15
                    }
                  }
                },
					      {
                  "id" : "point 10",
                  "name": "2016-04-20T09:00:00Z",
                  "description" :websar,

                  "position" : {
                    "interval":"2016-04-20T09:00:00Z/9999-12-31T24:00:00Z",
                    "cartographicDegrees" : [-79.04302747,31.17406482, 0]
                  },
                  "point": {
                    "color": [
                    {
                      "interval": "2016-04-20T09:00:00Z/2016-04-20T10:00:00Z",
                      "rgba": [0,0, 255, 255]
                    },
                    {
                      "interval" : "2016-04-20T10:00:00Z/9999-12-31T24:00:00Z",
                        "rgba": [128, 128, 128, 255]
                    }
                    ],
                    "outlineColor": {
                      "rgba": [0,0, 255, 150]
                    },
                    "pixelSize": {
                      "number": 15
                    }
                  }
                },
					      {
                  "id" : "point 11",
                  "name": "2016-04-20T10:00:00Z",
                  "description" :websar,

                  "position" : {
                    "interval":"2016-04-20T10:00:00Z/9999-12-31T24:00:00Z",
                    "cartographicDegrees" : [-78.95261838,31.23574241, 0]
                  },
                  "point": {
                    "color": [
                    {
                      "interval": "2016-04-20T10:00:00Z/2016-04-20T11:00:00Z",
                      "rgba": [0,0, 255, 255]
                    },
                    {
                      "interval" : "2016-04-20T11:00:00Z/9999-12-31T24:00:00Z",
                        "rgba": [128, 128, 128, 255]
                    }
                    ],
                    "outlineColor": {
                      "rgba": [0,0, 255, 150]
                    },
                    "pixelSize": {
                      "number": 15
                    }
                  }
                },
					      {
                  "id" : "point 12",
                  "name": "2016-04-20T11:00:00Z",
                  "description" :websar,

                  "position" : {
                    "interval":"2016-04-20T11:00:00Z/9999-12-31T24:00:00Z",
                    "cartographicDegrees" : [-78.8575486,31.2935129, 0]
                  },
                  "point": {
                    "color": [
                    {
                      "interval": "2016-04-20T11:00:00Z/2016-04-20T12:00:00Z",
                      "rgba": [0,0, 255, 255]
                    },
                    {
                      "interval" : "2016-04-20T12:00:00Z/9999-12-31T24:00:00Z",
                        "rgba": [128, 128, 128, 255]
                    }
                    ],
                    "outlineColor": {
                      "rgba": [0,0, 255, 150]
                    },
                    "pixelSize": {
                      "number": 15
                    }
                  }
                },
					      {
                  "id" : "point 13",
                  "name": "2016-04-20T12:00:00Z",
                  "description" :websar,

                  "position" : {
                    "interval":"2016-04-20T12:00:00Z/9999-12-31T24:00:00Z",
                    "cartographicDegrees" : [-78.7610983,31.34533333, 0]
                  },
                  "point": {
                    "color": [
                    {
                      "interval": "2016-04-20T12:00:00Z/2016-04-20T13:00:00Z",
                      "rgba": [0,0, 255, 255]
                    },
                    {
                      "interval" : "2016-04-20T13:00:00Z/9999-12-31T24:00:00Z",
                        "rgba": [128, 128, 128, 255]
                    }
                    ],
                    "outlineColor": {
                      "rgba": [0,0, 255, 150]
                    },
                    "pixelSize": {
                      "number": 15
                    }
                  }
                },
					      {
                  "id" : "point 14",
                  "name": "2016-04-20T13:00:00Z",
                  "description" :websar,

                  "position" : {
                    "interval":"2016-04-20T13:00:00Z/9999-12-31T24:00:00Z",
                    "cartographicDegrees" : [-78.66659308,31.38997543, 0]
                  },
                  "point": {
                    "color": [
                    {
                      "interval": "2016-04-20T13:00:00Z/2016-04-20T14:00:00Z",
                      "rgba": [0,0, 255, 255]
                    },
                    {
                      "interval" : "2016-04-20T14:00:00Z/9999-12-31T24:00:00Z",
                        "rgba": [128, 128, 128, 255]
                    }
                    ],
                    "outlineColor": {
                      "rgba": [0,0, 255, 150]
                    },
                    "pixelSize": {
                      "number": 15
                    }
                  }
                },
						    {
                  "id" : "point 15",
                  "name": "2016-04-20T14:00:00Z",
                  "description" :websar,

                  "position" : {
                    "interval":"2016-04-20T14:00:00Z/9999-12-31T24:00:00Z",
                    "cartographicDegrees" : [-78.57519658,31.42724211, 0]
                  },
                  "point": {
                    "color": [
                    {
                      "interval": "2016-04-20T14:00:00Z/2016-04-20T15:00:00Z",
                      "rgba": [0,0, 255, 255]
                    },
                    {
                      "interval" : "2016-04-20T15:00:00Z/9999-12-31T24:00:00Z",
                        "rgba": [128, 128, 128, 255]
                    }
                    ],
                    "outlineColor": {
                      "rgba": [0,0, 255, 150]
                    },
                    "pixelSize": {
                      "number": 15
                    }
                  }
                },
						    {
                  "id" : "point 16",
                  "name": "2016-04-20T15:00:00Z",
                  "description" :websar,

                  "position" : {
                    "interval":"2016-04-20T15:00:00Z/9999-12-31T24:00:00Z",
                    "cartographicDegrees" : [-78.48670209,31.46012378, 0]
                  },
                  "point": {
                    "color": [
                    {
                      "interval": "2016-04-20T15:00:00Z/2016-04-20T16:00:00Z",
                      "rgba": [0,0, 255, 255]
                    },
                    {
                      "interval" : "2016-04-20T16:00:00Z/9999-12-31T24:00:00Z",
                        "rgba": [128, 128, 128, 255]
                    }
                    ],
                    "outlineColor": {
                      "rgba": [0,0, 255, 150]
                    },
                    "pixelSize": {
                      "number": 15
                    }
                  }
                },
						    {
                  "id" : "point 17",
                  "name": "2016-04-20T16:00:00Z",
                  "description" :websar,

                  "position" : {
                    "interval":"2016-04-20T16:00:00Z/9999-12-31T24:00:00Z",
                    "cartographicDegrees" : [-78.40330455,31.48986536, 0]
                  },
                  "point": {
                    "color": [
                    {
                      "interval": "2016-04-20T16:00:00Z/2016-04-20T17:00:00Z",
                      "rgba": [0,0, 255, 255]
                    },
                    {
                      "interval" : "2016-04-20T17:00:00Z/9999-12-31T24:00:00Z",
                        "rgba": [128, 128, 128, 255]
                    }
                    ],
                    "outlineColor": {
                      "rgba": [0,0, 255, 150]
                    },
                    "pixelSize": {
                      "number": 15
                    }
                  }
                },
					      {
                  "id" : "point 18",
                  "name": "2016-04-20T17:00:00Z",
                  "description" :websar,

                  "position" : {
                    "interval":"2016-04-20T17:00:00Z/9999-12-31T24:00:00Z",
                    "cartographicDegrees" : [-78.32578206,31.51768292, 0]
                  },
                  "point": {
                    "color": [
                    {
                      "interval": "2016-04-20T17:00:00Z/2016-04-20T18:00:00Z",
                      "rgba": [0,0, 255, 255]
                    },
                    {
                      "interval" : "2016-04-20T18:00:00Z/9999-12-31T24:00:00Z",
                        "rgba": [128, 128, 128, 255]
                    }
                    ],
                    "outlineColor": {
                      "rgba": [0,0, 255, 150]
                    },
                    "pixelSize": {
                      "number": 15
                    }
                  }
                },
					      {
                  "id" : "point 19",
                  "name": "Lon: -78.25219855 Lat: 31.54599326 -- 2016-04-20T18:00:00Z",
                  "description" :websar,

                  "position" : {
                    "interval":"2016-04-20T18:00:00Z/9999-12-31T24:00:00Z",
                    "cartographicDegrees" : [-78.25219855,31.54599326, 0]
                  },
                  "point": {
                    "color": [
                    {
                      "interval": "2016-04-20T18:00:00Z/2016-04-20T19:00:00Z",
                      "rgba": [0,0, 255, 255]
                    },
                    {
                      "interval" : "2016-04-20T19:00:00Z/9999-12-31T24:00:00Z",
                        "rgba": [128, 128, 128, 255]
                    }
                    ],
                    "outlineColor": {
                      "rgba": [0,0, 255, 150]
                    },
                    "pixelSize": {
                      "number": 15
                    }
                  }
                },
					      {
                  "id" : "point 20",
                  "name": "2016-04-20T19:00:00Z",
                  "description" :websar,

                  "position" : {
                    "interval":"2016-04-20T19:00:00Z/9999-12-31T24:00:00Z",
                    "cartographicDegrees" : [-78.17999362,31.57512073, 0]
                  },
                  "point": {
                    "color": [
                    {
                      "interval": "2016-04-20T19:00:00Z/2016-04-20T20:00:00Z",
                      "rgba": [0,0, 255, 255]
                    },
                    {
                      "interval" : "2016-04-20T20:00:00Z/9999-12-31T24:00:00Z",
                        "rgba": [128, 128, 128, 255]
                    }
                    ],
                    "outlineColor": {
                      "rgba": [0,0, 255, 150]
                    },
                    "pixelSize": {
                      "number": 15
                    }
                  }
                },
					      {
                  "id" : "point 21",
                  "name": "2016-04-20T20:00:00Z",
                  "description" :websar,

                  "position" : {
                    "interval":"2016-04-20T20:00:00Z/9999-12-31T24:00:00Z",
                    "cartographicDegrees" : [-78.10745289,31.6044718, 0]
                  },
                  "point": {
                    "color": [
                    {
                      "interval": "2016-04-20T20:00:00Z/2016-04-20T21:00:00Z",
                      "rgba": [0,0, 255, 255]
                    },
                    {
                      "interval" : "2016-04-20T21:00:00Z/9999-12-31T24:00:00Z",
                        "rgba": [128, 128, 128, 255]
                    }
                    ],
                    "outlineColor": {
                      "rgba": [0,0, 255, 150]
                    },
                    "pixelSize": {
                      "number": 15
                    }
                  }
                },
					      {
                  "id" : "point 22",
                  "name": "2016-04-20T21:00:00Z",
                  "description" :websar,

                  "position" : {
                    "interval":"2016-04-20T21:00:00Z/9999-12-31T24:00:00Z",
                    "cartographicDegrees" : [-78.0335967,31.63328579, 0]
                  },
                  "point": {
                    "color": [
                    {
                      "interval": "2016-04-20T21:00:00Z/2016-04-20T22:00:00Z",
                      "rgba": [0,0, 255, 255]
                    },
                    {
                      "interval" : "2016-04-20T22:00:00Z/9999-12-31T24:00:00Z",
                        "rgba": [128, 128, 128, 255]
                    }
                    ],
                    "outlineColor": {
                      "rgba": [0,0, 255, 150]
                    },
                    "pixelSize": {
                      "number": 15
                    }
                  }
                },
					      {
                  "id" : "point 23",
                  "name": "2016-04-20T22:00:00Z",
                  "description" :websar,

                  "position" : {
                    "interval":"2016-04-20T22:00:00Z/9999-12-31T24:00:00Z",
                    "cartographicDegrees" : [-77.95861544,31.66156867, 0]
                  },
                  "point": {
                    "color": [
                    {
                      "interval": "2016-04-20T22:00:00Z/2016-04-20T23:00:00Z",
                      "rgba": [0,0, 255, 255]
                    },
                    {
                      "interval" : "2016-04-20T23:00:00Z/9999-12-31T24:00:00Z",
                        "rgba": [128, 128, 128, 255]
                    }
                    ],
                    "outlineColor": {
                      "rgba": [0,0, 255, 150]
                    },
                    "pixelSize": {
                      "number": 15
                    }
                  }
                },
                {
                  "id" : "point 24",
                  "name": "2016-04-20T00:00:00Z",
              "availability": "2016-04-20T00:00:00Z/2016-04-21T00:00:00Z",
                  "description" :websar,

                  "position" : {
                    "interval":"2016-04-20T23:00:00Z/9999-12-31T24:00:00Z",
                    "cartographicDegrees" : [-77.88363803,31.69149173, 0]
                  },
                  "point": {
                    "color": [
                    {
                      "interval": "2016-04-20T23:00:00Z/9999-12-31T24:00:00Z",
                      "rgba": [0,0, 255, 255]
                    },

                    ],
                    "outlineColor": {
                      "rgba": [0,0, 255, 150]
                    },
                    "pixelSize": {
                      "number": 15
                    }
                  }
                }
                ]; // end czml

        var dataSource = Cesium.CzmlDataSource.load(czml);
        viewer.dataSources.add(dataSource);
        var frame= new Cesium.HeadingPitchRange(0.05,-.30, 200500);
        demoStarted=true; // This removes the cartographic degree label from the viewer when the demo starts.
        viewer.zoomTo(dataSource, frame);
      }


});

