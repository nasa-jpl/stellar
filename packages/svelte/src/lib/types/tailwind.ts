import type { ClassValue, TVVariantKeys } from 'tailwind-variants';

type TVSlots = Record<string, ClassValue> | undefined;

type TVBaseName = 'base';

type TVSlotsWithBase<S extends TVSlots, B extends ClassValue> = B extends undefined
	? keyof S
	: keyof S | TVBaseName;

type SlotsClassValue<S extends TVSlots, B extends ClassValue> = {
	[K in TVSlotsWithBase<S, B>]?: ClassValue;
};

type TVVariantsDefault<S extends TVSlots, B extends ClassValue> = S extends undefined
	? // eslint-disable-next-line @typescript-eslint/no-empty-object-type
		{}
	: {
			[key: string]: {
				[key: string]: S extends TVSlots ? SlotsClassValue<S, B> | ClassValue : ClassValue;
			};
		};

export type VariantProps<T> = T extends { variants: infer V }
	? // eslint-disable-next-line @typescript-eslint/no-explicit-any
		V extends TVVariantsDefault<any, undefined>
		? // eslint-disable-next-line @typescript-eslint/no-explicit-any
			{ [K in TVVariantKeys<V, any>[number]]?: keyof V[K] }
		: never
	: never;
