import React, {useEffect, useState} from 'react';
import styles from '../styles/404.module.scss'
import Link from "next/link";
import {NextRouter, useRouter, withRouter} from "next/router";
import Head from "next/head";

const Custom404 = () => {
    const [redirect, setRedirect] = useState(false)
    const router: NextRouter = useRouter()
    const redirectTo: string = '/'

    useEffect(() => {
        setTimeout(() => {
            if(redirect) return
            router.push(redirectTo).then(r => setRedirect(!r))
        }, 6000)
    }, [redirect, router])

return (
    <>
        <Head>
            <title>404 | Страницы не существует</title>
        </Head>
        <div className={styles.main}>
            <div className={styles.main__wrapper}>
                <div className={styles.content}>
                    <h1 className={styles.content__title}>404</h1>
                    <p className={styles.content__textMain}>Хм... Похоже вы попали не туда</p>
                    <p className={styles.content__textSmall}>Страницу которую вы ищите не существует или пока что мы ее
                        не построили</p>
                    <Link href={'/'}>
                        <button className={styles.content__button}>Вернуться на главную страницу</button>
                    </Link>
                </div>
            </div>
        </div>
    </>
)
}

export default withRouter(Custom404);