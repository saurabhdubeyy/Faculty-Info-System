// Modern UI JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }
    
    // Search functionality
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.querySelector('.search-input');
    
    if (searchForm && searchInput) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            performSearchModern(searchInput.value);
        });
        
        searchInput.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                performSearchModern(this.value);
            }
        });
    }
    
    // Highlight active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.faculty-card, .dean-card, .section-title');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('animate');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
});

/**
 * Modern search functionality
 * @param {string} query - Search query
 */
function performSearchModern(query) {
    if (!query) return;
    
    query = query.toLowerCase();
    let foundAny = false;
    
    // Get all faculty cards
    const facultyCards = document.querySelectorAll('.faculty-card');
    
    facultyCards.forEach(card => {
        const cardText = card.textContent.toLowerCase();
        
        if (cardText.includes(query)) {
            // Highlight matching cards
            card.style.display = 'block';
            card.classList.add('search-match');
            foundAny = true;
        } else {
            // Hide non-matching cards
            card.style.display = 'none';
            card.classList.remove('search-match');
        }
    });
    
    // Display message for no results
    const resultsContainer = document.getElementById('searchResults');
    
    if (resultsContainer) {
        if (!foundAny) {
            resultsContainer.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search fa-3x mb-3"></i>
                    <h3>No faculty found matching "${query}"</h3>
                    <p>Try a different search term or browse all faculty members</p>
                </div>
            `;
            resultsContainer.style.display = 'block';
        } else {
            resultsContainer.innerHTML = '';
            resultsContainer.style.display = 'none';
        }
    }
    
    // Update URL for share/bookmark purposes
    const url = new URL(window.location);
    url.searchParams.set('search', query);
    window.history.replaceState({}, '', url);
    
    // Update page title to reflect search
    document.title = `Search: ${query} - VITB SCSE`;
}

// Main functionality for showing and hiding sections
document.addEventListener('DOMContentLoaded', function() {
    // Set up menu toggle for mobile
    const menuButton = document.getElementById('menu');
    const contentsMenu = document.getElementById('contents');
    
    if (menuButton && contentsMenu) {
        menuButton.addEventListener('click', function(e) {
            e.stopPropagation();
            contentsMenu.classList.toggle('show');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!contentsMenu.contains(e.target) && !menuButton.contains(e.target)) {
                contentsMenu.classList.remove('show');
            }
        });
    }
    
    // Show research section
    window.showResearch = function() {
        toggleSection('invisible1', ['invisible2', 'invisible3', 'invisible4', 'invisible5', 'invisible6', 'invisible7', 'invisible8']);
    }

    // Show publications section
    window.showPublications = function() {
        toggleSection('invisible3', ['invisible1', 'invisible2', 'invisible4', 'invisible5', 'invisible6', 'invisible7', 'invisible8']);
    }

    // Show teachings section
    window.showTeachings = function() {
        toggleSection('invisible2', ['invisible1', 'invisible3', 'invisible4', 'invisible5', 'invisible6', 'invisible7', 'invisible8']);
    }

    // Show conference section
    window.showConference = function() {
        toggleSection('invisible4', ['invisible1', 'invisible2', 'invisible3', 'invisible5', 'invisible6', 'invisible7', 'invisible8']);
    }

    // Show workshop section
    window.showWorkshop = function() {
        toggleSection('invisible5', ['invisible1', 'invisible2', 'invisible3', 'invisible4', 'invisible6', 'invisible7', 'invisible8']);
    }

    // Show thesis section
    window.showThesis = function() {
        toggleSection('invisible6', ['invisible1', 'invisible2', 'invisible3', 'invisible4', 'invisible5', 'invisible7', 'invisible8']);
    }

    // Show projects section
    window.showProjects = function() {
        toggleSection('invisible7', ['invisible1', 'invisible2', 'invisible3', 'invisible4', 'invisible5', 'invisible6', 'invisible8']);
    }

    // Show professional activities section
    window.showProfessionalActivities = function() {
        toggleSection('invisible8', ['invisible1', 'invisible2', 'invisible3', 'invisible4', 'invisible5', 'invisible6', 'invisible7']);
    }
    
    // Show timeslot section (needed for faculty pages)
    window.showtimeslot = function() {
        const timeslotElement = document.getElementById('invisible1');
        if (timeslotElement) {
            timeslotElement.classList.add('show');
        }
    }
});

/**
 * Toggle visibility of sections - show target section and hide others
 * @param {string} targetId - ID of section to show
 * @param {Array<string>} otherIds - IDs of sections to hide
 */
function toggleSection(targetId, otherIds) {
    const targetElement = document.getElementById(targetId);
    
    // Hide all other sections
    otherIds.forEach(id => {
        const element = document.getElementById(id);
        if (element && element.className.includes('show')) {
            element.className = element.className.replace(' show', '');
        }
    });
    
    // Show target section
    if (targetElement && !targetElement.className.includes('show')) {
        targetElement.className += ' show';
    }
}

// Search functionality
const searchInput = document.querySelector('.search-input');
if (searchInput) {
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            performSearch(this.value);
        }
    });
    
    const searchForm = document.querySelector('.search-box');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            performSearch(searchInput.value);
        });
    }
}

/**
 * Perform search across faculty members
 * @param {string} query - Search query
 */
function performSearch(query) {
    if (!query) return;
    
    query = query.toLowerCase();
    const facultyCards = document.querySelectorAll('.f');
    
    let foundAny = false;
    
    facultyCards.forEach(card => {
        const cardText = card.textContent.toLowerCase();
        const parentLink = card.closest('a');
        
        if (cardText.includes(query)) {
            // Highlight the matching card
            card.style.boxShadow = '0 0 15px rgba(52, 152, 219, 0.8)';
            parentLink.style.display = 'block';
            foundAny = true;
        } else {
            // Reset non-matching cards
            card.style.boxShadow = '';
            parentLink.style.display = 'none';
        }
    });
    
    // Display message if no results found
    const resultsMessage = document.getElementById('searchResults');
    if (!resultsMessage) {
        const message = document.createElement('div');
        message.id = 'searchResults';
        message.style.textAlign = 'center';
        message.style.padding = '20px';
        message.style.marginTop = '20px';
        
        const facultySection = document.getElementById('faculty');
        if (facultySection) {
            facultySection.appendChild(message);
        }
    }
    
    const messageElement = document.getElementById('searchResults');
    if (messageElement) {
        messageElement.textContent = foundAny ? '' : 'No faculty found matching your search.';
    }
}

    function showResearch() {
    var x = document.getElementById("invisible1");

    var y = document.getElementById("invisible2");
    var z = document.getElementById("invisible3");
    var a = document.getElementById("invisible4");
    var b = document.getElementById("invisible5");
    var c = document.getElementById("invisible6");
    var d = document.getElementById("invisible7");
    var e = document.getElementById("invisible8");

    

    if( y.className === "teaching show")
    {
       
        y.className = "teaching";
        
    }

    if( z.className === "publications show"){
        z.className = "publications";
    }

    if( a.className === "conference show"){
        a.className = "conference";
    }

    if( b.className === "workshop show"){
        b.className = "workshop";
    }

    if( c.className === "thesis show"){
        c.className = "thesis";
    }

    if( d.className === "projects show"){
        d.className = "projects";
    }

    if( e.className === "activities show"){
        e.className = "activities";
    }
    


    if(x.className === "research"){
        x.className += " show";
        
    }
    

   
}


function showPublications(){
    var x = document.getElementById("invisible3");


    var y = document.getElementById("invisible1");
    var z = document.getElementById("invisible2");
    var a = document.getElementById("invisible4");
    var b = document.getElementById("invisible5");
    var c = document.getElementById("invisible6");
    var d = document.getElementById("invisible7");
    var e = document.getElementById("invisible8");


    if( y.className === "research show")
    {
       
        y.className = "research";
        
    }

    if( z.className === "teaching show"){
        z.className = "teaching";
    }

    if( x.className === "publications" ){
        x.className += " show";
       
    }


    if( a.className === "conference show"){
        a.className = "conference";
    }

    if( b.className === "workshop show"){
        b.className = "workshop";
    }

    if( c.className === "thesis show"){
        c.className = "thesis";
    }

    if( d.className === "projects show"){
        d.className = "projects";
    }

    if( e.className === "activities show"){
        e.className = "activities";
    }

   
}




function showTeachings(){
    var x = document.getElementById("invisible2");
    var y = document.getElementById("invisible1");
    var z = document.getElementById("invisible3");
    var a = document.getElementById("invisible4");
    var b = document.getElementById("invisible5");
    var c = document.getElementById("invisible6");
    var d = document.getElementById("invisible7");
    var e = document.getElementById("invisible8");
   

    if( y.className === "research show")
    {
       
        y.className = "research";
        
    }

    if( z.className === "publications show"){
        z.className = "publications";
    }
    
    if(x.className === "teaching"){
        x.className += " show";
       
    }


    if( a.className === "conference show"){
        a.className = "conference";
    }

    if( b.className === "workshop show"){
        b.className = "workshop";
    }

    if( c.className === "thesis show"){
        c.className = "thesis";
    }

    if( d.className === "projects show"){
        d.className = "projects";
    }

    if( e.className === "activities show"){
        e.className = "activities";
    }

   

}



function showConference(){

    var x = document.getElementById("invisible2");
    var y = document.getElementById("invisible1");
    var z = document.getElementById("invisible3");
    var a = document.getElementById("invisible4");
    var b = document.getElementById("invisible5");
    var c = document.getElementById("invisible6");
    var d = document.getElementById("invisible7");
    var e = document.getElementById("invisible8");
   

    if( y.className === "research show")
    {
       
        y.className = "research";
        
    }

    if( z.className === "publications show"){
        z.className = "publications";
    }
    
    if(x.className === "teaching show"){
        x.className = "teaching";
       
    }


    if( a.className === "conference"){
        a.className += " show";
    }

    if( b.className === "workshop show"){
        b.className = "workshop";
    }

    if( c.className === "thesis show"){
        c.className = "thesis";
    }

    if( d.className === "projects show"){
        d.className = "projects";
    }

    if( e.className === "activities show"){
        e.className = "activities";
    }

}


function showWorkshop(){

    var x = document.getElementById("invisible2");
    var y = document.getElementById("invisible1");
    var z = document.getElementById("invisible3");
    var a = document.getElementById("invisible4");
    var b = document.getElementById("invisible5");
    var c = document.getElementById("invisible6");
    var d = document.getElementById("invisible7");
    var e = document.getElementById("invisible8");
   

    if( y.className === "research show")
    {
       
        y.className = "research";
        
    }

    if( z.className === "publications show"){
        z.className = "publications";
    }
    
    if(x.className === "teaching show"){
        x.className = "teaching";
       
    }


    if( a.className === "conference show"){
        a.className = "conference";
    }

    if( b.className === "workshop"){
        b.className += " show";
    }

    if( c.className === "thesis show"){
        c.className = "thesis";
    }

    if( d.className === "projects show"){
        d.className = "projects";
    }

    if( e.className === "activities show"){
        e.className = "activities";
    }

}


function showThesis(){
    var x = document.getElementById("invisible2");
    var y = document.getElementById("invisible1");
    var z = document.getElementById("invisible3");
    var a = document.getElementById("invisible4");
    var b = document.getElementById("invisible5");
    var c = document.getElementById("invisible6");
    var d = document.getElementById("invisible7");
    var e = document.getElementById("invisible8");
   

    if( y.className === "research show")
    {
       
        y.className = "research";
        
    }

    if( z.className === "publications show"){
        z.className = "publications";
    }
    
    if(x.className === "teaching show"){
        x.className = "teaching";
       
    }


    if( a.className === "conference show"){
        a.className = "conference";
    }

    if( b.className === "workshop show"){
        b.className = "workshop";
    }

    if( c.className === "thesis"){
        c.className += " show";
    }

    if( d.className === "projects show"){
        d.className = "projects";
    }

    if( e.className === "activities show"){
        e.className = "activities";
    }


}



function showProjects(){
    var x = document.getElementById("invisible2");
    var y = document.getElementById("invisible1");
    var z = document.getElementById("invisible3");
    var a = document.getElementById("invisible4");
    var b = document.getElementById("invisible5");
    var c = document.getElementById("invisible6");
    var d = document.getElementById("invisible7");
    var e = document.getElementById("invisible8");
   

    if( y.className === "research show")
    {
       
        y.className = "research";
        
    }

    if( z.className === "publications show"){
        z.className = "publications";
    }
    
    if(x.className === "teaching show"){
        x.className = "teaching";
       
    }


    if( a.className === "conference show"){
        a.className = "conference";
    }

    if( b.className === "workshop show"){
        b.className = "workshop";
    }

    if( c.className === "thesis show"){
        c.className = "thesis";
    }

    if( d.className === "projects"){
        d.className += " show";
    }

    if( e.className === "activities show"){
        e.className = "activities";
    }


}



function showProfessionalActivities(){
    var x = document.getElementById("invisible2");
    var y = document.getElementById("invisible1");
    var z = document.getElementById("invisible3");
    var a = document.getElementById("invisible4");
    var b = document.getElementById("invisible5");
    var c = document.getElementById("invisible6");
    var d = document.getElementById("invisible7");
    var e = document.getElementById("invisible8");
   

    if( y.className === "research show")
    {
       
        y.className = "research";
        
    }

    if( z.className === "publications show"){
        z.className = "publications";
    }
    
    if(x.className === "teaching show"){
        x.className = "teaching";
       
    }


    if( a.className === "conference show"){
        a.className = "conference";
    }

    if( b.className === "workshop show"){
        b.className = "workshop";
    }

    if( c.className === "thesis show"){
        c.className = "thesis";
    }

    
    if( d.className === "projects show"){
        d.className = "projects";
    }

    if( e.className === "activities"){
        e.className += " show";
    }


}

// Main JavaScript for Faculty Info System

document.addEventListener('DOMContentLoaded', function() {
    // Initialize components
    initNavbar();
    initFacultyFilter();
    initSearch();
    initAnimations();
    
    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Handle newsletter subscription
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterForm);
    }
});

// Navigation functionality
function initNavbar() {
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle mobile menu
    if (navbarToggle && navbarMenu) {
        navbarToggle.addEventListener('click', function() {
            navbarMenu.classList.toggle('active');
            navbarToggle.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navbarMenu && navbarMenu.classList.contains('active') && 
            !event.target.closest('.navbar-menu') && 
            !event.target.closest('.navbar-toggle')) {
            navbarMenu.classList.remove('active');
            navbarToggle.classList.remove('active');
        }
    });
    
    // Smooth scroll for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Check if the link is an anchor link
            if (href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                
                if (targetElement) {
                    // Close mobile menu
                    if (navbarMenu) {
                        navbarMenu.classList.remove('active');
                    }
                    if (navbarToggle) {
                        navbarToggle.classList.remove('active');
                    }
                    
                    // Scroll to target
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Active link on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        
        const sections = document.querySelectorAll('section[id]');
        const navHeight = document.querySelector('.navbar').offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            
            if (href === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Faculty filtering functionality
function initFacultyFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const facultyCards = document.querySelectorAll('.faculty-card');
    
    if (filterButtons.length > 0 && facultyCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Get filter value
                const filterValue = this.getAttribute('data-filter');
                
                // Filter faculty cards
                facultyCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
}

// Search functionality
function initSearch() {
    const searchForm = document.getElementById('faculty-search-form');
    const searchInput = document.getElementById('search-input');
    
    if (searchForm && searchInput) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            performSearch(searchInput.value);
        });
        
        // Search on input if more than 3 characters
        searchInput.addEventListener('input', function() {
            if (this.value.length > 2) {
                performSearch(this.value);
            } else if (this.value.length === 0) {
                resetSearch();
            }
        });
    }
}

function performSearch(query) {
    query = query.toLowerCase().trim();
    const facultyCards = document.querySelectorAll('.faculty-card');
    let resultCount = 0;
    
    if (facultyCards.length > 0) {
        facultyCards.forEach(card => {
            const name = card.querySelector('.faculty-name').textContent.toLowerCase();
            const position = card.querySelector('.faculty-position').textContent.toLowerCase();
            const specialization = card.querySelector('.faculty-specialization').textContent.toLowerCase();
            
            const contentToSearch = `${name} ${position} ${specialization}`;
            
            if (contentToSearch.includes(query)) {
                card.style.display = 'flex';
                resultCount++;
                
                // If we're in the faculty section, scroll to it
                if (resultCount === 1) {
                    const facultySection = document.getElementById('faculty');
                    if (facultySection) {
                        const navbarHeight = document.querySelector('.navbar').offsetHeight;
                        const targetPosition = facultySection.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            } else {
                card.style.display = 'none';
            }
        });
        
        // Show no results message if needed
        updateNoResultsMessage(resultCount, query);
    }
}

function resetSearch() {
    const facultyCards = document.querySelectorAll('.faculty-card');
    facultyCards.forEach(card => {
        card.style.display = 'flex';
    });
    
    // Reset filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-filter') === 'all') {
            btn.classList.add('active');
        }
    });
    
    // Hide no results message
    const noResultsMessage = document.querySelector('.no-results-message');
    if (noResultsMessage) {
        noResultsMessage.remove();
    }
}

function updateNoResultsMessage(resultCount, query) {
    // Remove existing message if present
    const existingMessage = document.querySelector('.no-results-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // If no results, show message
    if (resultCount === 0) {
        const facultySection = document.getElementById('faculty');
        if (facultySection) {
            const container = facultySection.querySelector('.container');
            const noResultsMessage = document.createElement('div');
            noResultsMessage.className = 'no-results-message';
            noResultsMessage.innerHTML = `
                <p>No faculty members found matching "<strong>${query}</strong>"</p>
                <button class="btn btn-primary" onclick="document.getElementById('search-input').value = ''; resetSearch();">
                    <i class="fas fa-times"></i> Clear Search
                </button>
            `;
            
            // Insert before faculty-cta
            const facultyCta = container.querySelector('.faculty-cta');
            container.insertBefore(noResultsMessage, facultyCta);
        }
    }
}

// Scroll animations
function initAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    if (elements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        elements.forEach(element => {
            observer.observe(element);
        });
    }
}

// Contact form handling
function handleContactForm(e) {
    e.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // You would typically send this data to a server
    // For demo purposes, we'll just show a success message
    const form = this;
    const formElements = form.elements;
    
    // Disable form elements
    for (let i = 0; i < formElements.length; i++) {
        formElements[i].disabled = true;
    }
    
    // Show loading state
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    
    // Simulate server response
    setTimeout(() => {
        // Replace form with success message
        form.innerHTML = `
            <div class="form-success">
                <i class="fas fa-check-circle"></i>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for contacting us, ${name}. We will get back to you shortly.</p>
            </div>
        `;
    }, 1500);
}

// Newsletter form handling
function handleNewsletterForm(e) {
    e.preventDefault();
    
    // Get form data
    const email = this.querySelector('input[type="email"]').value;
    
    // You would typically send this data to a server
    // For demo purposes, we'll just show a success message
    const form = this;
    const formElements = form.elements;
    
    // Disable form elements
    for (let i = 0; i < formElements.length; i++) {
        formElements[i].disabled = true;
    }
    
    // Show loading state
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    
    // Simulate server response
    setTimeout(() => {
        form.innerHTML = `<p class="newsletter-success">Thank you for subscribing! You will now receive our latest updates.</p>`;
    }, 1000);
}

// Initialize other utilities
window.resetSearch = resetSearch;



