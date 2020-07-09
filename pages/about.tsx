import Markdown from "@/components/Markdown";
import Layout from "@/components/Layout";
import Profile from "@/components/Profile";
import Intro from "@/components/Profile/components/Intro";
import Icon from "@/components/Icon";
import resume from "@/public/markov_iakov_resume.yml";
import { NextPage } from "next";

const links = [
  {
    href: "/markov_iakov_resume.yml",
    title: "Download resume as YML",
    el: <Icon icon="document-file-yml" />,
  },
  {
    href: "/markov_iakov_resume.pdf",
    title: "Download resume as PDF",
    el: <Icon icon="document-file-pdf" />,
  },
];

const AboutPage: NextPage = () => {
  return (
    <Layout>
      <Profile profile={resume}>
        <Intro title="About me" links={links}>
          <Markdown source={resume.about} />
        </Intro>
      </Profile>
    </Layout>
  );
};

export default AboutPage;
