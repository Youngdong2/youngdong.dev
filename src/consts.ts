export const SITE = {
  title: '김영동',
  url: 'https://youngdong.dev',
  description: 'AI 에이전트를 만드는 엔지니어 김영동의 블로그. 일하면서 겪은 문제와 읽고 생각한 것을 적습니다.',
  author: '김영동',
  links: {
    github: 'https://github.com/Youngdong2',
    linkedin: '',
  },
};

export const KINDS = {
  tech: '기술',
  retro: '회고',
  memo: '메모',
} as const;

export type Kind = keyof typeof KINDS;
