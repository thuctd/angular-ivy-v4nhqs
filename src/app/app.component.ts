import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;


  notifyMe() {
    if (!Notification) {
      alert('Desktop notifications not available in your browser. Try Chromium.');
      return;
    }

    if (Notification.permission !== 'granted') Notification.requestPermission();
    else {
      var notification = new Notification('Notification');

      notification.onclick = function () {
        window.focus();
      };

      setTimeout(function () {
        notification.close();
      }, 5000);
      
    }
  }
}
