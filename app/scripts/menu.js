var mainWindow = global.mainWindow,
    gui        = global.gui,
    $          = global.jQuery;

//
// Context menu
//
function initContextMenu() {
  contextMenu = new gui.Menu();
  var mainWindowDocument = mainWindow.window.document;

  contextMenu.append(new gui.MenuItem({
    label: 'Copy',
    click: function() {
      mainWindowDocument.execCommand('copy');
    }
  }));

  contextMenu.append(new gui.MenuItem({
    label: 'Cut',
    click: function() {
      mainWindowDocument.execCommand('cut');
    }
  }));

  contextMenu.append(new gui.MenuItem({
    label: 'Paste',
    click: function() {
      mainWindowDocument.execCommand('paste');
    }
  }));

  contextMenu.append(new gui.MenuItem({
    type: 'separator'
  }));

  contextMenu.append(new gui.MenuItem({
    label: 'Select All',
    click: function() {
      mainWindowDocument.execCommand('selectAll');
    }
  }));

  contextMenu.append(new gui.MenuItem({
    type: 'separator'
  }));

  contextMenu.append(new gui.MenuItem({
    label: 'Help me!',
    enabled: false
  }));
}

//
// Menubar
//
function initBarMenu() {
  var nativeMenuBar = new gui.Menu({ type: "menubar" });
  if (process.platform === "darwin") {
    nativeMenuBar.createMacBuiltin("NodePad");
  }
  mainWindow.menu = nativeMenuBar;
}

//
// Exports
//
exports.initContextMenu = initContextMenu;
exports.initBarMenu = initBarMenu;
