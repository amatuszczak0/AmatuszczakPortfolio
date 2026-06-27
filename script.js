// ###########################################################################
//   HIDE TRANSLATED ELEMENTS BEFORE FIRST PAINT
//   Zapobiega miganiu tekstu przed podmianą przez i18n
// ###########################################################################

(function() {
    const lang = localStorage.getItem('lang') ||
                 (navigator.language.startsWith('pl') ? 'pl' : 'en');

    // Jeśli język to EN (domyślny w HTML) — nic nie rób, tekst jest już poprawny
    if (lang === 'en') return;

    // Dla PL — ukryj elementy do czasu podmany przez DOMContentLoaded
    const style = document.createElement('style');
    style.id = '__i18n_hide';
    style.textContent = '[data-i18n], [data-i18n-html] { opacity: 0 !important; }';
    document.head.appendChild(style);
})();

// ###########################################################################
//   SITE CONFIG
// ###########################################################################

const SITE_CONFIG = {
    contact: {
        email:     'work@amatuszczak.com',
        emailHref: 'mailto:work@amatuszczak.com',
        phone:     '+48 505 410 450',
        phoneHref: 'tel:+48505410450',
    },
    socials: {
        instagram: {
            handle: '@a.matuszczak',
            href:   'https://www.instagram.com/a.matuszczak/',
        },
        behance: {
            handle: 'antoni_matuszczak',
            href:   'https://www.behance.net/antonimatuszczak',
        },
        facebook: {
            handle: 'Antek Matuszczak',
            href:   'https://www.facebook.com/profile.php?id=100090816840774&locale=pl_PL',
        },
    },
    credits: {
        photosAuthor:     'Jan Nowacki',
        photosAuthorHref: 'https://www.instagram.com/vjanekv/',
    },
};

// ###########################################################################
//   TRANSLATIONS
// ###########################################################################

