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

// Modern UI JavaScript functionality for Faculty Info System
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Tab functionality for faculty profile
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    if (tabLinks.length > 0) {
        tabLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all tabs
                tabLinks.forEach(tab => tab.classList.remove('active'));
                tabPanes.forEach(pane => pane.classList.remove('active'));
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                // Show corresponding tab content
                const tabId = this.getAttribute('data-tab');
                const tabPane = document.getElementById(tabId);
                if (tabPane) {
                    tabPane.classList.add('active');
                }
            });
        });
    }
    
    // Search functionality
    const searchForm = document.getElementById('facultySearch');
    const searchInput = document.getElementById('searchInput');
    
    if (searchForm && searchInput) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            performSearchModern(searchInput.value);
        });
        
        searchInput.addEventListener('keyup', function() {
            if (this.value.length > 2) {
                performSearchModern(this.value);
            } else if (this.value.length === 0) {
                // Show all faculty if search is cleared
                resetSearch();
            }
        });
    }
    
    // Highlight active navigation link
    highlightActiveNavLink();
    
    // Animation on scroll
    animateOnScroll();
});

// Legacy functions for backward compatibility (these will still work with old pages)
function showtimeslot() {
    showSection('invisible1');
}

function showTeachings() {
    showSection('invisible2');
}

function showPublications() {
    showSection('invisible3');
}

function showProjects() {
    showSection('invisible7');
}

function showProfessionalActivities() {
    showSection('invisible8');
}

function showSection(id) {
    // Hide all sections
    const sections = document.querySelectorAll('.sect section');
    sections.forEach(section => {
        section.classList.remove('show');
    });
    
    // Show the selected section
    const selectedSection = document.getElementById(id);
    if (selectedSection) {
        selectedSection.classList.add('show');
    }
}

// Modern search functionality
function performSearchModern(query) {
    query = query.toLowerCase().trim();
    const facultyCards = document.querySelectorAll('.faculty-card');
    let resultCount = 0;
    
    if (facultyCards.length > 0) {
        facultyCards.forEach(card => {
            const facultyName = card.querySelector('h3').textContent.toLowerCase();
            const facultyPosition = card.querySelector('p').textContent.toLowerCase();
            const facultyInfo = facultyName + ' ' + facultyPosition;
            
            if (facultyInfo.includes(query)) {
                card.style.display = 'block';
                resultCount++;
            } else {
                card.style.display = 'none';
            }
        });
        
        // Update URL and page title with search query
        if (query.length > 0) {
            const newUrl = new URL(window.location);
            newUrl.searchParams.set('search', query);
            window.history.replaceState({}, '', newUrl);
            document.title = `Search: ${query} - Faculty Info System`;
            
            // Show "no results" message if needed
            updateNoResultsMessage(resultCount, query);
        } else {
            resetSearch();
        }
    }
}

function resetSearch() {
    // Reset URL and title
    const newUrl = new URL(window.location);
    newUrl.searchParams.delete('search');
    window.history.replaceState({}, '', newUrl);
    document.title = 'Faculty Info System - VIT Bhopal';
    
    // Show all faculty cards
    const facultyCards = document.querySelectorAll('.faculty-card');
    facultyCards.forEach(card => {
        card.style.display = 'block';
    });
    
    // Hide "no results" message
    const noResultsMsg = document.querySelector('.no-results');
    if (noResultsMsg) {
        noResultsMsg.style.display = 'none';
    }
}

function updateNoResultsMessage(resultCount, query) {
    let noResultsMsg = document.querySelector('.no-results');
    
    if (resultCount === 0) {
        if (!noResultsMsg) {
            noResultsMsg = document.createElement('div');
            noResultsMsg.className = 'no-results';
            const facultySection = document.querySelector('.faculty-grid');
            if (facultySection) {
                facultySection.parentNode.insertBefore(noResultsMsg, facultySection.nextSibling);
            }
        }
        
        noResultsMsg.innerHTML = `
            <p>No faculty members found matching "<strong>${query}</strong>"</p>
            <button class="btn" onclick="resetSearch()">
                <i class="fas fa-times"></i> Clear Search
            </button>
        `;
        noResultsMsg.style.display = 'block';
    } else if (noResultsMsg) {
        noResultsMsg.style.display = 'none';
    }
}

function highlightActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        
        if (currentPath.endsWith(linkPath) || 
            (currentPath.includes('/faculty/') && linkPath === 'index.html')) {
            link.classList.add('active');
        }
    });
}

function animateOnScroll() {
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    if (animateElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });
        
        animateElements.forEach(element => {
            observer.observe(element);
        });
    }
}

// Check for URL params on page load
window.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');
    
    if (searchQuery) {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.value = searchQuery;
            performSearchModern(searchQuery);
        }
    }
});



