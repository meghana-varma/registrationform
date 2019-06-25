import { Component } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  angForm:FormGroup;
 constructor(public fb: FormBuilder ){

}
  ngOnInit(){

  this.angForm= this.fb.group({
    name: ['',[Validators.required,Validators.minLength(4)]],
    dob: ['',[Validators.required]],
    email: ['',[Validators.required,Validators.email]],
    phnnumber:['',[Validators.required,Validators.pattern("[0-9]{10}")]],
    password:['',[Validators.required,Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')]],
    comments:['',[Validators.required,Validators.minLength(20)]],
    states:['',[Validators.required]],
    gender:['',[Validators.required]],
    check:['',[Validators.requiredTrue]],
  });


  }
  onsubmit(){
    alert("succesfully submited");
  }
}
