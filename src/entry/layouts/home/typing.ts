type BriefItem = {
  title: string;
  description: string;
};

type HomeLocale = {
  heading: string;
  slogan: string;
  contribute: string;
  join: string;
  featured: string;
  highlights: string;
  growth: BriefItem;
  cuttingEdge: BriefItem;
  reputation: BriefItem,
}

export type { HomeLocale };
