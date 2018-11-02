import { Component, OnInit } from "@angular/core";
import { ParentService } from "../parent.service";
// import "rxjs/Rx";
// import { Observable } from "rxjs/Observable";
// import { observer } from "rxjs/Observer";
// import { Observable } from "rxjs";

@Component({
  selector: "app-images",
  templateUrl: "./images.component.html",
  styleUrls: ["./images.component.css"],
  providers: [ParentService]
})
export class ImagesComponent implements OnInit {
  constructor(public parentservice: ParentService) {}
  showimage2 = this.parentservice.showimage2;
  showimage1 = this.parentservice.showimage1;
  log = console.log("change took place");

  change() {
    this.parentservice.changeImage();
  }
  // show() {
  //   this.showimage2 = true;
  //   this.showimage1 = false;
  // }
  ngOnInit() {
  //   this.parentservice.change.subscribe(this.showimage1 => {
  //     this.showimage1 = this.showimage1;
  // }
  // showimage2 = true;
  // showimagw1 = false;
}
