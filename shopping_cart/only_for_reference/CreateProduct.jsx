import { Form, useActionData } from "react-router-dom";

function CreateProduct({}) {
  const actionData = useActionData();
  return (
    <>
      <Form action="/create" method="post">
        <label>
          名稱:
          <input type="text" name="name" />
        </label>
        <label>
          價格:
          <input type="text" name="price" />
        </label>
        <label>
          數量:
          <input type="text" name="quantity" />
        </label>
        <button type="submit">新增</button>
      </Form>
      <div>{actionData?.message}</div>
    </>
  );
}
export default CreateProduct;
