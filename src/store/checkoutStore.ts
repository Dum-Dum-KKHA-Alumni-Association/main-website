import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface CheckoutState {
	ticket: {
		eventName: string | null;
		quantity: number;
		price: number;
		totalPrice: number;
	};
	payableAmount: number;
	total: number;
	subtotal: number;
	tax: number;
	offer: number;
	items: Array<{
		itemName: string;
		quantity: number;
		price: number;
		totalPrice: number;
	}>;
}

export type CheckoutAction = {
	addTicket: ({
		eventName,
		quantity,
		price,
	}: {
		eventName: string;
		quantity: number;
		price: number;
	}) => void;
	removeTicket: () => void;
	removeItem: (itemName: string) => void;
	addItem: ({
		itemName,
		quantity,
		price,
	}: {
		itemName: string;
		quantity: number;
		price: number;
	}) => void;
	updateItem: (itemName: string) => void;
};

export type CheckoutStore = CheckoutState & CheckoutAction;

export const defaultInitState: CheckoutState = {
	ticket: {
		eventName: null,
		quantity: 0,
		price: 0,
		totalPrice: 0,
	},
	payableAmount: 0,
	total: 0,
	subtotal: 0,
	tax: 0,
	offer: 0,
	items: [],
};

export const useCheckoutStore = create<CheckoutStore>()(
	devtools((set) => ({
		...defaultInitState,
		addTicket: ({ eventName, quantity, price }) =>
			set((state) => {
				const totalPrice = quantity * price;
				return {
					ticket: {
						eventName,
						quantity,
						price,
						totalPrice,
					},
					subtotal: state.subtotal + totalPrice,
					total: state.subtotal + totalPrice,
					payableAmount: state.subtotal + totalPrice,
				};
			}),
		removeTicket: () =>
			set((state) => ({
				ticket: {
					eventName: null,
					quantity: 0,
					price: 0,
					totalPrice: 0,
				},
				subtotal: state.subtotal + state.ticket.totalPrice,
				total: state.subtotal + state.ticket.totalPrice,
				payableAmount: state.subtotal + state.ticket.totalPrice,
			})),
		addItem: ({ itemName, quantity, price }) =>
			set((state) => {
				const totalPrice = quantity * price;

				return {
					items: state.items.concat({
						itemName,
						quantity,
						price,
						totalPrice,
					}),
					subtotal: state.subtotal + totalPrice,
					total: state.subtotal + totalPrice,
					payableAmount: state.subtotal + totalPrice,
				};
			}),
		removeItem: (itemName) =>
			set(
				(state) => {
					const item = state.items.find((item) => item.itemName === itemName);
					const subtotal = state.subtotal - item!.quantity * item!.price;

					return {
						items: state.items.filter((item) => item.itemName === itemName),
						subtotal,
						total: subtotal,
						payableAmount: subtotal,
					};
				}

				// }({
				// 	items: state.items.filter((item) => item.itemName === itemName),
				// 	subtotal:
				// 		state.subtotal +
				// 		state.items.filter((item) => item.itemName === itemName),
				// })
			),
		updateItem: () => {},
	}))
);
