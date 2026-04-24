document.addEventListener("DOMContentLoaded", () => {

            const tl = gsap.timeline();

            // Badge
            tl.from(".hero-badge", {
                y: 40,
                opacity: 0,
                duration: 0.6,
                delay: 0.4
            });

            // Heading (split effect feel)
            tl.from(".hero h1", {
                y: 40,
                opacity: 0,
                duration: 0.8
            });

            // Subtext
            tl.from(".hero-sub", {
                y: 30,
                opacity: 0,
                duration: 0.7
            });

            // Buttons
           tl.fromTo(".hero-btns button",
                {y: 30,opacity: 0},
                {y: 0,opacity: 1,duration: 0.6, stagger: 0.6},
           );

            // Stats (nice stagger pop)
            tl.from(".stat-item", {
                y: 30,
                opacity: 0,
                duration: 0.6,
                stagger: 0.15
            });
        });