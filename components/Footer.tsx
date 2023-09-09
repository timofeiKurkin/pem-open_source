import Image from "next/legacy/image";
import Link from "next/link";
import navigationInfo from '../data/navigationInfo.json'
import contacts from "../data/contacts.json"
import {
	FooterLogo,
	FooterLogoContacts,
	FooterLogoImg,
	FooterMain,
	FooterMainContent,
	FooterName,
	FooterNameTitle,
	FooterNav,
	FooterNavItem,
	FooterNavList,
	FooterServices,
	FooterServicesItem,
	FooterServicesList,
	FooterServicesTitle,
	FooterStyle
} from "../styles/FooterStyle";
import {MediaType} from "../types/MediaType";
import {FC} from "react";
import {NavigationType, ServicesType} from "../types/NavigationType";
import {Contact} from "../types/ContactsType";

type PropsType = {
	props: MediaType
}

const Footer: FC<PropsType> = ({props}) => {

	const navigation: NavigationType[] = navigationInfo.navigation
	const services: ServicesType[] = navigationInfo.services
	const contact: Contact = contacts

	return (
        <FooterMain {...props}>
			<FooterMainContent>
				<FooterStyle {...props}>

					<FooterLogo {...props}>
						<FooterLogoImg {...props}>
							<Image
                                src={'/logoWhite.svg'}
                                width={74}
                                height={39}
                                alt={'logo'}/>
						</FooterLogoImg>
						<FooterLogoContacts {...props}>
							{contact.phone}
						</FooterLogoContacts>
						<FooterLogoContacts {...props}>
							{contact.mail}
						</FooterLogoContacts>
					</FooterLogo>

					<FooterNav {...props}>
						<FooterNavList {...props}>
							{navigation.map(({id, title, path}) =>
								<FooterNavItem key={id} {...props}>
									<Link href={path}>
										{title}
									</Link>
								</FooterNavItem>
							)}
							<FooterNavItem {...props}>
								<Link href={'/contacts#vacancies'}>
									Вакансии
								</Link>
							</FooterNavItem>
						</FooterNavList>
					</FooterNav>

					<FooterServices {...props}>
						<FooterServicesTitle {...props}>
							<Link href={'/work'}>
								Работы и услуги
							</Link>
						</FooterServicesTitle>
						<FooterServicesList {...props}>
							{services.map(({id, title, path}) =>
								<FooterServicesItem
									key={id}
									{...props}
								>
									<Link href={path}>
										{title}
									</Link>

								</FooterServicesItem>
							)}
						</FooterServicesList>
					</FooterServices>

				</FooterStyle>
			</FooterMainContent>

			<FooterName>
				<FooterNameTitle {...props}>
					{contact.copyright}
				</FooterNameTitle>
			</FooterName>

		</FooterMain>
    );
};

export default Footer;