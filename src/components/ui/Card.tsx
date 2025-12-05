import { BracketsCurlyIcon } from '@phosphor-icons/react';
import classNames from 'classnames';

interface Card extends React.HTMLAttributes<HTMLDivElement> {
	header: string;
	children: React.ReactNode;
}

export function Card({ header, children, ...props }: Card) {
	const cardClass = classNames(
		{
			'odd:border-dashed w-150 px-4 py-4 rounded-md border border-neutral-400':
				true, // Base styles
			'[&_h4]:': true, // Content's styles
		},
		props.className
	);

	return (
		<div {...props} className={cardClass}>
			<h3 className='flex justify-between'>
				<BracketsCurlyIcon
					size={24}
					weight='fill'
					className='-ml-px text-primary'
				/>
				{header}
			</h3>
			{children}
		</div>
	);
}
