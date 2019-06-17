import { Component, OnInit } from '@angular/core';
import { FormService } from '../../../service/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  obj: any = {
    name: "",
    telefone: ""
  }
  regex = /^[0-9]+$/
  regexL = /^[A-Za-z]+$/
  dado: string;
  constructor(private FormService: FormService) {

  }
  formValue: boolean = false;
  formValide: boolean = true;
  validade: boolean

  ngOnInit() {
  }
  ngDoCheck() {
    if (this.FormService.validade == true) {
      this.validade = true;
    }
    else if (this.FormService.validade == false) {
      this.validade = false;
    }
  }

  onSubmit() {
    if (this.obj.name == "" || this.obj.telefone == "") {
      this.formValide = false;
      this.dado = "Nenhum dos dados pode estar em branco"
    }
    else if (!this.obj.name.match(this.regexL)) {
      this.formValide = false;
      this.dado = "Entre somente letras no nome"
    }
    else if (!this.obj.telefone.match(this.regex)) {
      this.formValide = false;
      this.dado = "Entre somente numeros no telefone"
    }
    else

      this.form()
  }

  form() {
    this.formValue = true;
  }

  onSubmitClean() {
    this.formValue = false;
    this.formValide = true;
    this.obj = {
      name: "",
      telefone: ""
    }
  }



}


