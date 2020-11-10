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
  donhang: any;
  sotien:any;
  khachhang:any;
  sanpham:any;
  soluongsp:number = 0;
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
      this._api.get("api/hoadon/get_tien").subscribe(ress=>{
        this.sotien  = ress;
      });
      this._api.get("api/hoadon/get_hoa_don").subscribe(ress=>{
        this.donhang  = ress;
      });
      this._api.get("api/khachhang/get_khach_hang").subscribe(ress=>{
        this.khachhang  = ress;
      });
      this._api.get("api/sanpham/get_san_pham").subscribe(ress=>{
        this.sanpham  = ress;
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
