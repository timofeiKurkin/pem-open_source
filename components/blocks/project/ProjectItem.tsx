import React, {FC, useState} from 'react';
import {DetailsProjectInfo} from "../../../types/ProjectType";
import {MediaType} from "../../../types/MediaType";
import {
    ProjectBody,
    ProjectDescriptionBody,
    ProjectDescriptionOptionItem,
    ProjectDescriptionOptionItemDescription,
    ProjectDescriptionOptionItemLine,
    ProjectDescriptionOptionItemTitle,
    ProjectDescriptionOptionList,
    ProjectDescriptionOptionWrapper,
    ProjectDescriptionText,
    ProjectDescriptionTitle,
    ProjectItemMain,
    ProjectItemTitle,
    ProjectItemTitleBox,
    ProjectItemTitleListOption,
    ProjectItemTitleListOptionWrapper,
    ProjectItemTitleOption,
    ProjectItemTitleOptionItemText,
    ProjectItemTitleOptionItemTextStrong,
    ProjectItemTitleOptionWrapper,
    ProjectItemTitleWrapper,
    ProjectItemWrapper,
    ProjectMainPhoto,
    ProjectOptionBody,
    ProjectOptionBodyItem,
    ProjectOptionBodyItemDescription,
    ProjectOptionBodyItemPhotoFirst,
    ProjectOptionBodyItemPhotos,
    ProjectOptionBodyItemPhotoSecond,
    ProjectOptionBodyItemPhotoThird,
    ProjectOptionBodyItemPlus,
    ProjectOptionBodyItemTitle,
    ProjectOptionBodyList,
    ProjectOptionTitleWrapper,
    ProjectTitle,
    ProjectWrapper
} from "../../../styles/projectPage/ProjectItemStyle";
import Image from "next/legacy/image";
import TitleContacts from "../TitleContacts";

type PropsType = {
    props?: MediaType
    detailsProject: DetailsProjectInfo[]
}

