import { IconCloud } from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "redux",
  "html5",
  "css3",
  "tailwindcss",
  "nodedotjs",
  "express",
  "nextdotjs",
  "socketdotio",
  "graphql",
  "mysql",
  "prisma",
  "amazonaws",
  "postgresql",
  "redis",
  "mongodb",
  "vercel",
  "docker",
  "git",
  "github",
];

export function IconCloudMobile() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden sm:hidden">
      <IconCloud images={images} />
    </div>
  );
}
