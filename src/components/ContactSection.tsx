"use client";

import React, { useState, FormEvent } from "react";

type FormState = {
    name: string;
    email: string;
    message: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SocialIcons = (): React.ReactElement => (
    <div className="flex gap-6 pt-4">
        <a
            href="https://www.facebook.com/lentera.lentera.792303?locale=id_ID"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="facebook"
            className="text-[#EEEEEE] hover:text-white"
        >
            <span className="sr-only">facebook</span>
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
        </a>

        <a
            href="https://www.instagram.com/arifn.ab/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="instagram"
            className="text-[#EEEEEE] hover:text-white"
        >
            <span className="sr-only">Instagram</span>
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
        </a>
        <a
            href="https://www.linkedin.com/in/ariefna"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="linkedin"
            className="text-[#EEEEEE] hover:text-white"
        >
            <span className="sr-only">LinkedIn</span>
            <svg className="h-6 w-6" viewBox="0 0 382 382" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
              <g id="SVGRepo_iconCarrier">
                <path style={{ fill: '#ffffff' }} d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056 H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806 c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1 s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73 c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079 c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426 c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472 L341.91,330.654L341.91,330.654z" />
              </g>
            </svg>
        </a>

        {/* <a 
            href="https://www.tiktok.com/@vocagame"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="tiktok"
            className="text-[#EEEEEE] hover:text-white"
        >
            <span className="sr-only">tiktok</span>
            <svg className="h-6 w-6" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M0 0h24v24H0z" stroke="none" fill="none" />
                <path d="M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5" />
            </svg>
        </a>

        <a
            href="https://www.youtube.com/@vocagame"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="youtube"
            className="text-[#EEEEEE] hover:text-white"
        >
            <span className="sr-only">youtube</span>
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                <path d="M10 15l5-3-5-3z" />
            </svg>
        </a>

        <a
            href="https://twitter.com/vocagame"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="twitter"
            className="text-[#EEEEEE] hover:text-white"
        >
            <span className="sr-only">twitter</span>
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
        </a>
        */}
    </div>
);

export default function ContactSection(): React.ReactElement {
    const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [fieldErrors, setFieldErrors] = useState<Partial<FormState>>({});

    function validate(): boolean {
        const errors: Partial<FormState> = {};
        if (!form.name.trim()) errors.name = "Nama diperlukan.";
        if (!form.email.trim()) errors.email = "Email diperlukan.";
        else if (!emailRegex.test(form.email)) errors.email = "Format email tidak valid.";
        if (!form.message.trim()) errors.message = "Pesan tidak boleh kosong.";
        setFieldErrors(errors);
        return Object.keys(errors).length === 0;
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        if (!validate()) return;

        setLoading(true);
        try {
            // Build WhatsApp message from form fields
            const message = `Nama: ${form.name}\nEmail: ${form.email}\nPesan: ${form.message}`;
            const encoded = encodeURIComponent(message);
            const waUrl = `https://wa.me/6287723668279?text=${encoded}`;

            // Open WhatsApp chat in a new tab/window
            window.open(waUrl, "_blank", "noopener,noreferrer");

            setSuccess("Mengalihkan ke WhatsApp...");
            setForm({ name: "", email: "", message: "" });
            setFieldErrors({});
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : String(err);
            setError(message || "Terjadi kesalahan saat mengalihkan ke WhatsApp.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <section id="contact" className="max-w-3xl mx-auto px-6 py-16">
            <h2 className="text-3xl font-extrabold mb-2 text-[#EEEEEE]">Hubungi Saya</h2>
            <p className="text-[#EEEEEE]/70 mb-6">Untuk pertanyaan kerja sama, silakan kirim email atau gunakan formulir kontak.</p>

            {/* Status banners */}
            <div aria-live="polite" className="mb-4">
                {success && (
                    <div className="rounded-md bg-[#00ADB5]/10 border border-[#00ADB5]/30 p-3 text-[#00ADB5] flex items-start gap-3">
                        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div className="text-sm">{success}</div>
                    </div>
                )}

                {error && (
                    <div className="rounded-md bg-red-900/10 border border-red-700/30 p-3 text-red-300 flex items-start gap-3">
                        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-9V6a1 1 0 112 0v3a1 1 0 11-2 0zm0 4a1 1 0 112 0 1 1 0 01-2 0z" clipRule="evenodd" />
                        </svg>
                        <div className="text-sm">{error}</div>
                    </div>
                )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-[#393E46]/20 border border-[#393E46]/40 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1 text-[#EEEEEE]">
                        Nama
                    </label>
                    <input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                        aria-invalid={Boolean(fieldErrors.name)}
                        aria-describedby={fieldErrors.name ? "name-error" : undefined}
                        className={`w-full rounded-md border px-3 py-2 bg-transparent placeholder:text-[#EEEEEE]/50 text-[#EEEEEE] focus:outline-none focus:ring-2 focus:ring-[#00ADB5] border-[#393E46]/60 ${fieldErrors.name ? 'ring-2 ring-red-600/50' : ''}`}
                        placeholder="Nama lengkap"
                        required
                    />
                    {fieldErrors.name && <p id="name-error" className="mt-1 text-xs text-red-400">{fieldErrors.name}</p>}
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1 text-[#EEEEEE]">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                        aria-invalid={Boolean(fieldErrors.email)}
                        aria-describedby={fieldErrors.email ? "email-error" : "email-help"}
                        className={`w-full rounded-md border px-3 py-2 bg-transparent placeholder:text-[#EEEEEE]/50 text-[#EEEEEE] focus:outline-none focus:ring-2 focus:ring-[#00ADB5] border-[#393E46]/60 ${fieldErrors.email ? 'ring-2 ring-red-600/50' : ''}`}
                        placeholder="you@example.com"
                        required
                    />
                    <p id="email-help" className="mt-1 text-xs text-[#EEEEEE]/60">Saya akan membalas ke alamat ini.</p>
                    {fieldErrors.email && <p id="email-error" className="mt-1 text-xs text-red-400">{fieldErrors.email}</p>}
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1 text-[#EEEEEE]">
                        Pesan
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                        aria-invalid={Boolean(fieldErrors.message)}
                        aria-describedby={fieldErrors.message ? "message-error" : undefined}
                        className={`w-full rounded-md border px-3 py-2 h-36 resize-y bg-transparent placeholder:text-[#EEEEEE]/50 text-[#EEEEEE] focus:outline-none focus:ring-2 focus:ring-[#00ADB5] border-[#393E46]/60 ${fieldErrors.message ? 'ring-2 ring-red-600/50' : ''}`}
                        placeholder="Tulis pesan Anda..."
                        required
                    />
                    {fieldErrors.message && <p id="message-error" className="mt-1 text-xs text-red-400">{fieldErrors.message}</p>}
                </div>

                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#00ADB5] text-[#222831] rounded-md hover:bg-[#00ADB5]/90 disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
                    >
                        {loading ? (
                            <svg className="w-5 h-5 animate-spin text-[#222831]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                            </svg>
                        ) : null}

                        <span className="text-sm font-medium">{loading ? "Mengirim..." : "Kirim Pesan"}</span>
                    </button>

                    <div className="flex-1 flex items-center justify-end gap-4">
                        <div className="text-sm text-green-400" aria-hidden>{/* space reserved for success */}</div>
                        <div className="text-sm text-red-400" aria-hidden>{/* space reserved for error */}</div>
                    </div>
                </div>

                {/* Footer: social icons */}
                <footer className="mt-4 border-t border-[#393E46]/40 pt-4">
                    <p className="text-sm mb-3 text-[#EEEEEE]/70">Atau temukan saya di:</p>
                    <SocialIcons />
                </footer>
            </form>
        </section>
    );
}