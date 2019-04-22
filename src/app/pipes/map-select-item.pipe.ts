import { Pipe, PipeTransform } from '@angular/core';
import _ from 'lodash';

@Pipe({
  name: 'mapSelectItem'
})
export class MapSelectItemPipe implements PipeTransform {
  transform(value: string, list: Array<any>): string {
    const initialValue = _.get(list, 'initValue');
    const option = initialValue.find(item => item.id === value);
    return _.get(option, 'value');
  }
}

