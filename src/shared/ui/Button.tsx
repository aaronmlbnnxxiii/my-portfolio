import React from 'react';
import { ButtonOrLink, Props as ButtonOrLinkProps } from './ButtonOrLink';
import { cva, VariantProps } from 'class-variance-authority';

const buttonStyles = cva(
	'rounded-md [&>*]:mx-auto flex justify-center cursor-pointer transition-all duration-300 ease-in-out ring-transparent ring-offset-0 ring-1',
	{
		variants: {
			intent: {
				primary: 'bg-orange-500 hover:bg-orange-600 active:bg-orange-600/75 focus:ring-orange-700 text-white',
				secondary: 'bg-gray-200 text-gray-900  focus:ring-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100',
			},
			fullWidth: {
				true: 'w-full !px-0',
			},
			size: {
				sm: "px-2 py-1 text-[0.75em]",
				md: "px-4 py-2",
				lg: "px-6 py-3",
			},
			rounded: {
				true: 'rounded-[20px]'
			}
		},
		defaultVariants: {
			intent: "primary",
			size: "md",
			rounded: false,
		},
	},
);

export interface Props
	extends ButtonOrLinkProps,
	VariantProps<typeof buttonStyles> { }

export const Button = ({ intent, rounded, fullWidth, size, children, className, ...props }: Props) => {
	return (
		<ButtonOrLink className={buttonStyles({ intent, rounded, fullWidth, size })} {...props}>{children}</ButtonOrLink>
	);
}
