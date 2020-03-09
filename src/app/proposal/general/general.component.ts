import { Component, OnInit,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder,Validators,FormArray,FormControl  } from '@angular/forms';
@Component({
  
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
@Input() proposalForm:FormGroup
@Input() formData:any
APPLICATION:FormGroup;

 
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    
this.APPLICATION=this.fb.group({
'CONTACT_PERSON':[''],
'APPLICATION_NUMBER':[''],
'RowState':['1']


});

this.proposalForm.addControl('APPLICATION', this.APPLICATION);
this.APPLICATION.patchValue(this.formData.APPLICATION.Array[0],{ emitEvent: false });
 this.APPLICATION.valueChanges.subscribe(() => {

  this.APPLICATION.controls['RowState'].setValue(2,{ emitEvent: false });
});
  }


}