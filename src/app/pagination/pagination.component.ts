import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  //Data Binding
  @Input() totalItems:any;
  @Input() receivedData:any;
  @Input() currentPage:any;
  @Input() itemsPerpage:any;
  @Output() onClick: EventEmitter<number> = new EventEmitter();
  @Output() onChange: EventEmitter<number> = new EventEmitter();
  totalPages = 0;
  pages:number[]=[]

  //starts with this Hook
  ngOnInit():void{
    this.createPaginate()
  }

  //Render it when it changes
  ngOnChanges(): void {
    this.createPaginate();
  }
  
  //Calculate num of page and create array 
  createPaginate = ()=>{
    if(this.totalItems){
      this.totalPages = Math.ceil(this.totalItems/this.itemsPerpage)
      this.pages = Array.from({length: this.totalPages}, (_,i)=>i + 1)
    }
  }

  //Get de value of pagination and send it
  pageClicked(page:number){
    if(page>this.totalPages) return;
    this.onClick.emit(page)
  }

}
