# youngdong.dev

김영동의 개인 기술 블로그. Astro로 만든 정적 사이트이고, Cloudflare Pages로 배포할 예정.

## 현재 상태
- 2026-10-30: 첫 버전. 홈(연도별 목록, 종류 필터), 글 상세(AI 요약), 소개, RSS, sitemap
- 배포 전 (Cloudflare Pages 연결 필요)

## 사용법
```bash
npm install
npm run dev        # http://localhost:4321 (draft 글도 보임)
npm run build      # dist/ 생성 (draft 글 제외)
npm run new -- "글 제목" tech   # 새 글 초안 생성 (tech | retro | memo)
```

## 글 쓰기
- 글은 `src/content/posts/*.md`. 파일 이름이 주소가 됨 (`/posts/<파일이름>/`)
- frontmatter: `title`, `date`, `kind`(tech·retro·memo), `description`, `aiSummary`(선택, 문장 배열), `series`(선택), `draft`
- `draft: true`면 개발 서버에서만 보이고 배포되지 않음
- 작성 가이드: [docs/writing-guide.md](docs/writing-guide.md)

## 문서
- [docs/decisions.md](docs/decisions.md) — 결정 기록
- [docs/writing-guide.md](docs/writing-guide.md) — 글 구조와 체크리스트
