import { Component } from "@angular/core";
import { Router } from "@angular/router";

interface KendoTabSelectEvent {
  prevented: boolean;
  index: number;
  title: string;
}

@Component({
  selector: "my-root",
  templateUrl: "app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Tour of Heroes";

  constructor(private router: Router) {}

  navigate(event: KendoTabSelectEvent): void {
    if (!event?.title) return;
    const route = "/" + event.title.replace(/\s+/g, "-").toLocaleLowerCase();
    this.router.navigate([route]);
  }
}
