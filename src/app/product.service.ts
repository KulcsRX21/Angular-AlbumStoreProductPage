import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Http, Response } from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _albumUrl = '../assets/album.json';

  constructor(private _http: HttpClient) { }

  getAlbumInfo(id: number): Observable<AlbumArtist> {
    return this._http.get<AlbumArtist>(this._albumUrl).pipe(
      map((albumArtist) => albumArtist
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
