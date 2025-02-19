import { getCookie } from 'cookies-next/client';

export const getToken = async () => {
	const getToken = await getCookie('access_token');

	console.log('Get Access toekn-->', getToken);

	return getToken;
};
