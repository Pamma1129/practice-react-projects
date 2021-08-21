const reducer = (state, action) => {
	switch (action.type) {
		case 'CLEAR_CART':
			console.log('cart is getting cleared');
			return { ...state, cart: [] };
		case 'REMOVE_ITEM':
			const newItemsList = state.cart.filter(item => {
				return item.id !== action.payload;
			});
			return { ...state, cart: newItemsList };
		case 'INCREASE':
			const incrementedItemsList = state.cart.map(item => {
				if (item.id === action.payload) {
					return {
						...item,
						amount: item.amount + 1,
					};
				}
				return item;
			});

			return { ...state, cart: incrementedItemsList };
		case 'DECREASE':
			const decrementedItemsList = state.cart
				.map(item => {
					if (item.id === action.payload) {
						return {
							...item,
							amount: item.amount - 1,
						};
					}
					return item;
				})
				.filter(item => item.amount !== 0);
			return { ...state, cart: decrementedItemsList };
		case 'GET_TOTALS':
			let { total, amount } = state.cart.reduce(
				(cartTotal, cartItem) => {
					const { price, amount } = cartItem;
					cartTotal.amount += amount;
					cartTotal.total += price * amount;
					return cartTotal;
				},
				{ total: 0, amount: 0 },
			);
			total = parseFloat(total.toFixed(2)); // to restrict upto 2 decimal points
			return { ...state, total, amount };
		case 'DISPLAY_ITEMS':
			return { ...state, loading: false, cart: action.payload };
		case 'LOADING':
			return { ...state, loading: true };
		default:
			throw new Error('Unknown action type');
	}
};

export default reducer;
