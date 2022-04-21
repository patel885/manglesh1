import { Component } from '@angular/core';
import { ServiceHelperService } from 'src/app/components/services/service-helper.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent extends ServiceHelperService {

}
