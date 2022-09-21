import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DropdownComponent} from "./dropdown.component";
import {DropdownRowComponent} from "./dropdown-row/dropdown-row.component";

@NgModule({
  imports: [CommonModule],
  declarations: [DropdownComponent, DropdownRowComponent],
  exports: [DropdownComponent, DropdownRowComponent]
})
export class DropdownModule {
}
