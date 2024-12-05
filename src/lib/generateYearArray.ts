export const generateYearArray = (targetYear: number) => {
	const currentYear = new Date().getFullYear();
	const startYear = Math.min(currentYear, targetYear);
	const endYear = Math.max(currentYear, targetYear);
	const yearArray = [];

	for (let year = startYear; year <= endYear; year++) {
		yearArray.push(year);
	}

	return yearArray;
};

// Example usage
