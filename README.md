Project-to-Become-a-React-Web-Developer-Expert

# Discussion Forum App

## End Goal
Build a **Discussion Forum App** using **Dicoding Forum API**. We prioritize your creativity in building the app, but make sure the app meets the following criteria outlined below.

## Main Criteria 1: Application Functionality

- **Account Registration**: There must be a way to register an account.
- **Account Login**: There must be a way to log in.
- **Thread List**: Display a list of threads.
- **Thread Detail**: When a thread is selected, show its details along with the comments.
- **Create Thread**: Users can create a new thread.
- **Create Comment**: Users can comment on a thread.
- **Loading Bar**: Show a loading bar while data is being fetched from the API.

**Important Notes:**
- Authorization for accessing threads is flexible. You can require login or not when viewing threads. However, for modifying data (creating threads or comments), users must be authenticated.
- Each thread item on the thread list should include:
  - Thread title
  - A snippet of the thread body (optional)
  - Thread creation time
  - Number of comments
  - Creator's info: Name, Avatar (optional)
- The thread detail page should include:
  - Thread title
  - Thread body
  - Thread creation time
  - Creator's info: Name, Avatar
  - Comments: Comment content, comment creation time, and creator's info (Name, Avatar optional)

## Main Criteria 2: Bugs Highlighting

- **ESLint**: Use ESLint on the source code, with an ESLint configuration file present in the project.
- **Code Convention**: Apply one of the following Code Conventions:
  - Dicoding Academy JavaScript Style Guide
  - AirBnB JavaScript Style Guide
  - Google JavaScript Style Guide
  - StandardJS Style Guide
- **No ESLint Errors**: Ensure there are no errors flagged by ESLint.
- **React Strict Mode**: Enable React Strict Mode.

## Main Criteria 3: Application Architecture

- **State Management**: Most of the application state (especially from the API) is stored in Redux Store. Form input or controlled components are allowed to manage their own state.
- **API Calls**: Avoid making REST API calls inside component lifecycle methods or effects.
- **Folder Structure**: Separate UI code and state into different folders.
- **React Components**: Create modular and reusable React components.

## Make Your Project Stand Out!

In addition to meeting the main criteria, here are some suggestions to make your project stand out and get the best grade.

### Suggestion 1: Votes on Threads and Comments
- Provide vote buttons for threads and comments.
- Show visual indicators on the button when a user has voted (e.g., change button color from gray to red).
- Apply **Optimistically Apply Actions** to improve User Experience.
- Show the vote count on threads and comments.

### Suggestion 2: Display Leaderboard
- Create a leaderboard page that displays:
  - User name
  - User avatar
  - User score

### Suggestion 3: Filter Thread List by Category
- Add a filter feature for threads by category.
- This feature should be implemented purely on the Front-End by manipulating the application's state since the API does not provide a filtering endpoint.

## Sample Application

We encourage you to be creative with your project and add unique features or styles. However, here's an overview of the app you need to build:

[Sample Application](https://dicoding-forum-app.vercel.app/)

**Note:** Avoid copying the sample application exactly. This is your opportunity to showcase your creativity in building the app.




-------------------------------------------------

# Aplikasi Forum Diskusi

## Tujuan Akhir
Buatlah aplikasi React bertemakan **Aplikasi Forum Diskusi** yang memanfaatkan API dari **Dicoding Forum API**. Kami mengedepankan kreativitas Anda dalam membangun aplikasi, tetapi pastikan aplikasi yang dibuat memenuhi kriteria yang dijelaskan di bawah ini.

## Kriteria Utama 1: Fungsionalitas Aplikasi

- **Pendaftaran Akun**: Tersedia cara untuk mendaftar akun.
- **Login Akun**: Tersedia cara untuk login akun.
- **Daftar Thread**: Menampilkan daftar thread.
- **Detail Thread**: Ketika item thread dipilih, tampilkan detail thread beserta komentar di dalamnya.
- **Buat Thread**: Pengguna dapat membuat thread baru.
- **Buat Komentar**: Pengguna dapat membuat komentar pada sebuah thread.
- **Loading Bar**: Menampilkan loading bar saat memuat data dari API.

**Catatan Penting:**
- Authorization untuk akses thread bebas. Anda dapat mengharuskan login atau tidak ketika melihat thread. Namun, untuk mengubah data seperti membuat thread atau komentar, pengguna wajib terotentikasi.
- Item thread pada halaman daftar thread harus mencakup:
  - Judul thread
  - Potongan body thread (opsional)
  - Waktu pembuatan thread
  - Jumlah komentar
  - Informasi pembuat thread: Nama, Avatar (opsional)
- Halaman detail thread harus mencakup:
  - Judul thread
  - Body thread
  - Waktu pembuatan thread
  - Informasi pembuat thread: Nama, Avatar
  - Komentar: Konten komentar, waktu pembuatan komentar, dan informasi pembuat komentar (Nama, Avatar opsional)

## Kriteria Utama 2: Bugs Highlighting

- **ESLint**: Gunakan ESLint pada source code aplikasi, dengan adanya berkas konfigurasi ESLint pada proyek.
- **Code Convention**: Terapkan salah satu Code Convention berikut:
  - Dicoding Academy JavaScript Style Guide
  - AirBnB JavaScript Style Guide
  - Google JavaScript Style Guide
  - StandardJS Style Guide
- **Tidak Ada Error ESLint**: Pastikan tidak ada error yang ditampilkan oleh ESLint.
- **React Strict Mode**: Gunakan React Strict Mode.

## Kriteria Utama 3: Arsitektur Aplikasi

- **State Management**: Sebagian besar state aplikasi (terutama yang berasal dari API) disimpan di Redux Store. Form input atau controlled component diperbolehkan untuk mengelola state-nya sendiri.
- **API Calls**: Hindari pemanggilan REST API di dalam lifecycle atau efek pada komponen.
- **Folder Struktur**: Pisahkan kode UI dan state ke dalam folder terpisah.
- **Komponen React**: Buat komponen React yang modular dan reusable.

## Buat Proyekmu Unggul!

Selain kriteria utama yang wajib dipenuhi, kami memberi beberapa saran untuk membuat proyek Anda lebih unggul dan mendapatkan nilai terbaik.

### Saran 1: Fitur Votes pada Thread dan Komentar
- Menyediakan tombol vote pada thread dan komentar.
- Menampilkan indikasi pada tombol ketika pengguna sudah mem-vote (misalnya mengubah warna tombol dari abu-abu menjadi merah).
- Terapkan fitur **Optimistically Apply Actions** untuk meningkatkan User Experience.
- Tampilkan jumlah vote pada thread dan komentar.

### Saran 2: Menampilkan Leaderboard
- Buat halaman leaderboard yang menampilkan:
  - Nama pengguna
  - Avatar pengguna
  - Skor

### Saran 3: Filter Daftar Thread Berdasarkan Kategori
- Fitur untuk mem-filter thread berdasarkan kategori.
- Fitur ini dibangun murni di Front-End, memanipulasi state aplikasi, karena API tidak menyediakan endpoint untuk filter.

## Contoh Aplikasi

Kami mendorong Anda untuk berkreasi dalam mengerjakan proyek ini dengan menambahkan fitur atau menetapkan gaya secara mandiri. Namun, berikut adalah gambaran besar dari aplikasi yang perlu Anda buat:

[Contoh Aplikasi](https://dicoding-forum-app.vercel.app/)

**Catatan:** Hindari meniru persis contoh aplikasi. Gunakan kesempatan ini untuk mengasah kreativitas Anda dalam membangun aplikasi.
