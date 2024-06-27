import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, StyleClassModule, ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  scroll(el: any) {
    document.getElementsByName(el)[0].scrollIntoView({ behavior: "smooth" }); 
  }
}
