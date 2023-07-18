type Mode = Record<string, boolean | string>

export function classNames(cls: string, mode: Mode, additional: string[]): string {
	return [
		cls,
		...Object.entries(mode)
			.filter(([className, value]) => Boolean(value))
			.map(([className]) => className),
		...additional
	].join(' ')
}