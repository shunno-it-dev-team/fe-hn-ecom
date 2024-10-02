export const publicNavMenuItems = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Categories",
    to: "/categories",
    subMenuItems: [
      {
        name: "Category 1",
        to: "/categories/category-1",
        subMenuItems: [
          {
            name: "Subcategory 1",
            to: "/categories/category-1/subcategory-1",
          },
          {
            name: "Subcategory 2",
            to: "/categories/category-1/subcategory-2",
          },
        ],
      },
      {
        name: "Category 2",
        to: "/categories/category-2",
      },
      {
        name: "Category 3",
        to: "/categories/category-3",
      },
    ],
  },
  {
    name: "About",
    to: "/about",
  },
  {
    name: "Contact",
    to: "/contact",
  },
];
