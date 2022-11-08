import type { Dictionary, DictionaryKeys } from '~/types'

export const DICTIONARY: Dictionary = {
	numbers: '0123456789',
	lowercase: 'abcdefghijklmnopqrstuvwxyz',
	uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
	symbols: '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
}

export const DEFAULT_PASSWORD_LENGTH = 16
export const MIN_PASSWORD_LENGTH = 4
export const MAX_PASSWORD_LENGTH = 64

export const DEFAULT_KEYS: DictionaryKeys = ['lowercase', 'uppercase', 'numbers', 'symbols']
