import type { ReactNode } from "react";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
}

export function Modal({ open, onClose, title, children, footer }: ModalProps) {
  if (!open) return null;

  return (
    <div className="bru-overlay" onClick={onClose}>
      <div className="bru-modal" onClick={(e) => e.stopPropagation()}>
        <div className="bru-modal__header">
          <h2 className="bru-modal__title">{title}</h2>
          <button className="bru-modal__close" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="bru-modal__body">{children}</div>
        {footer && <div className="bru-modal__footer">{footer}</div>}
      </div>
    </div>
  );
}
