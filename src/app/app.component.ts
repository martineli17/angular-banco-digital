import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from './Core/services/base/autenticacao.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(private router: Router) {
    this.GoToApp();
  }
  private GoToApp = () => {
    if (AutenticacaoService.IsAutenticado())
      this.router.navigate(['/home']);
    else
      this.router.navigate(['/app']);
  }
}
