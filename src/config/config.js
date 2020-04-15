export const apiPath = 'api/';

export const APP_HOST = process.env.APP_HOST || 'localhost';
export const API = process.env.API || 'localhost';
export const APP_PORT = process.env.APP_PORT || 3000;
export const API_PORT = process.env.API_PORT || 4000;
export const API_HOST = `${API}:${API_PORT}/`;
export const HOST = `${APP_HOST}:${APP_PORT}/`;

export const API_URL = `http://${API_HOST}${apiPath}`;
export const JWT_TOKEN = 'FBIdToken';