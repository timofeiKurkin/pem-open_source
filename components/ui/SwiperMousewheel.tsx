import {Mousewheel, Pagination } from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import {Body, SwiperBody, SwiperText, SwiperTitle, SwiperTitleWrapper} from "../../styles/components/SwiperMousewhelStyle";
import {ProjectsType} from "../../types/IndexType";
import {MediaType} from "../../types/MediaType";
import {FC} from "react";

type PropsType = {
	projects: ProjectsType[],
	props: MediaType
}

const SwiperSection: FC<PropsType> = ({projects, props}) => {
	const pagination = {
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + "</span>";
		},
	};

	return (
		<Body>
			<Swiper
				direction={"vertical"}
				slidesPerView={1}
				spaceBetween={30}
				mousewheel={true}
				pagination={pagination}
				loop={true}
				modules={[Mousewheel, Pagination]}
				className='mySwiper'
			>
				{projects.map(({id, title, description}) => (
					id <= 3 && <SwiperSlide key={id}>
							<SwiperBody >
								<SwiperTitleWrapper>
									<SwiperTitle {...props}>{title}</SwiperTitle>
								</SwiperTitleWrapper>
								<div className="swiper__description">
									<SwiperText {...props}>
										{description}
									</SwiperText>
								</div>
							</SwiperBody>
						</SwiperSlide>

				))}
			</Swiper>
		</Body>

	);
};

export default SwiperSection;

