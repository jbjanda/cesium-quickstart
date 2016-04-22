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