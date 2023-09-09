import Link from "next/link";
import {ArrowMain, ArrowSize, ArrowText} from "../../styles/components/ArrowButtonStyle";
import {MediaType} from "../../types/MediaType";
import {FC} from "react";

type PropsType = {
	children: string,
	href: string,
	props: MediaType
}

const ArrowButton: FC<PropsType> = ({children, href, props}) => {
	return (

			<ArrowMain>
				<Link href={`/${href}`} legacyBehavior>
					<ArrowText {...props}>
						{children}
					</ArrowText>
				</Link>
				<ArrowSize {...props}>
					<svg viewBox="0 0 17 16" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M16.0784 2C16.0784 1.30964 15.5187 0.75 14.8284 0.75H3.57837C2.88801 0.75 2.32837 1.30964 2.32837 2C2.32837 2.69036 2.88801 3.25 3.57837 3.25H13.5784V13.25C13.5784 13.9404 14.138 14.5 14.8284 14.5C15.5187 14.5 16.0784 13.9404 16.0784 13.25V2ZM13.9445 1.11612L0.944485 14.1161L2.71225 15.8839L15.7123 2.88388L13.9445 1.11612Z"
							/>
					</svg>
				</ArrowSize>
			</ArrowMain>

	);
};

export default ArrowButton;