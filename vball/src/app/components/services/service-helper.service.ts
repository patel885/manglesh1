import { AfterViewInit, AfterContentInit, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import service from '../data/service/service.json';

@Injectable({
  providedIn: 'root'
})
export class ServiceHelperService implements AfterContentInit, AfterViewInit,OnInit  {

  // pagination
  page: number = 1;
  public serviceblock = service;
  public servicedetails = service;
  constructor(private router: ActivatedRoute) { }

  public setPost(id: any) {
    this.servicedetails = service.filter((item: { id: any; }) => { return item.id == id });
  }
  ngAfterContentInit(): void {
    this.setPost(this.router.snapshot.params.id);
  }
  ngAfterViewInit(): void {
    
  }
  ngOnInit(): void{
    
  }
}
