import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CDCOMPUTO';


  // in app.component.ts
files: File[] = [];
 
onSelect(event) {
  console.log(event);
  this.files.push(...event.addedFiles);
}
 
onRemove(event) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}

}
