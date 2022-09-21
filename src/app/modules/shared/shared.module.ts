import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AddFormComponent} from "./components/add-form/add-form.component";
import {LoadingSpinnerComponent} from "./components/loading-spinner/loading-spinner.component";
import {TableHeaderWithAddComponent} from "./components/table-header-with-add/table-header-with-add.component";
import {DropdownModule} from "./components/dropdown/dropdown.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [CommonModule, DropdownModule, ReactiveFormsModule],
  declarations: [AddFormComponent, LoadingSpinnerComponent, TableHeaderWithAddComponent],
  exports: [AddFormComponent, LoadingSpinnerComponent, TableHeaderWithAddComponent, DropdownModule]
})
export class SharedModule {
}
