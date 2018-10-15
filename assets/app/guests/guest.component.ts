import { Component, Input, OnInit } from "@angular/core";
import { Guest } from "./guest.model";

@Component({
    selector: 'wedding-app-guest',
    templateUrl: './guest.component.html',
    styleUrls: ['./guest.component.css']
})
export class WeddingGuestComponent implements OnInit {
    @Input() guest: Guest;
    showExtraInfo: boolean;

    onEdit() {};

    onDelete() {};

    ngOnInit() {
        this.showExtraInfo = this.guest.email || this.guest.numberOfGuests || this.guest.guestNames || this.guest.mealChoice || this.guest.guestMealChoice || this.guest.songSuggestion || this.guest.dietaryRestrictions;
    }
}