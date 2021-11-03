import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BookService} from "../book.service";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  books?:any;
  @Output() newItemEvent = new EventEmitter<string>();
  constructor(private service : BookService) {

  }

  ngOnInit(): void {
    this.showAll();
  }

  private showAll() {
    this.service.showAll().subscribe(listBook =>{
      this.books = listBook;
      this.newItemEvent.emit(this.books.length)
    })
  }

  delete(id:number) {
    let check = confirm("Bạn chắc chắn muốn xóa?");
    if(check){
      this.service.deleteBook(id).subscribe(()=>this.showAll())
    }
  }
}
