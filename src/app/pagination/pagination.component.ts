import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() totalItems:any;
  @Input() currentPage:any;
  @Input() itemsPerpage:any;
  totalPages = 0;

  constructor(){

  }

  ngOnInit():void{
    if(this.totalItems){
      this.totalPages = Math.ceil(this.totalItems/this.itemsPerpage)
  }
}
}
