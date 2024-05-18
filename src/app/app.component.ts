import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit  {
  itemsPerPage = 5;
  currentPage = 1;
  data: any[] = [];
  datalength!:number;
  searchTerm: string = ''
  filteredData: any[] = [];

 constructor(private http: HttpClient) { }
 
 ngOnInit() {
  this.getData()
  }

  getData(){
    this.http.get<any>("https://api.spacexdata.com/v4/landpads").subscribe(data =>{
      this.data = data;
      this.datalength = this.data.length;
      this.applyFilter();

    } );
  }  

  applyFilter(){
    this.filteredData = this.data.filter((item: any) => {
      return item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
             item.region.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
    this.currentPage = 1;
  }

  get PaginatedData() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredData.slice(start,end)
  }

  changePage(page:number){
    this.currentPage = page;
  }

  onChangeItemsPerPage(event: any) {
    this.itemsPerPage = parseInt(event.target.value);
    this.applyFilter();
  }

  updateSearchTerm(event: any) {
    this.searchTerm = event.target.value;
    this.applyFilter();
  }
 
}
