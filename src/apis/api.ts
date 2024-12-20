import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://koishi-hoshino-contents.vercel.app/yso-shmup-records',
});
