// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "赵彬洁",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "生日快乐 🎉",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓','🎂','🎁','🎀','🎈','🎉','🎊','✨'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "你喜欢我吗?",                                    // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "I don't like you, I love you! ❤️"           // Secret hover message
        },
        second: {
            text: "How much do you love me?",                          // For the love meter
            startText: "This much!",                                   // Text before the percentage
            nextBtn: "Next ❤️"                                         // Text for the next button
        },
        third: {
            text: "I have a gift for you! 🎁 Do you want it?", // The big question!
            yesBtn: "Yes!",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "WOOOOW You love me that much?? 🥰🚀💝",  // Shows when they go past 5000%
        high: "To infinity and beyond! 🚀💝",              // Shows when they go past 1000%
        normal: "And beyond! 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "HAPPY BIRTHDAY!!! 🎉🎂🎊",
        message: "Click here for your gift!🎁",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#f8c8d2",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#d1e0e0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#f7a8b8",     // Button color (should stand out against the background)
        buttonHover: "#ffbbc1",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#5d4b6d"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/db0jdk8ej/video/upload/v1745702724/%E9%A1%8F%E4%BA%BA%E4%B8%AD_-_%E5%A5%BD%E5%96%9C%E6%AD%A1%E4%BD%A0%E5%8B%95%E6%85%8B%E6%AD%8C%E8%A9%9E%E7%B5%A6%E4%BD%A0%E4%B8%80%E6%8A%8A%E9%91%B0%E5%8C%99%E6%B0%B8%E9%81%A0%E4%BD%8F%E5%9C%A8%E6%88%91%E7%9A%84%E5%BF%83%E8%A3%8F_%E6%AD%A1%E8%BF%8E%E5%85%89%E8%87%A8_%E9%83%BD%E5%88%A5%E6%83%B3%E5%87%BA%E5%8E%BB_orwdev.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
