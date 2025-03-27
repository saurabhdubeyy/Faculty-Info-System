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



