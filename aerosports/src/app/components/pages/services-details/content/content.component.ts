import { Component } from '@angular/core';
import { ServiceHelperService } from 'src/app/components/services/service-helper.service';
import data from '../../../data/workprocess.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent extends ServiceHelperService {
  public workprocess = data;
}
