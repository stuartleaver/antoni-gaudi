import { PageHeader } from "@/components/page-header";
import Image from "next/image";
import styles from "../buildings.module.css";
import casaMila from "../../../../../public/images/architecture/casa-mila.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Antoni Gaudí - Casa Milà (La Pedrera)",
};

export default function Page() {
  return (
    <div>
      <div className="container">
        <div
          className={`${styles.about} float-left clear-both h-auto w-full px-0 py-[100px]`}
        >
          <PageHeader title="Architecture" subTitle="Casa Milà (La Pedrera)" />
          <div className="relative float-left clear-both mb-[35px] h-auto w-full">
            <Image
              src={casaMila}
              alt="casa-mila"
              priority
              style={{ width: "100%", height: "auto" }}
              className="min-w-full"
            />
          </div>
          <div className="float-left clear-both mb-[30px] h-auto w-full border-b border-solid border-[#DFDFDF] pb-[31px]">
            <p className="mb-[11px]">
              Casa Milà, popularly known as La Pedrera (&quot;the stone
              quarry&quot;) in reference to its unconventional rough-hewn
              appearance, is a Modernista building in Barcelona, Catalonia,
              Spain. It was the last private residence designed by architect
              Antoni Gaudí and was built between 1906 and 1912.
            </p>
            <p className="mb-[11px]">
              The building was commissioned in 1906 by Pere Milà and his wife
              Roser Segimon. At the time, it was controversial because of its
              undulating stone facade, twisting wrought iron balconies, and
              design by Josep Maria Jujol. Several structural innovations
              include a self-supporting stone façade, and a free-plan floor,
              underground garage and the spectacular terrace on the roof.
            </p>
            <p className="mb-[11px]">
              In 1984, it was declared a World Heritage Site by UNESCO. Since
              2013 it has been the headquarters of the Fundació Catalunya La
              Pedrera, which manages visits to the building, exhibitions and
              other cultural and educational activities at Casa Milà.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
