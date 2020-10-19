import { Router } from '@angular/router';
import { BaseComponent } from './../../../lib/base-component';
import { Component, OnInit, Injector } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BaseComponent implements OnInit {

  constructor(private injector :Injector, private _rou: Router) { 
    super(injector)
  }
  item: any;
  itemldm:any;
  itemcart:any;
  totalprice:any;
  totalproduce:any;
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
    this._cart.items.subscribe(res=>{
      this.itemcart = res;
      this.totalprice = 0;
      this.totalproduce = 0;
      for(let i of res){
        this.totalproduce += 1;
        this.totalprice = this.totalprice + i.soluong*i.gia;
      }
    })
  }
  deleteCart(id){
    this._cart.deleteItem(id);
    alert("Xóa thành công")
  }
  onsearch(value){
    this._rou.navigate(["/timkiem",value])
  }
}
