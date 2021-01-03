import { Injectable } from '@angular/core';
import { ToastrService } from "ngx-toastr";
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private toastr: ToastrService,
  ) { }


  public success(message: string, title: string) {
    this.toastr.success(message, title);
  }
  public error(message: string, title: string) {
    this.toastr.error(message, title);
  }
}
