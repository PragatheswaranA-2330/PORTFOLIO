# Portfolio — Web Developer

This is a minimal React portfolio scaffold.

Quick start (Windows):

1. Install dependencies:

```powershell
npm install
```

2. Run dev server:

```powershell
npm start
```

Add your photo:
- Place a profile image named `profile.jpg` into the `public/` folder (it will be displayed in the top-right navbar).
- To extract a photo from your PDF resume (`public/PRAGATHESWARAN_RESUME.pdf`) you can use ImageMagick (Windows PowerShell):

```powershell
magick "public/PRAGATHESWARAN_RESUME.pdf[0]" public/profile.jpg
```

Or use `pdftoppm` (poppler) to export page 1 as JPEG:

```powershell
pdftoppm -jpeg -f 1 -singlefile public/PRAGATHESWARAN_RESUME.pdf public/profile
```

After adding `public/profile.jpg`, reload the site to see your photo in the navbar.
