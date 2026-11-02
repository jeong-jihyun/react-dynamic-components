export type TextProps = { text: string; size?: 'small' | 'medium' | 'large'; muted?: boolean };
export type CardProps = { title: string; description: string; tag?: string };
export type AlertProps = { title: string; message: string; variant: 'info' | 'success' | 'warning' };
export type ButtonProps = { label: string; action?: 'notify' | 'none' };

export type DynamicComponent =
  | { id: string; type: 'text'; props: TextProps }
  | { id: string; type: 'card'; props: CardProps }
  | { id: string; type: 'alert'; props: AlertProps }
  | { id: string; type: 'button'; props: ButtonProps };

export type DynamicComponentType = DynamicComponent['type'];