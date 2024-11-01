type BriefItem = {
  title: string;
  description: string;
};

type HomeLocale = {
  featured: string;
  highlights: string;
  growth: BriefItem;
  cuttingEdge: BriefItem;
  reputation: BriefItem,
}

export type { HomeLocale };
