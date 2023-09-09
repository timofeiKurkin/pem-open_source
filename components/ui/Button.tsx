import Link from "next/link";
import {ButtonStyleWrapper} from "../../styles/components/ButtonStyle";
import {FC} from "react";

type PropsType = {
	children: string,
	href: string,
}

const Button: FC<PropsType> = ({children, href}) => {
	return (
		<Link href={`/${href}`} legacyBehavior>
			<ButtonStyleWrapper>
				{children}
			</ButtonStyleWrapper>
		</Link>
	);
};

export default Button;