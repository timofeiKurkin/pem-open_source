import indexInfo from "../data/indexInfo.json"
import MainSection from "../components/sections/MainSection";
import {NextPage} from "next";
import {MediaType} from "../types/MediaType";
import {AdvantageInfo, ProjectsType, ServicesItem, StaticInfo} from "../types/IndexType";

export const getStaticProps = async () => {
    const data = indexInfo

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            projects: data.projects,
            advantageInfo: data.advantageInfo,
            staticInfo: data.staticInfo,
            servicesItem: data.servicesItem
        }
    }
}

type PropsType = {
    media: MediaType,
    projects: ProjectsType[],
    advantageInfo: AdvantageInfo[],
    staticInfo: StaticInfo[],
    servicesItem: ServicesItem[]
}

const Home: NextPage<PropsType> =
    ({
         media,
         projects,
         advantageInfo,
         staticInfo,
         servicesItem
     }) => {

        return (
            <MainSection projects={projects}
                         advantageInfo={advantageInfo}
                         staticInfo={staticInfo}
                         servicesItem={servicesItem}
                         props={media}
            />
        )
    }

export default Home