import { Component } from '@angular/core';
import { main_anim } from 'src/utils/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [main_anim],
})
export class AppComponent {
  title = 'bento';
}
