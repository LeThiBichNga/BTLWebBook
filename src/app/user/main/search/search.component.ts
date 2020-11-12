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
  page: any;
  pageSize: any;
  item:any;
  totalItems:any;
  search:any;
  listtotal = [];
  ngOnInit(): void {
    this.item = [];
    this.page = 1;
    this.pageSize = 8;
    this._route.params.subscribe(params=>{
      var search = params["txtsearch"];
      this.search = search;
      this._api.post('api/sanpham/get_san_pham_search', { page: this.page, pageSize: this.pageSize, search: search}).subscribe(res => {
      this.item = res.data;
      this.totalItems = res.totalItems;
      }, err => { });       
    });
  }
  
  phantrang(){
    var listtotal = [];
    var nava = parseInt((this.totalItems / this.pageSize).toFixed());
      // lấy tổng số sp chia cho 1 trang r lấy nguyên lên kết quả day, toFixed: làm tròn lên
    for(var i = 1;i<=nava;i++){
      listtotal.push(i);  
    }
    return listtotal;
  }
}
