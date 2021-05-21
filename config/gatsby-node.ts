// import { CreatePagesArgs, GatsbyNode } from "gatsby";
// import path from "path";

// export const createPages = async ({ graphql, actions }: CreatePagesArgs) => {
//   const { createPage } = actions;

//   const pageTemplate = path.resolve("./src/templates/page.tsx");

//   const { data, errors } = await graphql<any>(`
//     query Pages {
//       pages: allContentfulPage {
//         nodes {
//           id
//           title
//           path
//         }
//       }
//     }
//   `);

//   if (errors) {
//     console.error(errors);
//     throw errors;
//   }

//   const pages = data?.pages?.nodes || [];

//   for (const page of pages) {
//     createPage({
//       path: page.path,
//       component: pageTemplate,
//       context: {
//         id: page.id
//       }
//     });
//   }
// };
