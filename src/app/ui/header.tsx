import SegradaFamiliaLogo from "./components/segrada-familia-logo";

export default function Header() {
  return (
    <header className="bg-gray-100 text-center">
      <div className="flex">
        <div className="h-[75px] w-[75px]"></div>
        <h1 className="flex w-full flex-1 items-center justify-center text-center text-3xl font-bold">
          Antoni Gaudi
        </h1>
        <div className="w-[75px]"></div>
      </div>
    </header>
  );
}
