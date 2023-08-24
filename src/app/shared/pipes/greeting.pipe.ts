import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greeting'
})
export class GreetingPipe implements PipeTransform {

  transform(value: Date | undefined, args: string): string {
    if (value === undefined) return "";
    let hours:number = value.getHours();
    let timeonly = `${value.getHours()}:${value.getMinutes()}:${value.getSeconds()}`;
    if (hours < 12) return `${args} Good Morning ${ timeonly } ${args}`;
    if (hours >= 12 && hours <= 17) return `${args} Good Afternoon ${ timeonly } ${args}`;
    return `${args} Good Evening ${ timeonly } ${args}`;
  }

}
