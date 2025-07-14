import { GiphyItem } from "@/gifs/interfaces/giphy.interfaces";
import { Gif } from "@/gifs/interfaces/gif.interface";

export class GifMapper {

  static mapGiphyItemToGif(item: GiphyItem): Gif {
    return {
      id: item.id,
      title: item.title,
      url: item.images.original.url,
    };
  }

  static mapGiphyItemsToGifArray(items: GiphyItem[]): Gif[] {
    return items.map(this.mapGiphyItemToGif);
  }
}
