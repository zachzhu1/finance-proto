export interface CoreApiState {
    data?: any[];
    loader?: boolean;
    error?: CoreApiError;
  }
  
export interface CoreApiError {
    value?: string;
    date?: string;
    count?: number;
  }
  