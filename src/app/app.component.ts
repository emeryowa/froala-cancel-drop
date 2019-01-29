import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'froala-test';

  froalaOptions = {
    'events' : {
      'froalaEditor.initialized': function(e, editor) {
        editor.events.on('drop', function(dropEvent) {
          console.log('drop init');
          dropEvent.preventDefault();
        });
      },
      'froalaEditor.drop' : function (e, editor) {
        console.log('drop');
        e.preventDefault();
      }
    }
  }
}
