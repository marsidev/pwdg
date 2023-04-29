import { For } from 'solid-js'

export const PasswordPlaceholder = () => {
	return (
		<div
			role='status'
			class="relative mt-6 flex min-h-[89px] w-full max-w-[800px] animate-pulse flex-wrap items-center justify-center gap-1 break-all rounded-md border-b-0 border-l border-r border-t bg-white p-6 font-['Courier_Prime',ui-monospace,Monaco,Consolas,monospace] text-3xl text-black shadow-[0_2px_8px_rgba(0,0,0,0.15)] sm:text-4xl"
		>
			<For each={Array.from({ length: 16 })}>
				{() => (
					<div class='h-[28px] w-[14.5px] rounded-sm bg-gray-200 dark:bg-gray-700 sm:h-[34px] sm:w-[17.5px]'>
						<span class='invisible'>X</span>
					</div>
				)}
			</For>
		</div>
	)
}
