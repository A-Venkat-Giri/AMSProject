import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addAsset'
})
export class AddAssetPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
