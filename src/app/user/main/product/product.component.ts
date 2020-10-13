import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private _http:HttpClient, private _router: ActivatedRoute) { }
  item : any;
  ngOnInit(): void {
    this._router.params.subscribe(params=>{
      this._http.get("https://localhost:44374/api/sanpham/get_san_pham").subscribe(res=>{
        this.item = res;
      })
    })
  }

}
