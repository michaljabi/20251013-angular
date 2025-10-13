import { Component } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { SharedModule } from '../shared/shared-module';

type MyFlag = 'one' | 'two' | 'tree';

@Component({
  selector: 'app-basic-directives',
  imports: [NgClass, NgStyle, SharedModule],
  template: `
    <app-page-layout
      pageTitle="Dyrektywy używane w template"
      fileEntry="./app/a-basics/basic-directives.component.ts"
    >
      <div class="box">
        <h4
          tabindex="0"
          (click)="isVisible = !isVisible"
          (keyup.enter)="isVisible = !isVisible"
        >
          Kliknij aby zmienić wartość <code>isVisible</code>
        </h4>
        @if (isVisible) {
          <p>
            Ta treść będzie renderowana tylko jeśli
            <code>isVisible = true</code>
          </p>
        }
        <h5 [class.bg-red]="hasClass">
          Klasa css <code>.bg-red</code> będzie "dopięta" tylko jeśli
          <code>hasClass = true</code>
        </h5>
      </div>
      <div class="box">
        Różna treść w zależności od wartości:
        @switch (optionNumber) {
          @case ('one') {
            <span> 🍌 </span>
          }
          @case ('two') {
            <span> 🍌🍌 </span>
          }
          @case ('tree') {
            <span> 🍌🍌🍌 </span>
          }
          @default {
            <span> 😥 </span>
          }
        }
      </div>
      <section class="box">
        <div
          [ngClass]="{
            padded: true,
            'other-class': hasClass,
            'sampleOther-class_name': isVisible,
            really: true,
          }"
        >
          Ten element ma dopiętych klika klas css, w zależności od tego czy
          value danego property to <code>true</code> czy <code>false</code>
        </div>
        <div
          [ngStyle]="{
            backgroundColor: 'lightblue',
            color: 'black',
            fontSize: '20px',
            paddingLeft: '40px',
          }"
        >
          Podobnie, obiektem można dodać style css w postaci
          <code>&#123;camelCase: value&#125;</code>
        </div>
        <div [style.backgroundColor]="myRedColor" style="color: #ccc">
          a tak można dodać tylko jedną regułę stylu - zależną np. od wartości
          pola w klasie
        </div>
      </section>
    </app-page-layout>
  `,
  styles: [
    `
      .bg-red {
        background-color: #672020;
        color: #ccc;
      }

      .padded {
        padding: 10px;
      }
    `,
  ],
})
export class BasicDirectivesComponent {
  isVisible = false;
  hasClass = true;
  optionNumber: MyFlag = 'tree';
  myRedColor = '#672020';
}