const ProjectItem: FC<PropsType> = ({props, detailsProject}) => {
    const [openSpoiler, setOpenSpoiler] = useState(false)
    const [currentNumber, setCurrentNumber] = useState(0)

    if (!detailsProject) {
        return <div style={{marginTop: 100}}>Нет информации</div>
    }

    const spoilerHandler = (currentId: number) => {
        setCurrentNumber(currentId)
        setOpenSpoiler((prev) => (!prev))
    }

    return (
        <ProjectItemWrapper>
            {detailsProject.map((detail) =>
                <ProjectItemMain key={detail.id}>
                    <ProjectMainPhoto>
                        <Image src={detail.images}
                               layout={'fill'}
                               objectFit={'cover'}
                               alt={detail.title}
                               priority/>
                    </ProjectMainPhoto>


                    <ProjectTitle>
                        <ProjectWrapper>
                            <ProjectItemTitleWrapper>
                                <ProjectItemTitleBox>
                                    <ProjectItemTitleListOptionWrapper>
                                        <ProjectItemTitleListOption>

                                            <ProjectItemTitleOptionWrapper>
                                                <ProjectItemTitleOption>
                                                    <ProjectItemTitleOptionItemText>
                                                        Год: <ProjectItemTitleOptionItemTextStrong>
                                                        {detail.year}
                                                    </ProjectItemTitleOptionItemTextStrong>
                                                    </ProjectItemTitleOptionItemText>
                                                </ProjectItemTitleOption>
                                            </ProjectItemTitleOptionWrapper>

                                            <ProjectItemTitleOptionWrapper>
                                                <ProjectItemTitleOption>
                                                    <ProjectItemTitleOptionItemText>
                                                        Статус: <ProjectItemTitleOptionItemTextStrong>
                                                        {detail.status ? "Завершён" : "На этапе строительства"}
                                                    </ProjectItemTitleOptionItemTextStrong>
                                                    </ProjectItemTitleOptionItemText>
                                                </ProjectItemTitleOption>
                                            </ProjectItemTitleOptionWrapper>

                                            <ProjectItemTitleOptionWrapper>
                                                <ProjectItemTitleOption>
                                                    <ProjectItemTitleOptionItemText>
                                                        Адрес объекта: <ProjectItemTitleOptionItemTextStrong>
                                                        {detail.address}
                                                    </ProjectItemTitleOptionItemTextStrong>
                                                    </ProjectItemTitleOptionItemText>
                                                </ProjectItemTitleOption>
                                            </ProjectItemTitleOptionWrapper>

                                        </ProjectItemTitleListOption>
                                    </ProjectItemTitleListOptionWrapper>
                                    <ProjectItemTitle>
                                        <TitleContacts>
                                            {detail.title}
                                        </TitleContacts>
                                    </ProjectItemTitle>
                                </ProjectItemTitleBox>
                            </ProjectItemTitleWrapper>
                        </ProjectWrapper>

                    </ProjectTitle>

                    <ProjectBody>
                        <ProjectWrapper>
                            <ProjectDescriptionBody>
                                <ProjectDescriptionTitle>
                                    <TitleContacts>
                                        Описание объекта
                                    </TitleContacts>
                                </ProjectDescriptionTitle>

                                <ProjectDescriptionText>
                                    {detail.descriptionText}
                                </ProjectDescriptionText>

                                <ProjectDescriptionOptionWrapper>
                                    <ProjectDescriptionOptionList>
                                        {detail.featureList.map(({id, titleFeature, descriptionFeature}) =>
                                            <ProjectDescriptionOptionItem key={id}>
                                                <ProjectDescriptionOptionItemTitle>
                                                    {titleFeature}
                                                </ProjectDescriptionOptionItemTitle>
                                                <ProjectDescriptionOptionItemLine/>
                                                <ProjectDescriptionOptionItemDescription>
                                                    {descriptionFeature}
                                                </ProjectDescriptionOptionItemDescription>
                                            </ProjectDescriptionOptionItem>
                                        )}
                                    </ProjectDescriptionOptionList>
                                </ProjectDescriptionOptionWrapper>
                            </ProjectDescriptionBody>

                            <ProjectOptionBody>
                                <ProjectOptionBodyList>
                                    {detail.optionList.map(({
                                                                id,
                                                                titleOption,
                                                                descriptionOption,
                                                                photoFirst,
                                                                photoSecond,
                                                                photoThird
                                                            }) =>
                                        <ProjectOptionBodyItem key={id}>

                                            <ProjectOptionTitleWrapper onClick={() => spoilerHandler(id)}>
                                                <ProjectOptionBodyItemTitle>
                                                    <TitleContacts>
                                                        {titleOption}
                                                    </TitleContacts>
                                                </ProjectOptionBodyItemTitle>
                                                <ProjectOptionBodyItemDescription>
                                                    {descriptionOption}
                                                </ProjectOptionBodyItemDescription>
                                                <ProjectOptionBodyItemPlus/>
                                            </ProjectOptionTitleWrapper>

                                            {photoFirst && photoSecond && photoThird
                                                &&
												<div className={(currentNumber == id && openSpoiler) ? 'spoiler open-spoiler' : 'spoiler'}>

													<ProjectOptionBodyItemPhotoFirst>
														<Image src={photoFirst}
															   layout={'fill'}
															   objectFit={'cover'}
															   alt={photoFirst}
															   priority/>
													</ProjectOptionBodyItemPhotoFirst>
													<ProjectOptionBodyItemPhotoSecond>
														<Image src={photoSecond}
															   layout={'fill'}
															   objectFit={'cover'}
															   alt={photoSecond}
															   priority/>
													</ProjectOptionBodyItemPhotoSecond>
													<ProjectOptionBodyItemPhotoThird>
														<Image src={photoThird}
															   layout={'fill'}
															   objectFit={'cover'}
															   alt={photoThird}
															   priority/>
													</ProjectOptionBodyItemPhotoThird>

												</div>
                                            }

                                        </ProjectOptionBodyItem>
                                    )}
                                </ProjectOptionBodyList>
                            </ProjectOptionBody>
                        </ProjectWrapper>

                    </ProjectBody>
                </ProjectItemMain>
            )}
        </ProjectItemWrapper>
    );
};

export default ProjectItem;