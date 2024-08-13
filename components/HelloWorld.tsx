import { FunctionalComponent, reactive } from 'vue';

interface HelloWorldProps {
  msg: string;
}

const HelloWorld: FunctionalComponent<HelloWorldProps> = (props) => {
  return (
    <div>
      <h1>{props.msg}</h1>
      <p>This is a functional TSX component in Nuxt 3!</p>
    </div>
  );
};

export default HelloWorld;
