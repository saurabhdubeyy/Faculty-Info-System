// Faculty Information System - Data
const facultyData = {
    // Basic stats
    stats: {
        facultyCount: 48,
        departmentsCount: 5,
        researchProjects: 32,
        publications: 237
    },
    
    // Dean information
    dean: {
        name: "Dr. Samantha Wilson",
        photo: "assets/images/dean.jpg",
        position: "Dean, School of Computer Sciences",
        email: "dean.cs@university.edu",
        phone: "+1 (555) 123-4567",
        quote: "Our faculty is dedicated to nurturing the next generation of innovators and leaders in computer science and engineering. We strive for excellence in both teaching and research."
    },
    
    // Departments
    departments: [
        {
            id: "cs",
            name: "Computer Science",
            description: "Focuses on the theoretical foundations of computation and practical techniques for their application.",
            icon: "fas fa-laptop-code",
            color: "#4285F4"
        },
        {
            id: "is",
            name: "Information Systems",
            description: "Studies the intersection of people, organizations, and technology in support of business operations.",
            icon: "fas fa-database",
            color: "#34A853"
        },
        {
            id: "ai",
            name: "Artificial Intelligence",
            description: "Specializes in creating systems that can perform tasks that typically require human intelligence.",
            icon: "fas fa-brain",
            color: "#FBBC05"
        },
        {
            id: "nw",
            name: "Networks & Security",
            description: "Focuses on computer networks, telecommunications, and cybersecurity.",
            icon: "fas fa-shield-alt",
            color: "#EA4335"
        },
        {
            id: "se",
            name: "Software Engineering",
            description: "Dedicated to the design, development, and maintenance of software systems.",
            icon: "fas fa-code-branch",
            color: "#8E44AD"
        }
    ],
    
    // Faculty members
    faculty: [
        {
            id: "jsmith",
            name: "Dr. John Smith",
            photo: "assets/images/faculty/john-smith.jpg",
            position: "Professor",
            department: "cs",
            specialization: "Algorithms and Computational Complexity",
            email: "john.smith@university.edu",
            phone: "+1 (555) 123-4500",
            office: "CS Building, Room 301",
            education: "Ph.D. in Computer Science, MIT",
            bio: "Dr. Smith specializes in algorithm design and computational complexity theory. He has published over 50 papers and has received multiple awards for his research.",
            social: {
                website: "https://www.johnsmith.edu",
                linkedin: "https://www.linkedin.com/in/johnsmith",
                twitter: "https://twitter.com/johnsmith"
            }
        },
        {
            id: "mjohnson",
            name: "Dr. Maria Johnson",
            photo: "assets/images/faculty/maria-johnson.jpg",
            position: "Associate Professor",
            department: "ai",
            specialization: "Machine Learning and Neural Networks",
            email: "maria.johnson@university.edu",
            phone: "+1 (555) 123-4501",
            office: "AI Lab, Room 205",
            education: "Ph.D. in Computer Science, Stanford University",
            bio: "Dr. Johnson's research focuses on deep learning algorithms and their applications in computer vision. She has led several projects funded by NSF and industry partners.",
            social: {
                website: "https://www.mariajohnson.edu",
                linkedin: "https://www.linkedin.com/in/mariajohnson",
                google_scholar: "https://scholar.google.com/citations?user=mariajohnson"
            }
        },
        {
            id: "achen",
            name: "Dr. Alice Chen",
            photo: "assets/images/faculty/alice-chen.jpg",
            position: "Assistant Professor",
            department: "is",
            specialization: "Data Analytics and Business Intelligence",
            email: "alice.chen@university.edu",
            phone: "+1 (555) 123-4502",
            office: "IS Building, Room 412",
            education: "Ph.D. in Information Systems, UC Berkeley",
            bio: "Dr. Chen studies how organizations can leverage data analytics for business intelligence. Her work has been published in leading journals and she collaborates with several Fortune 500 companies.",
            social: {
                linkedin: "https://www.linkedin.com/in/alicechen",
                twitter: "https://twitter.com/alicechen",
                google_scholar: "https://scholar.google.com/citations?user=alicechen"
            }
        },
        {
            id: "kwilliams",
            name: "Dr. Kevin Williams",
            photo: "assets/images/faculty/kevin-williams.jpg",
            position: "Professor",
            department: "nw",
            specialization: "Cybersecurity and Network Protocols",
            email: "kevin.williams@university.edu",
            phone: "+1 (555) 123-4503",
            office: "Networks Building, Room 108",
            education: "Ph.D. in Computer Engineering, Georgia Tech",
            bio: "Dr. Williams is an expert in network security protocols and cryptography. He has authored three books and serves as a consultant for several government agencies on cybersecurity matters.",
            social: {
                website: "https://www.kevinwilliams.edu",
                linkedin: "https://www.linkedin.com/in/kevinwilliams",
                twitter: "https://twitter.com/kevinwilliams"
            }
        },
        {
            id: "lgarcia",
            name: "Dr. Laura Garcia",
            photo: "assets/images/faculty/laura-garcia.jpg",
            position: "Associate Professor",
            department: "se",
            specialization: "Software Testing and Quality Assurance",
            email: "laura.garcia@university.edu",
            phone: "+1 (555) 123-4504",
            office: "SE Building, Room 215",
            education: "Ph.D. in Software Engineering, Carnegie Mellon University",
            bio: "Dr. Garcia's research focuses on automated software testing techniques and quality assurance methodologies. She collaborates with industry partners on improving testing processes for critical systems.",
            social: {
                website: "https://www.lauragarcia.edu",
                linkedin: "https://www.linkedin.com/in/lauragarcia",
                github: "https://github.com/lauragarcia"
            }
        },
        {
            id: "rnguyen",
            name: "Dr. Robert Nguyen",
            photo: "assets/images/faculty/robert-nguyen.jpg",
            position: "Assistant Professor",
            department: "cs",
            specialization: "Programming Languages and Compilers",
            email: "robert.nguyen@university.edu",
            phone: "+1 (555) 123-4505",
            office: "CS Building, Room 305",
            education: "Ph.D. in Computer Science, University of Washington",
            bio: "Dr. Nguyen works on the design and implementation of programming languages and compiler optimizations. His recent projects focus on improving compile-time performance for large codebases.",
            social: {
                linkedin: "https://www.linkedin.com/in/robertnguyen",
                github: "https://github.com/robertnguyen",
                google_scholar: "https://scholar.google.com/citations?user=robertnguyen"
            }
        },
        {
            id: "spalmer",
            name: "Dr. Sarah Palmer",
            photo: "assets/images/faculty/sarah-palmer.jpg",
            position: "Professor",
            department: "ai",
            specialization: "Natural Language Processing and Computational Linguistics",
            email: "sarah.palmer@university.edu",
            phone: "+1 (555) 123-4506",
            office: "AI Lab, Room 210",
            education: "Ph.D. in Computer Science, University of Edinburgh",
            bio: "Dr. Palmer is a leading expert in natural language processing with a focus on conversational AI. She has published extensively in top-tier conferences and journals in the field.",
            social: {
                website: "https://www.sarahpalmer.edu",
                linkedin: "https://www.linkedin.com/in/sarahpalmer",
                google_scholar: "https://scholar.google.com/citations?user=sarahpalmer"
            }
        },
        {
            id: "dkim",
            name: "Dr. David Kim",
            photo: "assets/images/faculty/david-kim.jpg",
            position: "Associate Professor",
            department: "is",
            specialization: "Human-Computer Interaction and User Experience",
            email: "david.kim@university.edu",
            phone: "+1 (555) 123-4507",
            office: "IS Building, Room 415",
            education: "Ph.D. in Information Science, Cornell University",
            bio: "Dr. Kim researches how humans interact with information systems and how to design more usable and accessible interfaces. His work combines principles from psychology, design, and computer science.",
            social: {
                website: "https://www.davidkim.edu",
                linkedin: "https://www.linkedin.com/in/davidkim",
                twitter: "https://twitter.com/davidkim"
            }
        },
        {
            id: "apatel",
            name: "Dr. Aisha Patel",
            photo: "assets/images/faculty/aisha-patel.jpg",
            position: "Professor",
            department: "nw",
            specialization: "Internet of Things and Wireless Networks",
            email: "aisha.patel@university.edu",
            phone: "+1 (555) 123-4508",
            office: "Networks Building, Room 112",
            education: "Ph.D. in Electrical Engineering, Purdue University",
            bio: "Dr. Patel's research centers on wireless networking protocols for IoT devices and sensor networks. She holds several patents and has led multiple industry-sponsored research projects.",
            social: {
                website: "https://www.aishapatel.edu",
                linkedin: "https://www.linkedin.com/in/aishapatel",
                google_scholar: "https://scholar.google.com/citations?user=aishapatel"
            }
        },
        {
            id: "mbrown",
            name: "Dr. Michael Brown",
            photo: "assets/images/faculty/michael-brown.jpg",
            position: "Assistant Professor",
            department: "se",
            specialization: "DevOps and Continuous Integration",
            email: "michael.brown@university.edu",
            phone: "+1 (555) 123-4509",
            office: "SE Building, Room 220",
            education: "Ph.D. in Software Engineering, University of Toronto",
            bio: "Dr. Brown specializes in software development practices, particularly DevOps methodologies and continuous integration/continuous deployment pipelines. His work aims to bridge the gap between software development and operations.",
            social: {
                linkedin: "https://www.linkedin.com/in/michaelbrown",
                github: "https://github.com/michaelbrown",
                twitter: "https://twitter.com/michaelbrown"
            }
        },
        {
            id: "ediaz",
            name: "Dr. Elena Diaz",
            photo: "assets/images/faculty/elena-diaz.jpg",
            position: "Associate Professor",
            department: "cs",
            specialization: "Theoretical Computer Science and Logic",
            email: "elena.diaz@university.edu",
            phone: "+1 (555) 123-4510",
            office: "CS Building, Room 310",
            education: "Ph.D. in Computer Science, ETH Zurich",
            bio: "Dr. Diaz works on formal methods, logic, and verification of software systems. Her theoretical contributions have practical applications in ensuring the correctness of safety-critical software.",
            social: {
                website: "https://www.elenadiaz.edu",
                linkedin: "https://www.linkedin.com/in/elenadiaz",
                google_scholar: "https://scholar.google.com/citations?user=elenadiaz"
            }
        },
        {
            id: "tlee",
            name: "Dr. Thomas Lee",
            photo: "assets/images/faculty/thomas-lee.jpg",
            position: "Professor",
            department: "ai",
            specialization: "Computer Vision and Robotics",
            email: "thomas.lee@university.edu",
            phone: "+1 (555) 123-4511",
            office: "AI Lab, Room 215",
            education: "Ph.D. in Robotics, Carnegie Mellon University",
            bio: "Dr. Lee conducts research at the intersection of computer vision, machine learning, and robotics. His lab develops algorithms for autonomous systems that can perceive and interact with their environment.",
            social: {
                website: "https://www.thomaslee.edu",
                linkedin: "https://www.linkedin.com/in/thomaslee",
                github: "https://github.com/thomaslee"
            }
        }
    ],
    
    // Research highlights
    research: [
        {
            title: "AI for Healthcare Diagnostics",
            description: "Using machine learning algorithms to improve early detection of diseases through medical imaging analysis.",
            leaders: ["Dr. Maria Johnson", "Dr. Sarah Palmer"],
            image: "assets/images/research/ai-healthcare.jpg"
        },
        {
            title: "Secure IoT Framework",
            description: "Developing a comprehensive security framework for Internet of Things devices in smart city applications.",
            leaders: ["Dr. Kevin Williams", "Dr. Aisha Patel"],
            image: "assets/images/research/iot-security.jpg"
        },
        {
            title: "Human-Centered Software Design",
            description: "Investigating methodologies for creating software that better addresses human needs and cognitive processes.",
            leaders: ["Dr. Laura Garcia", "Dr. David Kim"],
            image: "assets/images/research/human-centered.jpg"
        },
        {
            title: "Quantum Computing Algorithms",
            description: "Exploring novel algorithms that can leverage quantum computing capabilities for traditional computing problems.",
            leaders: ["Dr. John Smith", "Dr. Elena Diaz"],
            image: "assets/images/research/quantum-computing.jpg"
        }
    ]
};

// Export the data for use in other scripts
window.facultyData = facultyData; 