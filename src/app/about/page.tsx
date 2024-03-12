import Image from "next/image";
import styles from "./page.module.css";
import antoniGaudi from "../../../public/images/gaudi.jpg";
import { PageHeader } from "@/components/page-header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Antoni Gaudí - About",
};

export default function Page() {
  return (
    <div id="about">
      <div className="container">
        <div
          className={`${styles.about} float-left clear-both h-auto w-full px-0 py-[100px]`}
        >
          <PageHeader title="About" subTitle="Antoni Gaudí" />
          <div className="relative float-left clear-both mb-[35px] h-auto w-full">
            <Image
              src={antoniGaudi}
              alt="Antoni Gaudi"
              priority
              style={{ width: "100%", height: "auto" }}
              className="min-w-full"
            />
          </div>
          <div className="float-left clear-both mb-[30px] h-auto w-full border-b border-solid border-[#DFDFDF] pb-[20px]">
            <h3 className="text-[22px] font-bold">Antoni Gaudí</h3>
            <span>Architect and Designer</span>
          </div>
          <div
            className={`${styles.short_info} float-left clear-both mb-[30px] flex h-auto w-full border-b border-solid border-[#DFDFDF] pb-[30px]`}
          >
            <div className={`${styles.left} w-1/2 pr-[50px]`}>
              <div className="float-left clear-both h-auto w-full">
                <ul className="list-none">
                  <li className="m-0">
                    <span className="float-left mr-[10px] min-w-[100px] font-bold text-black">
                      Birthday:
                    </span>
                    <span>25 June 1852</span>
                  </li>
                  <li className="m-0">
                    <span className="float-left mr-[10px] min-w-[100px] font-bold text-black">
                      Died:
                    </span>
                    <span>10 June 1926 (aged 73)</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`${styles.right} w-1/2 pr-[50px]`}>
              <div className="float-left clear-both h-auto w-full">
                <ul className="list-none">
                  <li className="m-0">
                    <span className="float-left mr-[10px] min-w-[100px] font-bold text-black">
                      Buildings:
                    </span>
                    <span>Sagrada Família - Casa Milà - Casa Batlló</span>
                  </li>
                  <li className="m-0">
                    <span className="float-left mr-[10px] min-w-[100px] font-bold text-black">
                      Projects:
                    </span>
                    <span>Park Güell - Church of Colònia Güell</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="float-left clear-both mb-[30px] h-auto w-full border-b border-solid border-[#DFDFDF] pb-[31px]">
            <p className="mb-[11px]">
              Antoni Gaud&rsquo;i Cornet was a Catalan architect and designer
              from Spain, known as the greatest exponent of Catalan Modernism.
              Gaud&rsquo;i&rsquo;s works have a highly individualized, sui
              generis style. Most are located in Barcelona, including his main
              work, the church of the Sagrada Fam&iacute;lia.
            </p>
            <p className="mb-[11px]">
              Gaud&rsquo;&rsquo;s work was influenced by his passions in life:
              architecture, nature, and religion. He considered every detail of
              his creations which he integrated into his architecture crafts
              such as ceramics, stained glass, wrought ironwork forging, and
              carpentry. He also introduced new techniques in the treatment of
              materials, such as trencadís which used waste ceramic pieces.
            </p>
            <p className="mb-[11px]">
              Under the influence of neo-Gothic art and Oriental techniques,
              Gaudí became part of the Modernista movement which was reaching
              its peak in the late 19th and early 20th centuries. His work
              transcended mainstream Modernisme, culminating in an organic style
              inspired by natural forms. Gaudí rarely drew detailed plans of his
              works, instead preferring to create them as three-dimensional
              scale models and moulding the details as he conceived them.
            </p>
            <p className="mb-[11px]">
              Gaud&rsquo;&rsquo;s work enjoys global popularity and continuing
              admiration and study by architects. His masterpiece, the
              still-incomplete Sagrada Família, is the most-visited monument in
              Spain. Between 1984 and 2005, seven of his works were declared
              World Heritage Sites by UNESCO.
            </p>
            <p className="mb-[11px]">
              Gaud&rsquo;&rsquo;s Catholic faith intensified during his life and
              religious images appear in many of his works. This earned him the
              nickname &quot;God&rsquo;s Architect&quot;. His cause for
              canonization was opened in the Archdiocese of Barcelona in 2003.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
