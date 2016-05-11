//****************************************************
//****************************************************
var highest_classification_this_installation = 0;
//0 = unclassified
//1 = confidential  (unused at this time)
//2 = secret
//3 = top secret
//4 = Approved for public access.  Distribution is unlimited.
//alert(highest_classification_this_installation);
//****************************************************
//****************************************************

//****************************************************

//OpenLayers settings  (FNMOC)
var preferred_server = 'http://localhost:8080/geoserver/wms';  //fnmoc geoserver
var preferred_layer_name = 'basic';  //'basic' for CSI  |  'world' for FNMOC
var preferred_gridline_layer_name = 'basic';  //'basic' for CSI  |  'world30' for FNMOC
var ol_resolution_factor = 2;
//****************************************************

//****************************************************
//OpenLayers settings  (CSI)
//var preferred_server = 'http://vmap0.tiles.osgeo.org/wms/vmap0';  //CSI geoserver
//var preferred_layer_name = 'basic'; //'basic' for CSI 
//var preferred_gridline_layer_name = 'basic';  //'basic' for CSI  |  'world30' for FNMOC
//var ol_resolution_factor = 2;

//CSI Development server (When MetaCarta is down)
//var preferred_server = 'http://wms.jpl.nasa.gov/wms.cgi';  // to use from CSI devel server
//var preferred_layer_name = 'modis,global_mosaic';  //'basic' for CSI  |  'world' for FNMOC
//var preferred_gridline_layer_name = 'NASA Global Mosaic';  //'basic' for CSI  |  'world30' for FNMOC


//****************************************************
//Change the line below to reflect the URL location of the EM Climo Images
var image_base = '/acaf/em_images/';
//****************************************************

//****************************************************
//Set testing tab to be visible or not (1 = visible  |  0 = invisible)
var testing_tab = 1;
//****************************************************

//..................START EPILOGUE......................................
//
// CONFIGURATION IDENTIFICATION:  @(#)$Id$
//
// NAME:                          acaf_frontend_settings.js
//
// AUTHOR:                        Bruce W. Ford
//
// DESCRIPTION:                   This file includes all variables needed to set up the ACAF frontend environment - designed to be the lone ACAF frontend configuration file
//
// CONTRACT NUMBER AND TITLE:     N00104-11-F-Q912 - Climatological Dataset Upgrade
//
// REFERENCES:                    none
//
// CLASSIFICATION:                unclassified
//
// RESTRICTIONS:                  requires client browser to have javascript enabled.
//
// FPATH:                         none
//
// USAGE:                         acaf_frontend_settings.js - included with each ACAF front page load
//
//...................END EPILOGUE........................................