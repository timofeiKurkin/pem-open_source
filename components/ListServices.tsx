import Title from "./blocks/Title";
import Image from "next/legacy/image";
import Button from "./ui/Button";
import {
	ItemContent,
	ItemImg,
	ItemNumWrapper,
	ItemText,
	ItemTitle,
	ItemWrapper,
	ListBtn, ListButton,
	ListContent,
	ListItem,
	ListItems, ListMain,
	ListWrapper
} from "../styles/indexPage/ListServicesStyle";
import Link from "next/link";
import {FC} from "react";
import {ServicesItem} from "../types/IndexType";
import {MediaType} from "../types/MediaType";

type PropsType = {
	servicesItem: ServicesItem[],
	props: MediaType
}

const ListServices: FC<PropsType> = ({servicesItem, props}) => {

	return <>
        <div className="grid"
			 // style={{padding: '0px 62px 74px 62px'}}
		>
            <ListMain {...props}>
                <ListContent {...props}>
                    <Title>Список услуг</Title>
                    <ListWrapper {...props}>
                        <ListItems {...props}>
                            {servicesItem.map(({id, src, title, description, icon}) =>
                                <ListItem primary={id % 2 === 0 && 'primary'} key={id} {...props}>
                                    <ItemNumWrapper {...props}>
                                        <Image
                                            src={icon}
                                            layout={'fill'}
                                            objectFit={'contain'}
                                            alt={'number'}
                                            priority />
                                    </ItemNumWrapper>

                                    <ItemContent {...props}>
                                        <ItemImg {...props}>
                                            <Image
                                                src={src}
                                                layout={'fill'}
                                                objectFit={'cover'}
                                                priority
                                                alt={'services-photo'}/>
                                        </ItemImg>

                                        <ItemWrapper {...props}>
                                            <ItemTitle {...props}>{title}</ItemTitle>
                                            <ItemText {...props}>{description}</ItemText>
                                            <Button href={'work'}>Подробнее</Button>
                                        </ItemWrapper>
                                    </ItemContent>
                                </ListItem>
                            )}
                        </ListItems>
                    </ListWrapper>
                </ListContent>
            </ListMain>
        </div>
        <ListBtn>
			<Link href={'/work'} legacyBehavior>
				<ListButton {...props}>
					Показать все услуги
				</ListButton>
			</Link>
        </ListBtn>
    </>;
};

export default ListServices;