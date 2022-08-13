import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArticleComponent } from "./Core/Components/article/article.component";
import { BesoinComponent } from "./Core/Components/besoin/besoin.component";
import { DepotComponent } from "./Core/Components/depot/depot.component";
import { GammeComponent } from "./Core/Components/gamme/gamme.component";
import { MpComponent } from "./Core/Components/mp/mp.component";
import { OfComponent } from "./Core/Components/of/of.component";
import { OperationComponent } from "./Core/Components/operation/operation.component";
import { StockComponent } from "./Core/Components/stock/stock.component";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { MapsComponent } from "./views/admin/maps/maps.component";
import { SettingsComponent } from "./views/admin/settings/settings.component";
import { TablesComponent } from "./views/admin/tables/tables.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";
import { RegisterComponent } from "./views/auth/register/register.component";

// no layouts views
import { IndexComponent } from "./views/index/index.component";
import { LandingComponent } from "./views/landing/landing.component";
import { ProfileComponent } from "./views/profile/profile.component";

const routes: Routes = [
  // Torki Portes
  {
    path: "torki",
    component: AdminComponent,
    children: [
      { path: "of", component: OfComponent },
      { path: "mp", component: MpComponent },
      { path: "article", component: ArticleComponent },
      { path: "gamme", component: GammeComponent },
      { path: "operation", component: OperationComponent },
      { path: "depot", component: DepotComponent },
      { path: "besoin", component: BesoinComponent },
      { path: "stock", component: StockComponent },
      { path: "", redirectTo: "of", pathMatch: "full" },
    ],
  },
  // admin views
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "settings", component: SettingsComponent },
      { path: "tables", component: TablesComponent },
      { path: "maps", component: MapsComponent },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },
  // auth views
  {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "", redirectTo: "login", pathMatch: "full" },
    ],
  },
  // no layout views
  { path: "profile", component: ProfileComponent },
  { path: "landing", component: LandingComponent },
  { path: "", component: IndexComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
