import { useEffect } from 'react';
import { X } from 'lucide-react';

export default function Lightbox({ open, onClose, videoUrl, title, description }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div className="relative w-full max-w-5xl">
        <button
          aria-label="Close"
          className="absolute -top-10 right-0 text-zinc-300 hover:text-white"
          onClick={onClose}
        >
          <X size={28} />
        </button>
        <div className="aspect-video w-full overflow-hidden rounded-xl border border-zinc-800 bg-black">
          <iframe
            className="w-full h-full"
            src={videoUrl}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        {(title || description) && (
          <div className="mt-4 text-zinc-300">
            <h3 className="text-lg font-medium">{title}</h3>
            {description && <p className="text-sm text-zinc-400 mt-1">{description}</p>}
          </div>
        )}
      </div>
    </div>
  );
}
