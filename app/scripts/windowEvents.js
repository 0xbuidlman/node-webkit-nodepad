var mainWindow = global.mainWindow,
    gui        = global.gui,
    path       = require('path'),
    $          = global.jQuery;


//
// Close
//
$('#window-close').on("click", function() {
  mainWindow.close();
});

//
// Resize
//
$('#window-resize').on("click", function() {
  if ($( this ).hasClass('maximize')) {
    mainWindow.toggleFullscreen();
    $( this ).toggleClass('maximize');
    $( this ).children('i').toggleClass('icon-toolbar-maximize icon-toolbar-minimize');
  } else {
    mainWindow.toggleFullscreen();
    $( this ).toggleClass('maximize');
  };
});

//
// Minimize
//
$('#window-restore').on("click", function() {
  mainWindow.minimize();
});