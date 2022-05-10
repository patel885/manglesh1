import { Component, Input } from '@angular/core';
import data from '../../data/service/service.json';
import { BlogHelperService } from '../../services/blog-helper.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent extends BlogHelperService {
  public service = data;
  @Input() layout: number | string | undefined = "tertiary-bg";
  @Input() logo: number | string | undefined;


}
