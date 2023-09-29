import { Btn, Container, Desc, Etc, LeftCol, RightCol, Title } from "../../styles/card/card-styles.css";
import GlobalStyle from "../../styles/card/global-styles.css";

export default function Card() {
    return (
        <>
            <GlobalStyle />

            <LeftCol></LeftCol>
            <RightCol>
                <Title>7 tech tips and tricks that you need to know</Title>
                <Desc>Using these 7 proven tips from experts in the industry, you can save time, money and more!</Desc>
                <Container>
                    <Etc><strong>15</strong> minutes read</Etc>
                    <Btn type="button" value="read more" />
                </Container>
            </RightCol>
        </>
    )
}