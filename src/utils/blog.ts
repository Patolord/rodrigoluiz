import type { CollectionEntry } from "astro:content";

/**
 * Filters blog posts by locale
 * @param posts - Array of blog posts
 * @param targetLocale - Target locale to filter by
 * @returns Filtered posts array
 */
export function filterPostsByLocale(
  posts: CollectionEntry<"blog">[],
  targetLocale: string
) {
  return posts.filter((post) => {
    const postLocale = post.data.locale || post.id.split("/")[0];
    return postLocale === targetLocale;
  });
}

/**
 * Generates static paths for blog posts by locale
 * @param posts - Array of blog posts
 * @param targetLocale - Target locale to filter by
 * @returns Array of static path objects
 */
export function generateBlogStaticPaths(
  posts: CollectionEntry<"blog">[],
  targetLocale: string
) {
  const filteredPosts = filterPostsByLocale(posts, targetLocale);

  return filteredPosts.map((post) => ({
    params: { slug: post.id.split("/")[1] || post.id },
    props: post,
  }));
}
