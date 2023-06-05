const localeStrings = {
    //HERO.CONTENT
    hero_title: "<span style='color: #2558a3'>Build</span> Your <span style='color: #ee8c56'>Vision</span>",
    hero_subtitle: "Bring our ideas to life with your own custom app.",
    embarkBtn: "Explore Vision<span class='iconify' data-icon='material-symbols:arrow-circle-down'></span>",

    // EMBARK.CONTENT
    embark_content:
        "  <b>Embark</b> on a stress-free app development journey! We understand that selecting the right app developer can be difficult, so we've designed a process that puts your needs first. Start by exploring a visual prototype customized for your project, and only move forward to the development phase when you feel confident in the design. Experience the advantage of adaptable collaboration as we work together to create your app. <b>Partner with us for a client-centred experience!</b>",
    embarkContact: "Contact Us",

    //  REASON.CONTENT
    reason_title_main: "Why You Need Your Own App?",
    reason_item1_title: "<span class='iconify'data-icon='fluent:people-community-add-20-filled'></span> Enhance User Engagement",
    reason_item1_subtitle:
        "\
    In today's rapidly evolving digital landscape, delivering a personalized and captivating user experience has become a critical factor in achieving success. As users are bombarded with an ever-growing array of online content and services, it's more important than ever for businesses to differentiate themselves by providing tailor-made experiences that resonate with their target audience.",
    reason_item2_title: "<span class='iconify' data-icon='fluent:arrow-growth-24-filled'></span>Increase Revenue and ROI",
    reason_item2_subtitle: "At Nexus, we believe that you don't have to spend a fortune to have an app that is made specifically for you. With an efficient project management process, we can help you keep costs down and maximize ROI, all the while keeping app quality high.",

    // ABOUT.CONTENT
    about_title_left: "<span style='color: #2558a3'>About</span> Us",
    about_subtitle_left:
        "<b>We are a team of passionate mobile app developers</b> who are committed to creating cutting-edge digital solutions that help businesses succeed in today's fast-paced world. With a focus on innovation and user experience, we work closely with our clients to understand their unique needs and objectives, and deliver customized mobile app development solutions that exceed their expectations.",
    about_subtitle_right:
        "<b>From ideation to launch,</b> our team of experts will guide you through every step of the development process, ensuring that your app is optimized for success and stands out from the competition. With a proven track record of delivering exceptional results, we are dedicated to helping our clients achieve their business goals and realize their vision through the power of mobile technology.",

    // PERSUASION.CONTENT
    persuasion_title_main: "Why <span style='color: #2558a3'>Choose</span> Us?",
    persuasion_subtitle_main: "Welcome to our app development agency, where we specialize in creating top-notch, high-quality apps for businesses of all sizes.",
    persuasion_item1_title: "<span class='iconify' data-icon='carbon:ibm-process-mining'></span>Adaptable Process",
    persuasion_item1_subtitle:
        "At Nexus, we understand that not every development process is the same. You might be looking for just an MVP, while another client might want a full-blown app ready to be published to an app store. Still others might want just a visual prototype. Our adaptable process means we can accommodate anything in between, and you don't have to spend more than what you want to commit.",
    persuasion_item2_title: "<span class='iconify' data-icon='mdi:human-greeting-proximity'></span>We Speak Your Language",
    persuasion_item2_subtitle:
        "Our focus is on understanding and addressing our clients' business goals, and we avoid using complex technical jargon that may be confusing or unfamiliar. Instead, we communicate clearly to ensure our clients grasp the concepts, strategies, and solutions we provide, ultimately empowering them to make informed decisions for the success of their business..",

    // WORKPACE.CONTENT
    workpace_title_main: "How <span style='color: #f1884f'>We Work</span>",
    workpace_subtitle_main: "At our company, we believe in a collaborative and transparent approach to our work",
    workpace_item1_title: "<span class='iconify' data-icon='fluent:people-community-add-20-filled'></span>Gather Requirements",
    workpace_item1_subtitle:
        "We will start by understanding the business goals you want the app to help you achieve. Then, we will develop use cases to try to understand how different users will use the app. This will help inform what functionalities should be implemented and how they will be implemented.",
    workpace_item2_title: "<span class='iconify' data-icon='carbon:movement'></span>Interactive Prototyping",
    workpace_item2_subtitle: " After the initial requirements gathering and before we do any actual development, we will make an interactive visual prototype for you. This prototype will allow you to see how the resulting app will behave and how different screens flow into one another.",
    workpace_item3_title: "<span class='iconify' data-icon='mdi:map-marker-question'></span>Go or no go?",
    workpace_item3_subtitle: "After the first prototype is developed, you can review and interact with it. If you are happy with the prototype, you can decide to go ahead with the next step in the development journey.",
    workpace_item4_title: "<span class='iconify' data-icon='material-symbols:code-blocks'></span>Coding and Development",
    workpace_item4_subtitle: "After the first prototype is developed, you can review and interact with it. If you are happy with the prototype, you can decide to go ahead with the next step in the development journey.",
    workpace_item5_title: "<span class='iconify' data-icon='mdi:ab-testing'></span>Testing & Quality Assurance",
    workpace_item5_subtitle: "After the first prototype is developed, you can review and interact with it. If you are happy with the prototype, you can decide to go ahead with the next step in the development journey.",
    workpace_item6_title: "<span class='iconify' data-icon='mdi:rocket-launch'></span>Release",
    workpace_item6_subtitle:
        " After a prototype is finished, you will have a chance to test and evaluate it. If you are satisfied with it, it can be primed for release after rigorous testing and quality assurance. If you need further changes, the prototype can be further evolved to take new requirements into account   .",

    // CONTACT.CONTENT
    contact_title: "Tell Us About Your Project and Let’s Create Your Nexus Event",
    contact_phone: "<span class='iconify' data-icon='material-symbols:call'></span> +94 222 22 22",
    contact_mail: "<span class='iconify' data-icon='ic:baseline-email'></span> halo@nexus.au.com",

    // FOOTER.CONTENT
    footer_abn: "ABN: 71881526708",
    footer_address: "Perth, WA 6103, Australia",
};

// Loop through the localeStrings object and set the innerHTML of each HTML element
setTimeout(() => {
    for (let key in localeStrings) {
        let element = document.getElementById(key);
        if (element) {
            element.innerHTML = localeStrings[key];
        }
    }
}, 500);

const localeImages = {
    branding_logo: "./public/media/colored-logo.svg",
    blue_cube: "./public/media/assets/blue-cube.svg",
    orange_cube: "./public/media/assets/orange-cube.svg",
    mockup_1: "./public/media/mockup_1.png",
    mockup_2: "./public/media/mockup_2.png",
    mockup_3: "./public/media/mockup_3.png",
    mockup_4: "./public/media/mockup_4.png",
    stock_1: "./public/media/splash_1.png",
    stock_2: "./public/media/splash_2.png",
    stock_3: "./public/media/persuasion.jpg",
    workpace_img: "./public/media/worksteps.png",
};

for (const key in localeImages) {
    const elements = document.querySelectorAll(`.${key}`);
    elements.forEach((element) => {
        element.src = localeImages[key];
    });
}
