# Causewave Innovations LLP - Company Website

A modern, responsive website for Causewave Innovations LLP, showcasing our technology-powered CSR consulting services.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with comprehensive breakpoints
- **Modern UI/UX**: Professional design with smooth animations and interactions
- **SEO Optimized**: Proper meta tags, semantic HTML, and XML sitemap
- **Performance Focused**: Optimized CSS, JavaScript, and assets
- **Analytics Ready**: Google Analytics integration setup

## 📁 Project Structure

```
causewave-website/
├── index.html          # Homepage
├── about.html          # About page
├── services.html       # Services page
├── founder.html        # Leadership/Founder page
├── contact.html        # Contact page
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
├── sitemap.xml         # SEO sitemap
├── logo.png            # Company logo
├── causewave-*.svg     # Logo variations
└── CV_Dr.Hemant_Patel_25.pdf # Founder CV
```

## 🔧 Setup Instructions

### Google Analytics Setup

1. **Create Google Analytics Account**:
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create a new property for your website
   - Get your GA4 tracking ID (format: G-XXXXXXXXXX)

2. **Add Tracking Code**:
   Add the following code to the `<head>` section of ALL HTML files:

   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
   window.dataLayer = window.dataLayer || [];
   function gtag(){dataLayer.push(arguments);}
   gtag('js', new Date());

   gtag('config', 'G-XXXXXXXXXX');
   </script>
   <!-- End Google Analytics -->
   ```

   **Replace `G-XXXXXXXXXX` with your actual tracking ID**

3. **Files to Update**:
   - index.html
   - about.html
   - services.html
   - founder.html
   - contact.html

### SEO Configuration

1. **Sitemap**: Already created at `/sitemap.xml`
2. **Submit to Google Search Console**:
   - Go to [Google Search Console](https://search.google.com/search-console)
   - Add your property: `https://hemantdoc12.github.io/causewave-website/`
   - Submit the sitemap: `https://hemantdoc12.github.io/causewave-website/sitemap.xml`

## 🛠️ Development

### Local Development
1. Clone the repository
2. Open `index.html` in a web browser
3. For live server, use any HTTP server (e.g., Live Server extension in VS Code)

### Deployment
- Automatically deployed via GitHub Pages
- Live URL: `https://hemantdoc12.github.io/causewave-website/`

## 📊 Analytics & Monitoring

### Key Metrics to Track
- Page views and unique visitors
- Bounce rate and session duration
- Contact form submissions
- Service page engagement
- Mobile vs desktop traffic

### Conversion Goals
- Contact form submissions
- Email clicks (info@causewaveinnovations.com)
- Service inquiry interactions

## 🔮 Next Steps

### Immediate (This Week)
1. **Add Google Analytics tracking code to all HTML files**
2. **Update contact information**:
   - Replace "+91 XXXXX XXXXX" with actual phone number
   - Add specific office address instead of "India"
3. **Connect social media links**:
   - Replace "#" with actual LinkedIn, Twitter URLs

### Short-term (Next Month)
1. **Create Privacy Policy page**
2. **Add client testimonials section**
3. **Implement contact form backend** (Formspree, Netlify Forms, or custom)
4. **Add blog/resources section**

### Medium-term (2-3 Months)
1. **Develop case studies pages**
2. **Add team member profiles**
3. **Create service pricing pages**
4. **Implement advanced analytics and conversion tracking**

## 📝 Content Management

### Regular Updates Needed
- Update stats and achievements
- Add new case studies and testimonials
- Keep service offerings current
- Regular blog posts for SEO

### SEO Maintenance
- Monitor Google Search Console for errors
- Update sitemap when adding new pages
- Regular performance audits
- Keyword ranking monitoring

## 🚀 Performance

- Responsive design works on all devices
- Optimized images and assets
- Minified CSS and JavaScript ready for production
- SEO-friendly URL structure and content

## 📞 Support

For technical issues or updates, contact:
- **Email**: hemantdoc@gmail.com
- **Repository**: https://github.com/hemantdoc12/causewave-website

---

**Built with**: HTML5, CSS3, JavaScript (ES6+)
**Hosted on**: GitHub Pages
**Last Updated**: September 23, 2025