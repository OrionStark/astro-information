import { Component, OnInit } from '@angular/core';
import { NasaService } from '../services/nasa.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  constructor(  ) { }

  ngOnInit() {
  }

}
