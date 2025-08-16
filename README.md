# Celatic - Mobile App Development Company Website

A modern, responsive website for Celatic, a mobile app development company. Built with HTML5, CSS3, and vanilla JavaScript.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with desktop optimization
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Smooth scrolling, form validation, and dynamic content
- **Performance Optimized**: Fast loading with optimized assets
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Cross-browser Compatible**: Works on all modern browsers

## 📱 Sections

1. **Hero Section**: Compelling headline with call-to-action buttons
2. **Services**: Six core services offered by Celatic
3. **Portfolio**: Showcase of previous mobile app projects
4. **About**: Company information and statistics
5. **Contact**: Contact form and company information
6. **Footer**: Links and social media connections

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and accessibility
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **JavaScript**: Vanilla JS for interactivity and animations
- **Font Awesome**: Icons for visual elements
- **Google Fonts**: Inter font family for typography

## 📁 File Structure

```
celatic.com/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- Git (for version control)
- A GitHub account (for hosting)

### Local Development

1. **Clone or download the repository**
   ```bash
   git clone https://github.com/yourusername/celatic.com.git
   cd celatic.com
   ```

2. **Open in your browser**
   - Simply open `index.html` in your web browser
   - Or use a local development server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

3. **View the website**
   - Navigate to `http://localhost:8000` in your browser

## 🌐 Deployment to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon and select "New repository"
3. Name it `celatic.com` (important for custom domain)
4. Make it public
5. Don't initialize with README, .gitignore, or license
6. Click "Create repository"

### Step 2: Push Your Code

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Celatic website"

# Add remote origin
git remote add origin https://github.com/yourusername/celatic.com.git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"

### Step 4: Configure Custom Domain

1. In the same Pages settings, add `celatic.com` in "Custom domain"
2. Click "Save"
3. Check "Enforce HTTPS" if available

### Step 5: DNS Configuration

Configure your domain's DNS settings with your registrar:

**CNAME Record:**
- Name: `www` (or leave blank for root domain)
- Value: `yourusername.github.io`

**A Records:**
- Name: `@` (or leave blank for root domain)
- Values: 
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`

## 🎨 Customization

### Colors
The website uses a modern color scheme:
- Primary: `#667eea` (Blue)
- Secondary: `#764ba2` (Purple)
- Text: `#2d3748` (Dark Gray)
- Background: `#f8fafc` (Light Gray)

### Content Updates
- **Company Information**: Update contact details in `index.html`
- **Services**: Modify service descriptions in the services section
- **Portfolio**: Add your actual projects and case studies
- **Statistics**: Update the numbers in the about section

### Styling
- Modify `styles.css` to change colors, fonts, and layouts
- Update `script.js` for custom interactions and animations

## 📱 Responsive Breakpoints

- **Mobile**: Up to 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px and above

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📈 Performance Features

- Optimized CSS with efficient selectors
- Minimal JavaScript for fast loading
- Responsive images and icons
- Smooth scrolling and animations
- Intersection Observer for performance

## 🚀 Future Enhancements

- **CMS Integration**: Add content management system
- **Blog Section**: Company news and insights
- **Client Portal**: Secure area for project updates
- **Analytics**: Google Analytics integration
- **SEO Tools**: Advanced SEO optimization
- **Contact Form**: Backend integration for form handling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For support or questions:
- Email: hello@celatic.com
- Website: [celatic.com](https://celatic.com)

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Modern CSS techniques and best practices
- Mobile-first responsive design principles

---

**Built with ❤️ for Celatic - Building the future, one app at a time.**
