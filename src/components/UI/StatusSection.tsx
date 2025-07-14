export default function StatusSection() {
  return (
    <div className="w-full flex items-center justify-center pt-[43px] pb-[49px] bg-primary/34">
      <div className="flex gap-[190px]">
        <div className="flex flex-col items-center">
          <div className="font-poppins text-[79px] text-black font-medium">
            90%
          </div>
          <div className="text-center font-poppins text-[32px] text-black/50 font-normal">
            Patient <br />
            satisfaction
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="font-poppins text-[79px] text-black font-medium">
            100+
          </div>
          <div className="text-center font-poppins text-[32px] text-black/50 font-normal">
            Patient on
            <br />
            platform
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="font-poppins text-[79px] text-black font-medium">
            5+
          </div>
          <div className="text-center font-poppins text-[32px] text-black/50 font-normal">
            Years of <br />
            experience
          </div>
        </div>
      </div>
    </div>
  );
}
