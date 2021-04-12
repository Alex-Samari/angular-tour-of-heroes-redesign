import { Component } from "@angular/core";

@Component({
  selector: "my-root",
  template: `
    <h1>{{ title }}</h1>
    <div class="header-bar"></div>
    <nav>
      <button
        kendoButton
        look="outline"
        routerLink="/dashboard"
        routerLinkActive="active"
      >
        Dashboard
      </button>
      <button
        kendoButton
        look="outline"
        routerLink="/heroes"
        routerLinkActive="active"
      >
        Heroes
      </button>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Tour of Heroes";
}
