const ETL_SERVER_KEY = 'appSettings.etlServer';

export const useBaseEtlUrl = () => window.localStorage.getItem(ETL_SERVER_KEY) || '/etl-latest/etl';
