import { Routes, RouterModule } from "@angular/router"

import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { AUTH_ROUTES } from "./auth/auth.routes";
import {WeddingRsvpComponent} from "./rsvp/rsvp.component";
import {WeddingRegistryComponent} from "./registry/registry.component";
import {WeddingDirectionsComponent} from "./directions/directions.component";
import {WeddingHomeComponent} from "./home/home.component";
import {WeddingAccommodationComponent} from "./accommodation/accommodation.component";
import {WeddingRsvpPlaceholderComponent} from "./rsvp-placeholder/rsvp-placeholder.component";
import {WeddingGuestsComponent} from "./guests/guests.component";

const APP_ROUTES: Routes = [
    // { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: WeddingHomeComponent },
    { path: 'rsvp', component: WeddingRsvpComponent },
    { path: 'registry', component: WeddingRegistryComponent },
    { path: 'directions', component: WeddingDirectionsComponent },
    // { path: 'guests/5185700300/admin', component: WeddingGuestsComponent },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
