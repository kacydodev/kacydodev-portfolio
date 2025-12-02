import type React from 'react';
import classNames from 'classnames';

interface ButtonInterface
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variants?: 'default' | 'outline' | 'link';
	children: React.ReactNode;
}

export function Button({
	variants = 'default',
	children,
	...props
}: ButtonInterface) {
	const buttonClass = classNames(
		{
			'button cursor-pointer uppercase font-mono text-sm': true, // Base styles
			'px-1.75 py-1.25 border-[1.5px] rounded-md bg-black dark:bg-white text-white dark:text-black dark:border-0':
				variants === 'default',
			'mx-1.75 my-0.75 hover:border-b': variants === 'link',
			'px-1.75 py-0.75 border-[1.5px] bg-neutral-300 dark:bg-neutral-700 dark:py-1.25 dark:border-0':
				variants === 'outline',
		},
		props.className
	);

	return (
		<button {...props} className={buttonClass}>
			{children}
		</button>
	);
}
