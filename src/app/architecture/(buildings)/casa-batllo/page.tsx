import { PageHeader } from "@/components/page-header";
import Image from "next/image";
import styles from "../buildings.module.css";
import casaBatllo from "../../../../../public/images/architecture/casa-batllo.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Antoni Gaudí - Casa Batlló",
};

export default function Page() {
  return (
    <div>
      <div className="container">
        <div
          className={`${styles.about} float-left clear-both h-auto w-full px-0 py-[100px]`}
        >
          <PageHeader title="Architecture" subTitle="Casa Batlló" />
          <div className="relative float-left clear-both mb-[35px] h-auto w-full">
            <Image
              src={casaBatllo}
              alt="casa-batllo"
              priority
              style={{ width: "100%", height: "auto" }}
              className="min-w-full"
            />
          </div>
          <div className="float-left clear-both mb-[30px] h-auto w-full border-b border-solid border-[#DFDFDF] pb-[31px]">
            <p className="mb-[11px]">
              Casa Batlló is a building in the center of Barcelona, Spain. It
              was designed by Antoni Gaudí, and is considered one of his
              masterpieces. A remodel of a previously built house, it was
              redesigned in 1904 by Gaudí and has been refurbished several times
              after that. Gaudí&apos;s assistants Domènec Sugrañes i Gras, Josep
              Canaleta and Joan Rubió also contributed to the renovation
              project.
            </p>
            <p className="mb-[11px]">
              The local name for the building is Casa dels ossos (House of
              Bones), as it has a visceral, skeletal organic quality. It is
              located on the Passeig de Gràcia in the Eixample district, and
              forms part of a row of houses known as the Illa de la Discòrdia
              (or Mansana de la Discòrdia, the &quot;Block of Discord&quot;),
              which consists of four buildings by noted Modernista architects of
              Barcelona.
            </p>
            <p className="mb-[11px]">
              Like everything Gaudí designed, Casa Batlló is only identifiable
              as Modernisme in the broadest sense. The ground floor, in
              particular, has unusual tracery, irregular oval windows and
              flowing sculpted stone work. There are few straight lines, and
              much of the façade is decorated with a colorful mosaic made of
              broken ceramic tiles (trencadís). The roof is arched and was
              likened to the back of a dragon or dinosaur. A common theory about
              the building is that the rounded feature to the left of centre,
              terminating at the top in a turret and cross, represents the lance
              of Saint George (patron saint of Catalonia, Gaudí&apos;s home),
              which has been plunged into the back of the dragon.
            </p>
            <p className="mb-[11px]">
              In 2005, Casa Batlló became an UNESCO World Heritage Site among
              the other Works of Antoni Gaudí, and is visited by people from
              around the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
