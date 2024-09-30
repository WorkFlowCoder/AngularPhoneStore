import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ListOfPhoneComponent } from './list-of-phone/list-of-phone.component';
import { SinglePhoneComponent } from './single-phone/single-phone.component';

export const routes: Routes = [
    {path:"", component: LandingPageComponent},
    {path:"contact", component: ContactComponent},
    {path:"about", component: AboutUsComponent},
    {path:"produits",component: ListOfPhoneComponent},
    {path:"product/:id",component: SinglePhoneComponent},
    {path:"**", component: LandingPageComponent}
];