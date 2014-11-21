//
// Library
//
var gui  = require('nw.gui');

//
// Global
//
global.gui          = gui;
global.mainWindow   = gui.Window.get();
global.jQuery       = jQuery;

//
// Requires
//
require('../scripts/windowEvents');
require('../scripts/editor');
var menu = require('../scripts/menu');

//
// Initialization
//
menu.initBarMenu();
menu.initContextMenu();
