import type React from 'react';

interface ButtonInterface
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	title: string;
	variants?: 'default' | 'outline' | 'link';
}

export default function Button({
	title,
	variants = 'default',
	...props
}: ButtonInterface) {
	switch (variants) {
		case 'outline':
			return (
				<button
					{...props}
					className='px-1.75 py-0.75 border-[1.5px] bg-neutral-300 cursor-pointer rounded-md uppercase font-mono text-sm'
				>
					{title}
				</button>
			);

		case 'link':
			return (
				<button
					{...props}
					className='px-1.75 py-0.75 cursor-pointer rounded-md uppercase font-mono text-sm hover:underline hover:underline-offset-4'
				>
					{/* TODO: install phosphoricons for arrow right icon */}
					{title}
				</button>
			);

		default:
			return (
				<button
					{...props}
					className='px-1.75 py-1.25 border-[1.5px] bg-black text-white cursor-pointer rounded-md uppercase font-mono text-sm'
				>
					{title}
				</button>
			);
	}
}
