import Image from "next/image";
import antoniGaudiProfilePicture from "../../public/images/antoni-gaudi-1878-square.png";

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="relative clear-both flex min-h-[100vh] w-full items-center justify-center">
          <div className="home_content flex items-center">
            <div className="gaudi relative min-h-[300px] min-w-[300px] rounded-full">
              <Image
                src={antoniGaudiProfilePicture}
                alt="Antoni Gaudi"
                priority
                style={{ width: "100%", height: "auto" }}
                className="image-morph absolute inset-0"
              />
            </div>
            <div className="details ml-[80px]">
              <div className="relative mb-3 h-[150px] w-full">
                <Image
                  src="/images/signature_antoni_gaudi.svg"
                  alt="Antoni Gaudi Signiture"
                  fill
                  priority
                  style={{ objectFit: "contain" }}
                />
              </div>
              <p className="mb-[25px] max-w-[450px] text-center font-medium">
                &quot;There are no straight lines or sharp corners in nature.
                Therefore, buildings must have no straight lines or sharp
                corners.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
