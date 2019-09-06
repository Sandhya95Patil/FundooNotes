import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchpipe'
})
export class SearchpipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
   return null;

  //  if(!args){
  //   return value;
  // }else{
  //   args=args.toLocaleLowerCase();
  // }
  // return value.filter(item =>{
  //   return  item.label.toLocaleLowerCase().includes(args);
  //       //return  item.label.startsWith(args)==true
  // })
   }

}

