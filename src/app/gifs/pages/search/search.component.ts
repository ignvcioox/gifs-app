import { Component, inject, signal } from '@angular/core';
import { GifListComponent } from "@/gifs/components/gif-list/gif-list.component";
import { GifsService } from '@/gifs/service/gifs.service';
import { Gif } from '@/gifs/interfaces/gif.interface';

@Component({
   selector: 'app-search',
   imports: [GifListComponent],
   templateUrl: './search.component.html',
})

export default class SearchComponent {

   gifService = inject(GifsService);
   gifs = signal<Gif[]>([]);

   onSearch(query: string) {
      this.gifService.searchGifs(query).subscribe((resp) => {
         this.gifs.set(resp);
      })
   }
}
