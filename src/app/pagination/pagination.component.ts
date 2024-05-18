import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() totalItems:any;
  @Input() receivedData:any;
  @Input() currentPage:any;
  @Input() itemsPerpage:any;
  @Output() onClick: EventEmitter<number> = new EventEmitter();
  @Output() onChange: EventEmitter<number> = new EventEmitter();

  totalPages = 0;
  pages:number[]=[]

  constructor(){}

  ngOnInit():void{
    console.log("Paginate Comp");
    console.log(this.itemsPerpage);
    
    this.createPaginate()
  }

  ngOnChanges(): void {
    this.createPaginate();
  }
  
  createPaginate = ()=>{
    if(this.totalItems){
      this.totalPages = Math.ceil(this.totalItems/this.itemsPerpage)
      this.pages = Array.from({length: this.totalPages}, (_,i)=>i + 1)
  }
  }

  pageClicked(page:number){
    if(page>this.totalPages) return;
    this.onClick.emit(page)
  }


}
