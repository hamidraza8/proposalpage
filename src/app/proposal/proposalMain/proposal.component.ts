import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormArray  } from '@angular/forms';
import testFormData from '../../../assets/testFormData.json';
@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.css']
})

export class ProposalComponent implements OnInit {
proposalEntity:any;

proposalForm = this.fb.group({
    
     
    
      });


      
  
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  this.proposalEntity=testFormData.ResultSet.ProposalEntity;

 
  
  };





onSubmit() {
  // TODO: Use EventEmitter with form value
  console.warn(this.proposalForm.value);
}
}