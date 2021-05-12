// import { CreatePagesArgs, GatsbyNode } from "gatsby";
// import path from 'path';

// type BlogPostsQuery = {
//   allContentfulBlogPost?: {
//     edges?: {
//       node: {
//         title: string;
//         slug: string;
//       }
//     }[]
//   }
// };

// export const createPages = async ({ graphql, actions }: CreatePagesArgs) => {
//   const { createPage } = actions;

//   const blogPost = path.resolve("./src/templates/blog-post.tsx");

//   const { data, errors } = await graphql<BlogPostsQuery>(`
//     query BlogPosts {
//       allContentfulBlogPost {
//         edges {
//           node {
//             title
//             slug
//           }
//         }
//       }
//     }
//   `);

//   if (errors) {
//     console.error(errors);
//     throw errors;
//   }

//   const posts = data?.allContentfulBlogPost?.edges?.map((edge) => edge.node) || [];

//   for (const post of posts) {
//     createPage({
//       path: `/blog/${post.slug}/`,
//       component: blogPost,
//       context: {
//         slug: post.slug,
//       },
//     });
//   }
// };
