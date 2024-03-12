import { PageHeader } from "@/components/page-header";
import Image from "next/image";
import styles from "../buildings.module.css";
import sagradaFamilia from "../../../../../public/images/architecture/sagrada-familia.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Antoni Gaudí - Sagrada Familia",
};

export default function Page() {
  return (
    <div>
      <div className="container">
        <div
          className={`${styles.about} float-left clear-both h-auto w-full px-0 py-[100px]`}
        >
          <PageHeader title="Architecture" subTitle="Sagrada Familia" />
          <div className="relative float-left clear-both mb-[35px] h-auto w-full">
            <Image
              src={sagradaFamilia}
              alt="Sagrada Familia"
              priority
              style={{ width: "100%", height: "auto" }}
              className="min-w-full"
            />
          </div>
          <div className="float-left clear-both mb-[30px] h-auto w-full border-b border-solid border-[#DFDFDF] pb-[31px]">
            <p className="mb-[11px]">
              The Basílica i Temple Expiatori de la Sagrada Família, otherwise
              known as Sagrada Família, is a church under construction in the
              Eixample district of Barcelona, Catalonia, Spain. It is the
              largest unfinished Catholic church in the world. Designed by
              Catalan architect Antoni Gaudí (1852–1926), his work on Sagrada
              Família is part of a UNESCO World Heritage Site. On 7 November
              2010, Pope Benedict XVI consecrated the church and proclaimed it a
              minor basilica.
            </p>
            <p className="mb-[11px]">
              On 19 March 1882, construction of the Sagrada Família began under
              architect Francisco de Paula del Villar. In 1883, when Villar
              resigned, Gaudí took over as chief architect, transforming the
              project with his architectural and engineering style, combining
              Gothic and curvilinear Art Nouveau forms. Gaudí devoted the
              remainder of his life to the project, and he is buried in the
              church&apos;s crypt. At the time of his death in 1926, less than a
              quarter of the project was complete.
            </p>
            <p className="mb-[11px]">
              Relying solely on private donations, the Sagrada Família&apos;s
              construction progressed slowly and was interrupted by the Spanish
              Civil War. In July 1936, anarchists from the FAI set fire to the
              crypt and broke their way into the workshop, partially destroying
              Gaudí&apos;s original plans. In 1939, Francesc de Paula Quintana
              took over site management, which was able to go on due to the
              material that was saved from Gaudí&apos;s workshop and that was
              reconstructed from published plans and photographs. Construction
              resumed to intermittent progress in the 1950s. Advancements in
              technologies such as computer-aided design and computerised
              numerical control (CNC) have since enabled faster progress and
              construction passed the midpoint in 2010. However, some of the
              project&apos;s greatest challenges remain, including the
              construction of five more spires, each symbolising an important
              Biblical figure in the New Testament. It was anticipated that the
              building would be completed by 2026, the centenary of Gaudí&apos;s
              death, but this has now been delayed due to the COVID-19 pandemic.
              Some aspects of it may only be finished by 2040.
            </p>
            <p className="mb-[11px]">
              Describing the Sagrada Família, art critic Rainer Zerbst said
              &quot;it is probably impossible to find a church building anything
              like it in the entire history of art&quot;, and Paul Goldberger
              describes it as &quot;the most extraordinary personal
              interpretation of Gothic architecture since the Middle Ages&quot;.
              The basilica is not the cathedral church of the Archdiocese of
              Barcelona, as that title belongs to the Cathedral of the Holy
              Cross and Saint Eulalia (Barcelona Cathedral).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
