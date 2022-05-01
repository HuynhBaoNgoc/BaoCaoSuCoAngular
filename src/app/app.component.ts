import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fpt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent {
  title = 'admin-client-web';
}
