import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder,Validators,FormArray,FormControl ,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {
@Input() proposalForm:FormGroup
@Input() formData:any
@Input() formName:string
 @Input() Key:string
formGroup:FormGroup;
  public selectedTabIndex: number = 0;
  constructor(private fb:FormBuilder) { }


  ngOnInit() {

this.setForm();

  }
setForm():void
{
this.formGroup=this.fb.group({
"Array":this.fb.array([])
});
this.bindEntity(this.formData[this.formName].Array);
this.proposalForm.addControl(this.formName,this
.formGroup);

}
Array():FormArray
{

  return this.formGroup.get('Array') as FormArray;
}
del(index:number):void{
this.Array().at(index).controls.RowState.setValue(4,{emitEvent: false});

}
bindEntity(items:any[])
{
for(var i=0;i<items.length;i++)
{
this.addItem((items[i]));
}

}


get maxKey():number {
if (this.Array.length<1)
return 0;
const _key =this.Key;
    const maxKey= Math.max(...this.Array().value.map(function (i){return i[_key]}));

    return maxKey;
}
onValueChanged(data?: any): void {
    const _key = data[this.Key];
      console.log('changing item  for key '+_key);
      if(data["RowState"]!=4)
      data["RowState"]=2;
      }


newItem():any
{
var newItem=
 {
 APPLICATION_NUMBER:"",
  FIRST_NAME_THAI:"",
  IDENTIFICATION_CODE:this.maxKey+1,
  RowState:1
};
return newItem;
}
addNewItem(): void {
this.addItem(this.newItem());

    this.selectedTabIndex = this.Array().length - 1;

}
addItem(item:any): void {

console.log(item);
   
   const itemToAdd = this.fb.group({
      
   APPLICATION_NUMBER:[item.APPLICATION_NUMBER],
   FIRST_NAME_THAI:[item.FIRST_NAME_THAI,Validators.required]
  ,IDENTIFICATION_CODE:item.IDENTIFICATION_CODE
  ,RowState:item.RowState
  }
  
  );
   
  itemToAdd.valueChanges.subscribe(data=>this.onValueChanged(data));
   this.Array().push(itemToAdd);

}
}