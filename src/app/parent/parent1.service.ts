// import { Subject } from "rxjs/Subject";

export class ParentService {
  //   ChangeImage = new Subject();
  //   button1 = false;
  //   button2 = true;
  //   button3 = true;
  //   button4 = true;

  showimage2 = true;
  showimage1 = false;

  changeImage() {
    this.showimage2 = false;
    this.showimage1 = true;
    console.log("change");
  }
}
