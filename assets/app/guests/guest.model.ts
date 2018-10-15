export class Guest {
    name: string;
    isAttending: boolean;
    guestId?: string;
    email?: string;
    numberOfGuests?: number;
    guestNames?: string;
    mealChoice?: string;
    guestMealChoice?: string;
    songSuggestion?: string;
    dietaryRestrictions?: string;

    constructor(name: string, isAttending: boolean, guestId?: string, email?: string,
                numberOfGuests?: number, guestNames?: string, mealChoice? : string,
                guestMealChoice?: string, songSuggestion?: string, dietaryRestrictions?:string) {
        this.name = name;
        this.isAttending = isAttending;
        this.guestId = guestId;
        this.email = email;
        this.numberOfGuests = numberOfGuests;
        this.guestNames = guestNames;
        this.mealChoice = mealChoice;
        this.guestMealChoice = guestMealChoice;
        this.songSuggestion = songSuggestion;
        this.dietaryRestrictions = dietaryRestrictions;
    }
}