import { Component, OnInit } from '@angular/core';
import {BookService} from "../book.service";
import {Book} from "../model/book";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  books:any;
  count:any;
  constructor(private service : BookService) {

  }

  ngOnInit(): void {
    this.books = this.showAll();
  }

  private showAll() {
    this.service.showAll().subscribe(listBook =>{
      this.books = listBook;
      this.count = this.books.length;
      console.log(this.count)
    })
  }

  delete(id:number) {
    let check = confirm("Bạn chắc chắn muốn xóa?");
    if(check){
      this.service.deleteBook(id).subscribe(()=>this.showAll())
    }
  }
}
