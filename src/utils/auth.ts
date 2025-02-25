import { getCookie } from 'cookies-next/client';
export const getToken = () => {
	const getToken = getCookie('access_token');
	return getToken;
};
