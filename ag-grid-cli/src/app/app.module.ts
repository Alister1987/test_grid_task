import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AgGridModule } from "ag-grid-angular";
import { AppComponent } from "./app.component";
import { MyGridApplicationComponent } from "./my-grid-application/my-grid-application.component";
import { RedComponentComponent } from "./red-component/red-component.component";
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MyGridApplicationComponent,
    RedComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule.withComponents(
      [RedComponentComponent]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
