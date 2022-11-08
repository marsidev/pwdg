import type { Component } from 'solid-js'
import { createSignal } from 'solid-js'
import { Button } from '~/components/Button'
import { CopyIcon, GenerateIcon } from '~/components/icons'
import { usePassword } from '~/components/PasswordContext'

export const ButtonsMenu: Component = () => {
	const { generate, onCopy } = usePassword()
	const [angle, setAngle] = createSignal<number>(0)
	const rotate = () => `rotate(${angle()}deg)`

	const onGeneratePassword = () => {
		setAngle(angle => angle + 180)
		generate()
	}

	return (
		<div class='flex flex-row flex-wrap justify-center gap-2'>
			<Button onClick={onGeneratePassword}>
				<GenerateIcon rotate={rotate()} />
				Generar
			</Button>

			<Button onClick={onCopy}>
				<CopyIcon />
				Copiar
			</Button>
		</div>
	)
}
