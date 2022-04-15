import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'muellervonetziken-website';
  @ViewChild("mySidebar") mySidebar!: ElementRef;

  w3_open(){
    if (this.mySidebar.nativeElement.style.display === 'block') {
      this.mySidebar.nativeElement.style.display = 'none';
    } else {
      this.mySidebar.nativeElement.style.display = 'block';
    }
  }

   w3_close() {
    this.mySidebar.nativeElement.style.display = "none";
  }

}
