import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

const environment_Url = environment.baseUrl;
const CustomerController_Url= "YumMumController";
@Injectable({
  providedIn: 'root'
})
export class AliServiceService {

  constructor(private _httpClient: HttpClient) { }


getcustomerDataURL = '/get-user-data';

getcustomerData()
{
  return this._httpClient.get(environment_Url+this.getcustomerDataURL).pipe(
    catchError(this.handleError)
  );
}

private handleError(error: HttpErrorResponse) {
  if (error.status === 0) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
      `Backend returned code ${error.status}, body was: `, error.error);
  }
  // Return an observable with a user-facing error message.
  return throwError(() => new Error('Something bad happened; please try again later.'));
}

insertNewCustomerDataRequest_Url = '/insertNewCustomerDataRequest';

insertNewCustomerData(data:any)
{
    return this._httpClient.post(environment_Url+CustomerController_Url+this.insertNewCustomerDataRequest_Url ,data).pipe(
      catchError(this.handleError)
    );

}

deleteNewemployeeURL = '/DeleteCustomerUserData';
    deleteUserByIdFinal(data:any)
    {
       return  this._httpClient.delete(environment_Url+CustomerController_Url+this.deleteNewemployeeURL+'/'+data).pipe(
          catchError(this.handleError)
        );
    }

    // localStorage matlab apka brower ka data cache ma jo hai us sa check kara ga ya
    //localStorage khud agar history clear kardo ga to logout ho jae ga

    isUserLogin(){
      let user=localStorage.getItem('userData');
      if(user==null || user=='' || user==undefined){
        return false;
      }else{
      return true;
      }
    }

    getuserData(){
      const user= localStorage.getItem('userData');
      if(user!=null){
        return JSON.parse(user);
      }
      else{
        this.logout();
        return null;
      }
    }

    logout(){
      localStorage.removeItem('userData');
      return true;
    }

    getUserRole(){
      return this.getuserData().rights;
    }

    getLoginCustomerData_Url = 'Get-Login-Info';
    getloginInformation(data:any)
    {
      console.log('name is : '+data.name + ' / password is :'+data.password);
            return this._httpClient.post(environment_Url+this.getLoginCustomerData_Url,data).pipe(
              catchError(this.handleError)
            );
    }

    getAllCustomerData_Url = '/GetAllCustomerDataRequest';
    getAllCustomerData()
    {
            return this._httpClient.get(environment_Url+CustomerController_Url+this.getAllCustomerData_Url).pipe(
              catchError(this.handleError)
            );
    }

    getByIdCustomerData_Url = '/GetByIDCustomerDataRequest/';
    getByIDCustomerData(data:any)
    {
      console.log(data);
            return this._httpClient.get(environment_Url+CustomerController_Url+this.getByIdCustomerData_Url+data.serialNumber).pipe(
              catchError(this.handleError)
            );
    }

    UpdateCustomerDeliveryData_Url = '/updateNewCustomerDataRequest';
    updateCustomerDeliveryData(data:any)
    {
      return this._httpClient.post(environment_Url+CustomerController_Url+this.UpdateCustomerDeliveryData_Url,data).pipe(
        catchError(this.handleError)
      );
    }


}
