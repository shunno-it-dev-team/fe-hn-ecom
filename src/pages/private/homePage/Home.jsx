import CustomCard from "../../../components/common/nav/CustomCard";
import Banner from "../../../components/page/home/Banner";
import Container from "../../../components/common/Container";

const Home = () => {
  return (
    <section className="flex flex-col gap-24">
      <Banner />
      <Container>
        <CustomCard />
      </Container>
    </section>
  );
};

export default Home;
