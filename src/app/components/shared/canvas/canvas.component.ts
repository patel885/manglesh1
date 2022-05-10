import { Component } from '@angular/core';
import { BlogHelperService } from '../../services/blog-helper.service';
import instagram from '../../data/instagram.json';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent extends BlogHelperService {
  public instapost = instagram;
}
