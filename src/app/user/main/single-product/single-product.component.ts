import { BaseComponent } from 'src/app/lib/base-component';
import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent extends BaseComponent implements OnInit {
  
  constructor(private _http:HttpClient, private _router: ActivatedRoute, private injector:Injector) {
    super(injector)
   }
  ct : any;
  ctlq:any;
  ngOnInit(): void {
    this._router.params.subscribe(params=>{
      window.scroll(0,0);
      let id = params["id"];
      this._http.get("https://localhost:44374/api/sanpham/get-by-id/"+id).subscribe(res=>{
        this.ct = res;
        this._http.get("https://localhost:44374/api/sanpham/Get_Sanpham_lq/"+this.ct.maloai).subscribe(res=>{
          this.ctlq = res;
          setTimeout(()=>{
            this.loadScripts();
          })
        });
      });
    })
  }
  addcart(value){
    console.log(value);
    this._cart.addToCart(value);
    alert("Thêm thành công");
  }
  changequantiti(){

  }
  add_cart(ct){

  }
}
