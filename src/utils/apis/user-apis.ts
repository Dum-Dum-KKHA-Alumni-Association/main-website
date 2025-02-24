import { customAxios } from '@/config/axios-custom';
import { getToken } from '../auth';
import { ISOStringFormat } from 'date-fns';
import toast from 'react-hot-toast';

interface User {
	id: string;
	fullName: string;
	avatar: string | null;
	membershipId: string | null;
	madyamikYear: string;
	higherSecondaryYear: string;
	primaryNumber: string;
	whatsappNumber: string;
	role: string;
	permanentAddress: string | null;
	deliveryAddress: string | null;
	dateOfBirth: string | null;
	bloodGroup: string | null;
	occupation: string | null;
	linkedin: string | null;
	instagram: string | null;
	twitter: string | null;
	facebook: string | null;
	createdAt: ISOStringFormat;
	updatedAt: ISOStringFormat;
}

interface UserAccount {
	membershipId: string | null;
	email: string;
	password: string | null;
}

export const getUser = async () => {
	const accessToken = getToken();
	try {
		const response = await customAxios('/user/profile', {
			headers: {
				Authorization: `Bearer ${accessToken}`,
				'Content-Type': 'application/json',
			},
		});

		const user: User = response.data.data;
		return user;
	} catch (error: any) {
		console.error(error);
		toast.error('Error Happends');
	}
};
export const getUserAccount = async () => {
	const accessToken = getToken();
	try {
		const response = await customAxios('/user/account', {
			headers: {
				Authorization: `Bearer ${accessToken}`,
				'Content-Type': 'application/json',
			},
		});

		const userAccount: UserAccount = response.data.data;
		return userAccount;
	} catch (error: any) {
		console.error(error);
		toast.error('Error Happends');
	}
};
export const updateUserDetails = async (userDetails: any) => {
	const accessToken = getToken();
	try {
		const response = await customAxios.put('/user/profile', userDetails, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
				'Content-Type': 'application/json',
			},
		});

		const user: User = response.data.data;

		console.log('API Updated Data===>', user);
		toast.success('User data Updated');

		return user;
	} catch (error: any) {
		console.error(error);
		toast.error(error?.response?.data?.message);
	}
};
export const onboardUser = async (eventValue: any) => {
	const accessToken = getToken();
	try {
		const data = await toast.promise(
			customAxios.post('/user/onboard', eventValue, {
				headers: {
					Authorization: ` Bearer ${accessToken}`,
					'Content-Type': 'application/json',
				},
			}),
			{
				loading: 'Loading',
				success: 'Form Submitted Successfully',
				error: 'Error while Submitting',
			}
		);

		console.log(data);
		return data;
	} catch (error) {
		console.log(error);
		toast.error('Something error Happening');
	}
};

export const isUserOnboarded = async () => {
	const token = await getToken();
	try {
		const response = await customAxios('/user/isOnboarded', {
			headers: {
				Authorization: ` Bearer ${token}`,
			},
		});

		const data = response.data.data;
		return data;
	} catch (error) {
		return error;
	}
};
