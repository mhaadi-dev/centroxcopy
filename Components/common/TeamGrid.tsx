import Image from "next/image"
import LinkedIn from "@/assets/linkedin.svg";


const TeamGrid=({filteredData}:any)=>{
    return  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 lg:gap-10 3xl:gap-20 w-full mx-auto text-white">
    {filteredData.map((el: any, index: number) => (
      <div
        key={index}
        className="flex flex-col justify-center items-center p-4 rounded-xl"
        style={{
          border: "1px solid rgba(3, 34, 182, 0.20)",
          background:
            "radial-gradient(51.03% 100.46% at 101.38% 100%, rgba(3, 34, 182, 0.22) 0%, rgba(6, 119, 230, 0.00) 100%), rgba(0, 0, 0, 0.20)",
          boxShadow: "0px 0px 16px 0px rgba(255, 255, 255, 0.10) inset",
          backdropFilter: "blur(18px)",
        }}
      >
        {el.img && (
          <Image
            src={el.img}
            alt={el?.alt || "Team Member"}
            objectFit="cover"
            width={341}
            height={341}
            // loading="lazy"
            className="rounded-xl object-cover aspect-square"
            // placeholder="blur"
          />
        )}
        <div className="w-full">
          <p className="text-sm md:text-lg font-semibold mt-4 text-left tracking-wider w-full">
            {el.name}
          </p>
          <div className="flex justify-between items-left w-full mt-1">
            <p className="font-semibold text-xs md:text-sm text-blue-azure">
              {el.designation}
            </p>
            {el.linkedINUrl && (
              <a href={el.linkedINUrl} target="_blank" rel="noreferrer">
                <Image src={LinkedIn} className="w-5" alt="LinkedIn Profile" />
              </a>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
  }
  export default TeamGrid