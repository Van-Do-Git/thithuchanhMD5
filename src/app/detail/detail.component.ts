import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BookService} from "../book.service";
import {Book} from "../model/book";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  book = new Book(0,'','','');
  constructor( private atRouter: ActivatedRoute, private service: BookService) { }

  ngOnInit(): void {
    this.atRouter.paramMap.subscribe(param => {
      const id = param.get('id');
      this.service.detailBook(Number(id)).subscribe(book => {
        this.book = book;
      })
    })
  }

}
