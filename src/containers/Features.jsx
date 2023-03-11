import Card from "../components/Card";
import { features } from "../data/features";

const Features = () => {
  return (
    <div className="mx-auto max-w-[59rem] px-8">
      <h2 className="sr-only">Features</h2>

      <div className="flex flex-wrap justify-center gap-[4.9375rem] lg:justify-between">
        {features.map((feature, index) => (
          <Card key={index} index={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default Features;
