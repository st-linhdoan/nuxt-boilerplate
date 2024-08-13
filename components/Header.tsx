import { FunctionalComponent } from "vue";
import { RouterLink } from 'vue-router';

const Header: FunctionalComponent = () => {
  return (
    <nav>
      <ul>
        <li>
          <RouterLink to="/posts"> Posts</RouterLink>
        </li>
        <li>
          <RouterLink to="/posts/1"> Posts detail</RouterLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
