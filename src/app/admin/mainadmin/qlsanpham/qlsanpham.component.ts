import { BaseComponent } from './../../../lib/base-component';
import { NgModule } from '@angular/core';
import { Component, OnInit, Injector } from '@angular/core';
import { from } from 'rxjs';
declare var CKEDITOR: any;
@Component({
  selector: 'app-qlsanpham',
  templateUrl: './qlsanpham.component.html',
  styleUrls: ['./qlsanpham.component.css']
})
export class QlsanphamComponent extends BaseComponent implements OnInit {
  ha:any;
  create:any = true;
  sp:any;
  tg:any;
  motan:any;
  gsp:any;
  slsp:any;
  nd:any;
  ml:any = 1;
  id:any;
  constructor(private injector:Injector) {
    super(injector);
   }
   itemml:any;
   itemsp:any;
  ckeditorContent:any;
  ngOnInit(): void {
    CKEDITOR.on('instanceCreated', function (event, data) {
      var editor = event.editor,
      element = editor.element;
      editor.name = "content"
   });
   this._route.params.subscribe(params=>{
    this._api.get("api/sanpham/get_san_pham").subscribe(res=>{
      this.itemsp = res;
      console.log(res);
    });
    this._api.get("api/loaisanpham/get_loai_san_pham").subscribe(res=>{
      this.itemml= res;
      console.log(res);
    });
   });
  } 
  create_sp(){
    this.create = true;
    this.sp="";
    this.tg="";
    this.motan="";
    this.gsp="";
    this.slsp="";
    this.nd ="";
    this.ml= 1;
  }
  singer_sp:any;
  update(id){
    this.create = false;
    this._api.get("api/sanpham/get-by-id/"+id).subscribe(res=>{
      this.singer_sp = res;
      console.log(this.singer_sp);
      this.sp=this.singer_sp.tensp;
      this.tg=this.singer_sp.tacgia;
      this.motan=this.singer_sp.motangan;
      this.gsp=this.singer_sp.gia;
      this.slsp=this.singer_sp.soluong;
      this.nd =this.singer_sp.mota;
      this.ml = this.singer_sp.maloai;
      this.id = this.singer_sp.masp;
    });
  }
  delete_sp(id){
    this._api.delete("api/sanpham/delete_san_pham/"+id).subscribe(res=>{
      if(res){
        this._api.get("api/sanpham/get_san_pham").subscribe(ress=>{
          this.itemsp = ress;
        });
        alert("Xóa thành công");
      }
      else{
        alert("Xóa thất bại");
      }
    });
  }
  getdata(sp,tentg,g,sl,ml,mtn){
    var nd = CKEDITOR.instances.content.getData();  
    this.getEncodeFromImage(this.ha).subscribe(res=>{
      var fromdate = {
        tensp : sp,
        tacgia: tentg,
        gia: parseInt(g),
        soluong: parseInt(sl),
        anh: res,
        maloai: parseInt(ml),
        motangan: mtn, 
        mota: nd,
        rate:0
      }
      if(this.create){
        this._api.post("api/sanpham/create_san_pham",fromdate).subscribe(res=>{
          if(res){
            this._api.get("api/sanpham/get_san_pham").subscribe(ress=>{
              this.itemsp = ress;
            });
            alert("Thêm thành công");
          }
          else{
            alert("Thêm thất bại");
          }
        });
      }
      else{
        this._api.put("api/sanpham/update_san_pham/"+this.id,fromdate).subscribe(res=>{
          if(res){
            this._api.get("api/sanpham/get_san_pham").subscribe(ress=>{
              this.itemsp = ress;
            });
            alert("Sửa thành công");
          }
          else{
            alert("Sửa thất bại");
          }
        });
      }
    }); 
  }
  onchange(event){
    this.ha = event.target;
  }
}
