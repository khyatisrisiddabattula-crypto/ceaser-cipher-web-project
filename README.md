# Crimson Cipher

Create a complete, beautiful, professional Caesar Cipher Encryption & Decryption Web Project.

PROJECT REQUIREMENTS

Build the project using only:

index.html

style.css

script.js

Do NOT use React, TypeScript, Tailwind, or any framework. Keep the project simple and suitable for hosting directly on GitHub Pages.

The project must work perfectly in Microsoft Edge and Google Chrome on Windows.

DESIGN THEME

Use a unique Red + Black Cybersecurity/Hacker theme.

Color palette:

Background: #050505 / near-black

Primary red: #ff1744

Dark red: #b00020

White: #ffffff

Secondary text: #bdbdbd

Card background: #111111

Borders/glows: red

Create a futuristic cybersecurity dashboard appearance with:

Black background

Red neon glowing borders

Red glowing buttons

Subtle animated background effects

Glassmorphism-style cards

Smooth hover animations

Modern typography

Red neon shadows

Responsive layout for laptop, desktop, and mobile

Do not make it look like a basic college HTML page. Make it look like a professional cybersecurity project.

HEADER

Create a stylish top navigation/header containing:

CAESAR CIPHER

Subtitle:
Classical Cryptography • Encryption & Decryption

Add a small red glowing lock/security icon using CSS or Unicode.

Navigation items:

Home

Encrypt

Decrypt

About

Make the header sticky while scrolling.

HERO SECTION

Create a large hero section with:

CAESAR CIPHER

Text:
"Secure your message with the power of classical cryptography."

Add a short description explaining that Caesar Cipher is a substitution cipher where each letter is shifted by a fixed number of positions in the alphabet.

Add two glowing buttons:

START ENCRYPTING

LEARN MORE

Buttons should have red neon hover effects.

MAIN CIPHER TOOL

Create the main interactive Caesar Cipher panel.

Title:

Encryption & Decryption Console

Include:

A large textarea:
Placeholder:
"Enter your message here..."

A shift-value input:
Label:
"SHIFT VALUE"

Allow values from 0 to 25.

Add plus/minus controls if possible.

Two large buttons:

🔒 ENCRYPT

🔓 DECRYPT

Output textarea/card:
Title:
"OUTPUT MESSAGE"

Show the encrypted/decrypted result dynamically.

Add buttons:

COPY RESULT

CLEAR

FUNCTIONALITY

Implement the Caesar Cipher correctly using JavaScript.

Encryption:
For every alphabetic character, shift it forward by the selected shift value.

Example:

Input:
HELLO

Shift:
3

Output:
KHOOR

Decryption should shift characters backward.

Rules:

Preserve uppercase letters.

Preserve lowercase letters.

Do not modify numbers.

Do not modify spaces.

Do not modify punctuation or special characters.

Support negative shift values safely.

Support shift values greater than 25 by normalizing them using modulo 26.

Example:
Input:
Hello World!

Shift:
3

Encrypted:
Khoor Zruog!

Decrypted:
Hello World!

ALPHABET VISUALIZATION

Add a beautiful section showing:

ALPHABET SHIFT

Display:

Original:
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

Shifted:
D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

Make the letters appear as futuristic red/white cards.

Update the shifted alphabet dynamically whenever the user changes the shift value.

LIVE STATS

Add a small dashboard below the cipher console showing:

Characters

Letters

Numbers

Spaces

Update these statistics automatically as the user types.

HOW IT WORKS

Create a section titled:

HOW CAESAR CIPHER WORKS

Show 3 steps:

01 — ENTER MESSAGE
Enter the text you want to encrypt.

02 — CHOOSE SHIFT
Select a shift value from 0–25.

03 — ENCRYPT / DECRYPT
The algorithm shifts each alphabetic character through the alphabet.

Also include a simple visual example:

A → B → C → D

with a red glowing animation.

SECURITY INFORMATION

Add a dark cybersecurity-style information card:

CRYPTOGRAPHIC NOTE

Explain that Caesar Cipher is a historical classical cipher and is NOT considered secure for modern confidential communication because there are only 26 possible shifts.

Mention:
"Use Caesar Cipher for educational purposes and learning the fundamentals of cryptography."

ABOUT SECTION

Create an About section containing:

ABOUT CAESAR CIPHER

Explain:

What Caesar Cipher is

Its historical significance

How encryption works

How decryption works

Why it is vulnerable to brute-force attacks

Add a small "Security Level" indicator:

VERY LOW — EDUCATIONAL ONLY

FOOTER

Create a professional footer:

CAESAR CIPHER LAB

"Built for learning the fundamentals of classical cryptography."

Add:

Encryption

Decryption

Cryptography

Cybersecurity

ANIMATIONS

Add subtle CSS animations:

Neon red button glow

Card hover effect

Floating background particles

Smooth scrolling

Fade-in sections

Animated red gradient lines

Output reveal animation

Do NOT overuse animations. Keep the UI professional.

RESPONSIVENESS

Make the entire website responsive:

Desktop

Laptop

Tablet

Mobile

The cipher console should stack properly on smaller screens.

ACCESSIBILITY

Add:

Proper labels

Keyboard-friendly buttons

Good contrast

Focus states

ARIA labels where useful

JAVASCRIPT

Make sure all buttons actually work:

Encrypt

Decrypt

Copy

Clear

Shift increase/decrease

Live character statistics

Dynamic alphabet

Smooth navigation

Do not use fake/demo functionality.

GITHUB REQUIREMENT

The final project must contain exactly these main files:

index.html
style.css
script.js

Keep all CSS inside style.css and all JavaScript inside script.js.

Make sure there are no broken file paths and no dependencies that prevent GitHub Pages deployment.

The project must work immediately when index.html is opened.

IMPORTANT

Before finishing:

Check that encryption works correctly.

Check that decryption reverses encryption.

Check uppercase and lowercase.

Check spaces and punctuation.

Check shift values 0–25.

Check large and negative shift values.

Check Copy and Clear buttons.

Check mobile responsiveness.

Check Microsoft Edge compatibility.

Make sure GitHub Pages can run the project without any build process.

Create a polished, unique, professional red-and-black cybersecurity Caesar Cipher website suitable for a college project demonstration.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://ceaser-cipher-web-project.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/72b7ce92-4a4b-4efe-9bc8-98eef2d6ef37).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
