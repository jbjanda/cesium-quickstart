angular.module('webForm')
      .factory('ObjectService', ObjectService);

ObjectService.$inject = [];

function ObjectService(){
  var o = {};
  o.objects = [
    {
      category : "None",
      isCollapsed: true,
      glyphicon: "user",
      values : [
        { id : 0 , isHidden: true, name: "No Windage - Zero Leeway", }
      ]
    },
    {
      category : "Person In Water",
      isCollapsed: false,
      glyphicon: "user",
      values : [
        { id : 1 , isHidden: true, name: "Person Details Unknown" },
        { id : 2 , isHidden: true, name: "Vertical" },
        { id : 3 , isHidden: true, name: "Sitting" },
        { id : 4 , isHidden: true, name: "Horizontal -> Survival Suit" },
        { id : 5 , isHidden: true, name: "Horizontal -> Scuba Suit" },
        { id : 6 , isHidden: true, name: "Horizontal -> Deceased" }
      ]
    },
    {
      category : "Maritime Life Rafts",
      isCollapsed: true,
      glyphicon: "user",
      values : [
        {
          name: "No Ballast System",
    id: -1,
          isHidden: true,
          sub : [
            { id : 7, name: "No Ballast Unknown" },
            { id : 8 , name: "No canopy or drogue" },
            { id : 9 , name: "W/ Drogue" },
            { id : 10 , name: "W/ Canopy" },
            { id : 11 , name: "W/ Canopy & Drogue" }
          ]
        },
        {
          name: "Shallow Ballast System",
    id: -1,
          isHidden: true,
          sub : [
            { id : 12, name: "Shallow Ballast Unknown" },
            { id : 13 , name: "No drogue" },
            { id : 14 , name: "W/ drogue" },
            { id : 15 , name: "Capsized" }
          ]
        },
        {
          name: "Deep Ballast System",
    id: -1,
          isHidden: true,
          sub : [
            { id : 16 , name: "Deep Ballast Unknown" },
            { id : 17 , name: "4-6 person" },
            { id : 18 , name: "4-6, no drogue" },
            { id : 19 , name: "4-6, no drogue, light load" },
            { id : 20 , name: "4-6, no drogue, heavy load" },
            { id : 21 , name: "4-6, w/ drogue" },
            { id : 22 , name: "4-6, w/ drogue, light load" },
            { id : 23 , name: "4-6, w/ drogue, heavy load" },
            { id : 24 , name: "15-25 person" },
            { id : 25 , name: "15-25, no drogue, light load" },
            { id : 26 , name: "15-25, w/ drogue, heavy load" },
            { id : 27 , name: "Capsized" },
            { id : 28 , name: "Swamped" }
          ]
        }
      ]
    },
    {
      category : "Maritime Survival Craft",
      isCollapsed: true,
      glyphicon: "user",
      values : [
        { id : 29 , isHidden: true, name: "Life capsule" },
        { id : 30 , isHidden: true, name: "USCG Sea Rescue Kit" }
      ]
    },
    {
      category : "Aviation Life Rafts",
      isCollapsed: true,
      glyphicon: "user",
      values : [
        { id : 31 , isHidden: true, name: "Aviation Life Raft, No Ballast, 4-6 Person, w/ Canopy" },
        { id : 32 , isHidden: true, name: "Aviation Evac Slide, 46-person" }
      ]
    },
    {
      category : "Person-Powered Craft",
      isCollapsed: true,
      glyphicon: "user",
      values : [
        { id : 33 , isHidden: true, name: "Sea Kayak , w/ Person on aft deck" },
        { id : 34 , isHidden: true, name: "Surfboard , w/ Person" },
        { id : 35 , isHidden: true, name: "Windsurfer, w/ Person, mast & sail in water" }
      ]
    },
    {
      category : "Sailing Vessels",
      isCollapsed: true,
      glyphicon: "user",
      values : [
        { id : 36 , isHidden: true, name: "Sail Boat, Mono Hull, Full Keel, Deep Draft" },
        { id : 37 , isHidden: true, name: "Sail Boat, Mono Hull, Fin Keel, Shoal Draft" }
      ]
    },
    {
      category : "Power Vessels",
      isCollapsed: true,
      glyphicon: "user",
      values : [
        { id : 38 , isHidden: true, name: "Skiff, Flat Bottom, Boston whaler" },
        { id : 39 , isHidden: true, name: "Skiff, V-hull, Std. Config" },
        { id : 40 , isHidden: true, name: "Skiff, V-hull, Swamped" },
        { id : 41 , isHidden: true, name: "Sport Boat, Cabin, Modified V-hull" },
        { id : 42 , isHidden: true, name: "Sport Fisher, Center Console, Open cockpit" },
        { id : 43 , isHidden: true, name: "Commercial Fishing" },
        {
          name: "Commercial",
          isHidden: true,
    id: -1,
          sub : [
            { id : 44 , name: "Sampans, Hawaiian" },
            { id : 45 , name: "Side-stern Troller, Japanese" },
            { id : 46 , name: "Longliners, Japanese" },
            { id : 47 , name: "Asian Coastal, Korean" },
            { id : 48 , name: "Gill-netter, w/rear reel" }
          ]},
        { id : 49 , isHidden: true, name: "Coastal Freighter" }
      ]
    },
    {
      category : "Boating Debris",
      isCollapsed: true,
      glyphicon: "user",
      values : [
        { id : 50 , isHidden: true, name: "Debris Boat, Fishing Vessel debris" },
        { id : 51 , isHidden: true, name: "Debris Boat, 1m bait/wharf box" },
        { id : 52 , isHidden: true, name: "Debris Boat, 1m bait/wharf box, Light load" },
        { id : 53 , isHidden: true, name: "Debris Boat, 1m bait/wharf box, Heavy load" }
      ]
    },
    {
      category : "Immigration Vessel",
      isCollapsed: true,
      glyphicon: "user",
      values : [
        { id : 54 , isHidden: true, name: "Immigration Vessel, Cuban refugee raft, no Sail" },
        { id : 55 , isHidden: true, name: "Immigration Vessel, Cuban refugee raft, w/ Sail" }
      ]
    },
    {
      category : "Other Objects",
      isCollapsed: true,
      glyphicon: "user",
      values : [
        { id : 56 , isHidden: true, name: "Sewage Floatables, Tampon Applicators" },
        { id : 57 , isHidden: true, name: "Medical Waste, Vials & Syringes" }
      ]
    }
  ];

  return o;
}
