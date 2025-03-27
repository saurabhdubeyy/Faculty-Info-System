# Faculty Information System - VIT Bhopal

A modern, responsive web-based Faculty Information System for the School of Computer Science and Engineering at VIT Bhopal University.

![Faculty Information System](assets/images/vit1.jpg)

## Live Demo

Visit the live website at [https://saurabhdubeyy.github.io/Faculty-Info-System/](https://saurabhdubeyy.github.io/Faculty-Info-System/)

## Overview

This system provides a comprehensive platform to manage faculty information, including:

- Faculty profiles with contact information
- Academic qualifications and research interests
- Teaching assignments and courses
- Publications and research projects
- Professional activities and achievements

## Features

- **Modern UI:** Clean, responsive design that works across devices
- **Comprehensive Faculty Profiles:** Detailed faculty information
- **Search Functionality:** Easily find faculty by name, research area, or department
- **Admin Portal:** Secure interface for managing faculty data
- **Responsive Design:** Works on mobile, tablet, and desktop devices

## Technologies Used

- HTML5
- CSS3 (with CSS Variables, Flexbox, and Grid)
- JavaScript (ES6+)
- Font Awesome 5 for icons
- GitHub Pages for deployment

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/Faculty-Info-System.git
   ```

2. Open the project folder:
   ```
   cd Faculty-Info-System
   ```

3. Open `index.html` in your web browser or set up a local server:
   ```
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000` in your browser.

## Project Structure

```
Faculty-Info-System/
├── assets/                # Static assets
│   ├── css/               # CSS stylesheets
│   └── images/            # Faculty and other images
├── js/                    # JavaScript files
│   └── main.js            # Main JavaScript functionality
├── pages/                 # HTML pages
│   ├── adminportal.html   # Admin portal for managing faculty
│   ├── [faculty-name].html # Individual faculty profile pages
│   └── ...
├── .github/workflows/     # GitHub Actions workflows
│   └── deploy.yml         # Deployment workflow
├── index.html             # Main faculty listing page
└── README.md              # Project documentation
```

## Usage

### Viewing Faculty Profiles

1. Open `index.html` to view the list of all faculty members
2. Click on any faculty member's card to view their detailed profile
3. Use the search box to filter faculty by name or department

### Managing Faculty (Admin)

1. Access the admin portal via `pages/adminportal.html`
2. Add new faculty members using the "Insert New Faculty" button
3. Edit existing faculty information using the edit icons
4. Remove faculty members using the delete icons

## Deployment

The website is automatically deployed to GitHub Pages whenever changes are pushed to the main branch, using GitHub Actions.

To deploy to GitHub Pages manually:

1. Push your changes to the main branch
2. Go to the repository settings on GitHub
3. Navigate to the "Pages" section
4. Select the "main" branch and "/ (root)" folder
5. Click "Save"

## Future Enhancements

- Backend integration with a database system
- User authentication for admin portal
- Faculty login for self-management of profiles
- Publication integration with Google Scholar
- Advanced search and filtering options
- Dark mode support

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- VIT Bhopal University
- School of Computer Science and Engineering
- All faculty members who contributed their information
