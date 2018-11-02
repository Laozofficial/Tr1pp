import { Injectable, Output, EventEmitter } from "@angular/core";

// @Output() change: EventEmitter < boolean > = new EventEmitter();

@Injectable({
  providedIn: "root"
})
export class ParentService {
  constructor() {}

  showimage2 = true;
  showimage1 = false;

  changeImage() {
    this.showimage2 = false;
    this.showimage1 = true;
    // this.change.emit(this.showimage2);
    // this.change.emit(this.showimage1);
    console.log("change");
  }
}
