import { Button } from "./Common.styles";
import PageContainer from "./PageContainer";

const SplashPage = () => {
  return (
    <PageContainer pageTitle="Welcome to LongRides" pageSubtitle="Your ultimate companion for tracking long rides.">
      <Button onClick={() => window.location.href = '/map'}>Start Riding</Button>
    </PageContainer>
  );
}
export default SplashPage;