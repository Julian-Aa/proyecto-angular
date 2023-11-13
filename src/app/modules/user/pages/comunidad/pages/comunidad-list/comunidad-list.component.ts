import { Component } from '@angular/core';
import { Comunidad } from 'src/app/core/models/comunidad.model';
import { ComunidadService } from '../../services/comunidad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comunidad-list',
  templateUrl: './comunidad-list.component.html',
  styleUrls: ['./comunidad-list.component.css'],
})
export class ComunidadListComponent {
  comunidades: any[] = [];
  currentPage = 1;
  itemsPerPage = 12;
  Array = Array;
  constructor(
    private comunidadService: ComunidadService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.llenarData();
  }
  routerr(id: number) {
    this.router.navigate(['/dashboard/comunidad/show-comunidad/' + id]);
  }
  llenarData() {
    this.comunidadService.get().subscribe((data) => {
      this.comunidades = data;
      console.log(data);
    });
  }
  get totalPages(): number {
    return Math.ceil(this.comunidades.length / this.itemsPerPage);
  }
  get visibleArticles(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.comunidades.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}
