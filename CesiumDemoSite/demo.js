$(document).ready(function(){
      var viewer;
      var button = $('#startDemo');
      button.on('click', init);

      function init(){
        console.log('Here')
        viewer = new Cesium.Viewer('cesiumContainer');
var czml = [
                {
                  "id" : "document",
                  "name" : "CZML Point",
                  "version" : "1.0"
                },
                {
                  "id" : "point 1",
                  "name": "point 1",
                  "availability": "2016-04-20T00:00:00Z/2016-04-21T00:00:00Z",
                  "description" :"<p>CONDITIONS AT MAP CENTER 35-34.0N 073-46.0N VALID ON 2412900Z NOV2015</P>" +
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
"<TD>HOURS</TD> <TD></TD> <TD></TD> <TD></TD> <TD>(HYCOM_GLOBAL)</TD> </TR> </TABLE>",

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
                      "number": 10
                    }
                  }
                },
                  {
                  "id" : "point 2",
                  "name": "point 2",
                    "description" :"<p>CONDITIONS AT MAP CENTER 35-34.0N 073-46.0N VALID ON 2412900Z NOV2015</P>" +
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
"<TD>HOURS</TD> <TD></TD> <TD></TD> <TD></TD> <TD>(HYCOM_GLOBAL)</TD> </TR> </TABLE>",

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
                      "number": 10
                    }
                  }
                },

                 {
                  "id" : "point 3",
                  "name": "Point 3",
                  "description" :"<p>CONDITIONS AT MAP CENTER 35-34.0N 073-46.0N VALID ON 2412900Z NOV2015</P>" +
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
"<TD>HOURS</TD> <TD></TD> <TD></TD> <TD></TD> <TD>(HYCOM_GLOBAL)</TD> </TR> </TABLE>",

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
                      "number": 10
                    }
                  }
                },
					{
                  "id" : "point 4",
                  "name": "Point 4",
                  "description" :"<p>CONDITIONS AT MAP CENTER 35-34.0N 073-46.0N VALID ON 2412900Z NOV2015</P>" +
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
"<TD>HOURS</TD> <TD></TD> <TD></TD> <TD></TD> <TD>(HYCOM_GLOBAL)</TD> </TR> </TABLE>",

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
                      "number": 10
                    }
                  }
                },
                {
                  "id" : "point 5",
                  "name": "Point 5",
                  "description" :"<p>CONDITIONS AT MAP CENTER 35-34.0N 073-46.0N VALID ON 2412900Z NOV2015</P>" +
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
"<TD>HOURS</TD> <TD></TD> <TD></TD> <TD></TD> <TD>(HYCOM_GLOBAL)</TD> </TR> </TABLE>",

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
                      "number": 10
                    }
                  }
                },
				{
                  "id" : "point 6",
                  "name": "Point 6",
                  "description" :"<p>CONDITIONS AT MAP CENTER 35-34.0N 073-46.0N VALID ON 2412900Z NOV2015</P>" +
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
"<TD>HOURS</TD> <TD></TD> <TD></TD> <TD></TD> <TD>(HYCOM_GLOBAL)</TD> </TR> </TABLE>",

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
                      "number": 10
                    }
                  }
                },
					{
                  "id" : "point 7",
                  "name": "Point 7",
                  "description" :"<p>CONDITIONS AT MAP CENTER 35-34.0N 073-46.0N VALID ON 2412900Z NOV2015</P>" +
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
"<TD>HOURS</TD> <TD></TD> <TD></TD> <TD></TD> <TD>(HYCOM_GLOBAL)</TD> </TR> </TABLE>",

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
                      "number": 10
                    }
                  }
                },
						{
                  "id" : "point 8",
                  "name": "Point 8",
                  "description" :"<p>CONDITIONS AT MAP CENTER 35-34.0N 073-46.0N VALID ON 2412900Z NOV2015</P>" +
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
"<TD>HOURS</TD> <TD></TD> <TD></TD> <TD></TD> <TD>(HYCOM_GLOBAL)</TD> </TR> </TABLE>",

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
                      "number": 10
                    }
                  }
                },
						{
                  "id" : "point 9",
                  "name": "Point 9",
                  "description" :"<p>CONDITIONS AT MAP CENTER 35-34.0N 073-46.0N VALID ON 2412900Z NOV2015</P>" +
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
"<TD>HOURS</TD> <TD></TD> <TD></TD> <TD></TD> <TD>(HYCOM_GLOBAL)</TD> </TR> </TABLE>",

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
                      "number": 10
                    }
                  }
                },
					{
                  "id" : "point 10",
                  "name": "Point 10",
                  "description" :"<p>CONDITIONS AT MAP CENTER 35-34.0N 073-46.0N VALID ON 2412900Z NOV2015</P>" +
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
"<TD>HOURS</TD> <TD></TD> <TD></TD> <TD></TD> <TD>(HYCOM_GLOBAL)</TD> </TR> </TABLE>",

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
                      "number": 10
                    }
                  }
                },
					{
                  "id" : "point 11",
                  "name": "Point 11",
                  "description" :"<p>CONDITIONS AT MAP CENTER 35-34.0N 073-46.0N VALID ON 2412900Z NOV2015</P>" +
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
"<TD>HOURS</TD> <TD></TD> <TD></TD> <TD></TD> <TD>(HYCOM_GLOBAL)</TD> </TR> </TABLE>",

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
                      "number": 10
                    }
                  }
                },
					{
                  "id" : "point 12",
                  "name": "Point 12",
                  "description" :"<p>CONDITIONS AT MAP CENTER 35-34.0N 073-46.0N VALID ON 2412900Z NOV2015</P>" +
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
"<TD>HOURS</TD> <TD></TD> <TD></TD> <TD></TD> <TD>(HYCOM_GLOBAL)</TD> </TR> </TABLE>",

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
                      "number": 10
                    }
                  }
                },
					{
                  "id" : "point 13",
                  "name": "Point 13",
                  "description" :"<p>CONDITIONS AT MAP CENTER 35-34.0N 073-46.0N VALID ON 2412900Z NOV2015</P>" +
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
"<TD>HOURS</TD> <TD></TD> <TD></TD> <TD></TD> <TD>(HYCOM_GLOBAL)</TD> </TR> </TABLE>",

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
                      "number": 10
                    }
                  }
                },
					{
                  "id" : "point 14",
                  "name": "Point 14",
                  "description" :"<p>CONDITIONS AT MAP CENTER 35-34.0N 073-46.0N VALID ON 2412900Z NOV2015</P>" +
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
"<TD>HOURS</TD> <TD></TD> <TD></TD> <TD></TD> <TD>(HYCOM_GLOBAL)</TD> </TR> </TABLE>",

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
                      "number": 10
                    }
                  }
                },
						{
                  "id" : "point 15",
                  "name": "Point 15",
                  "description" :"<p>CONDITIONS AT MAP CENTER 35-34.0N 073-46.0N VALID ON 2412900Z NOV2015</P>" +
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
"<TD>HOURS</TD> <TD></TD> <TD></TD> <TD></TD> <TD>(HYCOM_GLOBAL)</TD> </TR> </TABLE>",

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
                      "number": 10
                    }
                  }
                },
						{
                  "id" : "point 16",
                  "name": "Point 16",
                  "description" :"<p>CONDITIONS AT MAP CENTER 35-34.0N 073-46.0N VALID ON 2412900Z NOV2015</P>" +
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
"<TD>HOURS</TD> <TD></TD> <TD></TD> <TD></TD> <TD>(HYCOM_GLOBAL)</TD> </TR> </TABLE>",

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
                      "number": 10
                    }
                  }
                },
						{
                  "id" : "point 17",
                  "name": "Point 17",
                  "description" :"<p>CONDITIONS AT MAP CENTER 35-34.0N 073-46.0N VALID ON 2412900Z NOV2015</P>" +
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
"<TD>HOURS</TD> <TD></TD> <TD></TD> <TD></TD> <TD>(HYCOM_GLOBAL)</TD> </TR> </TABLE>",

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
                      "number": 10
                    }
                  }
                },
					{
                  "id" : "point 18",
                  "name": "Point 18",
                  "description" :"<p>CONDITIONS AT MAP CENTER 35-34.0N 073-46.0N VALID ON 2412900Z NOV2015</P>" +
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
"<TD>HOURS</TD> <TD></TD> <TD></TD> <TD></TD> <TD>(HYCOM_GLOBAL)</TD> </TR> </TABLE>",

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
                      "number": 10
                    }
                  }
                },
					 {
                  "id" : "point 19",
                  "name": "Point 19",
                  "description" :"<p>CONDITIONS AT MAP CENTER 35-34.0N 073-46.0N VALID ON 2412900Z NOV2015</P>" +
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
"<TD>HOURS</TD> <TD></TD> <TD></TD> <TD></TD> <TD>(HYCOM_GLOBAL)</TD> </TR> </TABLE>",

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
                      "number": 10
                    }
                  }
                },
					{
                  "id" : "point 20",
                  "name": "Point 20",
                  "description" :"<p>CONDITIONS AT MAP CENTER 35-34.0N 073-46.0N VALID ON 2412900Z NOV2015</P>" +
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
"<TD>HOURS</TD> <TD></TD> <TD></TD> <TD></TD> <TD>(HYCOM_GLOBAL)</TD> </TR> </TABLE>",

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
                      "number": 10
                    }
                  }
                },
					  {
                  "id" : "point 21",
                  "name": "Point 21",
                  "description" :"<p>CONDITIONS AT MAP CENTER 35-34.0N 073-46.0N VALID ON 2412900Z NOV2015</P>" +
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
"<TD>HOURS</TD> <TD></TD> <TD></TD> <TD></TD> <TD>(HYCOM_GLOBAL)</TD> </TR> </TABLE>",

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
                      "number": 10
                    }
                  }
                },
					 {
                  "id" : "point 22",
                  "name": "Point 22",
                  "description" :"<p>CONDITIONS AT MAP CENTER 35-34.0N 073-46.0N VALID ON 2412900Z NOV2015</P>" +
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
"<TD>HOURS</TD> <TD></TD> <TD></TD> <TD></TD> <TD>(HYCOM_GLOBAL)</TD> </TR> </TABLE>",

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
                      "number": 10
                    }
                  }
                },
					{
                  "id" : "point 23",
                  "name": "Point 23",
                  "description" :"<p>CONDITIONS AT MAP CENTER 35-34.0N 073-46.0N VALID ON 2412900Z NOV2015</P>" +
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
"<TD>HOURS</TD> <TD></TD> <TD></TD> <TD></TD> <TD>(HYCOM_GLOBAL)</TD> </TR> </TABLE>",

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
                      "number": 10
                    }
                  }
                },
					 {
                  "id" : "point 24",
                  "name": "Point 24",
                  "description" :"<p>CONDITIONS AT MAP CENTER 35-34.0N 073-46.0N VALID ON 2412900Z NOV2015</P>" +
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
"<TD>HOURS</TD> <TD></TD> <TD></TD> <TD></TD> <TD>(HYCOM_GLOBAL)</TD> </TR> </TABLE>",

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
                      "number": 10
                    }
                  }
                }
				//PLACE CODE ABOVE THIS LINE-----------------------------------------

             // ];//End of czml no code after this point

        /* CODE BELOW WORKS
        var czml = [
                {
                  "id" : "document",
                  "name" : "CZML Point",
                  "version" : "1.0"
                },
                {
                  "id" : "point 1",
                  "name": "point 1",
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
                      "number": 10
                    }
                  }
                },
                  {
                  "id" : "point 2",
                  "name": "point 2",
                  "position" : {
                    "interval":"2016-04-20T01:00:00Z/9999-12-31T24:00:00",
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
                      "number": 10
                    }
                  }
                },

                 {
                  "id" : "point 3",
                  "name": "Point 3",
                   "description": "<p>CONDITIONS AT MAP CENTER 35-34.0N 073-46.0N VALID ON 2412900Z NOV2015</P>",


                  "position" : {
                    "interval":"2016-04-20T02:00:00Z/9999-12-31T24:00:00",
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
                    "pixelSize": {
                      "number": 10
                    }
                  }
                }

              */
        ];
        var dataSource = Cesium.CzmlDataSource.load(czml);
        viewer.dataSources.add(dataSource);
        viewer.zoomTo(dataSource);
      }


})

