import React, {FC} from 'react';
import Image from "next/legacy/image";
import Button from "./ui/Button";
import Title from "./blocks/Title";
import {
	AboutContent, AboutContentButton,
	AboutContentText,
	AboutImage,
	AboutMain,
	AboutText, AboutTextWrapper,
	AboutWrapper
} from "../styles/indexPage/AboutComponentStyle";
import {MediaType} from "../types/MediaType";

type PropsType = {
	props: MediaType
}

const AboutComponent: FC<PropsType> = ({props}) => {
	return (
        <AboutMain {...props}>
			<div className='grid'>
				<AboutContent {...props}>
					<Title>О нас</Title>
					<AboutWrapper {...props}>
						<AboutImage {...props}>
							<Image
                                src={'/photo-aboutPage.png'}
                                objectFit={'cover'}
								layout={'fill'}
								priority
								alt={'About-photo'} />
						</AboutImage>
						<AboutContentText {...props}>
							<AboutTextWrapper {...props}>
								<AboutText {...props} className='text'>Промэлектромонтаж является современной российской
									строительно-монтажной организацией,
									специализирующейся в области промышленного строительства, выполняем строительство
									объектов на условиях генерального подряда начиная с проектирования и заканчивая
									пуско-наладочными работами.</AboutText>
								<AboutText {...props} className='text'>Приоритетным направлением нашей организации является
									строительство «под ключ» объектов
									электроэнергетики любого класса напряжения, проектирование и монтаж кабельных систем
									среднего и высокого напряжения.</AboutText>
							</AboutTextWrapper>
							<AboutContentButton {...props}>
								<Button href={'about'}>
									Больше о нас
								</Button>
							</AboutContentButton>
						</AboutContentText>
					</AboutWrapper>
				</AboutContent>
			</div>
		</AboutMain>
    );
};

export default AboutComponent;