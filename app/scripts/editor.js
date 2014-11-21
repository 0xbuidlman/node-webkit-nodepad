var markdown = require('markdown').markdown,
    $        = global.jQuery;

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
