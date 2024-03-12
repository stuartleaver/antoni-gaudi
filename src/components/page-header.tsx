interface Props {
  title: string;
  subTitle: string;
}

export function PageHeader(props: Props) {
  return (
    <div className=" float-left clear-both mb-[62px] h-auto w-full">
      <div className="clear-both flex h-auto w-full items-end justify-between">
        <div>
          <span className="mb-[11px] inline-block bg-[rgba(0,0,0,.04)] px-[10px] py-[4px] text-[12px] font-semibold uppercase tracking-[0px] text-[#333]">
            {props.title}
          </span>
          <h3 className="text-2xl font-extrabold">{props.subTitle}</h3>
        </div>
      </div>
    </div>
  );
}
