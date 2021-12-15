import { AnalyticsComponent } from './analytics/analytics.component';
import { PopulationComponent } from './population/population.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppShellComponent } from './app-shell/app-shell.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    component: AppShellComponent,
  },

  {
    path: 'population',
    component: PopulationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
