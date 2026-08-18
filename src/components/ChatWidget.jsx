import { useState } from 'react'
import './ChatWidget.css'

const WHATSAPP_HREF = 'https://wa.me/912345678'
const PHONE_HREF = 'tel:+912345678'

function ChatWidget() {
  const [open, setOpen] = useState(false)

  return (
    <div className="chat-widget">
      {open && (
        <div className="chat-widget__options">
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noreferrer"
            className="chat-widget__option chat-widget__option--whatsapp"
            aria-label="Chat on WhatsApp"
          >
            <svg viewBox="0 0 32 32" width="26" height="26" fill="currentColor" aria-hidden="true">
              <path d="M16.004 3C9.11 3 3.5 8.61 3.5 15.5c0 2.36.66 4.57 1.8 6.46L3 29l7.24-2.25a12.4 12.4 0 0 0 5.76 1.42h.01c6.9 0 12.5-5.61 12.5-12.5S22.9 3 16 3Zm0 22.7h-.01a10.2 10.2 0 0 1-5.2-1.42l-.37-.22-4.3 1.34 1.37-4.19-.24-.38a10.16 10.16 0 0 1-1.56-5.33c0-5.64 4.6-10.24 10.26-10.24 2.74 0 5.31 1.07 7.25 3s3 4.51 3 7.25c-.01 5.64-4.6 10.19-10.2 10.19Zm5.6-7.65c-.31-.15-1.82-.9-2.1-1s-.49-.15-.69.15-.79 1-.97 1.2-.36.23-.67.08a8.35 8.35 0 0 1-2.46-1.52 9.2 9.2 0 0 1-1.7-2.12c-.18-.31 0-.47.13-.62.14-.14.31-.36.46-.54.15-.18.2-.31.31-.51.1-.2.05-.39-.02-.54s-.69-1.66-.94-2.28c-.25-.6-.5-.52-.69-.53h-.59a1.13 1.13 0 0 0-.82.38 3.42 3.42 0 0 0-1.07 2.55c0 1.5 1.09 2.95 1.24 3.15.15.2 2.15 3.28 5.21 4.6.73.31 1.3.5 1.74.64.73.23 1.4.2 1.92.12.59-.09 1.82-.74 2.07-1.46.26-.72.26-1.34.18-1.46-.07-.13-.28-.2-.59-.35Z"/>
            </svg>
          </a>

          <a
            href={PHONE_HREF}
            className="chat-widget__option chat-widget__option--phone"
            aria-label="Call us"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02z"/>
            </svg>
          </a>
        </div>
      )}

      <button
        type="button"
        className="chat-widget__toggle"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close contact options' : 'Open contact options'}
        aria-expanded={open}
      >
        {open ? (
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.48 2 2 5.94 2 10.8c0 2.77 1.44 5.24 3.7 6.86-.14 1.13-.6 2.4-1.62 3.72a.5.5 0 0 0 .55.79c2.1-.6 3.68-1.5 4.77-2.3.83.19 1.7.29 2.6.29 5.52 0 10-3.94 10-8.8S17.52 2 12 2Z" />
          </svg>
        )}
      </button>
    </div>
  )
}

export default ChatWidget
