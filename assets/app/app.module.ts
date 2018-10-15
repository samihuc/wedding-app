import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from "@angular/http";

import { AppComponent } from "./app.component";
import { MessageComponent } from "./messages/message.component";
import { MessageListComponent } from "./messages/message-list.component";
import { MessageInputComponent } from "./messages/message-input.component";
import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header.component";
import { routing } from "./app.router";
import { LogoutComponent } from "./auth/logout.component";
import { SignupComponent } from "./auth/signup.component";
import { SigninComponent } from "./auth/signin.component";
import {WeddingHeaderComponent} from "./new-header/new-header.component";
import {WeddingRsvpComponent} from "./rsvp/rsvp.component";
import {WeddingRegistryComponent} from "./registry/registry.component";
import {WeddingDirectionsComponent} from "./directions/directions.component";
import {WeddingHomeComponent} from "./home/home.component";
import {WeddingFooterComponent} from "./footer/footer.component";
import {WeddingAccommodationComponent} from "./accommodation/accommodation.component";
import {WeddingRsvpPlaceholderComponent} from "./rsvp-placeholder/rsvp-placeholder.component";
import {WeddingGuestComponent} from "./guests/guest.component";
import {WeddingGuestsComponent} from "./guests/guests.component";

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        SignupComponent,
        SigninComponent,
        WeddingHeaderComponent,
        WeddingRsvpComponent,
        WeddingRegistryComponent,
        WeddingDirectionsComponent,
        WeddingHomeComponent,
        WeddingFooterComponent,
        WeddingAccommodationComponent,
        WeddingRsvpPlaceholderComponent,
        WeddingGuestComponent,
        WeddingGuestsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        ReactiveFormsModule,
        HttpModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}