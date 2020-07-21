import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { CoreApiResponseService } from '../../../shared/core/services/api-response.service';
import { numberUnitFormat } from '../../../shared/core/utils';
import { InfoStateService } from './state/info-state.service';
import { InfoDataInterface } from './state/info-reducer';
import { get } from 'lodash';

@Injectable()
export class InfoApiService extends CoreApiResponseService {
  private stock: string;

  constructor(public httpClient: HttpClient,
              private infoState: InfoStateService) {
    super(httpClient, infoState);
  }

  load(stock: string) {
    this.stock = stock;
    this.toggleLoader(true);
    this.get(environment.paths.info.replace('$stock', encodeURIComponent(stock)))
      .subscribe(
        data => this.complete(this.transform(data)),
        () => this.failed()
      );
  }

  reload() {
    this.load(this.stock);
  }

  private transform(rawData: any): InfoDataInterface[] {
    const data: InfoDataInterface[] = [];
    const info: any = get(rawData, 'query.results.quote');
    if (info) {
      info.Volume = numberUnitFormat(info.Volume, 2);
      info.AverageDailyVolume = numberUnitFormat(info.AverageDailyVolume, 2);
      data.push(info);
    }

    return data;
  }
}
