import React from 'react';
import { ButtonOrLink, Props as ButtonOrLinkProps } from './ButtonOrLink';
import { cva, VariantProps } from 'class-variance-authority';

const buttonStyles = cva(
	'button',
	{
		variants: {
			intent: {
				primary: 'bg-slate-500',
				secondary: 'secondary',
			},
			fullWidth: {
				true: 'full-width',
			},
			size: {
				small: "px-4 px-2",
				medium: "medium",
				large: "large",
			},
		},
		defaultVariants: {

			intent: "primary",
			size: "small"
		},
	},
);

export interface Props
	extends ButtonOrLinkProps,
	VariantProps<typeof buttonStyles> { }

export const Button = ({ intent, fullWidth, size, children, ...props }: Props) => {
	return (
		<ButtonOrLink className={buttonStyles({ intent, fullWidth, size })} {...props}>{children}</ButtonOrLink>
	);
}
