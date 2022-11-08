import type { ParentProps, Setter } from 'solid-js'
import { createContext, createSignal, useContext } from 'solid-js'
import toast from 'solid-toast'
import type { DictionaryKeys, PasswordContextType } from '~/types'
import { generatePassword } from '~/utils/generate-password'
import { DEFAULT_KEYS, DEFAULT_PASSWORD_LENGTH } from '~/utils/constants'
import { copyTextToClipboard } from '~/utils/copy-to-clipboard'

interface PasswordProviderProps extends ParentProps {
	initialPassword: string
}

const PasswordContext = createContext<PasswordContextType>()

export const PasswordProvider = (props: PasswordProviderProps) => {
	const [passwordLength, setPasswordLength] = createSignal(DEFAULT_PASSWORD_LENGTH)
	const [passwordDictionary, setPasswordDictionary] = createSignal(DEFAULT_KEYS)
	const [withUpper, setWithUpper] = createSignal(true)
	const [withLower, setWithLower] = createSignal(true)
	const [withNumbers, setWithNumbers] = createSignal(true)
	const [withSymbols, setWithSymbols] = createSignal(true)

	const [password, setPassword] = createSignal(props.initialPassword)

	const store: PasswordContextType = {
		password,
		length: passwordLength,
		uppercase: withUpper,
		lowercase: withLower,
		numbers: withNumbers,
		symbols: withSymbols,
		dictionary: passwordDictionary,

		generate: () => updatePassword(),
		onCopy: () => onCopyPassword(),
		onChangeLength: length => onChangeLength(length),
		onToggleUppercase: event => onToggleCheckbox(event, setWithUpper),
		onToggleLowercase: event => onToggleCheckbox(event, setWithLower),
		onToggleNumbers: event => onToggleCheckbox(event, setWithNumbers),
		onToggleSymbols: event => onToggleCheckbox(event, setWithSymbols)
	}

	function updatePassword() {
		const newPassword = generatePassword(passwordLength(), passwordDictionary())
		setPassword(newPassword)
	}

	function updateDictionary() {
		let dict: DictionaryKeys = []

		if (withUpper()) {
			dict = [...dict, 'uppercase']
		}

		if (withLower()) {
			dict = [...dict, 'lowercase']
		}

		if (withNumbers()) {
			dict = [...dict, 'numbers']
		}

		if (withSymbols()) {
			dict = [...dict, 'symbols']
		}

		setPasswordDictionary(dict)
	}

	function onChangeLength(length: string | number) {
		const _length = typeof length === 'string' ? parseInt(length) : length
		setPasswordLength(_length)
		updatePassword()
	}

	function onToggleCheckbox(event: Event, setter: Setter<boolean>) {
		event.preventDefault()

		setter(prev => {
			const next = !prev

			if (next === true) return next
			if (passwordDictionary().length > 1) return next // unchecking a checkbox when there is 2+ checkboxes checked

			// console.log('cannot uncheck! at least 1 checkbox should be checked')
			return prev
		})

		updateDictionary()
		updatePassword()
	}

	async function onCopyPassword() {
		const copy = copyTextToClipboard(password())

		toast.promise(copy, {
			loading: 'Copiando',
			success: <b>¡Contraseña copiada!</b>,
			error: <b>¡Algo salió mal! 😔</b>
		})
	}

	return <PasswordContext.Provider value={store}>{props.children}</PasswordContext.Provider>
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const usePassword = () => useContext(PasswordContext)!
