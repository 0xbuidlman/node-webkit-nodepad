var ls             = global.localStorage,
    markdown       = require('markdown').markdown,
    $              = global.jQuery,
    $editorInput   = $('#editor-input'),
    $editorPreview = $('#editor-preview');


//
// Loaded
//
mainWindow.on('loaded', function() {
  var content = ls.getItem('content');

  if (content) {
    $editorInput.val( content );
  }

  $editorInput.trigger('textchange');
});

//
// Save content to Local Storage
//
$editorInput.on('textchange', function() {
  var content = $( this ).val();
  ls.setItem('content', content);
});

//
// Render when data changes
//
$editorInput.on('textchange', function() {
  var content = $( this ).val();
  $editorPreview.html(markdown.toHTML( content ));
});

//
// Context menu
//
$editorInput[0].addEventListener('contextmenu', function(ev) {
  ev.preventDefault();
  contextMenu.popup(ev.x, ev.y);
});
