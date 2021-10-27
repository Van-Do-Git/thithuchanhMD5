import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BookService} from "../book.service";
import {Book} from "../model/book";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  alert = '';
  book = new Book(0,'','','');
  idBook: any;

  constructor(private formBuilder: FormBuilder, private atRouter: ActivatedRoute, private service: BookService) {
  }

  public formdata = this.formBuilder.group({
    title: [''],
    author: [''],
    description: ['']
  })

  ngOnInit(): void {
    this.atRouter.paramMap.subscribe(param => {
      const id = param.get('id');
      this.idBook = Number(id);
      this.service.detailBook(Number(id)).subscribe(book => {
        this.book = book;
      })
    })
  }

  onSubmit() {
    this.service.updateBook(this.idBook, this.formdata.value).subscribe(() => {
      this.alert = "Sửa thành công!";
      this.formdata.reset();
    })
  }
}
