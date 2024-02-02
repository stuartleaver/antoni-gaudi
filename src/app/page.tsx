import Image from "next/image";
import Header from "./ui/header";
import RootLayout from "./layout";
import antoniGaudiProfilePicture from "../../public/images/antoni-gaudi-1878.jpg";

export default function Home() {
  return (
    <RootLayout>
      <Header></Header>
      <main className="mx-auto max-w-[968px] px-5">
        <div className="mt-28 flex flex-col md:flex-row">
          <div className="image-morph mx-auto mb-8 h-[300px] w-[300px] overflow-hidden rounded-full md:mb-0">
            <Image
              src={antoniGaudiProfilePicture}
              alt="Antoni Gaudi"
              priority
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="flex flex-col items-center justify-center md:w-1/2">
            <div className="relative mb-3 h-[150px] w-full">
              <Image
                src="/images/signature_antoni_gaudi.svg"
                alt="Antoni Gaudi Signiture"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="items-center justify-center px-3">
              <blockquote className="text-center italic text-gray-500">
                <p>
                  &quot;There are no straight lines or sharp corners in nature.
                  Therefore, buildings must have no straight lines or sharp
                  corners.&quot;
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </main>
    </RootLayout>
  );
}