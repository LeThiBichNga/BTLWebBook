import { BaseComponent } from 'src/app/lib/base-component';
import { BannerComponent } from './../../share/banner/banner.component';
import { Component, OnInit, Injector} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent extends BaseComponent implements OnInit {

  constructor(private injector:Injector) { 
    super(injector)
  }
  item : any;
  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      var iddm = params["id"];
      this._api.get("api/sanpham/get_san_pham_by_iddm/" + iddm).subscribe(res=>{
        this.item = res;
        console.log(res);
        setTimeout(()=>{
          this.loadScripts();
        })
      })
    })
  }
  addcart(value){
    console.log(value);
    this._cart.addToCart(value);
    alert("Thêm thành công");
  }
  splittensp(tesp){
    var ds = tesp.split(" ");
    var str ="";
    for(var i=0;i<=3;i++){
      str = str + " " + ds[i];
    }
    return str+ " ..."
  }

}
