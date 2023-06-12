import React from "react";
import { graphql } from "gatsby";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";
import Layout from "@components/Layout";
import HeroBanner from "@sections/HeroBanner";
import Seo from "@components/Seo";
import { SliceZone } from '@prismicio/react'


const HomepageTemplate = ({ data }) => {
  const homepage = data.prismicHome;
  const alternateLanguages = homepage.alternate_languages || [];
  const { lang, type, url } = homepage || {};

  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  };

  return <Layout activeDocMeta={activeDoc}>
    <HeroBanner data={data}/>
    <SliceZone slices={homepage.data.body}  />
  </Layout>;
};

export const query = graphql`
  query homepageQuery($lang: String) {
    prismicHome(lang: { eq: $lang }) {
      alternate_languages {
        uid
        type
        lang
      }
      lang
      url
      type
      data {
        body {
          ... on PrismicHomeDataBodyAlternateGrid {
            id
            slice_label
            slice_type
          }
        }
      }
      data {
        banner_title {
          text
        }
        banner_widgets {
          widget_description {
            text
          }
          widget_icon {
            gatsbyImageData
          }
          widget_title {
            text
          }
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Home" />


export default HomepageTemplate;
