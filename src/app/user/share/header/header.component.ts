import { BaseComponent } from './../../../lib/base-component';
import { Component, OnInit, Injector } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BaseComponent implements OnInit {

  constructor(private injector :Injector) { 
    super(injector)
  }
  item: any;
  itemldm:any;
  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      this._api.get('api/danhmuc/get_all_danh_muc').subscribe(res =>{
        this.item = res;
        console.log(this.item);
        setTimeout(()=>{
          this.loadScripts();
        })
      })
      this._api.get('api/Loaisanpham/get_loai_san_pham').subscribe(res=>{
        this.itemldm = res;
        setTimeout(()=>{
          this.loadScripts();
        })
      })
    })
  }

}
