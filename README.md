# youngdong.dev

AI 에이전트를 만드는 엔지니어의 개인 기술 블로그. Astro로 만든 정적 사이트이고, Cloudflare Pages로 배포할 예정.

## 현재 상태
- 2026-10-30: 첫 버전. 홈(연도별 목록, 종류 필터), 글 상세(AI 요약), 소개, RSS, sitemap
- 2026-11-02: 디자인 v6. 최신 글 강조, 왼쪽 필터, 글 목차, 다크 모드, 파비콘 교체. 실명 제거, 소개 페이지 삭제 (결정은 docs/decisions.md)
- 2026-11-02: 기본 기능. 공유 이미지, 코드·링크 복사, 소제목 링크, 이전·다음 글, 수정일, giscus 댓글(값 채우기 전엔 숨김), robots.txt
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
- frontmatter: `title`, `date`, `updated`(선택, 수정일), `kind`(tech·retro·memo), `description`, `aiSummary`(선택, 문장 배열), `series`(선택), `draft`
- `draft: true`면 개발 서버에서만 보이고 배포되지 않음
- 작성 가이드: [docs/writing-guide.md](docs/writing-guide.md)

## 문서
- [docs/decisions.md](docs/decisions.md) — 결정 기록
- [docs/writing-guide.md](docs/writing-guide.md) — 글 구조와 체크리스트
