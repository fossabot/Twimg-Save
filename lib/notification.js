const electron = require('electron');
const remote = electron.remote;
const settings = require("./settings");

const notification = {
  error_notification: (err) => {
    var dialog = remote.dialog;
    new Notification('Twimg Save', {
        body: "Error: " + err
    });
    dialog.showErrorBox("Twimg Save Error: ", err);
  },

  end_notification: (count, file) => {
    if(settings.value.notification_main){
      if(
        settings.value.notification_end ||
        settings.value.notification_auto_download_end
      ){
        if(document.getElementById("is_unlimited_download").checked){
          if(settings.value.notification_auto_download_end){
            var notify = new Notification('Twimg Save', {
                body: count + "枚の画像を保存しました!"
            });
            notify.addEventListener('click', function() {
              electron.shell.showItemInFolder(file);
            });
          }
        }else{
          if(settings.value.notification_end){
            var notify = new Notification('Twimg Save', {
                body: count + "枚の画像を保存しました!"
            });
            notify.addEventListener('click', function() {
              electron.shell.showItemInFolder(file);
            });
          }
        }
      }
    }
  },

  start_notification: (mes) => {
    if(settings.value.notification_main){
      if(settings.value.notification_auto_download_start){
        new Notification('Twimg Save', {
            body: mes
        });
      }
    }
  },

  copy_notification: (mes) => {
    if(settings.value.notification_main){
      if(settings.value.notification_copy){
        new Notification('Twimg Save', {
            body: mes
        });
      }
    }
  },

  unsupported_notification: (mes) => {
    if(settings.value.notification_main){
      if(settings.value.notification_unsupported){
        new Notification('Twimg Save', {
            body: mes
        });
      }
    }
  },

  no_file_error: () => {
    if(settings.value.notification_main){
      if(settings.value.notification_no_file){
        new Notification('Twimg Save', {
            body: "添付ファイルがありません!"
        });
      }
    }
  },

  basic_error: (mes) => {
    if(settings.value.notification_main){
      if(settings.value.notification_basic_error){
        new Notification('Twimg Save', {
            body: mes
        });
      }
    }

  }
}

module.exports = notification;
