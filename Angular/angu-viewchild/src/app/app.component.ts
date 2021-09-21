import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Project } from './proj.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  // title = 'angu-viewchild';
  @ViewChild('detail', { static: false })
  detailProj: ElementRef;
  isDetailClicked = false;
  projData: Project[] = [];

  ngOnInit() {
    this.projData.push(new Project('Proj 1', 'details of 1st project'));
    this.projData.push(new Project('Proj 2', 'details of 2nd project'));
    this.projData.push(new Project('Proj 3', 'details of 3rd project'));
  }

  ngAfterViewInit() {
    // console.log(this.detailProj);
    console.log(this.projData[0].name);
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
