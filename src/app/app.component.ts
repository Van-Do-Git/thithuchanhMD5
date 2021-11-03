import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'thithuchanh';
  public isOpened = false;
  public totalStudents = 0;

  constructor() {
  }

  ngOnInit(): void {

  }


  public openLeftSide() {
    this.isOpened = !this.isOpened;
  }
}
