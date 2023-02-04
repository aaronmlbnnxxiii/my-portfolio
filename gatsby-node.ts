import path, { resolve } from "path";
import { GatsbyNode } from "gatsby";

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
}) => {
  const { createPage, createSlice } = actions;

  const { data }: any = await graphql(`
    query TypegenPage {
      allPrismicProjectItems {
        nodes {
          id
          lang
          data {
            project_title {
              text
            }
          }
        }
      }
    }
  `);
  data.allPrismicProjectItems.nodes.forEach((page: any) => {
    createPage({
      path: page.data.project_title.text,
      component: resolve(__dirname, "src/templates/test.tsx"),
      context: {
        id: page.id,
        lang: page.lang,
        slug: page.data.project_title.text,
      },
    });
  });

  type SliceType = {
    id: string;
    component: string;
  };

  const slices: SliceType[] = [
    {
      id: `header`,
      component: path.resolve(`./src/shared/components/Header.tsx`),
    },
    {
      id: `footer`,
      component: path.resolve(`./src/shared/components/Footer.tsx`),
    },
  ];

  slices.forEach((slice: SliceType) => {
    createSlice({
      id: slice.id,
      component: slice.component,
    });
  });
};
