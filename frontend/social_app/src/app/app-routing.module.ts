import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './content/dashboard/dash-board/dash-board.component';
import { CustomerRegistationComponent } from './content/authiencation/customer-registation/customer-registation.component';
import { CustomerLoginComponent } from './content/authiencation/customer-login/customer-login.component';
import { AdminLoginComponent } from './content/authiencation/admin-login/admin-login.component';
import { FeedMsgComponent } from './content/Feedmsg/feed-msg/feed-msg.component';
import { MsgPostComponent } from './content/messages/msg-post/msg-post.component';
import { ContactUsComponent } from './content/contactus/contact-us/contact-us.component';
import { ProfileComponent } from './content/profile/profile/profile.component';
import { PostMsgComponent } from './content/post/post-msg/post-msg.component';

import { PricingSubscribeComponent } from './paymentgateway/pricing-subscribe/pricing-subscribe.component';

const routes: Routes = [
  {path:'dash-board',component:DashBoardComponent},
  {path:'pri-sub',component:PricingSubscribeComponent},
  {path:'cust-regi',component:CustomerRegistationComponent},
  {path:'feed',component:FeedMsgComponent},
  {path:'msg',component:MsgPostComponent},
  {path:'contactus',component:ContactUsComponent},
  {path:'profile',component:ProfileComponent},
  {path:'post',component:PostMsgComponent},
  {path:'ad-log',component:AdminLoginComponent},
  {path:'cust-login',component:CustomerLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
