import { Component } from '@angular/core';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css'],
})
export class ArticulosComponent {
  articulos: any []= [];

  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.llenarData();
  }

  llenarData(){
    this.apiService.getData().subscribe(data=>{
      this.articulos = data.articles;
      console.log(data);
    })
  }
}