const translations = {
    en: {
        // NAV
        nav_about:   'About',
        nav_contact: 'Contact Me',
        nav_work:    'Work',

        // BREADCRUMBS
        breadcrumb_home:      'Home',
        breadcrumb_manifesto: 'Manifesto',
        breadcrumb_projects:  'Projects',
        breadcrumb_info:      'Info',

        // HERO — brand name stays the same in both languages, no key needed

        // MANIFESTO
        manifesto_line1: 'Design is not decoration. It\'s direction.',
        manifesto_line2: 'It shapes how things are seen, and how they\'re remembered.',
        manifesto_line3: 'Make it count.',
        manifesto_role:  'Visual / Graphic<br>Designer',

        // PROJECTS (index)
        projects_title:  'Projects',
        project1_desc:   'Hundread Bars is a streetwear brand inspired by snowboard culture and street art aesthetics.',
        see_all_projects: 'See All Projects →',

        // ABOUT
        about_title:   'About',
        about_block1:  'In my work, I focus on clarity, balance, and intentional composition. I believe a good design should guide attention naturally while maintaining its own distinct character.',
        about_block2:  'The area I connect with most is branding mixed with street art–inspired aesthetics. I enjoy combining the raw energy of graffiti with modern, clean design.',
        about_block3:  'The contrast between expressive forms and minimal compositions often creates the most distinctive visuals. Every project is an opportunity to balance structure with personality.',
        about_story1_p1: 'Graphic design started for me as simple curiosity — experimenting with creating "something cool" using only a mouse at the age of 12.',
        about_story1_p2: 'Over time, I realized that design is much more than just making visuals look good. A well-designed poster, visual identity, or website can capture attention without relying on chaos or excessive effects.',
        about_story2_p1: 'I work mainly with Adobe Illustrator, Photoshop, InDesign, and XD, and I also create 3D models in Blender.',
        about_story2_p2: 'I have experience in both print and digital design, which allows me to understand not only the visual side of a project, but also its technical preparation and practical application.',
        about_story3_p1: 'I completed the fourth year of a technical secondary school focused on printing and administration, where I developed both my creative and technical approach to design.',
        about_story4_p1: 'Working on projects for different audiences taught me that every project needs its own identity and purpose. That is why I approach each project individually, aiming to create work that not only looks visually strong, but also effectively communicates its message.',
        offer_title: "What Do I Offer",
        offer_branding_title: "Branding",
        offer_branding_desc: "Unique visual language for your brand",
        offer_print_title: "Print & Digital Design",
        offer_print_desc: "Effective visuals for both physical and digital media",
        offer_art_title: "Art Direction",
        offer_art_desc: "Defining a clear creative vision for every project",
        offer_production_title: "Graphic Production",
        offer_production_desc: "Preparing, refining, and adapting visuals for real-world use",

        // CONTACT
        contact_title:  'Contact',
        contact_intro:  'Available for freelance work<br>and creative collaborations.',
        contact_block1: 'I\'m always interested in projects with a clear vision and strong identity. Whether it\'s branding, apparel design, or digital content, my goal is to create visuals that feel distinctive and purposeful.',
        contact_block2: 'I enjoy working with brands and creators who value aesthetics. If you think my style fits your project, let\'s talk.',

        // WORKS
        works_title:   'Work',
        works_intro:   'My work, my approach.',
        works_outro:   'Every project presented here follows the same principle. Good design should be clear, consistent, and memorable. Regardless of the medium, each piece is created with its own character and a clearly defined purpose.',
        works_my_work: 'My Work',
        lets_work_together: "Let's Work Together →",

        // FOOTER
        footer_role:  'Graphic Designer',
        footer_title: 'Get In Touch',
        footer_city:  'Poznań, Poland',
        footer_photos: 'Photos',
        social_instagram: 'Instagram',
        social_behance:   'Behance',
        social_facebook:  'Facebook',

        ///////////////////////////////////////////////
        //PROJECTS
        ///////////////////////////////////////////////

        // ROOM POSTERS
        RoomPosters_title: 'Room Posters',
        RoomPosters_intro:       'This poster series was created while redesigning the space around my computer workstation. The main sources of inspiration were winter landscapes, Arctic aesthetics, and a recent trip to the mountains. After mounting a pair of skis on the wall, I decided to create a set of posters that would complement and enhance the atmosphere of the space.',
        RoomPosters_outro:       'Although each poster explores a different subject, maintaining a consistent visual language across the series was a key objective. Through the deliberate use of color, composition, and graphic style, the project evolved into a collection that establishes a distinct identity.',
 
        RoomPosters_everest_title: 'Everest',
        RoomPosters_everest_p1:  'The poster depicts a mountaineer during a high-altitude ascent. At the center of the composition is an ice axe featuring the "Hundred Bands" logo, referencing the album of the same name.',
        RoomPosters_everest_p2:  'The main headline, "I just wanted to reach peaks like Everest," is taken from the song Everest by Żeamsome and Gedz, released in 2019 on the Hundred Bands album.',
        RoomPosters_everest_p3:  'The project was created as a visual interpretation of ambition, perseverance, and overcoming personal limitations. Its raw monochromatic aesthetic and pronounced grain give the piece the appearance of archival mountain photography. The distorted "EVEREST" logotype serves as the dominant typographic element, emphasizing the intensity of the climb, the challenges involved, and the monumental nature of the mountain itself.',
 
        RoomPosters_salomon_title: 'Salomon Streetracer',
        RoomPosters_salomon_p1:  'This poster was created as a graphic interpretation of the design language of the Salomon Streetracer skis, which are displayed as part of my room\'s interior. The distinctive styling of this early-2000s model served as the starting point for a project that combines winter sports aesthetics with a contemporary graphic approach.',
        RoomPosters_salomon_p2:  'The central section of the composition features a mountain landscape overlaid with an enlarged, pixelated Salomon logo. The upper portion of the poster draws inspiration from the markings and details found directly on the skis, including the characteristic "Streetracer" lettering, which functions as the primary typographic element.',
 
        RoomPosters_josa_title:  'Just One Step Ahead',
        RoomPosters_josa_p1:     '"Just One Step Ahead" was the first poster created in the series. From the beginning, the concept was simple: to produce a winter-themed design using a minimal number of visual elements. The final composition is built around two dark silhouettes making their way through a snow-covered landscape in harsh weather conditions.',
        RoomPosters_josa_p2:     'The large amount of negative space emphasizes the severity of the environment and a sense of isolation, while directing attention toward the figures and the message placed above them. The phrase "Just One Step Ahead" serves as the central idea of the project, expressing the belief that even the smallest consistent efforts can lead to significant achievements over time.',
    
        // HUNDRED BEARS

        HundredBears_desc:        'Hundread Bars is a streetwear brand inspired by snowboard culture and street art aesthetics. It combines a raw, urban identity with a cold, arctic atmosphere. The project also serves as my creative space for experimenting with new ideas, graphics, and design concepts.',
        HundredBears_coming_soon: 'Coming Soon',

        // NORR

        norr_left_text:          'Norr is an energy drink brand shaped by the logic of the Arctic. Not only as an aesthetic theme but as a way of thinking and functionality.',
        norr_right_text:         'Norr products are connected to winter, movement, and performance in cold conditions.',
        norr_vi_title:           'Visual Identity',
        norr_vi_p1:              'The Norr color system is built on reduction, inspired by the Arctic, where white, mist, and a limited palette dominate. Light shades of white and grey form the foundation, creating calm, space, and a clean structure.',
        norr_vi_p2:              'Dark colors, inspired by the Arctic sea and polar night, introduce contrast, depth, and hierarchy. Used selectively, they highlight the most important elements and strengthen the overall composition. The relationship between light and darkness reflects the Arctic landscape itself.',
        norr_logo_desc_left:     'The logo reflects direction, energy, and purpose.',
        norr_logo_right_text_1:  'The Norr logo is built on a simplified compass needle pointing north, symbolizing direction, focus, and a clear sense of purpose. Its minimal form subtly references navigation while maintaining a clean and modern appearance.',
        norr_logo_right_text_2:  'At the same time, the shape resembles a lightning bolt, representing energy, power, and dynamic movement. Together, these elements reflect Norr\'s identity as an energy drink brand, combining precision, stability, and intensity in a single mark.',
        norr_var_full_title:     'Full Logo',
        norr_var_brand_title:    'Brandmark',
        norr_var_logo_title:     'Logotype',
        norr_var_full_desc1:     'The Norr logo should always be used with restraint. It is not a decorative element, but a point of orientation within the visual system.',
        norr_var_full_desc2:     'Clear space and proportion are essential to preserve its character and readability.',
        norr_var_brand_desc1:    'The symbol and wordmark can function together or independently, depending on context and scale.',
        norr_var_brand_desc2:    'The symbol is intended for compact applications, while the full logo ensures clarity in primary brand communication.',
        norr_typo_p1:            'Chillax is the primary typeface used exclusively for the Norr logo. Its modernist character, geometric structure, and clean proportions give the wordmark a contemporary and confident appearance.',
        norr_typo_p2:            'The typeface is expressive without being decorative, allowing the logo to remain distinctive while staying aligned with the brand\'s restrained and controlled visual language. Limiting the use of Chillax to the logo ensures clarity and consistency, preventing overuse and preserving its impact.',
        norr_flavors_title:      'Energy in three versions',
        norr_flavor1_title:      'Original',
        norr_flavor1_desc:       'The classic Norr Energy flavor, providing the perfect combination of refreshment and energy for every day.',
        norr_flavor2_title:      'Zero Sugar',
        norr_flavor2_desc:       'Pure energy without sugar, created for those who want maximum stimulation without compromise.',
        norr_flavor3_title:      'Cold Mint',
        norr_flavor3_desc:       'An intensely fresh, minty flavor that instantly refreshes and energizes.',

        // MASERATI CATALOGUE
        maserati_title: 'Maserati Catalogue',
        maserati_intro: "The Maserati catalog is one of my print design projects, created to reflect the brand's elegant and luxurious character. The project was developed with careful attention to layout, typography, and color palette, resulting in an aesthetically refined publication that highlights the brand's prestige and the premium quality of the showcased vehicles.",

    },

    pl: {
        // NAV
        nav_about:   'O mnie',
        nav_contact: 'Kontakt',
        nav_work:    'Projekty',

        // BREADCRUMBS
        breadcrumb_home:      'Home',
        breadcrumb_manifesto: 'Perspektywa',
        breadcrumb_projects:  'Projekty',
        breadcrumb_info:      'Info',

        // HERO — brand name stays the same in both languages, no key needed

        // MANIFESTO
        manifesto_line1: 'Design to nie dekoracja. To kierunek.',
        manifesto_line2: 'To on decyduje, jak coś jest postrzegane i jak zostaje zapamiętane.',
        manifesto_line3: 'Dlatego każdy detal ma znaczenie.',
        manifesto_role:  'Visual / Graphic<br>Designer',

        // PROJECTS (index)
        projects_title:  'Projekty',
        project1_desc:   'Hundread Bars to streetwearowa marka odzieżowa inspirowana kulturą snowboardową i estetyką street artu. ',
        see_all_projects: 'Zobacz wszystkie projekty →',

        // ABOUT
        about_title:   'O mnie',
        about_block1:  'W swojej pracy skupiam się na przejrzystości, balansie i świadomej kompozycji. Uważam, że dobry design powinien naturalnie przyciągać uwagę, zachowując własny, wyrazisty charakter.',
        about_block2:  'Najbliższy jest mi branding połączony z estetyką inspirowaną street artem. Lubię łączyć surową energię graffiti z nowoczesnym, czystym designem.',
        about_block3:  'Kontrast między ekspresyjnymi formami a minimalistycznymi kompozycjami często tworzy najbardziej charakterystyczne wizualizacje. Każdy projekt to okazja do balansowania między strukturą a osobowością.',
        about_story1_p1: 'Wszystko zaczęło się, gdy miałem 12 lat. Z ciekawości zacząłem eksperymentować z grafiką, próbując tworzyć własne projekty przy użyciu samej myszki.',
        about_story1_p2: 'Z czasem zdałem sobie sprawę, że design to coś znacznie więcej niż tylko ładny obrazek. Dobrze zaprojektowany plakat, identyfikacja wizualna czy strona internetowa mogą przyciągać uwagę bez chaosu i zbędnych efektów.',
        about_story2_p1: 'Pracuję głównie w Adobe Illustrator, Photoshop, InDesign i XD, tworzę też modele 3D w Blenderze.',
        about_story2_p2: 'Mam doświadczenie zarówno w druku, jak i w designie cyfrowym, co pozwala mi rozumieć nie tylko wizualną stronę projektu, ale też jego techniczne przygotowanie i praktyczne zastosowanie.',
        about_story3_p1: 'Ukończyłem czwartą klasę technikum o profilu poligraficzno-administracyjnym, gdzie rozwinąłem zarówno kreatywne, jak i techniczne podejście do designu.',
        about_story4_p1: 'Praca nad projektami dla różnych odbiorców nauczyła mnie, że każdy projekt potrzebuje własnej tożsamości i celu. Dlatego podchodzę do każdego projektu indywidualnie i tworzę prace, które nie tylko wyglądają dobrze wizualnie, ale też skutecznie komunikują swój przekaz.',
        offer_title: "Co oferuję",
        offer_branding_title: "Branding",
        offer_branding_desc: "Unikalny język wizualny dla Twojej marki",
        offer_print_title: "Design print i cyfrowy",
        offer_print_desc: "Projekty graficzne na media fizyczne i cyfrowe",
        offer_art_title: "Art Direction",
        offer_art_desc: "Wyraźna wizja kreatywna dla każdego projektu",
        offer_production_title: "Produkcja graficzna",
        offer_production_desc: "Przygotowanie i optymalizacja materiałów graficznych do realnych zastosowań",
        
        // CONTACT
        contact_title:  'Kontakt',
        contact_intro:  'Dostępny do pracy freelance<br>i kreatywnych współprac.',
        contact_block1: 'Najlepiej odnajduję się w projektach, które mają własny charakter i konkretny cel. Niezależnie od tego, czy jest to identyfikacja wizualna, grafika odzieżowa czy materiały do internetu, zależy mi na tworzeniu projektów, które przyciągają uwagę i zostają w pamięci.',
        contact_block2: 'Lubię pracować z markami i twórcami, którzy cenią estetykę. Jeśli uważasz, że mój styl pasuje do twojego projektu - skontaktuj się ze mną.',

        // WORKS
        works_title:   'Projekty',
        works_intro:   'Moja praca, moje podejście.',
        works_outro:   'Każdy z tych projektów opiera się na tej samej zasadzie. Dobry design powinien być czytelny, spójny i łatwy do zapamiętania. Niezależnie od formy, każdy został stworzony z własnym charakterem i jasno określonym celem.',
        works_my_work: 'Moje projekty',
        lets_work_together: "Zacznijmy współpracę →",

        // FOOTER
        footer_role:  'Grafik / Designer',
        footer_title: 'Kontakt',
        footer_city:  'Poznań, Polska',
        footer_photos: 'Zdjęcia',
        social_instagram: 'Instagram',
        social_behance:   'Behance',
        social_facebook:  'Facebook',

        ///////////////////////////////////////////////
        //PROJECTS
        ///////////////////////////////////////////////

        // ROOM POSTERS

        RoomPosters_title:  'Plakaty Do Pokoju',
        RoomPosters_intro:  'Projekt serii plakatów powstał podczas odświeżania przestrzeni wokół stanowiska komputerowego. Inspiracją były zimowe krajobrazy, klimat arktyczny oraz niedawny wyjazd w góry. Po umieszczeniu w pokoju nart pojawił się pomysł stworzenia zestawu plakatów, które dopełniłyby ten charakter.',
        RoomPosters_outro:  'Choć każdy plakat porusza inny temat, podczas projektowania zależało mi na zachowaniu spójnej estetyki i wspólnego klimatu. Dzięki konsekwentnemu wykorzystaniu kolorystyki, kompozycji i stylu graficznego powstała seria prac, która tworzy jednolitą kolekcję.',
 
        RoomPosters_everest_title: 'Everest',
        RoomPosters_everest_p1:  'Plakat przedstawia alpinistę podczas wspinaczki wysokogórskiej. Centralnym elementem kompozycji jest czekan z logo „Hundred Bands", nawiązujący do albumu o tej samej nazwie.',
        RoomPosters_everest_p2:  'Główny napis „I just wanted to reach peaks like Everest" pochodzi z utworu „Everest" autorstwa Zeamsone i Gedza, wydanego w 2019 roku na albumie Hundred Bands.',
        RoomPosters_everest_p3:  'Projekt powstał jako wizualna interpretacja motywu dążenia do celu i pokonywania własnych ograniczeń. Surowa, monochromatyczna estetyka oraz wyraźne ziarno nadają pracy charakter przypominający archiwalną fotografię górską. Zdeformowany logotyp „EVEREST" został wykorzystany jako dominujący element typograficzny, podkreślający dynamikę, trud wspinaczki oraz monumentalność samej góry.',
 
        RoomPosters_salomon_title: 'Salomon Streetracer',
        RoomPosters_salomon_p1:  'Projekt powstał jako graficzna interpretacja wzornictwa nart Salomon Streetracer, które stanowią jeden z elementów wystroju mojego pokoju. Charakterystyczny design tego modelu z początku lat 2000 stał się punktem wyjścia do stworzenia plakatu łączącego estetykę sportów zimowych z nowoczesną formą graficzną.',
        RoomPosters_salomon_p2:  'Centralną część kompozycji stanowi górski krajobraz, na którym umieszczono przeskalowane, pikselizowane logo marki Salomon. Górna sekcja plakatu została zainspirowana oznaczeniami i detalami znajdującymi się bezpośrednio na nartach, w tym charakterystycznym napisem „Streetracer", który pełni rolę głównego elementu typograficznego.',
 
        RoomPosters_josa_title:  'Just One Step Ahead',
        RoomPosters_josa_p1:     '„Just One Step Ahead" był pierwszym projektem z całej serii plakatów. Od początku założenie było proste — stworzyć pracę utrzymaną w zimowym klimacie, wykorzystując minimalną liczbę elementów wizualnych. Efektem jest kompozycja oparta na dwóch ciemnych sylwetkach przemierzających zaśnieżony krajobraz w trudnych warunkach pogodowych.',
        RoomPosters_josa_p2:     'Dominująca biała przestrzeń podkreśla surowość zimowego otoczenia oraz poczucie izolacji, jednocześnie kierując uwagę odbiorcy na postacie i umieszczony nad nimi komunikat. Hasło „Just One Step Ahead" stanowi główną ideę projektu i odnosi się do przekonania, że nawet niewielkie działania podejmowane konsekwentnie mogą prowadzić do osiągania ambitnych celów.',
    
        // HUNDRED BEARS

        HundredBears_desc:        'Hundread Bars to streetwearowa marka odzieżowa inspirowana kulturą snowboardową i estetyką street artu. Łączy surowy, miejski charakter z zimowym i arktycznym klimatem. Projekt stanowi również moją kreatywną przestrzeń do eksperymentowania z nowymi pomysłami, grafikami i koncepcjami,',
        HundredBears_coming_soon: 'Wkrótce',

        // NORR

        norr_left_text:          'Norr to marka energetyków czerpiąca z charakteru północy. To oparte jest na funkcjonalności, wytrzymałości i świadomym projektowaniu.',
        norr_right_text:         'Produkty Norr są stworzone z myślą o zimie, ruchu i osiągach w niskich temperaturach.',
        norr_vi_title:           'Identyfikacja Wizualna',
        norr_vi_p1:              'System kolorystyczny Norr opiera się na prostocie inspirowanej Arktyką, gdzie dominują biel, mgła i ograniczona paleta barw. Jasne odcienie bieli i szarości stanowią fundament identyfikacji, tworząc poczucie przestrzeni, spokoju i porządku.',
        norr_vi_p2:              'Ciemne kolory, inspirowane arktycznym morzem i nocą, wprowadzają kontrast, głębię i hierarchię. Stosowane w przemyślany sposób podkreślają najważniejsze elementy oraz wzmacniają kompozycję. Relacja między bielą a ciemnością odzwierciedla sam arktyczny krajobraz.',
        norr_logo_desc_left:     'Logo to kierunek, energia i cel.',
        norr_logo_right_text_1:  'Logo Norr zostało oparte na uproszczonej igle kompasu wskazującej północ. Symbolizuje kierunek, koncentrację i jasno określony cel. Minimalistyczna forma nawiązuje do nawigacji, zachowując jednocześnie nowoczesny i czytelny charakter.',
        norr_logo_right_text_2:  'Jednocześnie znak przypomina błyskawicę, symbol energii, siły i dynamicznego ruchu. Połączenie tych elementów odzwierciedla tożsamość marki Norr, łącząc precyzję, stabilność i intensywność w jednym, spójnym symbolu.',
        norr_var_full_title:     'Pełne Logo',
        norr_var_brand_title:    'Sygnet',
        norr_var_logo_title:     'Logotyp',
        norr_var_full_desc1:     'Logo Norr pełni konkretną funkcję w systemie identyfikacji wizualnej. Nie jest elementem dekoracyjnym, lecz punktem orientacyjnym, który porządkuje komunikację marki.',
        norr_var_full_desc2:     'Zachowanie odpowiedniej przestrzeni ochronnej i proporcji jest kluczowe dla utrzymania jego charakteru oraz czytelności.',
        norr_var_brand_desc1:    'Sygnet i logotyp mogą funkcjonować razem lub niezależnie od siebie, w zależności od kontekstu i skali zastosowania.',
        norr_var_brand_desc2:    'Sam sygnet przeznaczony jest do mniejszych zastosowań, natomiast pełna wersja logo zapewnia najwyższą czytelność w głównej komunikacji marki.',
        norr_typo_p1:            'Chillax jest podstawowym krojem pisma wykorzystywanym wyłącznie w logo marki Norr. Jego modernistyczny charakter, geometryczna konstrukcja oraz harmonijne proporcje nadają znakowi słownemu nowoczesny i pewny siebie wygląd.',
        norr_typo_p2:            'Krój jest wyrazisty, ale nie przesadnie dekoracyjny, dzięki czemu logo pozostaje charakterystyczne, jednocześnie zachowując spójność z powściągliwym i uporządkowanym językiem wizualnym marki. Ograniczenie użycia kroju Chillax wyłącznie do logo zapobiega jego nadużywaniu oraz pozwala zachować jego wyjątkowy charakter.”',
        norr_flavors_title:      'Energia w trzech wersjach',
        norr_flavor1_title:      'Original',
        norr_flavor1_desc:       'Klasyczny smak Norr Energy, zapewniający idealne połączenie orzeźwienia i energii na każdy dzień.',
        norr_flavor2_title:      'Zero Sugar',
        norr_flavor2_desc:       'Czysta energia bez cukru, stworzona dla tych, którzy chcą maksymalnej stymulacji bez kompromisów.',
        norr_flavor3_title:      'Cold Mint',
        norr_flavor3_desc:       'Intensywnie świeży, miętowy smak, który natychmiastowo orzeźwia i dodaje energii.',

        maserati_title: 'Katalog Maserati',
        maserati_intro: 'Katalog marki Maserati to jeden z moich projektów poligraficznych, którego celem było oddanie eleganckiego i luksusowego charakteru marki. Projekt opracowałem z dbałością o spójny układ, typografię oraz kolorystykę, tworząc estetyczną publikację, która podkreśla prestiż marki i wysoką jakość prezentowanych samochodów.',
    
    }
};

