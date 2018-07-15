import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {}

  _window(): any {
    return window
  }

  openChat() {
    if (this._window().octadesk) {
      this._window().octadesk.chat.toggle()
    }
  }
}
