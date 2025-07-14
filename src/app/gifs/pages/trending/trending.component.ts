import { Component, inject } from '@angular/core';
import { GifListComponent } from "@/gifs/components/gif-list/gif-list.component";
import { GifsService } from '@/gifs/service/gifs.service';

@Component({
   selector: 'app-trending',
   imports: [GifListComponent],
   templateUrl: './trending.component.html',
})

export default class TrendingComponent {
   gifService = inject(GifsService);
}
