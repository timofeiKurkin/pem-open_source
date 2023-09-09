import '../styles/globals.scss'
import Layout from "../components/Layout";
import Custom404 from "./404";
import {Provider} from "react-redux";
import {setupReducer} from "../store/store";
import {MediaType} from "../types/MediaType";
import {AppProps} from "next/app";

const media: MediaType = {
	media: {
		phone375_639: "(min-width: 375px) and (max-width: 639px)",
		phone640_767: "(min-width: 640px) and (max-width: 767px)",
		pad768_1023: "(min-width: 768px) and (max-width: 1023px)",
		desktop1024_1279: "(min-width: 1024px) and (max-width: 1279px)",
		desktop1280_1439: "(min-width: 1280px) and (max-width: 1439px)",
		desktop1440_1919: "(min-width: 1440px) and (max-width: 1919px)",
		desktop1920: "(min-width: 1920px)"
	},
	color: {
		$black: "#000",
		$white: "#FFF",
		$dark_blue: "#112D4E",
		$blue: "#0f1c3f",
		$white_cold: "#d7d7de",
		$white_cold2: "#f4f7fd",
		$dark_vacancy: "#1D1D1D",
		$dark: "#2A2A2A",
		$grey: "#4B4B4B",
		$greyForContacts: "#5C5C5C",
		$dark_red: "#ad3636",
		$black_background: "#1E1E1E",
		$white_blue: "#DBE2EF",
	}
}

const store = setupReducer()

const MyApp = ({Component, pageProps}: AppProps) => (
	<Provider store={store}>
		{Component === Custom404
			?
			<Component {...pageProps}/>
			:
			<Layout media={media}>
				<Component {...pageProps} media={media}/>
			</Layout>
		}
	</Provider>
)

export default MyApp

// export default wrapper.withRedux(MyApp)


// ${props => props.media.phone375_639}
// ${props => props.media.phone640_767}
// ${props => props.media.pad768_1023}
// ${props => props.media.desktop1024_1279}
// ${props => props.media.desktop1280_1439}
// ${props => props.media.desktop1440_1919}, ${props => props.media.desktop1920}
// ${props => props.media.desktop1920}