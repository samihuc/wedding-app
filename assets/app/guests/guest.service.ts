import { Guest } from "./guest.model";
import {Http, Response, Headers} from "@angular/http";
import {Injectable, EventEmitter} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class GuestService {
    constructor(private http: Http) {}

    addGuest(guest: Guest) {
        const body = JSON.stringify(guest);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://159.65.35.143:3000/guests', body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                return new Guest(result.guest.name, result.guest.isAttending, null,
                    result.guest.email, result.guest.numberOfGuests, result.guest.guestNames,
                    result.guest.mealChoice, result.guest.guestMealChoice, result.guest.songSuggestion,
                    result.guest.dietaryRestrictions);
            })
            .catch((error: Response) => { console.log(error); Observable.throw(error.json()); });
    }

    getGuests() {
        return this.http.get('http://mihucparrott.com/guests')
            .map((response: Response) => {
                const guests = response.json().guests;
                let transformedGuests: Guest[] = [];
                for(let result of guests) {
                    transformedGuests.push(new Guest(result.name, result.isAttending, result._id,
                        result.email, result.numberOfGuests, result.guestNames,
                        result.mealChoice, result.guestMealChoice, result.songSuggestion,
                        result.dietaryRestrictions));
                }
                return transformedGuests;
            })
            .catch((error: Response) => { console.log(error); Observable.throw(error.json()); });
    }

    // editMessage(message: Message) {
    //     this.messageIsEdit.emit(message);
    // }
    //
    // updateMessage(message: Message) {
    //     const body = JSON.stringify(message);
    //     const headers = new Headers({'Content-Type': 'application/json'});
    //     return this.http.patch('http://localhost:3000/message/' + message.messageId, body, {headers: headers})
    //         .map((response: Response) => response.json())
    //         .catch((error: Response) => Observable.throw(error.json()));
    // }
    //
    // deleteMessage(message: Message) {
    //     this.messages.splice(this.messages.indexOf(message), 1);
    //     return this.http.delete('http://localhost:3000/message/' + message.messageId)
    //         .map((response: Response) => response.json())
    //         .catch((error: Response) => Observable.throw(error.json()));
    // }
}
