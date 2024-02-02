import Image from 'next/image';

export default function SegradaFamiliaLogo() {
  return (
    <div>
      <Image
        src="/images/la-sagrada-familia.svg"
        alt="Segrada Familia"
        width={75}
        height={75}
      />
    </div>
  );
}