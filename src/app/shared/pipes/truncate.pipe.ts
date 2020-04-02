import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "truncate"
})
export class TruncatePipe implements PipeTransform {
  transform(value: any, limit: number = 20, trial: string = "..."): any {
    return value.length > limit ? value.substring(0, limit) + trial : value;
  }
}
