import Markdown from "@/components/Markdown";
import Profile from "@/components/Profile";
import Intro from "@/components/Profile/components/Intro";
import resume from "@/public/markov_iakov_resume.yml";
import { NextPage } from "next";

const introContent = `
${resume.intro}

* Date of birth: ${resume.dob}
* Email: <${resume.email}>
* Website: <${resume.website}>
* Location: ${resume.location}
`;

const ResumePage: NextPage = () => {
  return (
    <Profile profile={resume}>
      <Intro title={resume.name}>
        <Markdown source={introContent} short />
      </Intro>
    </Profile>
  );
};

export default ResumePage;
