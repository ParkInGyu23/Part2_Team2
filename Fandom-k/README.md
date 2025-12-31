# 🌟 Fandom-K
팬심을 행동으로 연결하는 **후원 · 투표 기반 팬 커뮤니티 플랫폼**

> 좋아하는 아티스트를 단순히 소비하는 것을 넘어  
> **직접 후원하고 투표하며, 실시간으로 결과를 확인하는 팬 참여형 서비스**

<br>
<img width="550"  alt="Image" src="https://github.com/user-attachments/assets/7a706b88-61fc-4b82-b1b7-f41bc1c31b0d" />
<br>

## 📌 프로젝트 개요
- **일정:** 2025.12.16 ~ 2026.01.3 
- **팀명:** FE 21기 Part2 2팀
- **배포 URL**: https://team2-fandom-k.netlify.app/

<br>

## 📝 주요 기능
- 💰 **크레딧 관리:** 후원, 투표를 하기 위한 필요한 크레딧 충전 및 차감 관리 기능
- 📢 **광고 후원:** 팬들이 아이돌에게 후원을 통해 광고를 올릴 수 있는 기능
- 🗳️ **투표 기능:** 크레딧을 사용하여 '이달의 차트' 순위에 실시간으로 영향을 주는 투표 시스템
- 📊 **이달의 차트:** 성별 탭 구분을 통한 인기 아이돌을 인기 순위 확인 
- ⭐ **관심 아이돌 관리:** 관심 있는 아이돌을 추가하거나 삭제하는 기능
  
<br>

## 👩🏻‍💻 팀원 및 역할 분담

### 🐵 김애란 
- 크레딧 상태 관리 
- 이달의 차트 API(GET) 연동 및 순위 리스트 구현
- 후원을 기다리는 조공 캐러셀 및 API(GET) 연동 

### 🐶 박예성
- 공통 아이돌 프로필 컴포넌트 제작
- 마이페이지 관심 아이돌 관리 기능
- 프로젝트 발표


### 🦁 박인규
- 프로젝트 초기 세팅 및 공통 환경 구성
- 공통 Modal 컴포넌트 구현
- 충전·투표 모달 및 후원 로직 구현
- 프로젝트 발표 자료 제작
  

### 🐰 이지선
- 랜딩 페이지 UI 및 인터랙션 구현
- 공통 Header / Footer 
- 전체 공통 디자인 시스템 구현
- 로딩 페이지 / 에러 페이지 구현

<br>

## 🛠 사용된 기술 스택 및 도구 

### 개발 환경 
![VS Code](https://img.shields.io/badge/VSCode-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white) ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)

### FE 기술 
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) ![Styled Components](https://img.shields.io/badge/Styled--Components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black) ![Embla Carousel](https://img.shields.io/badge/Embla%20Carousel-764ABC?style=flat-square&logoColor=white)

### 품질 관리 
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=black)

### 협업 도구 
![Discord](https://img.shields.io/badge/Discord-5865F2?style=flat-square&logo=discord&logoColor=white) ![Notion](https://img.shields.io/badge/Notion-000000?style=flat-square&logo=notion&logoColor=white)

### 빌드 및 배포 (Build & Deploy)
![NPM](https://img.shields.io/badge/NPM-CB3837?style=flat-square&logo=npm&logoColor=white) ![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)

<br>

## 📆 프로젝트 타임라인

| 상태 | 날짜 | 활동 내용 | 구분 |
| :--: | :-- | :-- | :--: |
| ✅ | 2025.12.12 | 프로젝트 주제 선정 및 분석 | 기획 |
| ✅ | 2025.12.15 | 멘토링 및 R&R 역할 분담 | 기획 |
| 🔥 | 2025.12.16 | **본격적인 개발 착수** | 개발 |
| 🏃 | 2025.12.23 | 1차 중간 점검 | 개발 |
| 🏃 | 2025.12.26 | 2차 중간 점검 (API 연결) | 개발 |
| 🐛 | 2025.12.29 | 3차 점검 및 버그 수정 | QA |
| ✨ | 2025.12.30 | 최종 테스트 시연 | QA |
| 👑 | **2026.01.02** | **최종 프로젝트 발표** | **D-Day** |

<br>

## 📁 폴더 구조

```
src/             
├─ API/          // api 호출 모듈
├─ assets/        // 아이콘, 이미지
├─ components/   // 재사용 컴포넌트 모달 
├─ contexts/       // 글로벌 상태 관리 (Credit)
├─ hooks/       // 커스텀 훅 (useChart)
├─ pages/          // 라우트 페이지
├─ public/        
├─ styles/        // 스타일 파일 
├─ utils/      // localStorage 
```


