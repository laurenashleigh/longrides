import { Container, Title, Subtitle } from "./Common.styles"

interface PageContainerProps {
    children: React.ReactNode;
    pageTitle: string;
    pageSubtitle?: string;
}


 const PageContainer = ({children, pageTitle, pageSubtitle}: PageContainerProps) => {
    return (
        <Container>
            <Title>{pageTitle}</Title>
            <Subtitle>{pageSubtitle}</Subtitle>
            {children}
        </Container>
    )
 }

 export default PageContainer;