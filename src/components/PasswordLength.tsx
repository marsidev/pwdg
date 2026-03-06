import type { Component, JSX } from 'solid-js'
import { createEffect } from 'solid-js'
import { usePassword } from '~/components/PasswordContext'
import { MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH } from '~/utils/constants'

export const PasswordLength: Component = () => {
	const { length, onChangeLength } = usePassword()

	const onInput: JSX.EventHandler<HTMLInputElement, InputEvent> = event => {
		onChangeLength(event.currentTarget.value)
	}

	// Update slider CSS variable for progress fill
	createEffect(() => {
		const slider = document.getElementById('marsidev-pwd-range') as HTMLInputElement
		if (slider) {
			const min = MIN_PASSWORD_LENGTH
			const max = MAX_PASSWORD_LENGTH
			const value = length()
			const percentage = ((value - min) / (max - min)) * 100
			slider.style.setProperty('--value', percentage + '%')
		}
	})

	return (
		<div class='flex w-full flex-col items-start justify-center gap-2 text-lg font-semibold text-black'>
			<label for='marsidev-pwd-length' id='pwd-length-label' class='text-[1rem]'>
				Longitud de la contraseña
			</label>

			<div class='flex w-full flex-row items-center justify-start gap-2 text-[1rem] text-black'>
				<input
					class='h-[40px] w-[64px] rounded-md border border-violet-400 p-2 text-center text-[16px] outline-violet-500 focus:border-violet-600 focus:ring-2 focus:ring-violet-200'
					aria-labelledby='pwd-length-label'
					type='number'
					step='1'
					min={MIN_PASSWORD_LENGTH}
					max={MAX_PASSWORD_LENGTH}
					name='length'
					id='marsidev-pwd-length'
					value={length()}
					onInput={onInput}
				/>

				<input
					class='marsidev-slider w-full cursor-pointer'
					type='range'
					aria-labelledby='pwd-length-label'
					step='1'
					min={MIN_PASSWORD_LENGTH}
					max={MAX_PASSWORD_LENGTH}
					id='marsidev-pwd-range'
					value={length()}
					onInput={onInput}
				/>
			</div>
		</div>
	)
}
