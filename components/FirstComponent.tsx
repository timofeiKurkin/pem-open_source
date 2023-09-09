import DarkButton from "./ui/DarkButton";
import ArrowButton from "./ui/ArrowButton";
import SwiperMousewheel from "./ui/SwiperMousewheel";

import {
	Content,
	Main,
	MainButton,
	MainDescription,
	MainRow,
	MainTitle,
	Projects, ProjectsWrapper,
	Request, Swiper, ToProjects
} from "../styles/indexPage/FirstComponentStyle";
import useWindowSize from "../hooks/useWindowSize";
import {FC} from "react";
import {MediaType} from "../types/MediaType";
import {ProjectsType} from "../types/IndexType";

type PropsType = {
	projects: ProjectsType[],
	props: MediaType
}

const FirstComponent: FC<PropsType> = ({projects, props}) => {
	const windowSize = useWindowSize()

	return (
		<Main {...props}>
			<MainRow {...props}>

				<Request {...props}>
					<div className='backgroundFirstComponent'>
						<Content {...props}>

							<div className="content__about">

								<div className="main__contentTitle">
									<div className="title">
										<div className="title__body">
											<div className="title__mainTitleBody">
												<MainTitle {...props}>Строительство объектов
													электроэнергетики под ключ</MainTitle>
											</div>
										</div>
									</div>
								</div>

								<div className="main__contentDescription">
									<div className="description">
										<div className="{description__body">
											<MainDescription {...props}>
												Мы являемся современной российской строительно-монтажной организацией,
												специализирующейся в области промышленного строительства.
											</MainDescription>
										</div>
									</div>
								</div>

								<MainButton {...props}>
									<DarkButton href={'#form'} props={props}>Оставить заявку</DarkButton>
								</MainButton>

							</div>

						</Content>
					</div>

				</Request>

				<Projects {...props}>
					{ windowSize.width > 1024 ?
						<ProjectsWrapper {...props}>
							<Swiper {...props}>
								<SwiperMousewheel projects={projects} props={props}/>
							</Swiper>
							<ToProjects {...props}>
								<ArrowButton href={"projects"} props={props}>Наши последние проекты</ArrowButton>
							</ToProjects>
						</ProjectsWrapper>
						:
						<ToProjects {...props}>
							<ArrowButton href={"projects"} props={props}>Наши последние проекты</ArrowButton>
						</ToProjects>
					}

				</Projects>

			</MainRow>
		</Main>
	);
};

export default FirstComponent;