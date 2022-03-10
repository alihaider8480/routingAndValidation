import { AliServiceService } from './../services/ali-service.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AliguardsGuard implements CanActivate {

  constructor(private _aliservice:AliServiceService,private _router:Router)
  {

  }
                                            // state ma har jeez arahe ha mara console pa id kn si ha
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let con=false;
    if(this._aliservice.isUserLogin()){
      if(this._aliservice.getUserRole()=='admin'){
         con=true;
      }

    }else{
      this._aliservice.logout();
      this._router.navigate(['/']);
       con=false;

    }
     return con;

  }
}
