import Link from "next/link";
import {Button} from "../../styles/components/DarkButtonStyle";
import {MediaType} from "../../types/MediaType";
import {FC} from "react";

type PropsType = {
	href: string,
	children: string,
	props: MediaType
}

const DarkButton: FC<PropsType> = ({href, children, props}) => {
	return (
		<Link href={`/${href}`} legacyBehavior scroll={false}>
			<Button {...props}>
				{children}
			</Button>
		</Link>

	);
};

export default DarkButton;