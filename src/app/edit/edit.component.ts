import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BookService} from "../book.service";
import {FormBuilder, Validators} from "@angular/forms";
import { Book } from '../model/book';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  alert = '';
  book: Book={};
  idBook?: number;

  constructor(private formBuilder: FormBuilder, private atRouter: ActivatedRoute, private service: BookService) {

  }

  public formdata = this.formBuilder.group({
    title: ['', Validators.required],
    author: ['', Validators.required],
    description: ['', Validators.required]
  })

  ngOnInit(): void {
    this.atRouter.paramMap.subscribe(param => {
      const id = param.get('id');
      this.idBook = Number(id);
      this.service.detailBook(Number(id)).subscribe(bookk => {
        this.book = bookk;
      })
    })
  }

  onSubmit() {
    if (this.idBook != null) {
      this.service.updateBook(this.idBook, this.formdata.value).subscribe(() => {
        this.alert = "Sửa thành công!";
        this.formdata.reset();
      })
    }
  }
}
