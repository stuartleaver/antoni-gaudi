import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import styles from "./page.module.css";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Antoni Gaudí - Architecture",
};

const buildings: Building[] = [
  {
    name: "Sagrada Familia",
    image: "sagrada-familia.jpg",
    slug: "sagrada-familia",
  },
  {
    name: "Casa Batlló",
    image: "casa-batllo.jpg",
    slug: "casa-batllo",
  },
  {
    name: "Casa Milà (La Pedrera)",
    image: "casa-mila.jpg",
    slug: "casa-mila",
  },
];

export default function Page() {
  return (
    <div id="architecture">
      <div className="container">
        <div
          className={`${styles.architecture}  float-left clear-both h-auto w-full px-0 pb-[45px] pt-[100px]`}
        >
          <PageHeader title="Architecture" subTitle="Buildings" />
          <ul className="ml-[-50px] list-none">
            {buildings.map((building: Building) => {
              return (
                <li
                  key={building.name}
                  className="float-left mb-[50px] w-1/2 pl-[50px]"
                >
                  <div
                    className={`${styles.list_inner} relative float-left clear-both h-auto w-full`}
                  >
                    <div className={`${styles.image} relative overflow-hidden`}>
                      <Image
                        src="/images/thumbs/40-25.jpg"
                        alt="thumb"
                        width={40}
                        height={25}
                        className="min-w-full opacity-0"
                      />
                      <Image
                        src={`/images/architecture/${building.image}`}
                        alt="Sagrada Familia"
                        priority
                        fill
                        className={`${styles.main} absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-300`}
                      />
                      <a
                        className="full_link"
                        href={`/architecture/${building.slug}`}
                      ></a>
                    </div>
                    <div
                      className={`${styles.details} float-left w-full bg-white px-[40px] pb-[25px] pt-[30px] transition-all duration-300`}
                    >
                      <h3 className="title mb-[10px] leading-[1.4]">
                        <Link
                          href={`/architecture/${building.slug}`}
                          className={`inline-block text-[18px] font-semibold text-black ${styles.transition_all} ${styles.duration_300} hover:text-black`}
                        >
                          {building.name}
                        </Link>
                      </h3>
                      <div className={`${styles.read_more}`}>
                        <Link href={`/architecture/${building.slug}`}>
                          <span>Read More</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
