function scrollTo(pos) {
    window.scroll({
        behavior: "smooth",
        left: 0,
        top: pos,
    });
}

function debounce(method, delay) {
    clearTimeout(method._tId);
    method._tId = setTimeout(function () {
        method.action();
    }, delay);
}

function bindTargets() {
    console.log("targets bound");
    document.addEventListener("mouseup", (e) => {
        const menu = document.getElementById("nav-menu");
        const toggler = [].slice.call(document.getElementsByClassName("toggle-btn"));
        console.log(toggler);
        if (e.target !== menu) {
            document.getElementById("nav-menu").classList.remove("active");
            this.showSideNav = false;
        }
        if (toggler.includes(e.target)) {
            console.log(this.showSideNav);
            if (!this.showSideNav) document.getElementById("nav-menu").classList.add("active");
            else document.getElementById("nav-menu").classList.remove("active");
            this.showSideNav = !this.showSideNav;
        }
    });
    targetIds.forEach((nav) => {
        setTimeout(() => {
            nav.pos = document.getElementById(nav.target).getBoundingClientRect().top + (nav.offset || 0);
            console.log(nav.pos, "navpos", nav.target);
            if (nav?.id)
                document.getElementById(nav.id).addEventListener("mouseup", () => {
                    scrollTo(nav.pos);
                });
        }, 100);
    });
}
const targetIds = [
    { id: "navHome", target: "home" },
    { id: "embarkBtn", target: "embarkContent", offset: -100 },
    { id: "", target: "showcase", offset: -200 },
    { id: "embarkContact", target: "contact", offset: -75 },
    { id: "navApp", target: "app", offset: -20 },
    { id: "navAbout", target: "about", offset: -100 },
    { id: "navUs", target: "us", offset: -100 },
    { id: "navWork", target: "work", offset: -100 },
    // { id: "navContact", target: "contact", offset: -75 },
];

setTimeout(() => {
    window.addEventListener("scroll", () => {
        debounce(
            {
                action: () => {
                    targetIds.forEach((nav) => {
                        if (window.scrollY > nav.pos - 200) {
                            document.getElementById(nav.target).classList.add("shown");
                        } else {
                            document.getElementById(nav.target).classList.remove("shown");
                        }
                    });
                },
            },
            100
        );
    });
}, 20);

var showSideNav = false;

setTimeout(() => {
    document.getElementById("navContact").addEventListener("mouseup", () => {
        window.location.href = "mailto:halo@nexus.au.com";
    });
    document.body.classList.add("shown");
    this.bindTargets();
}, 1000);

// Get all the grid items
const gridItems = document.querySelectorAll(".grid-item");

// Create a function to check if an element is in view
function isInView(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (rect.bottom < 0) {
        // The element is above the viewport
        return false;
    } else if (rect.top >= windowHeight) {
        // The element is below the viewport
        return false;
    } else if (rect.bottom <= windowHeight) {
        // The element is fully visible
        return true;
    } else {
        // The element is partially visible
        return rect.top < windowHeight;
    }
}

// Create a function to handle the 'scroll' event
function handleScroll() {
    // Loop through all the grid items
    gridItems.forEach(function (gridItem) {
        if (isInView(gridItem)) {
            // Add the 'shown' class to the grid item if it is visible
            gridItem.classList.add("active");
        } else {
            gridItem.classList.remove("active");
        }
    });
}

// Add a 'scroll' event listener to the window
window.addEventListener("scroll", handleScroll);

// Call the handleScroll function once to initialize the 'shown' classes
handleScroll();

// Get the form and input elements
const form = document.getElementById("contact-form");
const fullnameInput = document.getElementById("fullname");
const companyInput = document.getElementById("company");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const countryInput = document.getElementById("country");
const budgetInput = document.getElementById("project-budget");

// Add an event listener to the form submission
form.addEventListener("submit", (event) => {
    // Get the values entered in the Full Name and Company fields
    const fullname = fullnameInput.value.trim();
    const company = companyInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const country = countryInput.value.trim();
    const budget = budgetInput.value.trim();

    // Update the Subject and body of the mailto link
    const subject = `Nexus Project - ${fullname} - ${company}`;
    const body = `fullname: ${fullname}\ncompany: ${company}\nemail: ${email}\nphone: ${phone}\ncountry: ${country}\nproject-budget: ${budget}\n\n${form.body.value}`;
    const mailtoLink = `mailto:halo@nexus.au.com?Subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    form.action = mailtoLink;
});
