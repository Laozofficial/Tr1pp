import { Component, OnInit } from "@angular/core";
import { ParentService } from "../parent.service";

@Component({
  selector: "app-navigator",
  templateUrl: "./navigator.component.html",
  styleUrls: ["./navigator.component.css"],
  providers: [ParentService]
})
export class NavigatorComponent implements OnInit {
  constructor(public parentservice: ParentService) {}
  change() {
    this.parentservice.changeImage();
  }

  ngOnInit() {}
}
