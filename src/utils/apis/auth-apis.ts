import { customAxios } from '@/config/axios-custom';
import toast from 'react-hot-toast';

export const generateRefreshToken = async () => {
	try {
		await customAxios('/auth/refresh-token', {
			withCredentials: true,
		});
		console.log('GEt new accesstoken');
	} catch (error: any) {
		console.error(error);
		toast.error(error?.response?.data?.error.message);
	}
};

export const logOutUser = async () => {
	try {
		await customAxios.post(
			'/auth/user/logout',
			{},
			{
				withCredentials: true,
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
	} catch (error: any) {
		console.error(error);
		toast.error(error?.response?.data?.error.message);
	}
};
