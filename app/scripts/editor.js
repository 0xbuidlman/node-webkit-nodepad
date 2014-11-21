var ls       = global.localStorage,
    markdown = require('markdown').markdown,
    $        = global.jQuery;


//
// Loaded
//
mainWindow.on("loaded", function() {
  var content = ls.getItem('content');

  if (content) {
    $('#editor-input').val( content );
  }

  $('#editor-input').trigger('textchange');
});

//
// Save content to Local Storage
//
$('#editor-input').on("textchange", function() {
  var content = $( this ).val();
  ls.setItem("content", content);
});

//
// Render when data changes
//
$('#editor-input').on("textchange", function() {
  var content = $( this ).val();
  $('#editor-preview').html(markdown.toHTML( content ));
});

//
// Context menu
//
$('#editor-input')[0].addEventListener("contextmenu", function(ev) {
  ev.preventDefault();
  contextMenu.popup(ev.x, ev.y);
});
