import type { Component } from 'solid-js'
import { For, Match, Switch } from 'solid-js'
import { usePassword } from '~/components/PasswordContext'
import { PasswordPlaceholder } from '~/components/PasswordPlaceholder'
import { DICTIONARY } from '~/utils/constants'

const isSymbol = (char: string) => char === '\\' || new RegExp(`[${DICTIONARY.symbols}]`).test(char)
const isNumber = (char: string) => new RegExp(`[${DICTIONARY.numbers}]`).test(char)
const isLowercase = (char: string) => new RegExp(`[${DICTIONARY.lowercase}]`).test(char)
const isUppercase = (char: string) => new RegExp(`[${DICTIONARY.uppercase}]`).test(char)

export const PasswordPreview: Component = () => {
	const { password } = usePassword()

	return (
		<Switch>
			<Match when={password() === ''}>
				<PasswordPlaceholder />
			</Match>

			<Match when={password() !== ''}>
				<div class="relative mt-6 flex min-h-[89px] w-full max-w-[800px] flex-wrap items-center justify-center break-all rounded-md border-b-0 border-l border-r border-t bg-white p-6 font-['Courier_Prime',ui-monospace,Monaco,Consolas,monospace] text-3xl text-black shadow-[0_2px_8px_rgba(0,0,0,0.15)] sm:text-4xl">
					<For each={password().split('')}>
						{char => {
							return (
								<span
									classList={{
										'text-rose-500': isSymbol(char),
										'text-blue-500': isNumber(char),
										'text-fuchsia-500': isLowercase(char),
										'text-purple-500': isUppercase(char)
									}}
								>
									{char}
								</span>
							)
						}}
					</For>
				</div>
			</Match>
		</Switch>
	)
}
