import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { Port1Component } from "./port1/port1.component";
import { Port2Component } from "./port2/port2.component";
import { Port3Component } from "./port3/port3.component";
import { Port4Component } from "./port4/port4.component";
import { NavComponent } from "./nav/nav.component";
import { ParentComponent } from "./parent/parent.component";
import { BackgroundComponent } from "./parent/background/background.component";
import { NavigatorComponent } from "./parent/navigator/navigator.component";
import { ImagesComponent } from "./parent/images/images.component";
// import { ParentService } from "./parent/parent.service";

@NgModule({
  declarations: [
    AppComponent,
    Port1Component,
    Port2Component,
    Port3Component,
    Port4Component,
    NavComponent,
    ParentComponent,
    BackgroundComponent,
    NavigatorComponent,
    ImagesComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
