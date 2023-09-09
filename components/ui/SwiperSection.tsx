import SwiperCore, {Navigation, Scrollbar} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {
	Arrow,
	ArrowBody, SwiperBody,
	SwiperDescription, SwiperDescriptionText,
	SwiperTitle,
	SwiperTitleWrapper
} from "../../styles/components/SwiperSectionStyle";
import {FC, useRef} from "react";
import {MediaType} from "../../types/MediaType";
import {ProjectsType} from "../../types/IndexType";

SwiperCore.use([Navigation, Scrollbar]);

type PropsType = {
	projects: ProjectsType[],
	props: MediaType
}

const SwiperSection: FC<PropsType> = ({projects, props}) => {

	const swiperRef = useRef<null | SwiperCore>(null)

	const onSwiper = (swiper) => {
	}

	const onSlideChange = () => {
	}

	return (

		<ArrowBody {...props}>
			<Arrow {...props} onClick={() => swiperRef.current?.slidePrev()}>
				<svg width="26" height="46" viewBox="0 0 26 46" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M0.87868 20.8787C-0.292893 22.0503 -0.292893 23.9497 0.87868 25.1213L19.9706 44.2132C21.1421 45.3848 23.0416 45.3848 24.2132 44.2132C25.3848 43.0416 25.3848 41.1421 24.2132 39.9706L7.24264 23L24.2132 6.02944C25.3848 4.85786 25.3848 2.95837 24.2132 1.7868C23.0416 0.615223 21.1421 0.615223 19.9706 1.7868L0.87868 20.8787ZM4 20H3L3 26H4L4 20Z"
						fill="#112D4E"/>
				</svg>
			</Arrow>
			<Swiper
				slidesPerView={1}
				onBeforeInit={(swiper) => {
					swiperRef.current = swiper;
				}}
				loop
				onSwiper={(swiper) => onSwiper(swiper)}
				onSlideChange={() => onSlideChange()}
			>

				{projects.map(({id, title, description}) =>
					<SwiperSlide key={`slide_${id}`}>
						<SwiperBody {...props}>
							<SwiperTitleWrapper {...props}>
								<SwiperTitle {...props}>{title}</SwiperTitle>
							</SwiperTitleWrapper>
							<SwiperDescription>
								<SwiperDescriptionText {...props}>
									{description}
								</SwiperDescriptionText>
							</SwiperDescription>
						</SwiperBody>
					</SwiperSlide>
				)}

			</Swiper>
			<Arrow {...props} onClick={() => swiperRef.current?.slideNext()}>
				<svg width="26" height="46" viewBox="0 0 26 46" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M25.1213 25.1213C26.2929 23.9497 26.2929 22.0503 25.1213 20.8787L6.02944 1.7868C4.85787 0.615221 2.95837 0.615221 1.7868 1.78679C0.615225 2.95837 0.615225 4.85786 1.7868 6.02944L18.7574 23L1.7868 39.9706C0.615221 41.1421 0.615221 43.0416 1.78679 44.2132C2.95837 45.3848 4.85786 45.3848 6.02944 44.2132L25.1213 25.1213ZM22 26L23 26L23 20L22 20L22 26Z"
						fill="#112D4E"/>
				</svg>
			</Arrow>
		</ArrowBody>

	);
};

export default SwiperSection;

