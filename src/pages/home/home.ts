import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LuzService } from '../../services/luces.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  resultado: string = 'EN ESPERA';

  constructor(public navCtrl: NavController, public luzService: LuzService) {

  }

  encender() {
    this.luzService.get('on').subscribe(resultado => {
      this.resultado = 'ENCENDIDAS';
    });
  }

  apagar() {
    this.luzService.get('off').subscribe(resultado => {
      this.resultado = 'APAGADAS';
    });
  }

}
