//
// Context menu
//
$('#editor-input')[0].addEventListener("contextmenu", function(ev) {
  ev.preventDefault();
  contextMenu.popup(ev.x, ev.y);
});
