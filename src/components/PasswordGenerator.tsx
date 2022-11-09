import type { Component } from 'solid-js'
import { Toaster } from 'solid-toast'
import { PasswordOptions } from '~/components/PasswordOptions'
import { ButtonsMenu } from '~/components/ButtonsMenu'
import { PasswordPreview } from '~/components/PasswordPreview'
import { PasswordProvider } from '~/components/PasswordContext'

export const PasswordGenerator: Component = () => {
	return (
		<>
			<PasswordProvider>
				<div class='flex min-h-[400px] w-full max-w-2xl flex-col items-center justify-center gap-6 rounded-3xl border-4 border-white text-center'>
					<PasswordPreview />
					<ButtonsMenu />
					<PasswordOptions />
				</div>
			</PasswordProvider>

			<Toaster
				position='bottom-right'
				toastOptions={{
					duration: 3000,
					style: {
						background: 'var(--accent-gradient)',
						padding: '0.75rem',
						'background-color': 'white',
						'background-position': 0,
						'background-size': '400%',
						'border-radius': '12px',
						color: '#fff',
						'min-width': '220px',
						'padding-left': '16px',
						'padding-right': '16px'
					},
					iconTheme: {
						primary: '#fff',
						secondary: 'rgb(139 92 246)'
					}
				}}
			/>
		</>
	)
}
