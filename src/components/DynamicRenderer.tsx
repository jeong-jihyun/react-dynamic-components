import type { ComponentType } from 'react';
import type { DynamicComponent, DynamicComponentType } from '../types/component';
import { AlertWidget, ButtonWidget, CardWidget, TextWidget } from './widgets';

const registry = {
  text: TextWidget,
  card: CardWidget,
  alert: AlertWidget,
  button: ButtonWidget,
} satisfies Record<DynamicComponentType, ComponentType<any>>;

export default function DynamicRenderer({ item }: { item: DynamicComponent }) {
  const Component = registry[item.type];
  return <Component {...item.props} />;
}