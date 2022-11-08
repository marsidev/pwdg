import type { Accessor, JSX } from 'solid-js'

export type DictionaryType = 'lowercase' | 'uppercase' | 'numbers' | 'symbols'

export type Dictionary = Record<DictionaryType, string>

export type DictionaryKeys = DictionaryType[]

export interface PasswordContextType {
	password: Accessor<string>
	length: Accessor<number>
	uppercase: Accessor<boolean>
	lowercase: Accessor<boolean>
	numbers: Accessor<boolean>
	symbols: Accessor<boolean>
	dictionary: Accessor<DictionaryKeys>

	generate: () => void
	onCopy: () => Promise<void>
	onChangeLength: (length: number | string) => void
	onToggleUppercase: JSX.EventHandlerUnion<HTMLInputElement, Event>
	onToggleLowercase: JSX.EventHandlerUnion<HTMLInputElement, Event>
	onToggleNumbers: JSX.EventHandlerUnion<HTMLInputElement, Event>
	onToggleSymbols: JSX.EventHandlerUnion<HTMLInputElement, Event>
}
