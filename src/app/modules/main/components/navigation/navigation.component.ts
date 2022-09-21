import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {RoutePath} from "../../../../app-routing.module";

@Component({
  selector: 'onv-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  RoutePath = RoutePath;

  private get currentRouterPath(): string {
    return this.router.url;
  }

  getIsLinkActive(route: RoutePath): boolean {
    return this.currentRouterPath === '/' + route;
  }

  constructor(private router: Router) {
  }

  getRouterLinkForRoutePath(routePath: RoutePath): string {
    return '/' + routePath;
  }
}
