import { TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SearchApiService } from './search-api.service';
import { SearchStateService } from './state/search-state.service';

describe('SearchApiService', () => {
  let service: SearchApiService;
  let getSubject: any;
  let getSpy: any;
  let postSubject: any;
  let postSpy: any;

  beforeEach(() => {
    const searchStateService: any = jasmine.createSpyObj('searchStateService', [
      'fetchLoader'
    ]);

    getSubject = new BehaviorSubject<any>([]);
    postSubject = new BehaviorSubject<any>([]);

    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        SearchApiService,
        {provide: SearchStateService, useValue: searchStateService}
      ]
    });
    service = injector.get(SearchApiService);
    spyOn(service, 'toggleLoader');
    spyOn(service, 'complete');
    spyOn(service, 'failed');
    getSpy = spyOn(service, 'get');
    getSpy.and.callFake(() => getSubject);
    postSpy = spyOn(service, 'post');
    postSpy.and.callFake(() => postSubject);
  });

  it('should call toggleLoader() when load() is called', () => {
    service.load('a');
    expect(service.toggleLoader).toHaveBeenCalledTimes(1);
    expect(service.toggleLoader).toHaveBeenCalledWith(true);
  });

  it('should call get() when load() is called in dev mode', () => {
    service.load('a');
    expect(service.get).toHaveBeenCalledTimes(1);
    expect(service.get).toHaveBeenCalledWith('./assets/json/search.json');
  });

  it('should call post() when load() is called in prod mode', () => {
    service.load('a', {production: true, paths: {proxy: 'proxy', search: 'url?stock=$stock'}});
    expect(service.post).toHaveBeenCalledTimes(1);
    expect(service.post).toHaveBeenCalledWith('proxy', 'url=url%3Fstock%3Da');
  });

  it('should call complete() with a successful completion of get() call', () => {
    service.load('a');
    expect(service.complete).toHaveBeenCalledTimes(1);
    expect(service.complete).toHaveBeenCalledWith([]);
  });

  it('should call complete() with a successful completion of post() call', () => {
    service.load('a', {production: true, paths: {proxy: 'proxy', search: 'url?stock=$stock'}});
    expect(service.complete).toHaveBeenCalledTimes(1);
    expect(service.complete).toHaveBeenCalledWith([]);
  });

  it('should call failed() when get() call errors out', () => {
    getSpy.and.callFake(() => Observable.throw('error'));
    service.load('a');
    expect(service.failed).toHaveBeenCalledTimes(1);
  });

  it('should call failed() when post() call errors out', () => {
    postSpy.and.callFake(() => Observable.throw('error'));
    service.load('a', {production: true, paths: {proxy: 'proxy', search: 'url?stock=$stock'}});
    expect(service.failed).toHaveBeenCalledTimes(1);
  });

  it('should call complete() with transformed data with a completion of get() call', () => {
    getSubject.next({data: {items: [{symbol: 'a'}]}});
    service.load('a');
    expect(service.complete).toHaveBeenCalledTimes(1);
    expect(service.complete).toHaveBeenCalledWith([{
      symbol: 'a'
    }]);
  });

  it('should call complete() with transformed data with a completion of post() call', () => {
    postSubject.next({data: {items: [{symbol: 'a'}]}});
    service.load('a', {production: true, paths: {proxy: 'proxy', search: 'url?stock=$stock'}});
    expect(service.complete).toHaveBeenCalledTimes(1);
    expect(service.complete).toHaveBeenCalledWith([{
      symbol: 'a'
    }]);
  });


  it('should call load() when reload() is called', () => {
    spyOn(service, 'load');
    service.reload();
    expect(service.load).toHaveBeenCalledTimes(1);
    expect(service.load).toHaveBeenCalledWith(undefined);
  });
});
