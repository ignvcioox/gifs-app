import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from "@/gifs/components/side-menu/side-menu.component";

@Component({
   selector: 'app-dashboard',
   templateUrl: './dashboard.component.html',
   imports: [RouterOutlet, SideMenuComponent],
})

export default class DashboardComponent { }
