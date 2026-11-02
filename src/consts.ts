export const SITE = {
  title: 'youngdong.dev',
  url: 'https://youngdong.dev',
  // 화면에는 보이지 않고 검색 결과·공유 미리보기에만 쓰인다
  description: 'LLM, AI 에이전트, 지식 관리에 대해 해 보고 알게 된 것을 적는 블로그',
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
