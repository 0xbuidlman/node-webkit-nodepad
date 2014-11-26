var mainWindow     = global.mainWindow,
    gui            = global.gui,
    path           = require('path'),
    fdialogs       = require('node-webkit-fdialogs'),
    notifier       = require('node-notifier'),
    $              = global.jQuery,
    $editorInput   = $('#editor-input'),
    $editorPreview = $('#editor-preview');


//
// Close
//
$('#window-close').on('click', function() {
  mainWindow.close();
});

//
// Resize
//
$('#window-resize').on('click', function() {
  if ($( this ).hasClass('maximize')) {
    mainWindow.toggleFullscreen();
    $( this ).toggleClass('maximize');
  } else {
    mainWindow.toggleFullscreen();
    $( this ).toggleClass('maximize');
  };

  $( this )
    .find('i')
      .toggleClass('icon-toolbar-maximize icon-toolbar-minimize');
});

//
// Minimize
//
$('#window-restore').on('click', function() {
  mainWindow.minimize();
});

//
// Toggle file menu
//
$('#app-function').on('click', function() {
  $('#app-function-menu').toggle();
});

//
// Open
//
$('#app-open').on('click', function() {
  $('#app-function-menu').toggle();

  var openDialog = new fdialogs.FDialog({
    type: 'open',
    accept: ['.md']
  });

  openDialog.readFile(function(err, data, path) {
    $editorInput.val( data ).trigger('textchange');
  });
});

//
// Save
//
$('#app-save').on('click', function() {
  $('#app-function-menu').toggle();

  var content = $editorInput.val();
  var contentBuffer = new Buffer(content, 'utf-8');
  var saveDialog = new fdialogs.FDialog({
    type: 'save',
    accept: ['.md']
  });

  saveDialog.saveFile(contentBuffer, 'utf-8', function(err, filepath) {
    notifier.notify({
      title: 'NodePad',
      message: 'File ' + path.basename( filepath ) + ' successfully saved!',
      icon: path.join(__dirname, '../images/brand.png')
    });
  });
});

//
// Scroll
//
$editorInput.on('scroll', function() {
  $editorPreview.scrollTop($( this ).scrollTop());
});
