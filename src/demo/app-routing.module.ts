import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActionExampleComponent } from '../app/action/examples/action-example.component';
import { CardExampleComponent } from '../app/card/basic-card/examples/card-example.component';
import { InfoStatusCardExampleComponent }
  from '../app/card/info-status-card/examples/info-status-card-example.component';
import { EmptyStateExampleComponent } from '../app/empty-state/examples/empty-state-example.component';
import { FilterExampleComponent } from '../app/filter/examples/filter-example.component';
import { ListExampleComponent } from '../app/list/basic-list/examples/list-example.component';
import { NotificationServiceExampleComponent }
  from '../app/notification/examples/notification-service-example.component';
import { PaginationExampleComponent } from '../app/pagination/examples/pagination-example.component';
import { RemainingCharsCountExampleComponent }
  from '../app/remaining-chars-count/examples/remaining-chars-count-example.component';
import { SampleComponent } from '../app/sample/sample.component';
import { SampleExampleComponent } from '../app/sample/examples/sample-example.component';
import { SearchHighlightExampleComponent } from '../app/search-highlight/examples/search-highlight-example.component';
import { SortExampleComponent } from '../app/sort/examples/sort-example.component';
import { SparklineExampleComponent } from '../app/chart/sparkline/examples/sparkline-example.component';
import { ToastNotificationExampleComponent } from '../app/notification/examples/toast-notification-example.component';
import { ToolbarExampleComponent } from '../app/toolbar/examples/toolbar-example.component';
import { TreeListExampleComponent } from '../app/list/tree-list/examples/tree-list-example.component';
import { TruncateExampleComponent } from '../app/truncate/examples/truncate-example.component';
import { WelcomeComponent } from './components/welcome.component';
import { WizardExampleComponent } from '../app/wizard/examples/wizard-example.component';
import { InlineNotificationExampleComponent } from '../app/notification/examples/inline-notification-example.component';
import { VerticalNavigationExampleComponent } from '../app/navigation/examples/vertical-navigation-example.component';

const routes: Routes = [{
    path: '',
    component: WelcomeComponent,
    pathMatch: 'full'
  }, {
    path: 'action',
    component: ActionExampleComponent
  }, {
    path: 'card',
    component: CardExampleComponent
  }, {
    path: 'infocard',
    component: InfoStatusCardExampleComponent
  }, {
    path: 'emptystate',
    component: EmptyStateExampleComponent
  }, {
    path: 'filters',
    component: FilterExampleComponent
  }, {
    path: 'inlinenotification',
    component: InlineNotificationExampleComponent
  }, {
    path: 'list',
    component: ListExampleComponent
  }, {
    path: 'navigation',
    component: VerticalNavigationExampleComponent,
    children: [{
        path: '**',
        component: SampleComponent,
      }]
  }, {
    path: 'notificationservice',
    component: NotificationServiceExampleComponent
  }, {
    path: 'pagination',
    component: PaginationExampleComponent
  }, {
    path: 'remainingcharscount',
    component: RemainingCharsCountExampleComponent
  }, {
    path: 'sample',
    component: SampleExampleComponent
  }, {
    path: 'searchhighlight',
    component: SearchHighlightExampleComponent
  }, {
    path: 'sort',
    component: SortExampleComponent
  }, {
    path: 'sparkline',
    component: SparklineExampleComponent
  }, {
    path: 'toastnotification',
    component: ToastNotificationExampleComponent
  }, {
    path: 'toolbar',
    component: ToolbarExampleComponent
  }, {
    path: 'treelist',
    component: TreeListExampleComponent
  }, {
    path: 'truncate',
    component: TruncateExampleComponent
  }, {
    path: 'wizard',
    component: WizardExampleComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
