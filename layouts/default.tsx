import { FunctionalComponent } from "vue";
import Header from "~/components/Header";

const Default: FunctionalComponent = (_props, { slots }) => {
  return (
    <div>
      <Header />
      <div> 
        {slots.default ? slots.default() : <></>}
      </div>
    </div>
  );
};

export default Default;
