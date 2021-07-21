import Axios from '../helpers/axios';

export const getRequest = async (url: string) => {
  const {data}: any = await Axios.get(url);
  return data;
};

export const postRequest = async (url: string, datas: any) => {
  const {data}: any = await Axios.post(url, datas);
  return data;
};
