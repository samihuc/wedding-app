import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, AbstractControl } from "@angular/forms";
import {GuestService} from "../guests/guest.service";
import {Guest} from "../guests/guest.model";

@Component({
    selector: 'wedding-app-rsvp',
    templateUrl: './rsvp.component.html',
    styleUrls: ['./rsvp.component.css']
})
export class WeddingRsvpComponent implements OnInit {
    myForm: FormGroup;
    numberOfGuestsTitleText: string;
    mealChoiceTitleText: string;
    respectAgreementTitleText: string;
    guestNameTitleText: string;
    guestMealChoiceTitleText: string;
    showGuestFields: boolean;
    showAttendingFields: boolean;
    showSuccess: boolean;
    showFailure: boolean;
    showFields: boolean;

    constructor(private guestService: GuestService) {}

    respectValidator(control: AbstractControl) {
        if(control.value !== true) {
            return { invalidAgreement: true };
        }
        return null;
    }

    onSubmit() {
        const guest = new Guest(this.myForm.value.name, this.myForm.value.attending === "yes", this.myForm.value._id,
            this.myForm.value.email, this.myForm.value.numberGuests, this.myForm.value.guestName,
            this.myForm.value.mealChoice, this.myForm.value.guestMealChoice, this.myForm.value.songSuggestion,
            this.myForm.value.dietaryRestrictions);
        this.guestService.addGuest(guest)
            .subscribe(
                data => {
                    this.showSuccess = true;
                    this.showFailure = false;
                    this.showFields = false;
                },
                error => {
                    this.showFailure = true;
                    this.showSuccess = false;
                    console.log(error);
                }
            );
        // this.myForm.reset();
        // this.ngOnInit();
    }

    onNumberOfGuestsChange() {
        if(this.myForm.value.numberGuests && this.myForm.value.numberGuests > 1) {
            this.showGuestFields = true;

            this.guestNameTitleText = 'Plus one name (and any children\'s names)*';
            this.guestMealChoiceTitleText = 'Plus one/children\'s meal choice(s)*: roast pork loin, haddock parmesan, or butternut squash ravioli';

            this.myForm.controls['guestName'].setValidators([Validators.required]);
            this.myForm.controls['guestMealChoice'].setValidators([Validators.required]);

            this.myForm.controls['guestName'].updateValueAndValidity();
            this.myForm.controls['guestMealChoice'].updateValueAndValidity();
        } else {
            this.showGuestFields = !(this.myForm.value.numberGuests && this.myForm.value.numberGuests < 2);

            this.guestNameTitleText = 'Plus one name (and any children\'s names)';
            this.guestMealChoiceTitleText = 'Plus one/children\'s meal choice(s): roast pork loin, haddock parmesan, or butternut squash ravioli';

            this.myForm.controls['guestName'].clearValidators();
            this.myForm.controls['guestMealChoice'].clearValidators();

            this.myForm.controls['guestName'].updateValueAndValidity();
            this.myForm.controls['guestMealChoice'].updateValueAndValidity();
        }
    }

    onAttendingChange() {
        if(this.myForm.value.attending === 'yes') {
            this.showAttendingFields = true;

            this.myForm.controls['numberGuests'].enable();
            this.myForm.controls['guestName'].enable();
            this.myForm.controls['mealChoice'].enable();
            this.myForm.controls['guestMealChoice'].enable();
            this.myForm.controls['dietaryRestrictions'].enable();
            this.myForm.controls['respectAgreement'].enable();

            this.numberOfGuestsTitleText = 'Number of people attending*';
            this.mealChoiceTitleText = 'Meal choice*: all meals can be dairy or gluten free by request';
            this.respectAgreementTitleText = 'Respect agreement*';

            this.myForm.controls['numberGuests'].setValidators([Validators.required]);
            this.myForm.controls['mealChoice'].setValidators([Validators.required]);
            this.myForm.controls['respectAgreement'].setValidators([Validators.required, this.respectValidator]);

            this.myForm.controls['numberGuests'].updateValueAndValidity();
            this.myForm.controls['mealChoice'].updateValueAndValidity();
            this.myForm.controls['respectAgreement'].updateValueAndValidity();
        } else {
            this.showAttendingFields = false;

            // this.myForm.controls['numberGuests'].disable();
            // this.myForm.controls['guestName'].disable();
            // this.myForm.controls['mealChoice'].disable();
            // this.myForm.controls['guestMealChoice'].disable();
            // this.myForm.controls['dietaryRestrictions'].disable();
            // this.myForm.controls['respectAgreement'].disable();

            this.myForm.controls['numberGuests'].reset();
            this.myForm.controls['guestName'].reset();
            this.myForm.controls['mealChoice'].reset();
            this.myForm.controls['guestMealChoice'].reset();
            this.myForm.controls['dietaryRestrictions'].reset();
            this.myForm.controls['respectAgreement'].reset();

            this.numberOfGuestsTitleText = 'Number of people attending';
            this.mealChoiceTitleText = 'Meal choice: all meals can be dairy or gluten free by request';
            this.respectAgreementTitleText = 'Respect agreement';

            this.myForm.controls['numberGuests'].clearValidators();
            this.myForm.controls['mealChoice'].clearValidators();
            this.myForm.controls['respectAgreement'].clearValidators();

            this.myForm.controls['numberGuests'].updateValueAndValidity();
            this.myForm.controls['mealChoice'].updateValueAndValidity();
            this.myForm.controls['respectAgreement'].updateValueAndValidity();
        }
    }

    ngOnInit() {
        this.showFields = true;
        this.showSuccess = false;
        this.showFailure = false;
        this.myForm = new FormGroup({
            name: new FormControl(null, Validators.required),
            email: new FormControl(),
            numberGuests: new FormControl(),
            attending: new FormControl(null, Validators.required),
            mealChoice: new FormControl(),
            guestName: new FormControl(),
            guestMealChoice: new FormControl(),
            songSuggestion: new FormControl(),
            dietaryRestrictions: new FormControl(),
            respectAgreement: new FormControl()
        });
        this.myForm.controls['numberGuests'].disable();
        this.myForm.controls['guestName'].disable();
        this.myForm.controls['mealChoice'].disable();
        this.myForm.controls['guestMealChoice'].disable();
        this.myForm.controls['dietaryRestrictions'].disable();
        this.myForm.controls['respectAgreement'].disable();

        this.numberOfGuestsTitleText = 'Number of people attending';
        this.mealChoiceTitleText = 'Meal choice: all meals can be dairy or gluten free by request';
        this.respectAgreementTitleText = 'Respect agreement';

        this.showGuestFields = true;
        this.showAttendingFields = true;

        this.guestNameTitleText = 'Plus one name (and any children\'s names)';
        this.guestMealChoiceTitleText = 'Plus one/children\'s meal choice(s): roast pork loin, haddock parmesan, or butternut squash ravioli';
    }
}
