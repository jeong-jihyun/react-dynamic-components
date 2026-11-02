import { useState } from 'react';
import DynamicRenderer from './components/DynamicRenderer';
import type { DynamicComponent, DynamicComponentType } from './types/component';

const labels: Record<DynamicComponentType, string> = {
  text: '텍스트', card: '카드', alert: '알림', button: '버튼',
};

const initial: DynamicComponent[] = [
  { id: 'text-1', type: 'text', props: { text: '설정 데이터에 따라 렌더링되는 텍스트 컴포넌트입니다.' } },
  { id: 'card-1', type: 'card', props: { title: '동적 카드', description: 'type과 props를 데이터로 관리합니다.', tag: 'CARD' } },
  { id: 'alert-1', type: 'alert', props: { title: '렌더링 성공', message: '레지스트리에서 컴포넌트를 선택했습니다.', variant: 'success' } },
  { id: 'button-1', type: 'button', props: { label: '동적 버튼 테스트', action: 'notify' } },
];

function createItem(type: DynamicComponentType, id: string): DynamicComponent {
  switch (type) {
    case 'text': return { id, type, props: { text: '새롭게 추가된 동적 텍스트입니다.', size: 'medium' } };
    case 'card': return { id, type, props: { title: '새 카드', description: '새 설정으로 생성된 카드입니다.', tag: 'NEW' } };
    case 'alert': return { id, type, props: { title: '새 알림', message: '동적으로 추가된 알림입니다.', variant: 'info' } };
    case 'button': return { id, type, props: { label: '새 버튼', action: 'notify' } };
  }
}

export default function App() {
  const [items, setItems] = useState(initial);
  const [type, setType] = useState<DynamicComponentType>('card');

  return <main className="shell">
    <header className="topbar"><a className="brand" href="#top"><span className="brand-mark">D</span> Dynamic UI</a><span className="pill">REACT + TYPESCRIPT</span></header>
    <section className="hero" id="top">
      <div className="eyebrow"><span className="dot" /> INTERACTIVE PLAYGROUND</div>
      <h1>Build UI<br /><span>from data.</span></h1>
      <p>컴포넌트를 직접 조합해 보세요.<br />하나의 렌더러가 서로 다른 UI를 동적으로 그립니다.</p>
      <div className="stats"><div><strong>{String(items.length).padStart(2, '0')}</strong><small>COMPONENTS</small></div><div><strong>04</strong><small>WIDGET TYPES</small></div><div><strong>100%</strong><small>REUSABLE</small></div></div>
    </section>
    <section className="section">
      <div className="section-head"><div><small>01 / PLAYGROUND</small><h2>컴포넌트 빌더</h2></div><span className="live"><span className="dot" /> LIVE PREVIEW</span></div>
      <div className="builder"><label htmlFor="type">추가할 컴포넌트 유형</label><div className="controls">
        <select id="type" value={type} onChange={e => setType(e.target.value as DynamicComponentType)}>
          {Object.entries(labels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
        </select>
        <button className="add" onClick={() => setItems(current => [...current, createItem(type, `${type}-${Date.now()}`)])}>＋ 컴포넌트 추가</button>
      </div><p className="hint">유형을 선택하고 추가하면 미리보기에 반영됩니다.</p></div>
      <div className="preview-head"><h3>렌더링 결과</h3><span>{items.length} items</span></div>
      <div className="list">{items.map((item, i) => <div className="component" key={item.id}>
        <div className="meta"><span>{String(i + 1).padStart(2, '0')}</span><code>{item.type}</code>
          <button className="remove" title="삭제" aria-label={`${item.type} 삭제`} onClick={() => setItems(current => current.filter(x => x.id !== item.id))}>×</button>
        </div><div className="content"><DynamicRenderer item={item} /></div>
      </div>)}
      {items.length === 0 && <div className="empty"><strong>◇</strong><p>컴포넌트가 없습니다.</p><small>위에서 새로운 컴포넌트를 추가해 보세요.</small></div>}</div>
    </section>
    <section className="section"><small>02 / HOW IT WORKS</small><h2>작동 원리</h2><div className="concepts">
      <article><span>01</span><h3>Configuration</h3><p>type과 props를 가진 데이터로 UI를 정의합니다.</p></article>
      <article><span>02</span><h3>Registry</h3><p>허용된 컴포넌트를 레지스트리에 등록합니다.</p></article>
      <article><span>03</span><h3>Render</h3><p>DynamicRenderer가 타입에 맞는 UI를 선택합니다.</p></article>
    </div></section>
    <footer><span className="brand-mark">D</span><span>REACT DYNAMIC COMPONENTS</span><span>Built for learning</span></footer>
  </main>;
}