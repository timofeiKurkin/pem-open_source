import {
	CloseForm,
	FormBtn,
	Work,
	WorkContent, WorkForm,
	WorkFormWrapper,
	WorkItem,
	WorkItemContent, WorkItemContentWrapper,
	WorkItemImg,
	WorkItemNumWrapper, WorkItemOption, WorkItemOptions,
	WorkItemOptionTitle,
	WorkItemOptionWrapper, WorkItemRow,
	WorkItems,
	WorkItemText, WorkItemTextWrapper,
	WorkItemTitle,
	WorkItemWrapper,
	WorkMain, WorkTitle,
	WorkWrapper
} from "../../styles/workPage/WorkSectionStyle";
import Title from "../blocks/Title";
import Image from "next/legacy/image";
import ServicesForm from "../blocks/ServicesForm";
import {FC, useState} from "react";
import {MediaType} from "../../types/MediaType";
import {workType} from "../../types/WorkType";
import TitleContacts from "../blocks/TitleContacts";

type PropsType = {
	props: MediaType,
	services: workType[]
}

const WorkSection: FC<PropsType> = ({props, services}) => {
	const [formActive, setFormActive] = useState(false)

	const handleClick = () => {
		setFormActive(!formActive)
	}

	return (
		<Work {...props}>
			{/*<div className="grid">*/}
				<WorkMain {...props}>
					<WorkContent {...props}>
						<WorkTitle {...props}>
							<TitleContacts>Список услуг</TitleContacts>
						</WorkTitle>

						<WorkWrapper {...props}>
							<WorkItems {...props}>
								{services.map(({id, idPath, src, title, description, description2, icon, optionTitle, option}) =>
									<WorkItemRow id={idPath} primary={id % 2 === 0 && 'primary'} key={id} {...props}>

										<div className="gridServices">

											<WorkItem {...props}>
												<WorkItemNumWrapper {...props}>
													<Image
														src={icon}
														layout={'fill'}
														objectFit={'contain'}
														alt={'number'}
														priority />
												</WorkItemNumWrapper>

												<WorkItemContent {...props}>
													<WorkItemImg {...props}>
														<Image
															src={src}
															layout={'fill'}
															objectFit={'cover'}
															priority
															alt={'services-photo'}/>
													</WorkItemImg>

													<WorkItemWrapper {...props}>

														<WorkItemContentWrapper {...props}>
															<WorkItemTitle {...props}>{title}</WorkItemTitle>

															<WorkItemTextWrapper {...props}>
																<WorkItemText {...props}>{description}</WorkItemText>
																{description2 && <WorkItemText {...props}>{description2}</WorkItemText>}
															</WorkItemTextWrapper>

															{id !== 5 &&
																<WorkItemOptionWrapper {...props}>
																	<WorkItemOptionTitle {...props}>{optionTitle}</WorkItemOptionTitle>
																	<WorkItemOptions {...props}>
																		{option && option.map(({id, text}) =>
																			<WorkItemOption key={id} {...props}>{id}. {text}</WorkItemOption>
																		)}
																	</WorkItemOptions>
																</WorkItemOptionWrapper>
															}
														</WorkItemContentWrapper>

														<FormBtn {...props} onClick={(e) => handleClick()}>Заказать услугу</FormBtn>

													</WorkItemWrapper>
												</WorkItemContent>
											</WorkItem>
										</div>

									</WorkItemRow>
								)}
							</WorkItems>
						</WorkWrapper>
					</WorkContent>
				</WorkMain>
			{/*</div>*/}
			<WorkFormWrapper className={formActive ? 'modal active' : 'modal'} {...props} onClick={() => setFormActive(false)}>
				<WorkForm {...props} onClick={e => e.stopPropagation()}>
					<CloseForm {...props} onClick={() => setFormActive(false)}/>
					<ServicesForm props={props}
								  // services={services}
					/>
				</WorkForm>
			</WorkFormWrapper>
		</Work>
	);
};

export default WorkSection;