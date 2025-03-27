# Faculty Information System - VIT Bhopal

A modern, responsive web-based Faculty Information System for the School of Computer Science and Engineering at VIT Bhopal University.

![Faculty Information System](photos/vit1.jpg)

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

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/faculty-info-system.git
   ```

2. Open the project folder:
   ```
   cd faculty-info-system
   ```

3. Open `index.html` in your web browser or set up a local server:
   ```
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000` in your browser.

## Project Structure

```
Faculty-Info-System/
├── css/                   # CSS stylesheets
│   ├── index.css          # Main styles for homepage
│   ├── myStyle.css        # Styles for faculty profile pages
│   ├── adminportal.css    # Styles for admin portal
│   └── ...
├── photos/                # Faculty and other images
├── index.html             # Main faculty listing page
├── adminportal.html       # Admin portal for managing faculty
├── INSERT NEW FACULTY FORM.html  # Form to add new faculty
├── viewScript.js          # JavaScript for interactive features
├── [faculty-name].html    # Individual faculty profile pages
└── README.md              # Project documentation
```

## Usage

### Viewing Faculty Profiles

1. Open `index.html` to view the list of all faculty members
2. Click on any faculty member's card to view their detailed profile
3. Use the search box to filter faculty by name or department

### Managing Faculty (Admin)

1. Access the admin portal via `adminportal.html`
2. Add new faculty members using the "Insert New Faculty" button
3. Edit existing faculty information using the edit icons
4. Remove faculty members using the delete icons

## Future Enhancements

- Backend integration with a database system
- User authentication for admin portal
- Faculty login for self-management of profiles
- Publication integration with Google Scholar
- Advanced search and filtering options
- Improved mobile responsiveness
- Dark mode support

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- VIT Bhopal University
- School of Computer Science and Engineering
- All faculty members who contributed their information