// var viewer = new Cesium.Viewer('cesiumContainer');
// var button = document.getElementById("startDemo");
// // if (button){
// //   document.getElementById("startDemo").addEventListener("click", startViewer);
// // }
// button.addEventListener('click', startViewer);

// function startViewer(){
//   console.log('Here')
//   var czml = [
//     {
//       "id" : "document",
//       "name" : "CZML Point",
//       "version" : "1.0"
//     },
//     {
//       "id" : "point 1",
//       "name": "point",
//       "position" : {
//         "cartographicDegrees" : [-79.6509,	30.3729, 0]
//       },
//       "point": {
//         "color": {
//           "rgba": [255,0, 0, 255]
//         },
//         "outlineColor": {
//           "rgba": [255,0, 200, 255]
//         },
//         "pixelSize": {
//           "number": 10
//         }
//       }
//     }
//   ];



//   var dataSource = Cesium.CzmlDataSource.load(czml);
//   viewer.dataSources.add(dataSource);
//   viewer.zoomTo(dataSource);
//   }






/*

Code below works inline!---------------------------------------------------

var viewer= new Cesium.Viewer('cesiumContainer');


document.getElementById("startDemo").addEventListener("click", startViewer);



function startViewer(){
  var czml = [
    {
      "id" : "document",
      "name" : "CZML Point",
      "version" : "1.0"
    },
    {
      "id" : "point 1",
      "name": "point",
      "position" : {
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
          "number": 10
        }
      }
    }
  ];



  var dataSource = Cesium.CzmlDataSource.load(czml);
  viewer.dataSources.add(dataSource);
  viewer.zoomTo(dataSource);
  document.getElementById("cesiumContainer")=viewer;

 var czml = [
    {
      "id" : "document",
      "name" : "CZML Point",
      "version" : "1.0"
    },
    {
      "id" : "point 1",
      "name": "point",
      "position" : {
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
          "number": 10
        }
      }
    }
  ];


  var czml = [
    {
      "id" : "document",
      "name" : "CZML Point",
      "version" : "1.0"
    },
    {
      "id" : "point 1",
      "name": "point 1",
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
          "number": 10
        }
      }
    },
      {
      "id" : "point 2",
      "name": "point 2",
      "position" : {
        "interval":"2016-04-20T01:00:00Z/2016-04-20T02:00:00Z",
        "cartographicDegrees" : [-79.60867185,	30.4871365, 0]
      },
      "point": {
        "color": {
          "rgba": [0,0, 255, 255]
        },
        "outlineColor": {
          "rgba": [0,0, 255, 150]
        },
        "pixelSize": {
          "number": 10
        }
      }
    },
      {
      "id" : "point 2a",
      "name": "point",
      "position" : {
        "interval":"2016-04-20T02:00:00Z/9999-12-31T24:00:00Z",
        "cartographicDegrees" : [-79.60867185,	30.4871365, 0]
      },
      "point": {
        "color": {
          "rgba": [128,128,128,255]
        },
        "outlineColor": {
          "rgba": [255,0, 200, 255]
        },
        "pixelSize": {
          "number": 10
        }
      }
    },
      {
      "id" : "point 3",
      "name": "This is a test" + " How much info can we put into" +
          " a point",
      "position" : {
        "interval":"2016-04-20T02:00:00Z/9999-12-31T24:00:00Z",
        "cartographicDegrees" : [-79.55759526,	30.59606461, 0]
      },
      "point": {
        "color": {
          "rgba": [0,0, 255, 255]
        },
        "outlineColor": {
          "rgba": [0,0, 255, 150]
        },
        "pixelSize": {
          "number": 10
        }
      }
    }

  ];
var viewer = new Cesium.Viewer('cesiumContainer');
var dataSource = Cesium.CzmlDataSource.load(czml);
viewer.dataSources.add(dataSource);
viewer.zoomTo(dataSource);*/