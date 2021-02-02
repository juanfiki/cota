import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {User } from '../../models/user';
import { UserService} from '../../service/user.service'

@Component({
  selector: 'app-regusu',
  templateUrl: './regusu.component.html',
  styleUrls: ['./regusu.component.css']
})
export class RegusuComponent implements OnInit {
public user :User;

  constructor(private userService:UserService) {
    this.user = new User('','','','',0,'')
  }

  ngOnInit(): void {  }

registrar(){
  this.userService.registrarUsuario(this.user).subscribe(
    (res:any) => {
      if(res.statusCode !== 200){
        alert('no se pudo registrar')
      } else{
        alert('registro exitoso')
      }
    },
    (error) =>{
      var errorMensaje= <any>error;
      if(errorMensaje != null){
        console.log(error)
      }


    }
  )
}
}
