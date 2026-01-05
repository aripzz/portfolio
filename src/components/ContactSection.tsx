"use client";

import React, { useState, FormEvent } from "react";

type FormState = {
    name: string;
    email: string;
    message: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SocialIcons = (): React.ReactElement => (
    <div className="flex gap-4">
        <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[#EEEEEE] hover:text-white"
        >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM.36 8h4.28V24H.36zM8.99 8h4.11v2.18h.06c.57-1.08 1.98-2.18 4.09-2.18C22.65 8 24 10.06 24 13.46V24h-4.28v-9.07c0-2.16-.04-4.94-3.01-4.94-3.01 0-3.47 2.35-3.47 4.78V24H8.99z" />
            </svg>
        </a>

        <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[#EEEEEE] hover:text-white"
        >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5C5.73.5.9 5.34.9 11.62c0 4.75 3.07 8.78 7.33 10.19.54.1.74-.24.74-.53 0-.26-.01-.95-.01-1.86-2.98.65-3.61-1.44-3.61-1.44-.49-1.26-1.2-1.6-1.2-1.6-.98-.66.07-.64.07-.64 1.08.08 1.65 1.12 1.65 1.12.96 1.65 2.52 1.17 3.14.9.1-.7.38-1.17.69-1.44-2.38-.27-4.88-1.19-4.88-5.29 0-1.17.42-2.12 1.11-2.87-.11-.28-.48-1.41.11-2.94 0 0 .9-.29 2.95 1.1a10.2 10.2 0 012.69-.37c.91 0 1.83.12 2.69.37 2.05-1.39 2.95-1.1 2.95-1.1.59 1.53.22 2.66.11 2.94.69.75 1.11 1.7 1.11 2.87 0 4.11-2.51 5.02-4.9 5.28.39.34.73 1.01.73 2.04 0 1.47-.01 2.66-.01 3.02 0 .29.2.64.75.53C20.02 20.4 23.1 16.37 23.1 11.62 23.1 5.34 18.27.5 12 .5z" />
            </svg>
        </a>

        <a
            href="https://www.facebook.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-[#EEEEEE] hover:text-white"
        >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.04H8.13v-2.89h2.17V9.41c0-2.15 1.28-3.34 3.24-3.34.94 0 1.92.17 1.92.17v2.11h-1.08c-1.06 0-1.39.66-1.39 1.34v1.6h2.36l-.38 2.89h-1.98v7.04c4.78-.8 8.44-4.94 8.44-9.93z" />
            </svg>
        </a>

        <a
            href="https://www.instagram.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-[#EEEEEE] hover:text-white"
        >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.16c3.2 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.92 4.92 0 011.77 1.024 4.92 4.92 0 011.024 1.77c.163.462.35 1.26.403 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.43a4.92 4.92 0 01-1.024 1.77 4.92 4.92 0 01-1.77 1.024c-.462.163-1.26.35-2.43.403-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.403a4.92 4.92 0 01-1.77-1.024 4.92 4.92 0 01-1.024-1.77c-.163-.462-.35-1.26-.403-2.43C2.172 15.584 2.16 15.2 2.16 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43A4.92 4.92 0 013.657 2.95 4.92 4.92 0 015.427 1.926c.462-.163 1.26-.35 2.43-.403C8.416 1.172 8.8 1.16 12 1.16m0-1.16C8.74 0 8.332.013 7.052.072 5.78.13 4.744.34 3.9.72A6.077 6.077 0 001.72 2.9 6.077 6.077 0 00.72 3.9c-.38.844-.59 1.88-.648 3.152C0 8.332 0 8.74 0 12c0 3.26.013 3.668.072 4.948.058 1.272.268 2.308.648 3.152a6.077 6.077 0 001 1.18 6.077 6.077 0 001.18 1c.844.38 1.88.59 3.152.648C8.332 24 8.74 24 12 24s3.668-.013 4.948-.072c1.272-.058 2.308-.268 3.152-.648a6.077 6.077 0 001.18-1 6.077 6.077 0 001-1.18c.38-.844.59-1.88.648-3.152.059-1.28.072-1.688.072-4.948s-.013-3.668-.072-4.948c-.058-1.272-.268-2.308-.648-3.152a6.077 6.077 0 00-1-1.18 6.077 6.077 0 00-1.18-1c-.844-.38-1.88-.59-3.152-.648C15.668.013 15.26 0 12 0zM12 5.84A6.16 6.16 0 1012 18.16 6.16 6.16 0 0012 5.84zm0 10.16A4 4 0 1116 12a4 4 0 01-4 4zm6.4-11.9a1.44 1.44 0 11-1.44-1.44 1.44 1.44 0 011.44 1.44z" />
            </svg>
        </a>
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
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                throw new Error(data?.error || "Gagal mengirim pesan");
            }

            setSuccess("Pesan berhasil dikirim. Terima kasih!");
            setForm({ name: "", email: "", message: "" });
            setFieldErrors({});
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : String(err);
            setError(message || "Terjadi kesalahan saat mengirim.");
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