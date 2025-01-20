import IndustryBanner from "@/Components/common/IndustryBanner";
import WebsiteFooter from "@/Components/common/WebsiteFooter";
import { Navbar } from "@/Components/Navbar/navbar";

export default function LandingLayout({children,categoryblogs,paginatedblogs}:{children:React.ReactNode,categoryblogs:React.ReactNode,paginatedblogs:React.ReactNode}) {
    return (
        <>
            <Navbar />
            <div className="bg-[#060606]">{children}</div>
            <div>
            {paginatedblogs}
            </div>
            <div>
             {categoryblogs}
            </div>
            <IndustryBanner
          heading="All the Good Stuff is here"
          description="Read these blogs to get to know more about Centrox."
          btnText="Talk to us"
          isBooking
        />
            <WebsiteFooter />
        </>
    );
}
