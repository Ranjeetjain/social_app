import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PricingSubscribeComponent } from './paymentgateway/pricing-subscribe/pricing-subscribe.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { AdminRegisterComponent } from './content/authiencation/admin-register/admin-register.component';
import { AdminLoginComponent } from './content/authiencation/admin-login/admin-login.component';
import { CustomerRegistationComponent } from './content/authiencation/customer-registation/customer-registation.component';
import { CustomerLoginComponent } from './content/authiencation/customer-login/customer-login.component';
import { DashBoardComponent } from './content/dashboard/dash-board/dash-board.component';
import { MainCardsComponent } from './content/dashboard/main-cards/main-cards.component';
import { GraphCardComponent } from './content/dashboard/graph-card/graph-card.component';
import { PieChartComponent } from './content/dashboard/pie-chart/pie-chart.component';
import { ViewTableComponent } from './content/dashboard/view-table/view-table.component';
import { ProfileComponent } from './content/profile/profile/profile.component';
import { FeedMsgComponent } from './content/Feedmsg/feed-msg/feed-msg.component';
import { MsgPostComponent } from './content/messages/msg-post/msg-post.component';
import { ContactUsComponent } from './content/contactus/contact-us/contact-us.component';
import { PostMsgComponent } from './content/post/post-msg/post-msg.component';
import { ProfileCardComponent } from './header/profile-card/profile-card.component';
import { SideNavigationComponent } from './content/dashboard/side-navigation/side-navigation.component';
import { RegFormComponent } from './content/authiencation/reg-form/reg-form.component';
import { CustLogFormComponent } from './content/authiencation/cust-log-form/cust-log-form.component';
import { AdmLogFormComponent } from './content/authiencation/adm-log-form/adm-log-form.component';
import { AdmRegFormComponent } from './content/authiencation/adm-reg-form/adm-reg-form.component';
import { MyProfileCardComponent } from './content/profile/profile/my-profile-card/my-profile-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PricingSubscribeComponent,
    NavigationComponent,
    AdminRegisterComponent,
    AdminLoginComponent,
    CustomerRegistationComponent,
    CustomerLoginComponent,
    DashBoardComponent,
    MainCardsComponent,
    GraphCardComponent,
    PieChartComponent,
    ViewTableComponent,
    ProfileComponent,
    FeedMsgComponent,
    MsgPostComponent,
    ContactUsComponent,
    PostMsgComponent,
    ProfileCardComponent,
    SideNavigationComponent,
    RegFormComponent,
    CustLogFormComponent,
    AdmLogFormComponent,
    AdmRegFormComponent,
    MyProfileCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
