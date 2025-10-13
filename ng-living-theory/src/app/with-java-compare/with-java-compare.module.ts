import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { VsJavaMenuComponent } from './vs-java-menu.component';
import { VsJavaComponent } from './vs-java.component';
import { MenuComponent } from '../common/menu.component';
import { SharedModule } from '../shared/shared-module';
import { OopSupportPageComponent } from './similarities/oop-support-page.component';
import { TypesPageComponent } from './similarities/types-page.component';
import { SyntaxAndConventionsPageComponent } from './similarities/syntax-and-conventions-page.component';
import { PackageManagingPageComponent } from './similarities/package-managing-page.component';
import { TypeInferencePageComponent } from './similarities/type-inference-page.component';
import { FunctionsFirstClassCitizensPageComponent } from './differences/functions-first-class-citizens-page.component';
import { SingleThreadedPageComponent } from './differences/single-threaded-page.component';
import { StructurallyTypedPageComponent } from './differences/structurally-typed-page.component';
import { NoOverloadPageComponent } from './differences/no-overload-page.component';
import { AsynchronicityPageComponent } from './special-features/asynchronicity-page.component';
import { SyntacticSugarPageComponent } from './special-features/syntactic-sugar-page.component';
import { AnythingToConditionPageComponent } from './special-features/anything-to-condition-page.component';
import { TripleEqualitySignPageComponent } from './special-features/triple-equality-sign-page.component';
import { OptionalSemicolonPageComponent } from './special-features/optional-semicolon-page.component';
import { KeepTheShapePageComponent } from './typescript-improvements/keep-the-shape-page.component';
import { TakeAwayTheDynamicsPageComponent } from './typescript-improvements/take-away-the-dynamics-page.component';
import { TypesAndInterfacesPageComponent } from './typescript-improvements/types-and-interfaces-page.component';
import { AsyncAwaitPageComponent } from './es-next-news/async-await-page.component';
import { ClassKeywordAndImprovementsPageComponent } from './es-next-news/class-keyword-and-improvements-page.component';
import { SpreadOperatorPageComponent } from './es-next-news/spread-operator-page.component';
import { RestOperatorPageComponent } from './es-next-news/rest-operator-page.component';
import { DestructuringPageComponent } from './es-next-news/destructuring-page.component';
import { ArrowFunctionsPageComponent } from './es-next-news/arrow-functions-page.component';
import { ObjectPropertyShorthandPageComponent } from './es-next-news/object-property-shorthand-page.component';


@NgModule({
  declarations: [
    VsJavaMenuComponent,
    VsJavaComponent,
    OopSupportPageComponent,
    TypesPageComponent,
    SyntaxAndConventionsPageComponent,
    PackageManagingPageComponent,
    TypeInferencePageComponent,
    FunctionsFirstClassCitizensPageComponent,
    SingleThreadedPageComponent,
    StructurallyTypedPageComponent,
    NoOverloadPageComponent,
    AsynchronicityPageComponent,
    SyntacticSugarPageComponent,
    AnythingToConditionPageComponent,
    TripleEqualitySignPageComponent,
    OptionalSemicolonPageComponent,
    KeepTheShapePageComponent,
    TakeAwayTheDynamicsPageComponent,
    TypesAndInterfacesPageComponent,
    AsyncAwaitPageComponent,
    ClassKeywordAndImprovementsPageComponent,
    SpreadOperatorPageComponent,
    RestOperatorPageComponent,
    DestructuringPageComponent,
    ArrowFunctionsPageComponent,
    ObjectPropertyShorthandPageComponent,
  ],
  imports: [CommonModule, RouterModule, MenuComponent, SharedModule],
})
export class WithJavaCompareModule {}
