import { TeamUsSection } from "@/views/TeamSection";
import LandingLayout from "../layout";
import { sanityFetch } from "@/sanity/lib/client";
import { TEAM_SECTION_QUERY } from "@/sanity/query";


async function TeamPage() {
	const teamData = await sanityFetch({
		query:TEAM_SECTION_QUERY
	})
	console.log("team data is",teamData)
	return (
		<LandingLayout>
			<TeamUsSection props={teamData}/>
		</LandingLayout>
	);
}
export default TeamPage;
