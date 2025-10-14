import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {MainMenuComponent} from './main-menu/main-menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, MainMenuComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
