import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  itemsPerPage = 2;
  currentPage = 1;
  data = [
    {firstName: 'Nizami', lastName: 'Sevindi', email: 'nsevindi@exm.com'},
    {firstName: 'Peter', lastName: 'Example', email: 'abc@exm.com'},
    {firstName: 'Jacson', lastName: 'Serse', email: 'def@exm.com'},
    {firstName: 'Mark', lastName: 'Derte', email: 'ghr@exm.com'},
    {firstName: 'Selin', lastName: 'Karet', email: 'tge@exm.com'},
    {firstName: 'Merva', lastName: 'Merrt', email: 'sdc@exm.com'},
    {firstName: 'Handi', lastName: 'Hanre', email: 'asd@exm.com'},
    {firstName: 'Kundu', lastName: 'Ders', email: 'jggj@exm.com'},
  ]

  get PaginatedData() {
    const start = (this.currentPage -1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;

    return this.data.slice(start, end)
  }

  changePage(page:number){
    this.currentPage = page;
  }
}
