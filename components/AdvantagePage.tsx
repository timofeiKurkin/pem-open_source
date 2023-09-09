import React, {FC} from "react";
import Image from "next/legacy/image";
import Title from "./blocks/Title";
import {
	AdvantageContent, AdvantageWrapper, ImageWrapper,
	ItemLine,
	ItemText,
	ListItem, Lists,
	ListSpan, ListsWrapper,
	Main, StatisticsItem, StatisticsItemLine,
	StatisticsItems, StatisticsItemsWrapper, StatisticsItemText, StatisticsItemTitle, StatisticsItemWrapper
} from "../styles/indexPage/AdvantagePageStyle";
import {MediaType} from "../types/MediaType";
import {AdvantageInfo, StaticInfo} from "../types/IndexType";

type PropsType = {
	advantageInfo: AdvantageInfo[],
	staticInfo: StaticInfo[],
	props: MediaType
}

const AdvantagePage: FC<PropsType> = ({advantageInfo, staticInfo, props}) => {

	return (
        <Main {...props}>
			<div className="grid">
				<AdvantageContent {...props}>
					<Title>Наши преимущества</Title>
					<AdvantageWrapper {...props}>
						<Lists {...props}>
							<ImageWrapper {...props}>
								<Image
                                    src={'/advantagePage.jpg'}
                                    priority
                                    layout={'fill'}
                                    objectFit={'cover'}
                                    alt={'Advantage-phone'}
                                     />
							</ImageWrapper>
							<ListsWrapper {...props}>
								{advantageInfo.map(({id, title}) => (
									<ListItem key={id} {...props}>
										<ListSpan {...props}>{id}.</ListSpan>
										<ItemLine {...props}></ItemLine>
										<ItemText {...props}>{title}</ItemText>
									</ListItem>
								))}
							</ListsWrapper>
						</Lists>
						<StatisticsItemsWrapper {...props}>
							<StatisticsItems {...props}>
								{staticInfo.map(({id, title, description}) => (
									<StatisticsItem key={id} {...props}>
										<StatisticsItemWrapper {...props}>
											<StatisticsItemTitle {...props}>{title}</StatisticsItemTitle>
											<StatisticsItemText {...props}>{description}</StatisticsItemText>
										</StatisticsItemWrapper>
										{id !== staticInfo.length &&
											<StatisticsItemLine {...props}></StatisticsItemLine>}
									</StatisticsItem>
								))}
							</StatisticsItems>
						</StatisticsItemsWrapper>
					</AdvantageWrapper>
				</AdvantageContent>
			</div>
		</Main>
    );
};

export default AdvantagePage;