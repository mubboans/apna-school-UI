import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { StudentComponent } from './features/student/student.component';
import { TeacherComponent } from './features/teacher/teacher.component';
import { NoticeComponent } from './features/notice/notice.component';
import { FeesChartsComponent } from './features/fees-charts/fees-charts.component';
import { StaffComponent } from './features/staff/staff.component';
import { FeesManagementComponent } from './features/fees-management/fees-management.component';
import { LoginComponent } from './core/auth-component/login/login.component';
import { RegisterComponent } from './core/auth-component/register/register.component';
import { ForgotPasswordComponent } from './core/auth-component/forgot-password/forgot-password.component';
import { SidebarComponent } from './core/common-component/sidebar/sidebar.component';
import { HeaderComponent } from './core/common-component/header/header.component';
import { FooterComponent } from './core/common-component/footer/footer.component';
import { HttpHelperInterceptor } from './core/interceptors/http-helper.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChangePasswordComponent } from './core/auth-component/change-password/change-password.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StudentComponent,
    TeacherComponent,
    NoticeComponent,
    FeesChartsComponent,
    StaffComponent,
    FeesManagementComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
   {
    provide:HTTP_INTERCEPTORS,useClass:HttpHelperInterceptor,multi:true
   }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