function setTranslations(lang) {
    // Podmień tekst natychmiast, bez żadnej animacji
    const t = translations[lang];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key] !== undefined) el.textContent = t[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.dataset.i18nHtml;
        if (t[key] !== undefined) el.innerHTML = t[key];
    });
}

function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;

    // Zbierz wszystkie elementy do tłumaczenia
    const els = [
        ...document.querySelectorAll('[data-i18n]'),
        ...document.querySelectorAll('[data-i18n-html]'),
    ];

    // 1. Fade out
    els.forEach(el => {
        el.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
        el.style.opacity    = '0';
        el.style.transform  = 'translateY(8px)';
    });

    // 2. Po zakończeniu fade out — podmień tekst i wróć
    setTimeout(() => {
        setTranslations(lang);

        // 3. Fade in z lekkim slideUp
        els.forEach(el => {
            el.style.transform = 'translateY(0)';
            el.style.opacity   = '1';
        });

        // 4. Po zakończeniu — wyczyść style żeby nie interferowały z CSS
        setTimeout(() => {
            els.forEach(el => {
                el.style.transition = '';
                el.style.opacity    = '';
                el.style.transform  = '';
            });
        }, 300);

    }, 260);
}

// ###########################################################################
//   LANG SWITCHER
// ###########################################################################

