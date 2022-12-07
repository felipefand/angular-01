import { Pipe, PipeTransform } from "@angular/core";

@Pipe( {
    name: "value"
})
export class ValuePipe implements PipeTransform {
    dollarValue = 5.21;

    transform(value: number) {
        return `R$${(value * this.dollarValue).toFixed(2)}`
    }

}