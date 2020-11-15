import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { UserpageComponent } from './userpage/userpage.component';
import {MatSelectModule} from '@angular/material/select';
import { PaymentComponent } from './payment/payment.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { CancelridesComponent } from './cancelrides/cancelrides.component'; 
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminusersComponent } from './adminusers/adminusers.component';
import { AdmindriversComponent } from './admindrivers/admindrivers.component';
import { AdminadddriversComponent } from './adminadddrivers/adminadddrivers.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { InteractionService } from './servicess/interaction.service';
import { NoridesComponent } from './norides/norides.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ConfirmService } from './servicess/confirm.service';
import { DriverloginComponent } from './driverlogin/driverlogin.component';
import { DriverLoginService } from './servicess/driver-login.service';
import { DriverpageComponent } from './driverpage/driverpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    LoginComponent,
    DialogComponent,
    UserpageComponent,
    PaymentComponent,
    CancelridesComponent,
    AdmindashboardComponent,
    AdminusersComponent,
    AdmindriversComponent,
    AdminadddriversComponent,
    NoridesComponent,
    ConfirmComponent,
    DriverloginComponent,
    DriverpageComponent,

  ],
  entryComponents:[DialogComponent,NoridesComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatRadioModule,
    MatTabsModule,
    MatCheckboxModule,
    MatTableModule,
    MatFormFieldModule,
    MatMenuModule,
    MatGridListModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    MatToolbarModule,
    MatDialogModule,
    MatInputModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component:HomepageComponent},
      {path: 'Home', component:HomepageComponent},
      {path: 'About', component:AboutComponent},
      {path: 'Services', component:ServicesComponent},
      {path: 'Contact', component:ContactComponent},
      {path: 'Login', component:LoginComponent},
      {path: 'DriverLogin', component: DriverloginComponent},
      {path: 'UserPage', component: UserpageComponent},
      {path: 'DriverPage',component: DriverpageComponent},
      {path: 'PaymentOptions',component: PaymentComponent},
      {path: 'CancelRides',component:CancelridesComponent},
      {path:'AdminDashboard',component:AdmindashboardComponent},
      {path:'AdminUsers',component:AdminusersComponent},
      {path:'AdminDrivers',component:AdmindriversComponent},
      {path:'AdminAddDrivers',component:AdminadddriversComponent}
    ]),
    MatCardModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [{
    provide: MatDialogRef,
    useValue: {}
  },InteractionService,ConfirmService,DriverLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
