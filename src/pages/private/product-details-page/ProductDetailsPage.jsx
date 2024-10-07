// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const ProductDetailsPage = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch(`https://fakestoreapi.com/products/${id}`)
//       .then((res) => res.json())
//       .then((data) => setProduct(data))
//       .catch((err) => console.error("Failed to fetch product :", err));
//   }, [id]);

//   if (!product) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <span className="loading loading-bars loading-lg"></span>
//       </div>
//     );
//   }

//   return (
//     <div className=" card min-h-screen  max-w-6xl mx-auto bg-base-200 flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-12">
//       <figure className="w-48 h-48 my-6 px-2 ">
//         <img
//           src={product.image}
//           alt={product.title}
//           className="rounded-lg shadow-lg w-full"
//         />
//       </figure>
//       <div className="card-body">
//         <h2 className="card-title">{product.title}</h2>
//         <p>
//           {product.description.length > 90
//             ? product.description.slice(0, 90) + "..."
//             : product.description}
//         </p>
//         <p className="text-2xl font-semibold text-primary">
//           ${product.price.toFixed(2)}
//         </p>
//         <div>
//           <h3 className="text-xl font-bold">Category:</h3>
//           <p className="capitalize">{product.category}</p>
//         </div>

//         <div className="card-actions justify-center">
//           <button className="btn btn-primary">Add to Cart</button>
//           <button className="btn btn-outline" onClick={() => navigate(-1)}>
//             Back to Products
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetailsPage;

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Failed to fetch product:", err));
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div className=" card  min-h-screen max-w-6xl mx-auto bg-base-200 flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-12">
      <div className="w-48 h-48 my-6 px-2 ">
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: product.title,
              isFluidWidth: true,
              src: product.image,
            },
            largeImage: {
              src: product.image,
              width: 1200,
              height: 1800,
            },
          }}
        />
      </div>

      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p>
          {product.description.length > 90
            ? product.description.slice(0, 90) + "..."
            : product.description}
        </p>
        <p className="text-2xl font-semibold text-primary">
          ${product.price.toFixed(2)}
        </p>
        <div>
          <h3 className="text-xl font-bold">Category:</h3>
          <p className="capitalize">{product.category}</p>
        </div>

        <div className="card-actions justify-center">
          <button className="btn btn-primary">Add to Cart</button>
          <button className="btn btn-outline" onClick={() => navigate(-1)}>
            Back to Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