document.addEventListener('DOMContentLoaded', () => {

    // ###########################################################################
    //   LANGUAGE DETECTION
    //   Przy pierwszej wizycie wykrywa język przeglądarki użytkownika.
    //   Jeśli użytkownik już wcześniej ręcznie wybrał język — respektuje jego wybór.
    //   Działa automatycznie, bez żadnych popupów ani zgód.
    // ###########################################################################

    // ###########################################################################
    //   FOOTER CONFIG — wypełnia linki i teksty z SITE_CONFIG
    // ###########################################################################

    function applyFooterConfig() {
        const c = SITE_CONFIG;

        // E-mail
        const emailLink = document.querySelector('.footer .contact-row a[href^="mailto"]');
        if (emailLink) {
            emailLink.href        = c.contact.emailHref;
            emailLink.textContent = c.contact.email;
        }

        // Telefon
        const phoneLink = document.querySelector('.footer .contact-row a[href^="tel"]');
        if (phoneLink) {
            phoneLink.href        = c.contact.phoneHref;
            phoneLink.textContent = c.contact.phone;
        }

        // Social media — szukamy grup po kolejności w .footer-socials
        const groups = document.querySelectorAll('.footer-socials .social-group');
        const order  = ['instagram', 'behance', 'facebook'];

        groups.forEach((group, i) => {
            const key  = order[i];
            const data = c.socials[key];
            if (!data) return;

            const link = group.querySelector('a');
            if (link) {
                link.href        = data.href;
                link.textContent = data.handle;
            }
        });

        // Zdjęcia — link do autora
        const photosLink = document.querySelector('.footer-photos a');
        if (photosLink) {
            photosLink.href        = c.credits.photosAuthorHref;
            photosLink.textContent = c.credits.photosAuthor;
        }
    }

    applyFooterConfig();

    const savedLang = localStorage.getItem('lang');
    const detectedLang = navigator.language.startsWith('pl') ? 'pl' : 'en';
    const initialLang = savedLang || detectedLang;

    if (!savedLang) localStorage.setItem('lang', initialLang);

    // Zastosuj tłumaczenia od razu przy załadowaniu strony — bez animacji
    setTranslations(initialLang);

    // Usuń styl ukrywający elementy (dodany na początku skryptu dla non-EN)
    const hideStyle = document.getElementById('__i18n_hide');
    if (hideStyle) hideStyle.remove();

    const switcher = document.querySelector('.lang-switcher');

    if (switcher) {

        // Ustaw aktywny przycisk
        switcher.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === initialLang);
        });

        switcher.addEventListener('click', (e) => {
            const btn = e.target.closest('.lang-btn');
            if (!btn || btn.classList.contains('active')) return;

            switcher.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const lang = btn.dataset.lang;
            localStorage.setItem('lang', lang);
            applyTranslations(lang);
        });
    }

    // ###########################################################################
    //   MANIFESTO REVEAL
    // ###########################################################################

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.reveal-line').forEach(line => line.classList.add('active'));
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const manifesto = document.querySelector('.manifesto-main');
    if (manifesto) observer.observe(manifesto);

    // ###########################################################################
    //   ABOUT — story reveal + portrait GIF hover
    // ###########################################################################

    const storyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.reveal-block').forEach(block => block.classList.add('active'));
                storyObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const storyGrid = document.querySelector('.story-grid');
    if (storyGrid) storyObserver.observe(storyGrid);

    const portraitImg = document.getElementById("portrait-img");
    if (portraitImg) {
        portraitImg.addEventListener("mouseenter", () => {
            portraitImg.src = portraitImg.dataset.gif;
        });
        portraitImg.addEventListener("mouseleave", () => {
            portraitImg.src = portraitImg.dataset.still;
        });
    }

});

