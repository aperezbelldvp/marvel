import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '../models/response.model';
import { Observable } from 'rxjs';
import { Md5 } from 'ts-md5';

@Injectable({
  providedIn: 'root',
})
export class MarvelApiService {
  private baseUrl = 'https://gateway.marvel.com/v1/public';
  private publicKey = '1702d1dd8a6d4f889cbc73fb8f965572';
  private privateKey = 'bb5cd8ef8355905a6e50f8c31067cd2abd807879';

  constructor(private http: HttpClient) {}

  getHeroes(offset: number, limit: number): Observable<ResponseModel> {
    const params = this.buildParams(offset, limit);
    return this.http.get<ResponseModel>(`${this.baseUrl}/characters`, {
      params,
    });
  }

  getHeroById(characterId: number): Observable<ResponseModel> {
    const params = this.buildParams(0, 1);
    return this.http.get<ResponseModel>(
      `${this.baseUrl}/characters/${characterId}`,
      { params }
    );
  }

  getCharacterComics(
    characterId: number,
    offset: number,
    limit: number
  ): Observable<any> {
    const params = this.buildParams(offset, limit);
    return this.http.get(`${this.baseUrl}/characters/${characterId}/comics`, {
      params,
    });
  }

  getHeroesByName(name: string): Observable<ResponseModel> {
    const params = this.buildParams(0, 100, name);
    return this.http.get<ResponseModel>(`${this.baseUrl}/characters`, {
      params,
    });
  }

  private buildParams(
    offset: number,
    limit: number,
    nameStartsWith?: string
  ): HttpParams {
    const timestamp = new Date().getTime().toString();
    const md5 = new Md5();
    md5
      .appendStr(timestamp)
      .appendStr(this.privateKey)
      .appendStr(this.publicKey);
    const hash: string = md5.end() as string;
    let params = new HttpParams()
      .set('ts', timestamp)
      .set('apikey', this.publicKey)
      .set('hash', hash)
      .set('offset', offset.toString())
      .set('limit', limit.toString());

    if (nameStartsWith) {
      params = params.append('nameStartsWith', nameStartsWith);
    }
    return params;
  }
}
