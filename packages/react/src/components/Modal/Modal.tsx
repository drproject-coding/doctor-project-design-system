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
    <div className="drp-overlay" onClick={onClose}>
      <div className="drp-modal" onClick={(e) => e.stopPropagation()}>
        <div className="drp-modal__header">
          <h2 className="drp-modal__title">{title}</h2>
          <button className="drp-modal__close" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="drp-modal__body">{children}</div>
        {footer && <div className="drp-modal__footer">{footer}</div>}
      </div>
    </div>
  );
}
