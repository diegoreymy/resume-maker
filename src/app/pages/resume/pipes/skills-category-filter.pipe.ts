import { Pipe, PipeTransform } from '@angular/core';
import { Skill } from 'src/app/shared/models/resume.model';

@Pipe({
  name: 'skillsCategoryFilter'
})
export class SkillsCategoryFilterPipe implements PipeTransform {
  transform(items: Skill[], category: string): any {
      if (!items || !category) {
          return items;
      }
      return items.filter(item => item.category.indexOf(category) !== -1);
  }
}