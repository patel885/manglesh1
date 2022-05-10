import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'aero-container-list',
  templateUrl: './container-list.component.html',
  styleUrls: ['./container-list.component.css']
})
export class ContainerListComponent implements OnInit {

  @Input() parentpath: string = '';
  @Input() mainTitle: string = '';
  _list: any[] = [];
  @Input() more: string = 'Read More'

  get list(){
    return this._list;
  }

  @Input() set list(value: any[]){
    var modified = value.filter(s => {
      s.title = s.title === '' ? s.desc : s.title;
      return s.smallimage !== '';
    });

    this._list = modified;
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onReadMoreLink(item: any){
    var path =  this.parentpath === '' ? item.path : this.parentpath + item.path;
    console.log(path);
    this.router.navigate([path]);
  }

}
