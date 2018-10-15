import { Component, OnInit } from "@angular/core";
import { Guest } from "./guest.model";
import {GuestService} from "./guest.service";

@Component({
    selector: 'wedding-app-guests',
    template: `
        <p>Total number of guests confirmed: {{numberOfGuestsConfirmed}}</p>
        <p>Number of invitees who declined: {{numberOfInvitesRejected}}</p>
        <p>Estimated number of meat meals: {{numberOfMeatMeals}}</p>
        <p>Estimated number of fish meals: {{numberOfFishMeals}}</p>
        <p>Estimated number of veggie meals: {{numberOfVeggieMeals}}</p>
        <wedding-app-guest
            [guest]="guest"
            *ngFor="let guest of guests"></wedding-app-guest>`,
    styleUrls: ['./guests.component.css']
})
export class WeddingGuestsComponent implements OnInit {
    // guests: Guest[] = [
    //     {name: 'test', isAttending: true, numberOfGuests: 4},
    //     {name: 'testsdfdsa', isAttending: true, guestId: '12345', email: 'samihuc@gmail.com', numberOfGuests: 2, guestNames: 'John and Mary, Uptown Funk by Bruno Mars and also Don\'t Stop Believin by Journey', mealChoice: 'veggie', guestMealChoice: 'veggie and idk and meat', songSuggestion: 'Uptown Funk by Bruno Mars and also Don\'t Stop Believin by Journey'}]
    guests: Guest[];
    numberOfGuestsConfirmed: number;
    numberOfInvitesRejected: number;
    numberOfMeatMeals: number;
    numberOfVeggieMeals: number;
    numberOfFishMeals: number;

    constructor(private guestService: GuestService) {}

    ngOnInit() {
        this.guestService.getGuests()
            .subscribe(
                (guests: Guest[]) => {
                    this.guests = guests;
                    this.numberOfGuestsConfirmed = this.guests
                        .filter(guest => guest.isAttending === true)
                        .reduce((total, guest) => {
                            if(guest.numberOfGuests) {
                                return total + guest.numberOfGuests;
                            } else {
                                return total;
                            }
                        }, 0);
                    this.numberOfInvitesRejected = this.guests.filter(guest => guest.isAttending === false).length;
                    this.numberOfMeatMeals = this.guests.reduce((total, guest) => {
                        let numberOfMeals = 0;
                        if(guest.mealChoice && guest.mealChoice === "Pork Loin") {
                            numberOfMeals = numberOfMeals + 1;
                        }
                        if(guest.guestMealChoice) {
                            numberOfMeals = numberOfMeals + (guest.guestMealChoice.split("pork").length - 1) + (guest.guestMealChoice.split("Pork").length - 1);
                        }
                        console.log(numberOfMeals);
                        return total + numberOfMeals;
                    }, 0);
                    this.numberOfVeggieMeals = this.guests.reduce((total, guest) => {
                        let numberOfVegMeals = 0;
                        if(guest.mealChoice && guest.mealChoice === "Squash Ravioli") {
                            numberOfVegMeals++;
                        }
                        if(guest.guestMealChoice) {
                            numberOfVegMeals = numberOfVegMeals + (guest.guestMealChoice.split("ravioli").length - 1) + (guest.guestMealChoice.split("Ravioli").length - 1);
                        }
                        console.log(numberOfVegMeals);
                        return total + numberOfVegMeals;
                    }, 0);
                    this.numberOfFishMeals = this.guests.reduce((total, guest) => {
                        let numberOfHaddockMeals = 0;
                        if(guest.mealChoice && guest.mealChoice === "Haddock Parmesan") {
                            numberOfHaddockMeals++;
                        }
                        if(guest.guestMealChoice) {
                            numberOfHaddockMeals = numberOfHaddockMeals + (guest.guestMealChoice.split("haddock").length - 1) + (guest.guestMealChoice.split("Haddock").length - 1);
                        }
                        console.log(numberOfHaddockMeals);
                        return total + numberOfHaddockMeals;
                    }, 0);
                },
                error => { console.log(error) }
            );
        // this.numberOfGuestsConfirmed = this.guests
        //     .filter(guest => guest.isAttending === true)
        //     .reduce((total, guest) => {
        //         if(guest.numberOfGuests) {
        //             return total + guest.numberOfGuests;
        //         } else {
        //             return total;
        //         }
        //     }, 0);
        // this.numberOfInvitesRejected = this.guests.filter(guest => guest.isAttending === false).length;
        // this.numberOfMeatMeals = this.guests.reduce((total, guest) => {
        //     let numberOfMeals = 0;
        //     if(guest.mealChoice && guest.mealChoice === 'meat') {
        //         numberOfMeals++;
        //     }
        //     if(guest.guestMealChoice) {
        //         numberOfMeals = numberOfMeals + guest.guestMealChoice.split("meat").length - 1;
        //     }
        //     return numberOfMeals;
        // }, 0);
        // this.numberOfVeggieMeals = this.guests.reduce((total, guest) => {
        //     let numberOfMeals = 0;
        //     if(guest.mealChoice && guest.mealChoice === 'veggie') {
        //         numberOfMeals++;
        //     }
        //     if(guest.guestMealChoice) {
        //         numberOfMeals = numberOfMeals + guest.guestMealChoice.split("veggie").length - 1;
        //     }
        //     return numberOfMeals;
        // }, 0);
    }
}