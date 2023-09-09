import {
	AboutMain
} from "../../styles/aboutPage/AboutSectionStyle";
import React, {FC} from "react";
import AboutCompany from "../blocks/AboutCompany";
import SubdivisionsCompany from "../blocks/SubdivisionsCompany";
import {MediaType} from "../../types/MediaType";
import {AboutType, SubdivisionsType} from "../../types/AboutType";


const AboutSection: FC<{props: MediaType, aboutCompany: AboutType[], subdivisions: SubdivisionsType[]}> = ({props, aboutCompany, subdivisions}) => {
	return (
		<div className={'grid'}>
			<AboutMain {...props}>
				<AboutCompany props={props} aboutCompany={aboutCompany}/>

				<SubdivisionsCompany props={props} subdivisions={subdivisions}/>
			</AboutMain>
		</div>
	);
};

export default AboutSection;