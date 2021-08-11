import { AbstractControl } from "@angular/forms";

export class MyValidator {
    static isPriceValid(control: AbstractControl) {
        const value = control.value;
        console.log(value);
        if (value <= 0 || value > 10000) {
            return {invalid: true}
        } 
        return null;
    }
}