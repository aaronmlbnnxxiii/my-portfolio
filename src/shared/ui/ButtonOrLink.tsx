
import { Link } from "gatsby";
import React from 'react';

export interface Props {
	href?: string;
	className?: any;
	onClick?: () => void
	children?: React.ReactNode
}

export function ButtonOrLink({ href, children, onClick, ...props }: Props) {
	if (href) {
		return <Link to={href} {...props}>{children}</Link>;
	}
	return <button onClick={onClick} {...props}>{children}</button>;
}
