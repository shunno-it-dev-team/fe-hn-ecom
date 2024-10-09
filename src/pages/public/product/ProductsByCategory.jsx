import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../../../redux/api/services/product.service";
import Products from "../../private/home-page/sub-components/Products";
import CustomDrawer from "../../../components/common/CustomDrawer";
import { useEffect } from "react";
import ProductFilterSidebar from "./ProductFilterSidebar";

const ProductsByCategory = () => {
  const { category } = useParams();

  const { data: products, isLoading } = useGetProductQuery(undefined, {
    selectFromResult: ({ data, isSuccess, ...rest }) => {
      return {
        data: data?.filter((item) => item.category === category),
        isSuccess,
        ...rest,
      };
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl text-secondary relative overflow-hidden font-semibold bg-base-100 py-3 px-5 rounded-b-xl ">
        Products in {category}
        <span className="absolute h-full w-2  bg-secondary top-0 left-0"></span>
      </h1>

      <CustomDrawer
        {...{
          title: `Products in ${category}`,
          description: `Showing all products in ${category} category`,

          sidebarComponent: <ProductFilterSidebar category={category} />,
        }}
      >
        <Products products={products} isLoading={isLoading} />
      </CustomDrawer>
    </div>
  );
};

export default ProductsByCategory;
