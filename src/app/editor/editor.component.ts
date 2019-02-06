import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html'
})
export class EditorComponent {
  title = 'froala-test';

  @Input() form;

  froalaOptions = {
    'events' : {
      'froalaEditor.blur' : function(e, editor) {
        // Toggle code view when active on blur this makes sure changes to code view are persisted to model https://surveyanyplace.atlassian.net/browse/SA-2557
        if (editor.codeView.isActive()) editor.codeView.toggle();
      }
    }
  }
}
