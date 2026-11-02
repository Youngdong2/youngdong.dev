export const SITE = {
  title: 'youngdong.dev',
  url: 'https://youngdong.dev',
  description: 'AI 에이전트를 만드는 엔지니어의 블로그. 일하면서 겪은 문제와 결정, 읽고 생각한 것을 적어요.',
  tagline: 'AI 에이전트를 만들며 겪은 문제와 생각을 적어요',
  footnote: 'AI 에이전트를 만드는 엔지니어의 블로그',
  links: {
    github: 'https://github.com/Youngdong2',
    linkedin: '',
    // 봇이 그대로 긁어가지 않도록 나눠 두고 브라우저에서 합친다
    email: { user: 'nasa7003', domain: 'gmail.com' },
  },
  // 댓글: 코드 저장소와 분리한 공개 저장소의 Discussions에 저장한다. 값은 https://giscus.app 에서 확인
  giscus: {
    repo: 'Youngdong2/blog-comments',
    repoId: 'R_kgDOVfl8vA',
    category: 'Comments',
    categoryId: 'DIC_kwDOVfl8vM4DKLuR',
  },
};

export const KINDS = {
  tech: '기술',
  retro: '회고',
  memo: '메모',
} as const;

export type Kind = keyof typeof KINDS;
