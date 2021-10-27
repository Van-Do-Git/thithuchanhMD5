import { Component, OnInit } from '@angular/core';
import {BookService} from "../book.service";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  alert = '';
  public formdata = this.formBuilder.group({
    title: ['', Validators.required],
    author: ['', Validators.required],
    description: ['', Validators.required]
  })
  constructor(private formBuilder: FormBuilder,private service :BookService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formdata.value)
    this.service.createBook(this.formdata.value).subscribe(()=>{
      this.alert="Tạo mới thành công"!
    })
  }

}