// ###########################################################################
//   SCROLL
// ###########################################################################

const containers = document.querySelectorAll(".parallax-img");

function updateParallax() {

    containers.forEach(container => {
        const img = container.querySelector("img");
        const rect = container.getBoundingClientRect();

        const speed = 0.2;
        let offset = rect.top * speed;
        const maxOffset = container.offsetHeight * 0.25;

        if (offset > maxOffset) offset = maxOffset;
        if (offset < -maxOffset) offset = -maxOffset;

        img.style.transform = `translateY(${offset}px)`;
    });

    const worksPhotoImg = document.querySelector(".works-photo-img");
    if (worksPhotoImg) {
        const section = document.querySelector(".works-photo-section");
        const rect = section.getBoundingClientRect();

        const speed = 0.25;
        let offset = rect.top * speed;
        const maxOffset = section.offsetHeight * 0.2;

        if (offset > maxOffset) offset = maxOffset;
        if (offset < -maxOffset) offset = -maxOffset;

        worksPhotoImg.style.transform = `translateY(${offset}px)`;
    }

    const fullwidthImg = document.querySelector(".fullwidth-photo-img");
    if (fullwidthImg) {
        const section = document.querySelector(".fullwidth-photo-section");
        const rect = section.getBoundingClientRect();

        const speed = 0.25;
        let offset = rect.top * speed;
        const maxOffset = section.offsetHeight * 0.2;

        if (offset > maxOffset) offset = maxOffset;
        if (offset < -maxOffset) offset = -maxOffset;

        fullwidthImg.style.transform = `translateY(${offset}px)`;
    }

    // ###########################################################################
    //   ABOUT — background parallax
    // ###########################################################################

    const bg = document.getElementById("about-story-bg");
    if (bg) {
        const section = bg.closest(".about-story");
        const rect = section.getBoundingClientRect();

        const speed = 0.25;
        let offset = rect.top * speed;
        const maxOffset = section.offsetHeight * 0.2;

        if (offset > maxOffset) offset = maxOffset;
        if (offset < -maxOffset) offset = -maxOffset;

        bg.style.transform = `translateY(${offset}px)`;
    }

}

document.addEventListener("scroll", updateParallax);

// Wywołaj od razu przy załadowaniu, żeby uniknąć skoku przy pierwszym scrollu
updateParallax();