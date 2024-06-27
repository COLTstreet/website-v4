import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './common/header/header.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CardModule, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'website-v4';

  goToLink(id: any) {
    if(id === 1) {
      let d = window.open('https://www.natriumefcu.com', 'name', 'noopener=yes');
    } else if(id === 2) {
      let d = window.open('https://www.urbansweetsco.com', 'name', 'noopener=yes');
    } else if(id === 3) {
      let d = window.open('https://www.caroleandcolt.com', 'name', 'noopener=yes');
    } else if(id === 4) {
      let d = window.open('https://hoopfire-api.web.app', 'name', 'noopener=yes');
    }
  }
}
