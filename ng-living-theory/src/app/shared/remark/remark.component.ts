import {Component, input} from '@angular/core';
import {remarkProcessor} from './remark-processor';


@Component({
  selector: 'app-remark',
  standalone: false,
  template: `
    <remark [markdown]="markdown()" [processor]="processor">
      <ng-template [remarkTemplate]="'code'" let-node>
        <remark-mermaid *ngIf="node.lang === 'mermaid'" [code]="node.value"/>
        <remark-prism *ngIf="node.lang !== 'mermaid'" [code]="node.value" [language]="node.lang"/>
      </ng-template>
    </remark>
  `,
  styles: ``
})
export class RemarkComponent {
  markdown = input('')
  processor = remarkProcessor as never;
}
