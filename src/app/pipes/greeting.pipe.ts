import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greeting'
})
export class GreetingPipe implements PipeTransform {

  transform(value: Date | undefined, ...args: unknown[]): string {
    if (value === undefined) return "";
    let hours:number = value.getHours();
    let timeonly = `${value.getHours()}:${value.getMinutes()}:${value.getSeconds()}`;
    if (hours < 12) return `Good Morning ${ timeonly }`;
    if (hours >= 12 && hours <= 17) return `Good Afternoon ${ timeonly }`;
    return `Good Evening ${ timeonly }`;
  }

}
