declare global {
  interface Window {
    __TASKMANAGER_API_BASE_URL__: string;
  }
}

const BASE_URL = window.__TASKMANAGER_API_BASE_URL__;
const API_URL = `${BASE_URL}/`;

export { API_URL };
