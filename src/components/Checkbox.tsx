import type { Component, ComponentProps } from 'solid-js'
import { splitProps } from 'solid-js'

interface CheckboxProps extends ComponentProps<'input'> {
	checked: boolean
	label: string
}

export const Checkbox: Component<CheckboxProps> = props => {
	const [local, checkboxProps] = splitProps(props, ['label'])
	return (
		<label class='flex cursor-pointer items-center gap-2 text-[1rem]' for={props.id}>
			<input
				type='checkbox'
				class='h-6 w-6 cursor-pointer rounded border-2 border-violet-400 bg-white accent-violet-500 checked:bg-violet-500 focus:border-violet-600 focus:ring-2 focus:ring-violet-500 focus:outline-none'
				{...checkboxProps}
			/>
			<span>{local.label}</span>
		</label>
	)
}
