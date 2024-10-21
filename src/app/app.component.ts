import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './common/header/header.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PrimeNGConfig } from 'primeng/api';
import { definePreset } from 'primeng/themes';
import { Aura } from 'primeng/themes/aura';

const myTheme = definePreset(Aura, {
  semantic: {
      primary: {
          50: '{emerald.100}',
          100: '{emerald.100}',
          200: '{emerald.200}',
          300: '{emerald.300}',
          400: '{emerald.400}',
          500: '{emerald.500}',
          600: '{emerald.600}',
          700: '{emerald.700}',
          800: '{emerald.800}',
          900: '{emerald.900}',
          950: '{emerald.950}'
      }
  }
});

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CardModule, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  
  public config: PrimeNGConfig = inject(PrimeNGConfig);

  constructor() {
    // this.config.theme.set({ preset: Aura })
    // this.config.theme.set(cokePreset);
    
    this.config.theme.set({
      preset: myTheme,
    });
  }

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
