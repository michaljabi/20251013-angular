import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import {RemarkComponent} from './remark/remark.component';
import {MermaidComponent, PrismComponent, RemarkModule} from 'ngx-remark';

import mermaid from 'mermaid';
import Prism from "prismjs";
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-typescript';

@NgModule({
  declarations: [PageLayoutComponent, RemarkComponent],
  imports: [CommonModule, RemarkModule, MermaidComponent, PrismComponent],
  exports: [PageLayoutComponent, RemarkComponent],
})
export class SharedModule {
  constructor() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    globalThis.mermaid = mermaid;
    mermaid.initialize({ startOnLoad: true, theme: 'dark', darkMode: true });
    globalThis.Prism = Prism;
  }
}
