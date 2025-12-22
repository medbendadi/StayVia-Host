'use client'

import { useEffect, useState } from 'react'

declare global {
  interface Window {
    googleTranslateElementInit: () => void
    google: any
  }
}

export default function GoogleTranslate() {
  const [open, setOpen] = useState(false)
  const [loaded, setLoaded] = useState(false)

  // Load Google script ONCE
  useEffect(() => {
    if (window.google?.translate) {
      setLoaded(true)
      return
    }

    const script = document.createElement('script')
    script.src =
      'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    script.async = true

    window.googleTranslateElementInit = () => {
      setLoaded(true)
    }

    document.body.appendChild(script)
  }, [])

  // Init widget ONLY when modal is open
  useEffect(() => {
    if (!open || !loaded) return

    const el = document.getElementById('google_translate_element')
    if (!el) return

    el.innerHTML = ''

    new window.google.translate.TranslateElement(
      {
        pageLanguage: 'fr',
        includedLanguages: 'fr,en',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      'google_translate_element'
    )
  }, [open, loaded])

  return (
    <>
      {/* Sticky Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-50 rounded-full bg-black px-4 py-2 text-white shadow-lg"
      >
        🌍 Translate
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40">
          <div className="relative w-full sm:w-[360px] bg-white rounded-t-2xl sm:rounded-2xl p-4">
            
            {/* Header */}
            <div className="relative mb-4 flex items-center justify-center">
              <h3 className="text-sm font-semibold">Choose language</h3>
              <button
                onClick={() => setOpen(false)}
                className="absolute right-0 text-gray-500 hover:text-black"
              >
                ✕
              </button>
            </div>

            {/* Google Translate */}
            <div
              id="google_translate_element"
              className="google-translate-wrapper"
            />
          </div>
        </div>
      )}

      {/* Inline CSS (SAFE VERSION) */}
      <style>{`
        .google-translate-wrapper {
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .goog-te-gadget {
          font-family: inherit !important;
          font-size: 14px !important;
          text-align: center;
        }

        .goog-te-gadget select {
          width: 100% !important;
          max-width: 260px;
          padding: 8px 12px;
          border-radius: 10px;
          border: 1px solid #ddd;
          background: #fff;
          cursor: pointer;
        }

        /* Hide ONLY the top banner (safe) */
        .goog-te-banner-frame.skiptranslate {
          display: none !important;
        }

        body {
          top: 0px !important;
        }
      `}</style>
    </>
  )
}
