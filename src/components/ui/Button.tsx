import { ArrowRightIcon, ArrowSquareOutIcon } from '@phosphor-icons/react';
import type React from 'react';

interface ButtonInterface
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	title: string;
	variants?: 'default' | 'outline' | 'link';
	isExternal?: boolean;
}

export function Button({
	title,
	variants = 'default',
	isExternal = false,
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
					className='mx-1.75 my-0.75 cursor-pointer uppercase font-mono text-sm hover:border-b'
				>
					{title}{' '}
					{isExternal ? (
						<ArrowSquareOutIcon weight='bold' />
					) : (
						<ArrowRightIcon weight='bold' />
					)}
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
