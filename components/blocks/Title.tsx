import React, {FC} from "react";
import {TitleText, TitleWrapper} from "../../styles/components/TitleStyle";

type PropsType = {
    children: string
}

const Title: FC<PropsType> = ({children}) => {
    return (
        <TitleWrapper>
            <TitleText>{children}</TitleText>
        </TitleWrapper>
    );
};

export default Title;