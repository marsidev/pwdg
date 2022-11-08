import type { Component, ComponentProps } from 'solid-js'
import { splitProps } from 'solid-js'
import '~/styles/checkbox.css'

interface CheckboxProps extends ComponentProps<'input'> {
	checked: boolean
	label: string
}

export const Checkbox: Component<CheckboxProps> = props => {
	const [local, checkboxProps] = splitProps(props, ['label'])
	return (
		<div class='marsidev-checkbox flex items-center'>
			<input type='checkbox' {...checkboxProps} />
			<label class='cursor-pointer text-[1rem]' for={props.id}>
				{local.label}
			</label>
		</div>
	)
}
