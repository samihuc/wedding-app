import { Component } from '@angular/core';

import { MessageService } from "./messages/message.service";
import {GuestService} from "./guests/guest.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [MessageService, GuestService]
})
export class AppComponent {
    
}