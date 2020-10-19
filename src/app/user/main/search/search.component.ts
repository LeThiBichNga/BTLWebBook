import { BaseComponent } from './../../../lib/base-component';
import { Component, OnInit, Injector } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent extends BaseComponent implements OnInit {
  constructor(private injector: Injector) { 
    super(injector)
  }
  item:any;
  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      var search = params["txtsearch"];
      this._api.get("api/sanpham/get_san_pham_by_iddm/" + 1).subscribe(res=>{
        this.item = res;
        console.log(res);
        setTimeout(()=>{
          this.loadScripts();
        })
      })
    })
  }

}
