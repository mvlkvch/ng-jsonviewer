import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-ng-jsonviewer',
  standalone: true,
  imports: [],
  template: `
    <p>
      ng-jsonviewer works!
    </p>
  `,
  styles: ``
})
export class NgJsonViewerComponent {
  @Input() data: Record<string, unknown> = {}
}
