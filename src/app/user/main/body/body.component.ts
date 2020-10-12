
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from 'src/app/lib/base-component';




@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent extends BaseComponent implements OnInit {

  constructor(private injector: Injector, private http: HttpClient) { 
    super(injector)
  }
  itemnew: any;
  newnew:any;
  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      console.log("hello admin");
      this.http.get("https://localhost:44374/api/sanpham/get_sanpham_new").subscribe(res=>{
        this.itemnew = res;
        setTimeout(()=>{
          this.loadScripts();
        })
      })
      this.http.get("https://localhost:44374/api/tintuc/get_tintuc_new").subscribe(res=>{
        this.newnew = res;
        setTimeout(()=>{
          this.loadScripts();
        })
      })
    })     
  }
}
