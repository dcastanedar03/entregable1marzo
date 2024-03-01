import { FunctionComponent } from "preact";

type MenuProps = {
  selected: "List" | "Add";
};
const Menu: FunctionComponent<MenuProps> = ({ selected }) => {
  return (
    <div class="menu">
      <a href="/" class={selected === "List" ? "selected" : ""}>
        List Post 
      </a>
      <a>-----</a>
      <a href="/add" class={selected === "Add" ? "selected" : ""}>
        Add new Post
      </a>
    </div>
  );
};

export default Menu;