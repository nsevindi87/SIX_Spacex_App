import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  itemsPerPage = 5;
  currentPage = 1;
  data: any[] = [];

  /* data = [
    {firstName: 'Nizami', lastName: 'Sevindi', email: 'nsevindi@exm.com'},
    {firstName: 'Peter', lastName: 'Example', email: 'abc@exm.com'},
    {firstName: 'Jacson', lastName: 'Serse', email: 'def@exm.com'},
    {firstName: 'Mark', lastName: 'Derte', email: 'ghr@exm.com'},
    {firstName: 'Selin', lastName: 'Karet', email: 'tge@exm.com'},
    {firstName: 'Merva', lastName: 'Merrt', email: 'sdc@exm.com'},
    {firstName: 'Handi', lastName: 'Hanre', email: 'asd@exm.com'},
    {firstName: 'Kundu', lastName: 'Ders', email: 'jggj@exm.com'},
  ] */


 constructor(private http: HttpClient) { }
 
 ngOnInit() {
   this.getLandpads();
  }
  

public getLandpads(){
    this.http.get("https://api.spacexdata.com/v4/launchpads").subscribe((response:any)=>{
    this.data = response
    })
  }



  get PaginatedData() {
    const start = (this.currentPage -1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;

    return this.data.slice(start, end)
  }

  changePage(page:number){
    this.currentPage = page;
  }
}
