import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { AvatarModule } from 'primeng/avatar'; 
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenubarModule } from 'primeng/menubar';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { SliderModule } from 'primeng/slider';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { TimelineModule } from 'primeng/timeline';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ConfirmationService, MessageService } from 'primeng/api';
import {PasswordModule} from 'primeng/password';
import {OrderListModule} from 'primeng/orderlist';
import {ChartModule} from 'primeng/chart';

import { DividerModule } from "primeng/divider";
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
@NgModule({
  declarations: [
    EditProfileComponent,
    NotfoundpageComponent
  ],
  imports: [
    DividerModule,
    PasswordModule,
    CommonModule,
    OrderListModule,
    ButtonModule,
    ChartModule,
    PasswordModule,
    TableModule,
    MultiSelectModule,
    DataViewModule,
    HttpClientModule,
    DropdownModule,
   CheckboxModule,
    TabMenuModule,
    AppRoutingModule,
    MenubarModule,
    TieredMenuModule,
    ButtonModule,
    SidebarModule,
    FieldsetModule,
    FormsModule,
    CheckboxModule,
    HttpClientModule,
    ReactiveFormsModule,
    InputSwitchModule,
    CardModule,
    CarouselModule,
    TooltipModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		ContextMenuModule,
    FormsModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    CheckboxModule,    
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    FormsModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
    SelectButtonModule,
    TagModule,
    InputMaskModule,
    DynamicDialogModule,
    RippleModule,
    AvatarModule,
    TabViewModule,
    TimelineModule,
    ProgressSpinnerModule,
    ToggleButtonModule,
    AccordionModule,
  ],
  exports:[
    DividerModule,
    PasswordModule,
    OrderListModule,
    CommonModule,
    ButtonModule,
    ChartModule,
    TableModule,
    PasswordModule,
    MultiSelectModule,
    DataViewModule,
    HttpClientModule,
    DropdownModule,
   CheckboxModule,
    TabMenuModule,
    AppRoutingModule,
    MenubarModule,
    TieredMenuModule,
    ButtonModule,
    SidebarModule,
    FieldsetModule,
    FormsModule,
    CheckboxModule,
    HttpClientModule,
    ReactiveFormsModule,
    InputSwitchModule,
    CardModule,
    CarouselModule,
    TooltipModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		ContextMenuModule,
    FormsModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    CheckboxModule,    
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    FormsModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
    SelectButtonModule,
    TagModule,
    InputMaskModule,
    DynamicDialogModule,
    RippleModule,
    AvatarModule,
    TabViewModule,
    TimelineModule,
    ProgressSpinnerModule,
    ToggleButtonModule,
    AccordionModule,
  ],
  providers:[MessageService,ConfirmationService]

})
export class SharedModule { }
