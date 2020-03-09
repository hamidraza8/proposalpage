import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './appMain/app.component';

import { ProposalComponent } from './proposal/proposalMain/proposal.component';
import { GeneralComponent } from './proposal/general/general.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddressComponent } from './proposal/applicant/address/address.component';
import { ApplicantComponent } from './proposal/applicant/applicantInfo/applicant.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule ],
  declarations: [ AppComponent, ProposalComponent, GeneralComponent, AddressComponent, ApplicantComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
