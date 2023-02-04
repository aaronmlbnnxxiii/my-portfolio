import React from 'react';
import { ButtonOrLink, Props as ButtonOrLinkProps } from './ButtonOrLink';
import { cva, VariantProps } from 'class-variance-authority';

const buttonStyles = cva(
	'rounded-md',
	{
		variants: {
			intent: {
				primary: 'bg-orange-500 text-white',
				secondary: 'secondary',
			},
			fullWidth: {
				true: 'w-full !px-0',
			},
			size: {
				small: "px-4 py-2",
				medium: "px-6 py-4",
			},
			rounded: {
				true: 'rounded-[20px]'
			}
		},
		defaultVariants: {
			intent: "primary",
			size: "small",
			rounded: false,
		},
	},
);

export interface Props
	extends ButtonOrLinkProps,
	VariantProps<typeof buttonStyles> { }

export const Button = ({ intent, rounded, fullWidth, size, children, ...props }: Props) => {
	return (
		<ButtonOrLink className={buttonStyles({ intent, rounded, fullWidth, size })} {...props}>{children}</ButtonOrLink>
	);
}
