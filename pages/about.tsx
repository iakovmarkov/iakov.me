import React from "react";
import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <h1>About me</h1>
      <p>
        My name is Iakov Markov. I'm twenty-something year old russian immigrant
        living in Prague. I call myself software engineer - I design and build
        web applications for a living. Right now I work at Ataccama, but I'm
        also avaiable for an occasional freelance job.
      </p>
      <p>
        My main area of expertise is front-end web development, namely React. My
        daily tools include Redux, Immutable.js, Webpack &amp; Gulp. I've got my
        hands on pretty much everything in the web development world though,
        from WordPress &amp; Backbone.js to Elm &amp; RxJS.
      </p>
      <p>In my free time I like to lift weights, play guitar and travel.</p>
    </Layout>
  );
};

export default About;
