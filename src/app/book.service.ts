import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";
import {Book} from "./model/book";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private API_BOOK = environment.API_LOCAL;
  constructor(private http: HttpClient) { }
  createBook(book: Book): Observable<any>{
    return this.http.post<Book>(this.API_BOOK, book);
  }
  showAll(){
    return this.http.get(this.API_BOOK);
  }
  detailBook(id: number): Observable<any>{
    return this.http.get<any>(this.API_BOOK+'/'+id);
  }
  updateBook(id: number,book: Book): Observable<any>{
    return this.http.put<any>(this.API_BOOK+'/'+id,book)
  }
  deleteBook(id: number): Observable<any>{
    return this.http.delete<any>(this.API_BOOK+'/'+id);
  }

}
