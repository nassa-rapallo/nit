import { NassaContainer } from "./nassa-container.components";
import { Tagline } from "./tagline.component";

export const Hero: React.FC = () => {
  return (
    <div className="w-full h-screen p-2 md:p-3 lg:p-12 relative bg-nassa-main">
      <section className="relative flex flex-col p-8 max-w-full h-full rounded-huge text-white ">
        <NassaContainer />
        <Tagline />
      </section>
    </div>
  );
};
