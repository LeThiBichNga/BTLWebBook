import { BaseComponent } from 'src/app/lib/base-component';
import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent extends BaseComponent implements OnInit {
  
  constructor(private _http:HttpClient, private _router: ActivatedRoute, private injector:Injector) {
    super(injector)
   }
  ctt : any;
  ngOnInit(): void {
    this._router.params.subscribe(params=>{
      let id = params["id"];
      this._http.get("https://localhost:44374/api/tintuc/get-chitiettintuc-by-id/"+id).subscribe(res=>{
        this.ctt = res;
          setTimeout(()=>{
            this.loadScripts();
          })
        });
      });
  }
}
