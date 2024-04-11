import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpCashService {

  private _cacheEntries = new Map<string, CacheEntry>();
  private _cachingUrls: string[] = [];

  constructor() {}
  
  public existsCachingUrl(url: string): boolean {
    return this._cachingUrls.indexOf(url) > -1;
  }

  public addCachingUrl(url: string): void {
    if (!this.existsCachingUrl(url)) {
      this._cachingUrls.push(url);
    }
  }

  public deleteCacheEntries(): void {
    this._cacheEntries.clear();
  }
  
  public getCacheEntry(urlWithParams: string): HttpResponse<any> | null {
    const cacheEntry = this._cacheEntries.get(urlWithParams);
    return cacheEntry ? cacheEntry.response : null;
  }

  public setCacheEntry(urlWithParams: string, response: HttpResponse<any>): void {
    const cacheEntry: CacheEntry = {
      url: urlWithParams,
      response
    };
    this._cacheEntries.set(urlWithParams, cacheEntry);
  }
}

export interface CacheEntry {
  url: string;
  response: HttpResponse<any>;
}