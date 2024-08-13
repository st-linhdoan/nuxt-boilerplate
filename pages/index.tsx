import { FunctionalComponent } from 'vue';
import HelloWorld from '~/components/HelloWorld';

const HomePage: FunctionalComponent = () => {
  return (
    <div>
      <p>This is a HomePage!</p>
      <HelloWorld msg="Home page" />
    </div>
  );
};

export default HomePage;
