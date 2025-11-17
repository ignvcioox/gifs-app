import { Component } from '@angular/core';
import { SideMenuHeaderComponent } from "@/gifs/components/side-menu/side-menu-header/side-menu-header.component";
import { SideMenuOptionsComponent } from "@/gifs/components/side-menu/side-menu-options/side-menu-options.component";

@Component({
  selector: 'gifs-side-menu',
  imports: [SideMenuHeaderComponent, SideMenuOptionsComponent],
  templateUrl: './side-menu.component.html',
})

export class SideMenuComponent { }
