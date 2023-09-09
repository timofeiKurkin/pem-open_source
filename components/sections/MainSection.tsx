import React, {FC} from 'react';
import FirstComponent from "../FirstComponent";
import AboutComponent from "../AboutComponent";
import AdvantagePage from "../AdvantagePage";
import ProjectPage from "../ProjectPage";
import ListServices from "../ListServices";
import QuestionPage from "../QuestionPage";
import {MainSectionStyle} from "../../styles/indexPage/MainSectionStyle";
import {AdvantageInfo, ProjectsType, ServicesItem, StaticInfo} from "../../types/IndexType";
import {MediaType} from "../../types/MediaType";

type PropsType = {
    props: MediaType,
    projects: ProjectsType[],
    advantageInfo: AdvantageInfo[],
    staticInfo: StaticInfo[],
    servicesItem: ServicesItem[]
}

const MainSection: FC<PropsType> = ({
          projects,
          advantageInfo,
          staticInfo,
          servicesItem,
          props
      }) => {
    return (
        <MainSectionStyle>
            <FirstComponent projects={projects} props={props}/>
            <AboutComponent props={props}/>
            <AdvantagePage advantageInfo={advantageInfo} staticInfo={staticInfo} props={props}/>
            <ProjectPage projects={projects} props={props}/>
            <ListServices servicesItem={servicesItem} props={props}/>
            <QuestionPage props={props}/>
        </MainSectionStyle>
    );
};

export default MainSection;