import Title from "../blocks/Title";
import {
	PointItem,
	PointItemDescriptionLevelOne, PointItemDescriptionLevelThree,
	PointItemDescriptionLevelTwo,
	PointItemText, PointItemTextPoint, PointItemTextPointWrapper,
	PointItemTitle,
	PointTextWrapper,
	PointTitle,
	PoliticsMain,
	PoliticsPointsItem,
	PoliticsPointsList,
	PoliticsPointsWrapper
} from "../../styles/politicsPage/PoliticsSectionStyle";

const PoliticsSection = ({politics, props}) => {

	return (
		<PoliticsMain {...props}>
			<div className={'grid'}>
				{politics.map(({
								   id,
								   title,
								   pointOne,
								   pointTwo,
								   pointThree,
								   pointFour,
								   pointFive,
								   pointSix,
								   pointSeven,
								   pointEight,
								   pointNine,
								   pointTen,
								   pointEleven
							   }) =>
					<PoliticsPointsWrapper key={id}>
						<Title>{title}</Title>

						<PoliticsPointsList>
							<PoliticsPointsItem>
								{pointOne.map(({id, title, descriptions}) =>
									<PointItem key={id}>
										<PointItemTitle>
											{title}
										</PointItemTitle>
										<PointItemDescriptionLevelOne>
											{descriptions.map(({id, text}) =>
												<PointItemText key={id} {...props}>
													{text}
												</PointItemText>
											)}
										</PointItemDescriptionLevelOne>
									</PointItem>
								)}
							</PoliticsPointsItem>

							<PoliticsPointsItem>
								{pointTwo.map(({id, title, pointList}) =>
									<PointItem key={id}>
										<PointItemTitle>
											{title}
										</PointItemTitle>
										<PointItemDescriptionLevelOne>
											{pointList.map(({id, title, descriptions}) =>
												<PointItemDescriptionLevelTwo key={id}>
													<PointTitle>
														{title}
													</PointTitle>
													<PointTextWrapper>
														{descriptions.map(({id, text, list}) =>
															<PointItemDescriptionLevelThree key={id}>
																<PointItemText key={id} {...props}>
																	{text}
																</PointItemText>
																<PointItemTextPointWrapper>
																	{list?.map(({id, text}) =>
																		<PointItemTextPoint key={id} {...props}>
																			{text}
																		</PointItemTextPoint>
																	)}
																</PointItemTextPointWrapper>
															</PointItemDescriptionLevelThree>
														)}
													</PointTextWrapper>
												</PointItemDescriptionLevelTwo>
											)}
										</PointItemDescriptionLevelOne>
									</PointItem>
								)}
							</PoliticsPointsItem>

							<PoliticsPointsItem>
								{pointThree.map(({id, title, pointList}) =>
									<PointItem key={id}>
										<PointItemTitle>
											{title}
										</PointItemTitle>
										<PointItemDescriptionLevelOne>
											{pointList.map(({id, title, descriptions}) =>
												<PointItemDescriptionLevelTwo key={id}>
													<PointTitle>
														{title}
													</PointTitle>
													<PointTextWrapper>
														{descriptions.map(({id, text, list}) =>
															<PointItemDescriptionLevelThree key={id}>
																<PointItemText key={id} {...props}>
																	{text}
																</PointItemText>
																{list?.map(({id, text}) =>
																	<PointItemTextPoint key={id} {...props}>
																		{text}
																	</PointItemTextPoint>
																)}
															</PointItemDescriptionLevelThree>
														)}
													</PointTextWrapper>
												</PointItemDescriptionLevelTwo>
											)}
										</PointItemDescriptionLevelOne>
									</PointItem>
								)}
							</PoliticsPointsItem>

							<PoliticsPointsItem>
								{pointFour.map(({id, title, pointList}) =>
									<PointItem key={id}>
										<PointItemTitle>
											{title}
										</PointItemTitle>
										<PointItemDescriptionLevelOne>
											{pointList.map(({id, title, descriptions}) =>
												<PointItemDescriptionLevelTwo key={id}>
													<PointTitle>
														{title}
													</PointTitle>
													<PointTextWrapper>
														{descriptions.map(({id, text, list}) =>
															<PointItemDescriptionLevelThree key={id}>
																<PointItemText key={id} {...props}>
																	{text}
																</PointItemText>
																{list?.map(({id, text}) =>
																	<PointItemTextPoint key={id} {...props}>
																		{text}
																	</PointItemTextPoint>
																)}
															</PointItemDescriptionLevelThree>
														)}
													</PointTextWrapper>
												</PointItemDescriptionLevelTwo>
											)}
										</PointItemDescriptionLevelOne>
									</PointItem>
								)}
							</PoliticsPointsItem>

							<PoliticsPointsItem>
								{pointFive.map(({id, title, pointList}) =>
									<PointItem key={id}>
										<PointItemTitle>
											{title}
										</PointItemTitle>
										<PointItemDescriptionLevelOne>
											{pointList.map(({id, title, descriptions}) =>
												<PointItemDescriptionLevelTwo key={id}>
													<PointTitle>
														{title}
													</PointTitle>
													<PointTextWrapper>
														{descriptions.map(({id, text}) =>
															<PointItemDescriptionLevelThree key={id}>
																<PointItemText key={id} {...props}>
																	{text}
																</PointItemText>
															</PointItemDescriptionLevelThree>
														)}
													</PointTextWrapper>
												</PointItemDescriptionLevelTwo>
											)}
										</PointItemDescriptionLevelOne>
									</PointItem>
								)}
							</PoliticsPointsItem>

							<PoliticsPointsItem>
								{pointSix.map(({id, title, pointList}) =>
									<PointItem key={id}>
										<PointItemTitle>
											{title}
										</PointItemTitle>
										<PointItemDescriptionLevelOne>
											{pointList.map(({id, title, descriptions}) =>
												<PointItemDescriptionLevelTwo key={id}>
													<PointTitle>
														{title}
													</PointTitle>
													<PointTextWrapper>
														{descriptions.map(({id, text}) =>
															<PointItemDescriptionLevelThree key={id}>
																<PointItemText key={id} {...props}>
																	{text}
																</PointItemText>
															</PointItemDescriptionLevelThree>
														)}
													</PointTextWrapper>
												</PointItemDescriptionLevelTwo>
											)}
										</PointItemDescriptionLevelOne>
									</PointItem>
								)}
							</PoliticsPointsItem>

							<PoliticsPointsItem>
								{pointSeven.map(({id, title, pointList}) =>
									<PointItem key={id}>
										<PointItemTitle>
											{title}
										</PointItemTitle>
										<PointItemDescriptionLevelOne>
											{pointList.map(({id, title, descriptions}) =>
												<PointItemDescriptionLevelTwo key={id}>
													<PointTitle>
														{title}
													</PointTitle>
													<PointTextWrapper>
														{descriptions.map(({id, text, list}) =>
															<PointItemDescriptionLevelThree key={id}>
																<PointItemText key={id} {...props}>
																	{text}
																</PointItemText>
																{list?.map(({id, text}) =>
																	<PointItemTextPoint key={id} {...props}>
																		{text}
																	</PointItemTextPoint>
																)}
															</PointItemDescriptionLevelThree>
														)}
													</PointTextWrapper>
												</PointItemDescriptionLevelTwo>
											)}
										</PointItemDescriptionLevelOne>
									</PointItem>
								)}
							</PoliticsPointsItem>

							<PoliticsPointsItem>
								{pointEight.map(({id, title, pointList}) =>
									<PointItem key={id}>
										<PointItemTitle>
											{title}
										</PointItemTitle>
										<PointItemDescriptionLevelOne>
											{pointList.map(({id, title, descriptions}) =>
												<PointItemDescriptionLevelTwo key={id}>
													<PointTitle>
														{title}
													</PointTitle>
													<PointTextWrapper>
														{descriptions.map(({id, text}) =>
															<PointItemDescriptionLevelThree key={id}>
																<PointItemText key={id} {...props}>
																	{text}
																</PointItemText>
															</PointItemDescriptionLevelThree>
														)}
													</PointTextWrapper>
												</PointItemDescriptionLevelTwo>
											)}
										</PointItemDescriptionLevelOne>
									</PointItem>
								)}
							</PoliticsPointsItem>

							<PoliticsPointsItem>
								{pointNine.map(({id, title, pointList}) =>
									<PointItem key={id}>
										<PointItemTitle>
											{title}
										</PointItemTitle>
										<PointItemDescriptionLevelOne>
											{pointList.map(({id, text, list}) =>
												<PointItemDescriptionLevelTwo key={id}>
													<PointItemText {...props}>
														{text}
													</PointItemText>
													<PointTextWrapper>
														{list?.map(({id, text}) =>
															<PointItemDescriptionLevelThree key={id}>
																<PointItemTextPoint key={id} {...props}>
																	{text}
																</PointItemTextPoint>
															</PointItemDescriptionLevelThree>
														)}
													</PointTextWrapper>
												</PointItemDescriptionLevelTwo>
											)}
										</PointItemDescriptionLevelOne>
									</PointItem>
								)}
							</PoliticsPointsItem>

							<PoliticsPointsItem>
								{pointTen.map(({id, title, pointList}) =>
									<PointItem key={id}>
										<PointItemTitle>
											{title}
										</PointItemTitle>
										<PointItemDescriptionLevelOne>
											{pointList.map(({id, text}) =>
												<PointItemDescriptionLevelTwo key={id}>
													<PointItemText {...props}>
														{text}
													</PointItemText>
												</PointItemDescriptionLevelTwo>
											)}
										</PointItemDescriptionLevelOne>
									</PointItem>
								)}
							</PoliticsPointsItem>

							<PoliticsPointsItem>
								{pointEleven.map(({id, title, pointList}) =>
									<PointItem key={id}>
										<PointItemTitle>
											{title}
										</PointItemTitle>
										<PointItemDescriptionLevelOne>
											{pointList.map(({id, title, list}) =>
												<PointItemDescriptionLevelTwo key={id}>
													<PointTitle>
														{title}
													</PointTitle>
													<PointTextWrapper>
														{list?.map(({id, text}) =>
															<PointItemDescriptionLevelThree key={id}>
																<PointItemText key={id} {...props}>
																	{text}
																</PointItemText>
															</PointItemDescriptionLevelThree>
														)}
													</PointTextWrapper>
												</PointItemDescriptionLevelTwo>
											)}
										</PointItemDescriptionLevelOne>
									</PointItem>
								)}
							</PoliticsPointsItem>

						</PoliticsPointsList>
					</PoliticsPointsWrapper>
				)}
			</div>
		</PoliticsMain>
	);
};

export default PoliticsSection;