import {Head, Html, Main, NextScript} from "next/document"

export default function Document() {

    // function getInitialProps({ renderPage }) {
    //     const sheet = new ServerStyleSheet()
    //
    //     const page = renderPage((App) => (props) =>
    //         sheet.collectStyles(<App {...props} />),
    //     )
    //
    //     const styleTags = sheet.getStyleElement()
    //
    //     return { ...page, styleTags }
    // }
    // async function getInitialProps(ctx) {
    //     const sheet = new ServerStyleSheet();
    //     const originalRenderPage = ctx.renderPage;
    //
    //     try {
    //         ctx.renderPage = () =>
    //             originalRenderPage({
    //                 enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
    //             });
    //
    //         const initialProps = await Document.getInitialProps(ctx);
    //         return {
    //             ...initialProps,
    //             styles: (
    //                 <>
    //                     {initialProps.styles}
    //                     {sheet.getStyleElement()}
    //                 </>
    //             ),
    //         };
    //     } finally {
    //         sheet.seal();
    //     }
    // }

    return (
        <Html lang='ru'>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link rel='stylesheet' href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"/>
                <link rel="icon" href="logoSecond.svg" type="image/svg"/>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}