import { FunctionComponent } from "preact";

const AddForm: FunctionComponent = () => {
  return (
    <form class="AddForm" action="/add" method="post">
      <h1>Add Post</h1>
      <p><input type="text" name="title" placeholder="title" /></p>
      <p><input type="text" name="athor" placeholder="athor" /></p>
      <p><input type="text" name="content" placeholder="content" /></p>
      <button type="submit">Publish</button>
    </form>
  );
};

export default AddForm;