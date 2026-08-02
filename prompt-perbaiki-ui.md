# Prompt untuk Perbaiki UI Portofolio (Claude Design)

Kamu adalah senior UI/UX & frontend designer. Perbaiki dan tingkatkan tampilan (UI) website portofolio pribadi saya tanpa mengubah tech stack-nya.

## Konteks Project
- Pemilik: Taufik Ismail — seorang **Data Analyst** (banking analytics, dashboard, automation).
- Target audiens: recruiter & klien yang menilai kerapian, profesionalitas, dan skill visual saya.
- Tech stack: **React + Vite + Tailwind CSS**, animasi pakai **framer-motion**, ikon **lucide-react**. Build jadi static site untuk **GitHub Pages** (base path relatif `./`).
- Tema saat ini: **dark, premium, minimalis** (background hitam/biru gelap, aksen biru `#005BAC` dan emas `#F5B942`).

## Struktur Komponen (jangan diubah nama file, boasnya isinya saja)
- `HeroSection.jsx` — nama besar + preview dashboard di kanan
- `AboutSection.jsx` — foto profil + ringkasan + 3 kartu kelebihan (Banking Analytics, Automation, BI)
- `ExperienceSection.jsx` — riwayat pengalaman kerja
- `SkillsSection.jsx` — daftar skill
- `ProjectsSection.jsx` — 8 kartu project (judul, kategori, deskripsi, tag teknologi, gambar, 3 statistik)
- `AchievementsSection.jsx`, `ContactSection.jsx`, `Footer.jsx`
- `FloatingNav.jsx` — navigasi melayang
- Data project ada di `src/data/projects.js`, data pengalaman di `src/data/experience.js`

## Yang Ingin Saya Perbaiki
1. **Hierarki visual & spacing** — jarak antar section lebih konsisten, ritme tipografi lebih jelas, whitespace lebih rapi.
2. **Tipografi** — pilih pasangan font yang lebih premium dan mudah dibaca; atur ukuran, weight, dan line-height yang konsisten.
3. **Kartu project** — buat lebih menarik dan konsisten: hover state, bayangan, border halus, penataan gambar dan tag yang lebih rapi, dan responsif di mobile.
4. **Hero section** — lebih berkesan pada 3 detik pertama; perjelas headline, sub-headline, dan CTA (lihat project / download CV).
5. **Animasi** — halus dan tidak berlebihan (fade/slide saat scroll pakai framer-motion), tidak mengganggu performa.
6. **Konsistensi warna** — pertahankan tema dark premium, rapikan penggunaan aksen biru & emas agar tidak acak.
7. **Responsif** — pastikan tampil rapi di HP, tablet, dan desktop.
8. **Aksesibilitas** — kontras teks cukup, ukuran klik nyaman, alt text pada gambar.

## Batasan (Constraints)
- Tetap pakai **React + Vite + Tailwind + framer-motion + lucide-react**. Jangan tambah dependency berat.
- Hasil harus tetap bisa di-build jadi static site untuk GitHub Pages (path aset relatif).
- Jangan mengubah isi konten/teks project & pengalaman — fokus ke **tampilan**, bukan data.
- Pertahankan struktur file komponen yang sudah ada.

## Output yang Saya Harapkan
1. Ringkasan singkat perubahan desain yang kamu usulkan (dan alasannya).
2. Kode yang sudah diperbarui per komponen (Tailwind classes / style), siap saya tempel.
3. Kalau ada perubahan font atau token warna, jelaskan cara menerapkannya di `tailwind.config.js` / `index.css`.
4. Catatan langkah build & deploy jika ada yang perlu saya sesuaikan.

Silakan mulai dengan usulan konsep desainnya dulu, lalu lanjut ke kodenya.

---
*Tips: lampirkan juga screenshot tampilan website saya saat ini agar hasil perbaikannya lebih tepat sasaran.*
