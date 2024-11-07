# Projek iseng CRUD dengan Sveltekit dan Drizzle ORM

ok, ini adalah repo tentang CRUD yang simple. Buat yang ingin coba, *clone* aja *repo* ini

## Cara *clone* dan *setup*

#### Pertama, siapkan alat dan bahan di bawah

1. Terminal
2. Git
3. Node.js (INSTAL DULU!!!)
4. npm, yarn, atau pnpm (PILIH SALAH SATU!!! JANGAN SERAKAH!!!!)
5. Berdoa kepada Tuhan :)

#### Kedua, *Clone* repo ini
Siapin terminal kalian buat nge-*clone*

```bash
git clone https://github.com/Haluan157/CRUD-with-sveltekit-and-drizzle
cd CRUD-with-sveltekit-and-drizzle
```

#### Ketiga, Instal depedensi

```bash
# npm
npm i
# yarn
yarn i
# pnpm
pnpm i
```

#### Keempat, generate dan migrate db

Sebelum itu, PASTIKAN MYSQL ATAU MARIADB KALIAN HIDUP!!! DAN PASTIKAN BUAT FILE .env!!!!. IKUTI .env.example!!!!

Kalau sudah, ikuti ini
```bash
npx drizzle-kit generate
npx drizzle-kit migrate
```

#### Kelima, online-kan webnya
```bash
# npm
npm run dev
# yarn
yarn dev
# pnpm
pnpm dev
```