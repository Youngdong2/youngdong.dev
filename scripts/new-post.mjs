// 사용법: npm run new -- "글 제목" [tech|retro|memo]
import { writeFileSync, existsSync } from 'node:fs';

const [title = '새 글', kind = 'tech'] = process.argv.slice(2);
const today = new Date().toISOString().slice(0, 10);
const slug = `${today}-${title.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/g, '')}`;
const path = `src/content/posts/${slug}.md`;
if (existsSync(path)) { console.error(`이미 있음: ${path}`); process.exit(1); }

const techBody = `
## 무엇이 문제였나

## 왜 기존 방식으로는 안 됐나

## 다시 정의한 문제

## 고려한 선택지와 고르지 않은 이유

## 해결한 방법

## 결과

## 한계와 다음 단계
`;

writeFileSync(path, `---
title: ${title}
date: ${today}
kind: ${kind}
description: 
# aiSummary:
#   - 
draft: true
---
${kind === 'tech' ? techBody : '\n'}`);
console.log(`만듦: ${path}`);
