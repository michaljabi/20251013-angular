import { Routes } from '@angular/router';
import { VsJavaComponent } from './vs-java.component';
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

export const withJavaCompareRoutes: Routes = [
  {
    path: 'vs-java',
    component: VsJavaComponent,
    children: [
      { path: '', redirectTo: 'types', pathMatch: 'full' },
      { path: 'types', component: TypesPageComponent },
      { path: 'oop-support', component: OopSupportPageComponent },
      {
        path: 'syntax-and-conventions',
        component: SyntaxAndConventionsPageComponent,
      },
      { path: 'package-managing', component: PackageManagingPageComponent },
      { path: 'type-inference', component: TypeInferencePageComponent },
      {
        path: 'functions-first-class-citizens',
        component: FunctionsFirstClassCitizensPageComponent,
      },
      { path: 'single-threaded', component: SingleThreadedPageComponent },
      { path: 'structurally-typed', component: StructurallyTypedPageComponent },
      { path: 'no-overload', component: NoOverloadPageComponent },
      { path: 'asynchronicity', component: AsynchronicityPageComponent },
      { path: 'syntactic-sugar', component: SyntacticSugarPageComponent },
      {
        path: 'anything-to-condition',
        component: AnythingToConditionPageComponent,
      },
      {
        path: 'triple-equality-sign',
        component: TripleEqualitySignPageComponent,
      },
      { path: 'optional-semicolon', component: OptionalSemicolonPageComponent },
      { path: 'keep-the-shape', component: KeepTheShapePageComponent },
      {
        path: 'take-away-the-dynamics',
        component: TakeAwayTheDynamicsPageComponent,
      },
      {
        path: 'types-and-interfaces',
        component: TypesAndInterfacesPageComponent,
      },
      { path: 'async-await', component: AsyncAwaitPageComponent },
      {
        path: 'class-keyword-and-improvements',
        component: ClassKeywordAndImprovementsPageComponent,
      },
      { path: 'spread-operator', component: SpreadOperatorPageComponent },
      { path: 'rest-operator', component: RestOperatorPageComponent },
      { path: 'destructuring', component: DestructuringPageComponent },
      { path: 'arrow-functions', component: ArrowFunctionsPageComponent },
      {
        path: 'object-property-shorthand',
        component: ObjectPropertyShorthandPageComponent,
      },
    ],
  },
];
