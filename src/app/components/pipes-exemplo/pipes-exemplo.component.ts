import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-exemplo',
  templateUrl: './pipes-exemplo.component.html',
  styleUrls: ['./pipes-exemplo.component.scss'],
})
export class PipesExemploComponent {
  number = 0;
  name = 'rafael';
  date = new Date();

  arraySelected = '';
  array: string[] = [];

  pessoa = {
    name: 'Rafael Ferreira',
    age: 25,
    sex: 'M',
  };

  enviar() {
    this.array.push(this.arraySelected);
    this.arraySelected = '';
  }
}
