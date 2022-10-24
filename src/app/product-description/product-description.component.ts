import { Component, OnInit } from '@angular/core';
import { Album, AlbumArtist, ProductService } from '../product.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  albumInfo?: AlbumArtist;
  
  constructor(private _productService: ProductService) { }
  
  ngOnInit() {
    this._productService.getAlbum(1).subscribe(
      (albumInfo: AlbumArtist) => this.albumInfo = albumInfo
    );
  }
}
