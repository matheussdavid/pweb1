import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LetraMaiusculaPipe} from './letra-maiuscula.pipe';
import { CpfPipe } from './cpf.pipe';
import { DadosTelefonicosPipe } from './dados-telefonicos.pipe';



@NgModule({
  declarations: [LetraMaiusculaPipe, CpfPipe, DadosTelefonicosPipe],
  imports: [
    CommonModule
  ],
    exports: [
        LetraMaiusculaPipe,
        CpfPipe,
        DadosTelefonicosPipe
    ]
})
export class PipesModule { }
