import Banner from "../../../components/page/home/Banner";
import Container from "../../../components/common/Container";
import { useGetProductQuery } from "../../../redux/api/services/product.service";
import Products from "./sub-components/Products";
import CategoryVerticalBar from "./sub-components/CategoryVerticalBar";

const Home = () => {
  // const {
  //   data: products,
  //   categories,
  //   isLoading,
  // } = useGetProductQuery(undefined, {
  //   selectFromResult: ({ data, isSuccess, ...rest }) => {
  //     if (isSuccess) {
  //       const categories = data.map((item) => ({
  //         category: item.category,
  //         id: item.id,
  //       }));

  //       return { data, categories, isSuccess, ...rest };
  //     }
  //     return { data, categories: [], isSuccess, ...rest };
  //   },
  // });
  const {
    data: products,
    categories,
    isLoading,
  } = useGetProductQuery(undefined, {
    selectFromResult: ({ data, isSuccess, ...rest }) => {
      if (isSuccess) {
        // Use a Map to ensure uniqueness based on category
        const categoryMap = new Map();

        data.forEach((item) => {
          if (!categoryMap.has(item.category)) {
            categoryMap.set(item.category, {
              category: item.category,
              id: item.id,
            });
          }
        });

        const categories = Array.from(categoryMap.values());

        return { data, categories, isSuccess, ...rest };
      }
      return { data, categories: [], isSuccess, ...rest };
    },
  });

  return (
    <section className="flex flex-col gap-24">
      <Banner />

      <Container>
        <CategoryVerticalBar categories={categories} isLoading={isLoading} />
        <Products products={products} isLoading={isLoading} />
      </Container>
    </section>
  );
};

export default Home;
