import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/lib/base-component';
declare var CKEDITOR: any;
@Component({
  selector: 'app-tintuc',
  templateUrl: './tintuc.component.html',
  styleUrls: ['./tintuc.component.css']
})
export class TintucComponent extends BaseComponent implements OnInit {
  ha:any;
  create:any = true;
  tieude:any;
  tomtat:any;
  noidung:any;
  ngaydang:any;
  id:any;
  constructor(private injector:Injector) {
    super(injector);
   }
   tintuc:any;
  ckeditorContent:any;
  ngOnInit(): void {
    CKEDITOR.on('instanceCreated', function (event, data) {
      var editor = event.editor,
      element = editor.element;
      editor.name = "content"
   });
   this._route.params.subscribe(params=>{
    this._api.get("api/tintuc/get_tin_tuc").subscribe(res=>{
      this.tintuc = res;
      console.log(res);
    });
    
   });
  } 
  create_sp(){
    this.create = true;
    this.tieude="";
    this.tomtat="";
    this.noidung ="";
    this.ngaydang="";
  }
  singer_tt:any;
  update(id){
    this.create = false;
    this._api.get("api/tintuc/get_chitiettintuc_by_id/"+id).subscribe(res=>{
      this.singer_tt = res;
      console.log(this.singer_tt);
      this.tieude=this.singer_tt.tieude;
      this.tomtat=this.singer_tt.tomtat;
      this.noidung =this.singer_tt.noidung;
      this.ngaydang =this.singer_tt.ngaydang;
      this.id = this.singer_tt.matt;
    });
  }
  delete_sp(id){
    this._api.delete("api/tintuc/delete_tin_tuc/"+id).subscribe(res=>{
      if(res){
        this._api.get("api/tintuc/get_tin_tuc").subscribe(ress=>{
          this.tintuc = ress;
        });
        alert("Xóa thành công");
      }
      else{
        alert("Xóa thất bại");
      }
    });
  }
  getdata(tieude,tomtat,noidung,ngaydang){
    var nd = CKEDITOR.instances.content.getData();  
    this.getEncodeFromImage(this.ha).subscribe(res=>{
      var fromdate = {
        tieude : tieude,
        hinhanh: res,
        tomtat: parseInt(tomtat),
        noidung: noidung,
        ngaydang:ngaydang,
      
      }
      if(this.create){
        this._api.post("api/tintuc/create_tin_tuc",fromdate).subscribe(res=>{
          if(res){
            this._api.get("api/tintuc/get_tin_tuc").subscribe(ress=>{
              this.tintuc = ress;
            });
            alert("Thêm thành công");
          }
          else{
            alert("Thêm thất bại");
          }
        });
      }
      else{
        this._api.put("api/tintuc/update_tin_tuc/"+this.id,fromdate).subscribe(res=>{
          if(res){
            this._api.get("api/tintuc/get_tin_tuc").subscribe(ress=>{
              this.tintuc = ress;
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
