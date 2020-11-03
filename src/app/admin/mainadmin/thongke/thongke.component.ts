import { BaseComponent } from './../../../lib/base-component';
import { Component, OnInit, Injector } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-thongke',
  templateUrl: './thongke.component.html',
  styleUrls: ['./thongke.component.css']
})
export class ThongkeComponent extends BaseComponent implements OnInit {

  constructor(private injector: Injector ) {
    super(injector)
   }
  items = [];
  pageOfItems: Array<any>;
  tonkho: any;
  het:any;
  saphet:any;
  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));
      this._api.get("api/thongke/Get_tonkho_Sanpham").subscribe(ress=>{
        this.tonkho  = ress;
        console.log(ress);
      });
      this._api.get("api/thongke/Get_Het_Sanpham").subscribe(ress=>{
        this.het  = ress;
      });
      this._api.get("api/thongke/Get_Saphet_Sanpham").subscribe(ress=>{
        this.saphet  = ress;
      });
      setTimeout(()=>{
        this.loadScripts();
      })   
    })
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }   

}
