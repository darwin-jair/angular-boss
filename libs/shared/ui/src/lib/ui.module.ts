import { DataModule } from '@a-boss/data';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GreetingsComponent } from './greetings/greetings.component';

@NgModule({
  imports: [CommonModule, DataModule, RouterModule],
  declarations: [GreetingsComponent],
  exports: [GreetingsComponent]
})
export class UiModule {}
