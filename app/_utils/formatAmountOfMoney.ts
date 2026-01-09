export function formatShortPrice(amount: number): string {
	const formatter = new Intl.NumberFormat('pl-PL', {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
		notation: 'compact',
		currency: 'PLN',
		style: 'currency',
	});

	return `${formatter.format(amount)}`;
}

export function formatFullPrice(
	amount: number | undefined,
	withCurrency: boolean = true
): string {
	if (!amount) return withCurrency ? '0 zł' : '0';

	const formatter = new Intl.NumberFormat('pl-PL', {
		minimumSignificantDigits: amount < 1 ? 2 : undefined,
		maximumSignificantDigits: amount < 1 ? 4 : undefined,
		minimumFractionDigits: amount >= 1 ? 2 : undefined,
		style: withCurrency ? 'currency' : undefined,
		currency: withCurrency ? 'PLN' : undefined,
	});

	return formatter.format(amount);
}

export function formatConverterValue(
	amount: number | undefined,
	isCurrency?: boolean
): string {
	if (!amount) return '0';
	if (isCurrency)
		return new Intl.NumberFormat('pl-PL', {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		}).format(amount);

	const formatter = new Intl.NumberFormat('pl-PL', {
		minimumSignificantDigits: amount < 1 ? 8 : undefined,
		maximumSignificantDigits: amount < 1 ? 8 : undefined,
		minimumFractionDigits: amount >= 1 ? 8 : undefined,
		trailingZeroDisplay: 'stripIfInteger',
	});

	return formatter.format(amount);
}
