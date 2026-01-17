// Portfolio Data
const portfolioData = {
    about: {
        title: "About Me",
        content: `
            <div class="section-content">
                <p>> Name: Nhut Phung</p>
                <p>> Role: Electrical Engineering Student & Hardware/Software Developer</p>
                <p>> Location: Arlington, TX</p>
                <p>> University: University of Texas at Arlington</p>
                <p>> GPA: 3.49</p>
                <p>> Expected Graduation: December 2027</p>
                <br>
                <p>> I'm a passionate electrical engineering student with hands-on experience in both hardware and software development. My work spans from embedded systems and PCB design to full-stack development and AI integration. Currently working as a Manufacturing Intern at Siemens, I'm constantly exploring the intersection of electrical engineering and software to build innovative solutions.</p>
                <br>
                <p>> When I'm not designing circuits or writing code, you'll find me leading the Society of Asian Scientists and Engineers as Treasurer, managing budgets over $40,000 and organizing impactful events for fellow engineers.</p>
            </div>
        `
    },
    
    education: {
        title: "Education",
        content: `
            <div class="section-content">
                <div class="item-block">
                    <div class="item-header">
                        <div class="item-title">University of Texas at Arlington</div>
                        <div class="item-meta">Arlington, TX</div>
                    </div>
                    <div class="item-subtitle">Bachelor of Science in Electrical Engineering</div>
                    <div class="item-subtitle">GPA: 3.49 | Expected Graduation: December 2027</div>
                </div>
            </div>
        `
    },
    
    experience: {
        title: "Professional Experience",
        content: `
            <div class="section-content">
                <div class="item-block">
                    <div class="item-header">
                        <div class="item-title">Manufacturing Intern - Siemens</div>
                        <div class="item-meta">Jan 2026 - Present</div>
                    </div>
                    <div class="item-subtitle">Fort Worth, TX</div>
                    <div class="tech-tags">
                        <span class="tech-tag">Zuken</span>
                        <span class="tech-tag">Wire Harnessing</span>
                        <span class="tech-tag">Lean Manufacturing</span>
                        <span class="tech-tag">BOMs</span>
                        <span class="tech-tag">Operation Management</span>
                    </div>
                    <ul class="item-description">
                        <li>Spearheaded improvement projects within the Wiring Assembly department to identify and eliminate non-value-add activities, resulting in streamlined production workflows for electrical switchboards</li>
                        <li>Served as primary technical bridge between Siemens and outsourcing vendors, managing the accuracy of engineering drawings, wire lists, and Bills of Materials (BOM) to ensure seamless execution of outsource assemblies</li>
                        <li>Analyzed complex wiring contents for current and future customer contracts to define scopes of work and supported pilot programs for new product introductions using Zuken software and schematic reviews</li>
                    </ul>
                </div>

                <div class="item-block">
                    <div class="item-header">
                        <div class="item-title">Avionics Intern - Bell Flight</div>
                        <div class="item-meta">Feb 2025 - Dec 2025</div>
                    </div>
                    <div class="item-subtitle">Hurst, TX</div>
                    <div class="tech-tags">
                        <span class="tech-tag">CAMEO SysML (MBSE)</span>
                        <span class="tech-tag">ENOVIA Capital Logic Designer</span>
                        <span class="tech-tag">Azure DevOps</span>
                        <span class="tech-tag">SharePoint</span>
                    </div>
                    <ul class="item-description">
                        <li>Improved aircraft electrical performance analysis by developing Electrical Load Analysis (ELA) tools in VBA, calculating load distribution for 600+ components across 3 flight phases, enabling faster validation cycles</li>
                        <li>Enhanced system design accuracy by creating electrical schematics and wiring diagrams in Capital Harness Systems for major subsystems, including bus feeders, NXPs, PMG, and 270VDC power generation units</li>
                        <li>Increased requirements modeling efficiency by 30% through SysML MBSE workflows in Cameo, improving traceability between system-level requirements, test cases, and verification elements</li>
                    </ul>
                </div>
            </div>
        `
    },
    
    skills: {
        title: "Technical Skills",
        content: `
            <div class="section-content">
                <div class="item-block">
                    <div class="skill-category">
                        <strong>Programming Languages:</strong><br>
                        <div class="tech-tags">
                            <span class="tech-tag">C/C++</span>
                            <span class="tech-tag">Python</span>
                            <span class="tech-tag">JavaScript</span>
                            <span class="tech-tag">Verilog</span>
                            <span class="tech-tag">HTML</span>
                            <span class="tech-tag">CSS</span>
                            <span class="tech-tag">MATLAB</span>
                            <span class="tech-tag">VBA</span>
                        </div>
                    </div>
                    
                    <div class="skill-category">
                        <strong>Developer Tools:</strong><br>
                        <div class="tech-tags">
                            <span class="tech-tag">Git</span>
                            <span class="tech-tag">GitHub</span>
                            <span class="tech-tag">BitBucket</span>
                            <span class="tech-tag">Jira</span>
                            <span class="tech-tag">SysML</span>
                            <span class="tech-tag">Capital Harness Systems</span>
                            <span class="tech-tag">Linux</span>
                            <span class="tech-tag">Ubuntu</span>
                            <span class="tech-tag">Raspbian</span>
                        </div>
                    </div>
                    
                    <div class="skill-category">
                        <strong>Modeling Tools:</strong><br>
                        <div class="tech-tags">
                            <span class="tech-tag">KiCad 8.0</span>
                            <span class="tech-tag">Altium Designer</span>
                            <span class="tech-tag">Fusion 360</span>
                            <span class="tech-tag">NI Multisim</span>
                            <span class="tech-tag">Arduino IDE</span>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    
    projects: {
        title: "Projects",
        content: `
            <div class="section-content">
                <div class="item-block">
                    <div class="item-header">
                        <div class="item-title">Nand2Tetris Digital Logic PCB Visualizer</div>
                        <div class="item-meta">Nov 2025 - Present</div>
                    </div>
                    <div class="tech-tags">
                        <span class="tech-tag">Altium Designer</span>
                        <span class="tech-tag">KiCad 8.0</span>
                        <span class="tech-tag">Tinkercad</span>
                        <span class="tech-tag">HDL</span>
                        <span class="tech-tag">Git</span>
                        <span class="tech-tag">GitHub</span>
                    </div>
                    <ul class="item-description">
                        <li>Designed and simulated over 20+ logic gates/chips to build a 16-Bit Computer through HDL and abstraction, designing and simulating ALU, registers, RAM, and CPU control from scratch</li>
                        <li>Created and simulated schematics for NAND, OR, AND, and NOR chips in Altium Designer and KiCad 8.0 to make a fully functioning PCB to make a physical visualization of these four digital logic gates</li>
                        <li>Designed Hack ALU from pre-existing abstractions of 16 Bit Adders, 4 Way Multiplexer, and 16 Bit Multipliers</li>
                    </ul>
                </div>

                <div class="item-block">
                    <div class="item-header">
                        <div class="item-title">Plant AI Study Buddy (Lead)</div>
                        <div class="item-meta">Aug 2025 - Sept 2025</div>
                    </div>
                    <div class="tech-tags">
                        <span class="tech-tag">FastAPI</span>
                        <span class="tech-tag">RESTful API</span>
                        <span class="tech-tag">PyTorch</span>
                        <span class="tech-tag">Modal</span>
                        <span class="tech-tag">C++</span>
                        <span class="tech-tag">Arduino IDE</span>
                        <span class="tech-tag">Python</span>
                        <span class="tech-tag">OSS-20B</span>
                        <span class="tech-tag">I2C</span>
                    </div>
                    <ul class="item-description">
                        <li>Developed an AI-powered plant study assistant by integrating data protocol I2C on an ESP32-S3 to obtain real-time sensor data from 3 environmental parameters</li>
                        <li>Transmitted data to the cloud via RESTful API (POST/GET) to support data ingestion, chat, status, and integrated GPT-OSS-20B model to generate contextual plant responses across 4 different mood states</li>
                    </ul>
                </div>

                <div class="item-block">
                    <div class="item-header">
                        <div class="item-title">Jobright.ai Job Bot Tracker</div>
                        <div class="item-meta">Aug 2025 - Sept 2025</div>
                    </div>
                    <div class="tech-tags">
                        <span class="tech-tag">Python</span>
                        <span class="tech-tag">Discord.py</span>
                        <span class="tech-tag">Regex</span>
                        <span class="tech-tag">Asyncio</span>
                        <span class="tech-tag">JSON</span>
                        <span class="tech-tag">REST APIs</span>
                        <span class="tech-tag">Raspberry Pi</span>
                        <span class="tech-tag">Raspbian</span>
                    </div>
                    <ul class="item-description">
                        <li>Automated job tracking workflow by building a Discord bot that fetches, parses, and posts 50+ new listings daily using the Discord.py and Asyncio libraries</li>
                        <li>Increased reliability of postings by implementing a JSON-based cache system that reduced duplicate job posts by 100% across sessions</li>
                        <li>Deployed on a Raspberry Pi using virtual environments and dotenv for secure API key management and 24/7 uptime</li>
                    </ul>
                </div>

                <div class="item-block">
                    <div class="item-header">
                        <div class="item-title">Smart Air Purifier with Microgrid-Integrated Power Management (Lead)</div>
                        <div class="item-meta">Jan 2025 - May 2025</div>
                    </div>
                    <div class="tech-tags">
                        <span class="tech-tag">Arduino IDE</span>
                        <span class="tech-tag">C++</span>
                        <span class="tech-tag">PSPICE</span>
                        <span class="tech-tag">LTSpice</span>
                        <span class="tech-tag">Fusion 360</span>
                        <span class="tech-tag">UART</span>
                        <span class="tech-tag">SPI</span>
                    </div>
                    <ul class="item-description">
                        <li>Led team of 4 through planning, prototyping, budgeting, control, sensor integration and serial communications via SPI, UART</li>
                        <li>Developed real-time embedded logic in C++ for motor control</li>
                        <li>Engineered three PCB revisions using Fusion 360 Electronic integrating power management and sensory feedback</li>
                    </ul>
                </div>
            </div>
        `
    },
    
    leadership: {
        title: "Leadership Experience",
        content: `
            <div class="section-content">
                <div class="item-block">
                    <div class="item-header">
                        <div class="item-title">Society of Asian Scientists and Engineers (SASE) - Treasurer</div>
                        <div class="item-meta">May 2024 - Present</div>
                    </div>
                    <ul class="item-description">
                        <li>Co-lead a team of 17 fellow officers in producing events and manage all money coming in and out of accounts, eventually budgeting over $40,000 for all events over the span of two years</li>
                    </ul>
                </div>
            </div>
        `
    },
    
    contact: {
        title: "Contact Information",
        content: `
            <div class="section-content">
                <p>> Ready to connect? Reach out through any of these channels:</p>
                <br>
                <div class="contact-links">
                    <a href="mailto:nhutmphung@gmail.com" class="contact-link">
                        📧 Email: nhutmphung@gmail.com
                    </a>
                    <a href="https://linkedin.com/in/nhut-phung/" target="_blank" class="contact-link">
                        💼 LinkedIn: linkedin.com/in/nhut-phung/
                    </a>
                    <a href="https://github.com/nhutmphung" target="_blank" class="contact-link">
                        💻 GitHub: github.com/nhutmphung
                    </a>
                    <a href="tel:682-560-2033" class="contact-link">
                        📱 Phone: (682) 560-2033
                    </a>
                </div>
            </div>
        `
    }
};

// Boot sequence and initialization
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('bootSequence').style.display = 'none';
        document.getElementById('terminalContent').style.display = 'block';
        document.getElementById('commandInput').style.display = 'flex';
    }, 3500);
});

// Command button handlers
document.querySelectorAll('.cmd-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const section = this.getAttribute('data-section');
        displaySection(section);
    });
});

// Display section function
function displaySection(section) {
    const contentDisplay = document.getElementById('contentDisplay');
    const data = portfolioData[section];
    
    if (data) {
        contentDisplay.innerHTML = `
            <p class="prompt">nhut@portfolio:~$ ./${section}.sh</p>
            <div class="section-title">${data.title}</div>
            ${data.content}
        `;
        
        // Scroll to top of content
        document.querySelector('.terminal-body').scrollTop = 0;
    }
}

// Command line input handler
const cmdLine = document.getElementById('cmdLine');
cmdLine.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const command = this.value.trim().toLowerCase();
        handleCommand(command);
        this.value = '';
    }
});

// Command handler
function handleCommand(cmd) {
    const contentDisplay = document.getElementById('contentDisplay');
    
    // Command history
    const commandEcho = `<p class="prompt">nhut@portfolio:~$ ${cmd}</p>`;
    
    switch(cmd) {
        case 'help':
            contentDisplay.innerHTML = commandEcho + `
                <div class="section-content">
                    <p>> Available commands:</p>
                    <ul class="item-description">
                        <li>about - Learn about me</li>
                        <li>education - View my education background</li>
                        <li>experience - See my work experience</li>
                        <li>skills - Check out my technical skills</li>
                        <li>projects - Explore my projects</li>
                        <li>leadership - View leadership experience</li>
                        <li>contact - Get my contact information</li>
                        <li>clear - Clear the terminal</li>
                        <li>help - Show this help message</li>
                    </ul>
                    <br>
                    <p>> You can also click the buttons above!</p>
                </div>
            `;
            break;
            
        case 'clear':
            contentDisplay.innerHTML = `
                <p class="prompt">nhut@portfolio:~$ cat welcome.txt</p>
                <div class="ascii-art">
<pre>
 _   _ _           _     ____  _                       
| \ | | |__  _   _| |_  |  _ \| |__  _   _ _ __   __ _ 
|  \| | '_ \| | | | __| | |_) | '_ \| | | | '_ \ / _\` |
| |\  | | | | |_| | |_  |  __/| | | | |_| | | | | (_| |
|_| \_|_| |_|\__,_|\__| |_|   |_| |_|\__,_|_| |_|\__, |
                                                  |___/ 
</pre>
                </div>
                <p class="intro-text">
                    > Electrical Engineering Student | Hardware & Software Developer<br>
                    > University of Texas at Arlington | GPA: 3.49<br>
                    > Expected Graduation: December 2027<br><br>
                    > Type a command or click a button above to explore my portfolio...<br>
                </p>
            `;
            break;
            
        case 'about':
        case 'education':
        case 'experience':
        case 'skills':
        case 'projects':
        case 'leadership':
        case 'contact':
            displaySection(cmd);
            break;
            
        default:
            contentDisplay.innerHTML = commandEcho + `
                <p style="color: #ff6666;">> Command not found: ${cmd}</p>
                <p>> Type 'help' for available commands</p>
            `;
    }
    
    document.querySelector('.terminal-body').scrollTop = 0;
}

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        const contentDisplay = document.getElementById('contentDisplay');
        contentDisplay.innerHTML = `
            <p class="prompt">nhut@portfolio:~$ ./secret.sh</p>
            <div class="ascii-art">
<pre>
    ⚡ KONAMI CODE ACTIVATED ⚡
    
    You found the secret! 
    
    Fun fact: This portfolio was built 
    with pure HTML, CSS, and JavaScript
    to recreate that nostalgic Unix feel.
    
    Thanks for exploring! 🚀
</pre>
            </div>
        `;
    }
});