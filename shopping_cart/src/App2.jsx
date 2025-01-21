import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App2({}) {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProductList />,
    },
    {
      path: "/checkout",
      element: <Checkout />,
    },
    {
      path: "/product/:id",
      element: <ProductDetail />,
      loader: async ({ params }) => {
        const id = params.id;
        return {
          id: id,
        };
      },
    },
    {
      path: "/create",
      element: <CreateProduct />,
      action: async ({ request }) => {
        const formData = await request.formData();
        const name = formData.get("name");
        const price = formData.get("price");
        const quantity = formData.get("quantity");

        return {
          message: name + price + quantity,
        };
      },
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
export default App2;
