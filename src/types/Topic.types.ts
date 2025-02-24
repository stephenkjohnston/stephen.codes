export type Topic = {
  title: string;
  summary: string;
  meta: {
    description: string;
  }
};

export type Topics = Record<string, Topic>;