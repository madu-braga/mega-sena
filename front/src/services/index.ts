import { Props } from '../types';
import api from './api';

class Service {
  async get(numero: number): Promise<Props> {
    const { data } = await api.get(`/${numero}`);
    return data;
  }
}

export default new Service();
