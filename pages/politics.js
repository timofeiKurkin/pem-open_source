import PoliticsSection from "../components/sections/PoliticsSection";
import politicsInfo from "../data/politicsInfo.json";

export const getStaticProps = async () => {
	const data = politicsInfo

	if (!data) {
		return {
			notFound: true
		}
	}

	return {
		props: {
			content: data
		}
	}
}

const Politics = ({content, media}) => {
	return (
		<PoliticsSection politics={content.main} props={media}/>
	);
};

export default Politics;