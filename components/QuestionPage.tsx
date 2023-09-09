import Form from "./blocks/Form";
import {
	Question,
	QuestionContent, QuestionContentWrapper,
	QuestionGrid,
	QuestionMain, QuestionMap, QuestionText,
	QuestionTitle, QuestionTitleWrapper
} from "../styles/indexPage/QuestionPageStyle";
import MapYandex from "./MapYandex";
import {FC} from "react";
import {MediaType} from "../types/MediaType";

type PropsType = {
	props: MediaType
}

const QuestionPage: FC<PropsType> = ({props}) => {
	return (
		<QuestionMain {...props} id={'form'}>
			<div className={'padding'}>
				<QuestionGrid {...props}>
					<Question {...props}>

						<QuestionContent {...props}>

							<QuestionContentWrapper {...props}>
								<QuestionTitleWrapper {...props}>
									<QuestionTitle {...props}>
										Остались вопросы?
									</QuestionTitle>
								</QuestionTitleWrapper>

								<QuestionText {...props}>
									Заполните форму и мы свяжемся с вами в течение 10 минут и проконсультируем вас по
									любому вопросу.
								</QuestionText>
							</QuestionContentWrapper>

							<Form props={props}/>
						</QuestionContent>

						<QuestionMap {...props}>
							<MapYandex />
						</QuestionMap>

					</Question>
				</QuestionGrid>
			</div>
		</QuestionMain>


	);
};

export default QuestionPage;