export const getAllEvents = async () => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`);

	return response.json();
};
