import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit  {
  //Variables
  itemsPerPage = 5;
  currentPage = 1;
  data: any[] = [];
  datalength!:number;
  searchTerm: string = ''
  filteredData: any[] = [];

  //For Api
  constructor(private http: HttpClient) { }
 
  //Starts with this Hook
  ngOnInit() {
   this.getData()
  }

  //Get data from API and starts filter
  getData(){
    this.http.get<any>("https://api.spacexdata.com/v4/landpads").subscribe(data =>{
      this.data = data;
      this.datalength = this.data.length;
      this.applyFilter();

    } );
  }  

  //Filter data function
  applyFilter(){
    this.filteredData = this.data.filter((item: any) => {
      return item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
             item.region.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
    this.currentPage = 1;
  }

  //get number from ChangePage and filter it.
  get PaginatedData() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredData.slice(start,end)
  }

  //Send and get it with onClick
  changePage(page:number){
    this.currentPage = page;
  }

  //Get number from choise-option
  onChangeItemsPerPage(event: any) {
    this.itemsPerPage = parseInt(event.target.value);
    this.applyFilter();
  }

  //Get info from input
  updateSearchTerm(event: any) {
    this.searchTerm = event.target.value;
    this.applyFilter();
  }
 
}
