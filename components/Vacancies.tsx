import TitleContacts from "./blocks/TitleContacts";
import {
    VacanciesContent,
    VacanciesItem, VacanciesLine,
    VacanciesList,
    VacanciesMain,
    VacanciesRow,
    VacanciesStyle,
    VacanciesTitle,
    VacanciesTitleBody,
    VacanciesWrapper,
    Vacancy,
    VacancyDescription,
    VacancyDescriptionStrong,
    VacancyDescriptionTitle,
    VacancyOption,
    VacancyTitle,
    VacancyWrapper
} from "../styles/contactsPage/VacanciesStyle";
import {FC} from "react";
import {MediaType} from "../types/MediaType";
import {VacanciesType} from "../types/ContactsType";

type PropsType = {
    vacancies: VacanciesType[],
    props: MediaType
}

const Vacancies: FC<PropsType> = ({vacancies, props}) => {

    return (
        <VacanciesMain id={'vacancies'}>
            <VacanciesContent>
                <TitleContacts>Вакансии</TitleContacts>
                <VacanciesStyle>
                    <VacanciesWrapper>
                        <VacanciesList {...props}>
                            {vacancies.map(({id, title, positionsList}) => (
                                <VacanciesItem key={id}>

                                    <VacanciesRow {...props}>
                                        <VacanciesTitleBody {...props}>
                                            <VacanciesTitle {...props}>
                                                {title}
                                            </VacanciesTitle>
                                        </VacanciesTitleBody>
                                        <Vacancy {...props}>
                                            {positionsList.map(({id, title, reqList}) => (
                                                <VacancyWrapper key={id}>
                                                    <VacancyTitle {...props}>
                                                        {title}
                                                    </VacancyTitle>
                                                    <VacancyOption {...props}>
                                                        {reqList.map(({id, title, description}) => (
                                                            <VacancyDescription key={id} {...props}>
                                                                <VacancyDescriptionTitle {...props}>
                                                                    {title}<VacancyDescriptionStrong>{description}</VacancyDescriptionStrong>
                                                                </VacancyDescriptionTitle>
                                                            </VacancyDescription>
                                                        ))}
                                                    </VacancyOption>
                                                </VacancyWrapper>
                                            ))}
                                        </Vacancy>
                                    </VacanciesRow>

                                    {id !== vacancies.length && <VacanciesLine {...props}></VacanciesLine>}
                                </VacanciesItem>
                            ))}
                        </VacanciesList>
                    </VacanciesWrapper>
                </VacanciesStyle>
            </VacanciesContent>
        </VacanciesMain>
    );
};

export default Vacancies;