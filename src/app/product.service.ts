import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Album } from './album';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _albumUrl = '../assets/album.json';

  constructor(private _http: HttpClient) { }

  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl).map(
      (response) => <Album>response.json())
    ));
  }
}

export interface AlbumArtist {
  id: number,
  artist: string,
  album: Album
}

export interface Album {
  name: string,
  releaseDate: Date,
  coverImage: string,
  tracks: Track[]
}

export interface Track {
  trackNumber: number,
  trackName: string,
  trackLength: string,
  trackPrice: number
}
