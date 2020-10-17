import { BaseComponent } from 'src/app/lib/base-component';
import { Component, OnInit, Injector } from '@angular/core';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent extends BaseComponent implements OnInit {

  constructor(private Injector:Injector) {
    super(Injector)
   }
  items:any;
  total:any;
  ngOnInit(): void {
    this._cart.items.subscribe(res=>{
      this.items = res;
      this.total = 0;
      for(let x of this.items){ 
        this.total += x.soluong * x.gia;
      } 
    })
  }
  clearCart() { 
    this._cart.clearCart();
    alert('Xóa thành công');
  }
  deleteCart(id){
    this._cart.deleteItem(id);
    alert("Xóa thành công")
  }
  addQty(item, quantity){ 
    item.soluong =  quantity;
    item.money =  Number.parseInt(item.quantity) *  item.gia;
    this._cart.addQty(item);
  }
}
