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
					className='px-4 py-2 border-2 border-primary hover:border-primary-lighter cursor-pointer rounded-md text-primary hover:text-primary-lighter uppercase font-mono'
				>
					{title}
				</button>
			);

		default:
			return (
				<button
					{...props}
					className='px-4 py-2 bg-primary hover:bg-primary-lighter cursor-pointer rounded-md text-white uppercase font-mono'
				>
					{title}
				</button>
			);
	}
}
