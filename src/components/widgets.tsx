import type { AlertProps, ButtonProps, CardProps, TextProps } from '../types/component';

export function TextWidget({ text, size = 'medium', muted = false }: TextProps) {
  return <p className={`widget-text text-${size}${muted ? ' is-muted' : ''}`}>{text}</p>;
}

export function CardWidget({ title, description, tag = 'COMPONENT' }: CardProps) {
  return <article className="widget-card">
    <span className="tag">{tag}</span><h3>{title}</h3><p>{description}</p>
  </article>;
}

export function AlertWidget({ title, message, variant }: AlertProps) {
  const mark = variant === 'success' ? '✓' : variant === 'warning' ? '!' : 'i';
  return <aside className={`widget-alert alert-${variant}`} role="status">
    <span className="alert-mark" aria-hidden="true">{mark}</span>
    <div><strong>{title}</strong><p>{message}</p></div>
  </aside>;
}

export function ButtonWidget({ label, action = 'notify' }: ButtonProps) {
  return <button className="widget-button" type="button"
    onClick={() => action === 'notify' && window.alert(`"${label}" 버튼을 클릭했습니다.`)}>
    {label} <span aria-hidden="true">↗</span>
  </button>;
}