
# 🍽️ Tasty - Restaurant Website

A modern, responsive restaurant website built with HTML, CSS, and JavaScript. Features a beautiful menu showcase, contact form, and dark/light theme toggle.

![Website Status](https://img.shields.io/badge/Status-Active-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)
![Version](https://img.shields.io/badge/Version-1.0.0-orange)

---

## 📋 Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [How to Use](#how-to-use)
- [Contact Form Setup](#contact-form-setup)
- [Customization](#customization)
- [Contributing](#contributing)
- [FAQ](#faq)
- [Troubleshooting](#troubleshooting)
- [License](#license)
- [Contact](#contact)

---

## ✨ Features

- 🎨 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 🌓 **Dark/Light Theme** - Toggle between dark and light modes with saved preference
- 📧 **Contact Form** - Fully functional contact form with email notifications
- 🔍 **Smooth Scrolling** - Smooth navigation between sections
- ⚡ **Scroll Animations** - Beautiful reveal animations as you scroll
- 🎯 **Sticky Header** - Navigation header stays visible while scrolling
- 💾 **Local Storage** - Remembers user's theme preference
- 📱 **Mobile Menu** - Hamburger menu for mobile devices
- 🚀 **Fast Performance** - Optimized images and code
- ♿ **Accessible** - Semantic HTML and keyboard navigation

---

## 🌐 Live Demo

Visit the live website:
```
https://nareshaspire.github.io/tasty/
```

---

## 🚀 Installation

### Prerequisites

Before you begin, make sure you have:
- **Node.js** installed ([Download here](https://nodejs.org/))
- **Git** installed ([Download here](https://git-scm.com/))
- A **Gmail account** (for contact form emails)

### Step 1: Clone the Repository

```bash
git clone https://github.com/Nareshaspire/tasty.git
cd tasty
```

### Step 2: Install Dependencies

```bash
npm install
```

This installs:
- `express` - Backend server framework
- `nodemailer` - Email service
- `cors` - Cross-origin requests
- `dotenv` - Environment variables

### Step 3: Set Up Environment Variables

Create a `.env` file in the root directory:

```bash
touch .env
```

Add these variables:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
RESTAURANT_EMAIL=restaurant@gmail.com
PORT=5000
```

**How to get Gmail App Password:**
1. Go to https://myaccount.google.com/security
2. Enable 2-Step Verification
3. Go to "App passwords"
4. Select Mail → Your Device
5. Copy the 16-character password
6. Paste it in `.env` as `EMAIL_PASSWORD`

### Step 4: Start the Server

```bash
npm start
```

You should see:
```
Server running on port 5000
```

### Step 5: Open in Browser

Open `index.html` in your browser or visit:
```
http://localhost:3000
```

---

## 📁 Project Structure

```
tasty/
├── index.html                 # Main HTML file
├── server.js                  # Backend server (Express)
├── package.json              # NPM dependencies
├── .env                      # Environment variables (create this)
├── .gitignore               # Git ignore file
├── README.md                # This file
│
├── assets/
│   ├── css/
│   │   └── styles.css       # Main stylesheet
│   ├── js/
│   │   └── main.js          # JavaScript functionality
│   └── img/
│       ├── home.png         # Hero image
│       ├── about.jpg        # About section image
│       ├── plate1.png       # Menu item 1
│       ├── plate2.png       # Menu item 2
│       ├── plate3.png       # Menu item 3
│       ├── app1.png         # App store badge
│       ├── app2.png         # Play store badge
│       ├── movil-app.png    # Mobile app preview
│       └── *.svg            # Service icons
│
└── node_modules/            # Installed packages
```

---

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Structure and semantics
- **CSS3** - Styling and animations
- **JavaScript (ES6+)** - Interactivity and logic
- **BoxIcons** - Icon library
- **Google Fonts (Poppins)** - Typography
- **ScrollReveal** - Scroll animations

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web server framework
- **Nodemailer** - Email service
- **CORS** - Cross-origin support
- **Dotenv** - Environment configuration

### Hosting
- **GitHub Pages** - Frontend hosting
- **Gmail SMTP** - Email service

---

## 💻 How to Use

### Navigation
- Click on menu items in the header to navigate to different sections
- Use the hamburger menu on mobile devices

### Theme Toggle
- Click the moon/sun icon in the top-right to switch between dark and light themes
- Your preference is saved automatically

### Scroll to Top
- A "scroll to top" button appears when you scroll down
- Click it to quickly return to the top

### Contact Form
1. Scroll to the "Contact Us" section
2. Fill in your name, email, and message
3. Click "Send Message"
4. You'll receive a confirmation email
5. Restaurant owner receives your inquiry

### Menu Items
- Browse the menu in the "Menu of the Week" section
- Click the cart icon to add items (functionality can be expanded)

---

## 📧 Contact Form Setup

The contact form requires a backend server to send emails.

### How It Works

```
User fills form
    ↓
JavaScript sends data to server
    ↓
Node.js/Express server receives data
    ↓
Nodemailer sends emails via Gmail
    ↓
Two emails sent:
  1. To restaurant owner
  2. Confirmation to user
    ↓
Success message shown to user
```

### Email Configuration

**For Restaurant Owner:**
- Receives all customer inquiries
- Includes customer's name, email, and message

**For Customer:**
- Receives confirmation that message was received
- Professional thank you email

### Customizing Emails

Edit `server.js` to change email templates:

```javascript
// Restaurant email
await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.RESTAURANT_EMAIL,
    subject: `New Contact from ${name}`,
    html: `<h2>Your custom HTML here</h2>`
});

// Customer confirmation email
await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'We received your message',
    html: `<h2>Your custom HTML here</h2>`
});
```

---

## 🎨 Customization

### Change Colors

Edit `assets/css/styles.css` and modify the CSS variables:

```css
:root {
  --first-color: #069C54;           /* Primary color (green) */
  --first-color-alt: #048654;       /* Darker green */
  --title-color: #393939;           /* Text color */
  --text-color: #707070;            /* Light text */
  --body-color: #FBFEFD;            /* Background */
}
```

### Change Restaurant Info

Edit `index.html`:

```html
<!-- Change restaurant name -->
<a href="#" class="nav__logo">Tasty</a>

<!-- Change footer address -->
<li>Your City - Your Country</li>
<li>Your Street #123</li>
<li>123-456-7890</li>
<li>youremail@example.com</li>
```

### Change Menu Items

Edit the menu section in `index.html`:

```html
<div class="menu__content">
    <img src="assets/img/plateX.png" alt="" class="menu__img">
    <h3 class="menu__name">Dish Name</h3>
    <span class="menu__detail">Description</span>
    <span class="menu__preci">$XX.00</span>
    <a href="#" class="button menu__button">
        <i class='bx bx-cart-alt'></i>
    </a>
</div>
```

---

## 🤝 Contributing

We welcome contributions! Here's how to help:

### Fork & Clone

```bash
git clone https://github.com/YourUsername/tasty.git
cd tasty
git checkout -b feature/your-feature-name
```

### Make Changes

1. Make your improvements
2. Test thoroughly
3. Commit with clear messages:

```bash
git add .
git commit -m "Add: new feature description"
git push origin feature/your-feature-name
```

### Create Pull Request

1. Go to GitHub
2. Click "New Pull Request"
3. Describe your changes
4. Submit for review

### Contribution Ideas

- 🛒 Add shopping cart functionality
- 💳 Integrate payment gateway (Stripe)
- 👤 Add user authentication
- 📱 Mobile app version
- 🗺️ Google Maps integration
- ⭐ Customer ratings/reviews
- 📸 Photo gallery
- 🎁 Promo code system

---

## ❓ FAQ

### Q1: How do I change the restaurant name?

A: Open `index.html` and find the `nav__logo`. Change "Tasty" to your restaurant name.

### Q2: How do I add more menu items?

A: Copy the `menu__content` div in the menu section and modify the name, image, and price.

### Q3: How do I change the website colors?

A: Edit `assets/css/styles.css` and modify the CSS variables in the `:root` section.

### Q4: Can I use a different email service instead of Gmail?

A: Yes! You can use SendGrid, Mailgun, or AWS SES. Modify the transporter configuration in `server.js`.

### Q5: How do I deploy this to production?

A: You can deploy to:
- **Heroku** (backend + frontend)
- **Vercel** (frontend only)
- **AWS** (full stack)
- **DigitalOcean** (VPS)

### Q6: How do I add images to the website?

A: Place your images in the `assets/img/` folder and update the `src` in `index.html`.

### Q7: Can I make the menu items actually purchasable?

A: Yes! Add a shopping cart and payment integration (Stripe, PayPal).

### Q8: How do I add more sections?

A: Copy an existing section, modify the content, and add it to the navigation menu.

---

## 🔧 Troubleshooting

### Problem: Server won't start

**Solution:**
```bash
# Stop the server (Ctrl + C)
# Delete node_modules
rm -rf node_modules

# Reinstall packages
npm install

# Start again
npm start
```

### Problem: Emails not sending

**Solution:**
1. Check `.env` file for typos
2. Make sure Gmail App Password is correct
3. Verify 2-Step Verification is enabled
4. Check Gmail SMTP is enabled
5. Look at server console for error messages

### Problem: Contact form shows error

**Solution:**
1. Open browser DevTools (F12)
2. Go to Console tab
3. Check for JavaScript errors
4. Make sure server is running on port 5000
5. Check if API endpoint is correct

### Problem: Website not updating after changes

**Solution:**
```bash
# Hard refresh browser
Ctrl + Shift + R (Windows)
Cmd + Shift + R (Mac)

# Or clear browser cache and restart
```

### Problem: Images not loading

**Solution:**
1. Check image file paths
2. Make sure images are in `assets/img/` folder
3. Verify image filenames match exactly (case-sensitive)
4. Check browser console for 404 errors

### Problem: Mobile menu not working

**Solution:**
1. Check if `main.js` is loaded correctly
2. Verify HTML elements have correct IDs
3. Open browser console for JavaScript errors

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### MIT License Summary

You are free to:
- ✅ Use for commercial projects
- ✅ Modify the code
- ✅ Distribute the code
- ✅ Use privately

You must:
- ⚠️ Include license and copyright notice

---

## 📞 Contact

**Created by:** Naresh

### Get in Touch

- **Email:** nareshaspire45@gmail.com
- **GitHub:** [Nareshaspire](https://github.com/Nareshaspire)
- **Website:** https://nareshaspire.github.io/tasty/

### Report Issues

Found a bug? Have a suggestion?

1. Go to [GitHub Issues](https://github.com/Nareshaspire/tasty/issues)
2. Click "New Issue"
3. Describe the problem
4. Submit

---

## 🎯 Future Roadmap

- [ ] Shopping cart functionality
- [ ] Payment gateway integration (Stripe)
- [ ] User authentication system
- [ ] Order tracking
- [ ] Customer reviews/ratings
- [ ] Admin dashboard
- [ ] Mobile app version
- [ ] Multi-language support
- [ ] SEO optimization
- [ ] Analytics integration

---

## 📊 Statistics

- **Pages:** 1 (Single Page Application)
- **Sections:** 8 (Home, About, Services, Menu, App, Contact, Footer)
- **Responsive Breakpoints:** 3 (Mobile, Tablet, Desktop)
- **Color Themes:** 2 (Light, Dark)
- **JavaScript Features:** 8 (Menu toggle, Scroll reveal, Theme, etc.)

---

## 🙏 Acknowledgments

- **BoxIcons** - Icon library
- **Google Fonts** - Poppins font
- **ScrollReveal** - Scroll animation library
- **Nodemailer** - Email service
- **Express.js** - Web framework

---

## 📝 Changelog

### Version 1.0.0 (2026-04-01)

- ✅ Initial release
- ✅ Responsive design
- ✅ Dark/Light theme toggle
- ✅ Contact form with email service
- ✅ GitHub Pages deployment
- ✅ Smooth scroll animations

---

**Last Updated:** 2026-04-01

Made with ❤️ by Naresh
