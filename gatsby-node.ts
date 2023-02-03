import path, { resolve } from "path";
import { GatsbyNode } from "gatsby";

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
}) => {
  const { createPage } = actions;

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
};
