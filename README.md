# React Dynamic Components

React + TypeScript + Vite로 만든 동적 컴포넌트 렌더링 예제입니다.

## 실행

```bash
npm install
npm run dev
```

빌드 확인: `npm run build`

## 기능
- 타입 레지스트리를 통한 동적 컴포넌트 렌더링
- Text, Card, Alert, Button 위젯
- 설정 데이터(props)에 기반한 렌더링
- 컴포넌트 추가 및 삭제
- 반응형 미리보기 UI

## 구조
```text
src/
  components/DynamicRenderer.tsx
  components/widgets.tsx
  types/component.ts
  App.tsx
  main.tsx
  styles.css
```

동적 렌더링은 허용된 컴포넌트 레지스트리를 사용합니다. 서버에서 설정을 받을 경우에도 임의의 코드나 컴포넌트 이름을 실행하지 말고, 검증된 타입과 props만 허용하세요.
