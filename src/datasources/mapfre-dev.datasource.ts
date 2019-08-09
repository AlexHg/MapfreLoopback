import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './mapfre-dev.datasource.json';

export class MapfreDevDataSource extends juggler.DataSource {
  static dataSourceName = 'MapfreDev';

  constructor(
    @inject('datasources.config.MapfreDev', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
