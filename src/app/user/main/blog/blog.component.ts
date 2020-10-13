import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private _router: ActivatedRoute, private _http: HttpClient) { }
  tt:any;
  ngOnInit(): void {
    this._router.params.subscribe(params=>{
      this._http.get("https://localhost:44374/api/tintuc/get_tin_tuc").subscribe(res=>{
        this.tt = res;
      })
    })
  }

}
