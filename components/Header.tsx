import Link from "next/link";
import staticContent from "../data/navigationInfo.json";
import {
	LinkA,
	Nav,
	NavBody,
	NavBodyContainer,
	NavGrid,
	NavLink,
	NavLinks,
	NavLogo, NavLogoA,
	NavLogoWrapper,
	Sticky
} from "../styles/HeaderStyle";
import {useRouter} from "next/router";
import useWindowSize from "../hooks/useWindowSize";
import BurgerMenu from "./ui/BurgerMenu";
import {FC, useEffect, useState} from "react";
import {MediaType} from "../types/MediaType";
import {NavigationType} from "../types/NavigationType";

type PropsType = {
	props: MediaType
}

const Header: FC<PropsType> = ({props}) => {
	const windowSize = useWindowSize()
	const {
		asPath,
		pathname
	} = useRouter()
	const [mobile, setMobile] = useState<boolean>(false)
	const [logoVisible, setLogoVisible] = useState<boolean>(false)
	const navigationList: NavigationType[] = staticContent.navigation

	useEffect(() => {
		if (windowSize.width < 1024) {
			setMobile(true)
		} else if (windowSize.width > 1024) {
			setMobile(false)
		}
	}, [mobile, windowSize.width])

	useEffect(() => {
		setTimeout(() => {
			setLogoVisible(true)
		}, 1500)
	}, [])

	return (
		<header className="wrapper-header">
			<NavLogoWrapper {...props}>
				<NavLogo {...props}>
					<Link href={'/'} legacyBehavior>
						<NavLogoA {...props}>
							<svg width="58" height="34" viewBox="0 0 56 33" style={{filter: `${logoVisible ? 'invert(0%)' : 'invert(100%)'}`}} fill="black" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M0 8.95555V7H8.98891H18V8.95555L16.3667 9.48888V20.6889L18 21.4V23.3555H10V21.4L11.7445 20.6889V10H8.98891H6.25554V20.6889L8 21.4V23.3555H0V21.4L1.63333 20.6889V9.48888L0 8.95555Z"  fill='white' style={{filter: 'invert(100%)'}}/>
								<path
									d="M56 8.95555V7H49.7445L46 14.5L42.2555 7H36V8.95555L37.6333 9.48888V20.6889L36 21.4V23.3555H44V21.4L42.2555 20.6889V13.8111L46 21.3111L49.7445 13.8111V20.6889L48 21.4V23.3555H56V21.4L54.3667 20.6889V9.48888L56 8.95555Z"  fill='white' style={{filter: 'invert(100%)'}}/>
								<path
									d="M39.6868 10.6297C39.6868 10.6297 41.1281 11.9192 41.2344 13.8307C41.3407 15.7423 39.9805 17.5528 39.9805 17.5528C39.9805 17.5528 40.3495 19.7236 39.5457 21.2292C38.7419 22.7349 36.8353 23.3887 36.8353 23.3887C36.8353 23.3887 36.599 24.2201 36.0633 25.043L37.4497 27.2326L36.3999 27.5451L38.9936 32.6843L31.6313 26.9556C31.2489 26.9425 31.0047 26.9087 31.0047 26.9087C31.0047 26.9087 29.6007 28.3564 27.4294 28.2945C25.2581 28.2326 24.2485 26.9191 24.2485 26.9191C24.2485 26.9191 22.074 27.2227 20.5619 26.3024C19.0498 25.382 18.5895 23.6728 18.5895 23.6728C18.5895 23.6728 16.8297 23.2228 16.0306 21.9889C15.2315 20.7551 15.5804 18.8182 15.5804 18.8182C15.5804 18.8182 14.0329 17.5367 13.9418 15.6222C13.8506 13.7077 14.9581 12.5526 14.9581 12.5526C14.9581 12.5526 14.4006 10.6282 15.0388 9.07839C15.677 7.52855 18 7 18 7L19.9441 10.2666L19.9944 10.2356C19.6309 10.8789 19.342 11.578 19.1419 12.3247C17.8648 17.0908 20.6933 21.9899 25.4594 23.267C26.7707 23.6183 28.0921 23.6589 29.3453 23.4339L28.0976 22.2921L29.35 21.9982L24.9876 18.3311L26.0795 17.949L21.8233 12.7311L29.3945 8.11318L33.0183 15.3892L31.9684 15.7016L34.5491 20.4618C35.3973 19.4763 36.0427 18.2895 36.4017 16.9494C37.6788 12.1833 34.8504 7.28423 30.0842 6.00713C29.1685 5.76178 28.248 5.66796 27.3491 5.7103L27.4485 5.64913L25.6734 1.63897C25.6734 1.63897 26.9983 0.834835 28.925 1.00166C30.8517 1.16849 31.6559 2.49335 31.6559 2.49335C31.6559 2.49335 33.7444 2.28591 35.0694 3.12531C36.3944 3.96471 36.9558 5.85095 36.9558 5.85095C36.9558 5.85095 38.4675 6.13213 39.3327 7.54494C40.1979 8.95775 39.6868 10.6297 39.6868 10.6297Z" fill='white' style={{filter: 'invert(100%)'}}/>
							</svg>
						</NavLogoA>
					</Link>
				</NavLogo>
			</NavLogoWrapper>
			<Sticky {...props}>
				<Nav>
					<NavBody>
						<NavGrid>
							<NavBodyContainer {...props}>
								{mobile ?
									<BurgerMenu pathname={pathname} navigation={navigationList}/>
									:
									<NavLinks>
										{navigationList.map(({id, title, path}) => (

											<NavLink key={id} {...props}>
												<Link href={path}
													  legacyBehavior
													  style={{padding: '7px 20px'}}
												>
													<LinkA>
														<div style={{padding: '10px 20px'}}>
															<p>
																{title}
															</p>
															<p className={(pathname === path) ? "is-active" : "no-active"}></p>
														</div>
													</LinkA>
												</Link>
											</NavLink>

										))}
									</NavLinks>
								}
							</NavBodyContainer>
						</NavGrid>
					</NavBody>
				</Nav>
			</Sticky>
		</header>
	);
};

export default Header;