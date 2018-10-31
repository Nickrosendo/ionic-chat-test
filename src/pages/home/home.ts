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
      this._window().octadesk.chat.show()
      this._window().octadesk.chat.showApp()
      this._window().octadesk.chat.login({ name: "Thiago", email: 'thiago@teste.com'})
    }
  }
}
