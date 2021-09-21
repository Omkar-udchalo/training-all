import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  // title = 'angu-viewchild';
  @ViewChild('detail', { static: false })
  detailProj: ElementRef;
  isDetailClicked = false;
  ngAfterViewInit() {
    console.log(this.detailProj);
  }

  onTitleClicked() {
    console.log('click');
    if (this.isDetailClicked === false) {
      this.detailProj.nativeElement.style.display = 'block';
      this.isDetailClicked = !this.isDetailClicked;
    } else {
      this.detailProj.nativeElement.style.display = 'none';
      this.isDetailClicked = !this.isDetailClicked;
    }
  }
}
