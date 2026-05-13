// ===== بيانات التصنيفات =====
const categories = [
    { id: 'web', name: 'تطوير المواقع', icon: '🌐', color: '#3498db' },
    { id: 'mobile', name: 'تطوير التطبيقات', icon: '📱', color: '#e74c3c' },
    { id: 'game', name: 'تصميم الألعاب', icon: '🎮', color: '#9b59b6' },
    { id: 'cyber', name: 'الأمن السيبراني', icon: '🔒', color: '#2ecc71' },
    { id: 'ai', name: 'الذكاء الاصطناعي', icon: '🤖', color: '#f39c12' },
    { id: 'data', name: 'علم البيانات', icon: '📊', color: '#1abc9c' },
    { id: 'cloud', name: 'الحوسبة السحابية', icon: '☁️', color: '#34495e' },
    { id: 'devops', name: 'DevOps', icon: '⚙️', color: '#e67e22' }
];

// ===== بيانات الكورسات (125 كورس) =====
const courses = [
    // ===== تطوير المواقع (30 كورس) =====
    { id: 1, category: 'web', name: 'HTML الأساسيات', sessions: 100, icon: '📄', level: 'مبتدئ', description: 'تعلم أساسيات لغة HTML لبناء صفحات الويب' },
    { id: 2, category: 'web', name: 'CSS المتقدم', sessions: 100, icon: '🎨', level: 'متوسط', description: 'تنسيق المواقع باحترافية مع CSS3' },
    { id: 3, category: 'web', name: 'JavaScript للمبتدئين', sessions: 100, icon: '⚡', level: 'مبتدئ', description: 'برمجة المواقع بالجافاسكريبت من الصفر' },
    { id: 4, category: 'web', name: 'React.js', sessions: 100, icon: '⚛️', level: 'متوسط', description: 'بناء واجهات المستخدم مع React' },
    { id: 5, category: 'web', name: 'Vue.js', sessions: 100, icon: '💚', level: 'متوسط', description: 'إطار عمل Vue.js للقترة على بناء واجهات' },
    { id: 6, category: 'web', name: 'Angular', sessions: 100, icon: '🅰️', level: 'متقدم', description: 'إطار عمل Angular من Google' },
    { id: 7, category: 'web', name: 'Node.js', sessions: 100, icon: '🟢', level: 'متوسط', description: 'تطوير السيرفر بالجافاسكريبت' },
    { id: 8, category: 'web', name: 'Express.js', sessions: 100, icon: '🚀', level: 'متوسط', description: 'إطار عمل Express للسيرفر' },
    { id: 9, category: 'web', name: 'PHP', sessions: 100, icon: '🐘', level: 'مبتدئ', description: 'لغة PHP للتطوير الخلفي' },
    { id: 10, category: 'web', name: 'Laravel', sessions: 100, icon: '🎭', level: 'متوسط', description: 'إطار عمل Laravel الشهير' },
    { id: 11, category: 'web', name: 'Python Django', sessions: 100, icon: '🐍', level: 'متوسط', description: 'إطار عمل Django مع Python' },
    { id: 12, category: 'web', name: 'Next.js', sessions: 100, icon: '▲', level: 'متقدم', description: 'إطار عمل Next.js للSSR' },
    { id: 13, category: 'web', name: 'TypeScript', sessions: 100, icon: '📘', level: 'متوسط', description: 'تايب سكريبت المتقدمة' },
    { id: 14, category: 'web', name: 'SASS/SCSS', sessions: 100, icon: '💅', level: 'مبتدئ', description: 'معالجات CSS المتقدمة' },
    { id: 15, category: 'web', name: 'Bootstrap', sessions: 100, icon: '🅱️', level: 'مبتدئ', description: 'إطار عمل Bootstrap' },
    { id: 16, category: 'web', name: 'Tailwind CSS', sessions: 100, icon: '💨', level: 'متوسط', description: 'تصميم سريع مع Tailwind' },
    { id: 17, category: 'web', name: 'GraphQL', sessions: 100, icon: '◈', level: 'متقدم', description: 'استعلامات GraphQL' },
    { id: 18, category: 'web', name: 'REST APIs', sessions: 100, icon: '🔗', level: 'متوسط', description: 'تطوير REST APIs' },
    { id: 19, category: 'web', name: 'WordPress', sessions: 100, icon: '📝', level: 'مبتدئ', description: 'ووردبريس من الصفر' },
    { id: 20, category: 'web', name: 'Shopify', sessions: 100, icon: '🛒', level: 'متوسط', description: 'بناء متجر مع Shopify' },
    { id: 21, category: 'web', name: 'Web3/Blockchain', sessions: 100, icon: '⛓️', level: 'متقدم', description: 'تطوير تطبيقات Web3' },
    { id: 22, category: 'web', name: 'Solidity', sessions: 100, icon: '📄', level: 'متقدم', description: 'برمجة العقود الذكية' },
    { id: 23, category: 'web', name: 'Three.js', sessions: 100, icon: '🎲', level: 'متقدم', description: 'رسوم ثلاثية الأبعاد' },
    { id: 24, category: 'web', name: 'Socket.io', sessions: 100, icon: '🔌', level: 'متوسط', description: 'اتصالات реального времени' },
    { id: 25, category: 'web', name: 'MongoDB', sessions: 100, icon: '🍃', level: 'متوسط', description: 'قاعدة بيانات MongoDB' },
    { id: 26, category: 'web', name: 'PostgreSQL', sessions: 100, icon: '🐘', level: 'متوسط', description: 'قاعدة بيانات PostgreSQL' },
    { id: 27, category: 'web', name: 'Firebase', sessions: 100, icon: '🔥', level: 'متوسط', description: 'Firebase من Google' },
    { id: 28, category: 'web', name: 'Prisma', sessions: 100, icon: 'Prisma', level: 'متقدم', description: 'ORM مع Prisma' },
    { id: 29, category: 'web', name: 'Docker', sessions: 100, icon: '🐳', level: 'متوسط', description: 'الحوسبة السحابية مع Docker' },
    { id: 30, category: 'web', name: 'WebAssembly', sessions: 100, icon: '🖥️', level: 'متقدم', description: 'WebAssembly' },

    // ===== تطبيقات الموبايل (20 كورس) =====
    { id: 31, category: 'mobile', name: 'Flutter للمبتدئين', sessions: 100, icon: '🔵', level: 'مبتدئ', description: 'تطوير تطبيقات متعددة المنصات' },
    { id: 32, category: 'mobile', name: 'React Native', sessions: 100, icon: '📱', level: 'متوسط', description: 'تطبيقات بالجافاسكريبت' },
    { id: 33, category: 'mobile', name: 'Swift - iOS', sessions: 100, icon: '🍎', level: 'متوسط', description: 'تطوير تطبيقات iOS' },
    { id: 34, category: 'mobile', name: 'Kotlin - Android', sessions: 100, icon: '🤖', level: 'متوسط', description: 'تطوير تطبيقات أندرويد' },
    { id: 35, category: 'mobile', name: 'Dart', sessions: 100, icon: '🎯', level: 'مبتدئ', description: 'لغة Dart' },
    { id: 36, category: 'mobile', name: 'Xamarin', sessions: 100, icon: '📱', level: 'متوسط', description: 'تطوير عبر Xamarin' },
    { id: 37, category: 'mobile', name: 'Ionic', sessions: 100, icon: '⚡', level: 'مبتدئ', description: 'تطبيقات Ionic' },
    { id: 38, category: 'mobile', name: 'State Management', sessions: 100, icon: '🔄', level: 'متقدم', description: 'إدارة الحالة' },
    { id: 39, category: 'mobile', name: 'API Integration', sessions: 100, icon: '🔗', level: 'متوسط', description: 'ربط APIs' },
    { id: 40, category: 'mobile', name: 'Push Notifications', sessions: 100, icon: '🔔', level: 'متوسط', description: 'الإشعارات' },
    { id: 41, category: 'mobile', name: 'Camera & Location', sessions: 100, icon: '📸', level: 'متوسط', description: 'الكاميرا والموقع' },
    { id: 42, category: 'mobile', name: 'Local Storage', sessions: 100, icon: '💾', level: 'متوسط', description: 'التخزين المحلي' },
    { id: 43, category: 'mobile', name: 'Publishing Apps', sessions: 100, icon: '📤', level: 'متوسط', description: 'نشر التطبيقات' },
    { id: 44, category: 'mobile', name: 'Testing Mobile', sessions: 100, icon: '🧪', level: 'متقدم', description: 'اختبار التطبيقات' },
    { id: 45, category: 'mobile', name: 'Performance', sessions: 100, icon: '⚡', level: 'متقدم', description: 'تحسين الأداء' },
    { id: 46, category: 'mobile', name: 'Animations', sessions: 100, icon: '🎬', level: 'متوسط', description: 'الرسوم المتحركة' },
    { id: 47, category: 'mobile', name: 'Firebase Mobile', sessions: 100, icon: '🔥', level: 'متوسط', description: 'Firebase للموبايل' },
    { id: 48, category: 'mobile', name: 'Maps Integration', sessions: 100, icon: '🗺️', level: 'متوسط', description: 'خرائط Google' },
    { id: 49, category: 'mobile', name: 'Payments Mobile', sessions: 100, icon: '💳', level: 'متقدم', description: 'الدفع في التطبيقات' },
    { id: 50, category: 'mobile', name: 'PWA', sessions: 100, icon: '🌐', level: 'متوسط', description: 'Progressive Web Apps' },

    // ===== تصميم الألعاب (15 كورس) =====
    { id: 51, category: 'game', name: 'Unity للمبتدئين', sessions: 100, icon: '🎮', level: 'مبتدئ', description: 'محرك Unity' },
    { id: 52, category: 'game', name: 'Unreal Engine', sessions: 100, icon: '🎯', level: 'متقدم', description: 'محرك Unreal' },
    { id: 53, category: 'game', name: 'Godot', sessions: 100, icon: '🌟', level: 'مبتدئ', description: 'محرك Godot المجاني' },
    { id: 54, category: 'game', name: 'C# للألعاب', sessions: 100, icon: '💻', level: 'متوسط', description: 'سي شارب للألعاب' },
    { id: 55, category: 'game', name: 'C++ للألعاب', sessions: 100, icon: '⚙️', level: 'متقدم', description: 'سي بلس للألعاب' },
    { id: 56, category: 'game', name: 'GameMaker', sessions: 100, icon: '🎲', level: 'مبتدئ', description: 'GameMaker Studio' },
    { id: 57, category: 'game', name: 'Blender', sessions: 100, icon: '🧊', level: 'متوسط', description: 'نمذجة ثلاثية الأبعاد' },
    { id: 58, category: 'game', name: '3D Modeling', sessions: 100, icon: '📐', level: 'متوسط', description: 'النمذجة ثلاثية الأبعاد' },
    { id: 59, category: 'game', name: 'Texture Design', sessions: 100, icon: '🖼️', level: 'مبتدئ', description: 'تصميم الملفات' },
    { id: 60, category: 'game', name: 'Game AI', sessions: 100, icon: '🧠', level: 'متقدم', description: 'الذكاء الاصطناعي في الألعاب' },
    { id: 61, category: 'game', name: 'Multiplayer Games', sessions: 100, icon: '🌐', level: 'متقدم', description: 'ألعاب متعددة اللاعبين' },
    { id: 62, category: 'game', name: 'Mobile Gaming', sessions: 100, icon: '📲', level: 'متوسط', description: 'ألعاب الهاتف' },
    { id: 63, category: 'game', name: 'Shader Programming', sessions: 100, icon: '🎨', level: 'متقدم', description: 'برمجة الظلال' },
    { id: 64, category: 'game', name: 'Physics Engines', sessions: 100, icon: '⚡', level: 'متوسط', description: 'محركات الفيزياء' },
    { id: 65, category: 'game', name: 'Level Design', sessions: 100, icon: '🗺️', level: 'متوسط', description: 'تصميم المراحل' },

    // ===== الأمن السيبراني (15 كورس) =====
    { id: 66, category: 'cyber', name: 'أساسيات الأمن', sessions: 100, icon: '🔐', level: 'مبتدئ', description: 'مقدمة للأمن السيبراني' },
    { id: 67, category: 'cyber', name: 'Penetration Testing', sessions: 100, icon: '🎯', level: 'متقدم', description: 'اختبار الاختراق' },
    { id: 68, category: 'cyber', name: 'Network Security', sessions: 100, icon: '🌐', level: 'متوسط', description: 'أمن الشبكات' },
    { id: 69, category: 'cyber', name: 'Ethical Hacking', sessions: 100, icon: '🕵️', level: 'متقدم', description: 'الاختراق الأخلاقي' },
    { id: 70, category: 'cyber', name: 'Linux للأمن', sessions: 100, icon: '🐧', level: 'متوسط', description: 'لينكس للأمن' },
    { id: 71, category: 'cyber', name: 'Kali Linux', sessions: 100, icon: '💀', level: 'متوسط', description: 'كالي لينكس' },
    { id: 72, category: 'cyber', name: 'Cryptography', sessions: 100, icon: '🔏', level: 'متقدم', description: 'التشفير' },
    { id: 73, category: 'cyber', name: 'Web Security', sessions: 100, icon: '🛡️', level: 'متوسط', description: 'أمن المواقع' },
    { id: 74, category: 'cyber', name: 'Malware Analysis', sessions: 100, icon: '🦠', level: 'متقدم', description: 'تحليل البرمجيات الخبيثة' },
    { id: 75, category: 'cyber', name: 'Digital Forensics', sessions: 100, icon: '🔍', level: 'متقدم', description: 'الطب الشرعي الرقمي' },
    { id: 76, category: 'cyber', name: 'Firewalls', sessions: 100, icon: '🔥', level: 'متوسط', description: 'الجدران النارية' },
    { id: 77, category: 'cyber', name: 'Cloud Security', sessions: 100, icon: '☁️', level: 'متوسط', description: 'أمن السحابة' },
    { id: 78, category: 'cyber', name: 'Incident Response', sessions: 100, icon: '🚨', level: 'متقدم', description: 'الاستجابة للحوادث' },
    { id: 79, category: 'cyber', name: 'Social Engineering', sessions: 100, icon: '🎭', level: 'متوسط', description: 'الهندسة الاجتماعية' },
    { id: 80, category: 'cyber', name: 'Bug Bounty', sessions: 100, icon: '🐛', level: 'متقدم', description: 'البحث عن الثغرات' },

    // ===== الذكاء الاصطناعي (15 كورس) =====
    { id: 81, category: 'ai', name: 'Machine Learning', sessions: 100, icon: '🧠', level: 'متوسط', description: 'تعلم الآلة' },
    { id: 82, category: 'ai', name: 'Deep Learning', sessions: 100, icon: '🧬', level: 'متقدم', description: 'التعلم العميق' },
    { id: 83, category: 'ai', name: 'Neural Networks', sessions: 100, icon: '🔗', level: 'متقدم', description: 'الشبكات العصبية' },
    { id: 84, category: 'ai', name: 'NLP', sessions: 100, icon: '💬', level: 'متقدم', description: 'معالجة اللغة الطبيعية' },
    { id: 85, category: 'ai', name: 'Computer Vision', sessions: 100, icon: '👁️', level: 'متقدم', description: 'الرؤية الحاسوبية' },
    { id: 86, category: 'ai', name: 'TensorFlow', sessions: 100, icon: '🔧', level: 'متوسط', description: 'تنسور فلو' },
    { id: 87, category: 'ai', name: 'PyTorch', sessions: 100, icon: '🔥', level: 'متوسط', description: 'بايتورش' },
    { id: 88, category: 'ai', name: 'Reinforcement Learning', sessions: 100, icon: '🎮', level: 'متقدم', description: 'التعلم المعزز' },
    { id: 89, category: 'ai', name: 'Chatbots', sessions: 100, icon: '🤖', level: 'متوسط', description: 'بناء الشات بوتس' },
    { id: 90, category: 'ai', name: 'GANs', sessions: 100, icon: '🎨', level: 'متقدم', description: 'الشبكات التنافسية' },
    { id: 91, category: 'ai', name: 'AI Ethics', sessions: 100, icon: '⚖️', level: 'متوسط', description: 'أخلاقيات الذكاء الاصطناعي' },
    { id: 92, category: 'ai', name: 'OpenCV', sessions: 100, icon: '📷', level: 'متوسط', description: 'مكتبة OpenCV' },
    { id: 93, category: 'ai', name: 'Transformers', sessions: 100, icon: '🔄', level: 'متقدم', description: 'نماذج Transformers' },
    { id: 94, category: 'ai', name: 'LLMs', sessions: 100, icon: '📝', level: 'متقدم', description: 'نماذج اللغة الكبيرة' },
    { id: 95, category: 'ai', name: 'RAG Systems', sessions: 100, icon: '📚', level: 'متقدم', description: 'أنظمة RAG' },

    // ===== علم البيانات (15 كورس) =====
    { id: 96, category: 'data', name: 'Python للبيانات', sessions: 100, icon: '🐍', level: 'مبتدئ', description: 'بايثون لعلم البيانات' },
    { id: 97, category: 'data', name: 'Pandas', sessions: 100, icon: '🐼', level: 'متوسط', description: 'مكتبة Pandas' },
    { id: 98, category: 'data', name: 'NumPy', sessions: 100, icon: '🔢', level: 'متوسط', description: 'مكتبة NumPy' },
    { id: 99, category: 'data', name: 'Matplotlib', sessions: 100, icon: '📊', level: 'متوسط', description: 'رسم البيانات' },
    { id: 100, category: 'data', name: 'SQL المتقدم', sessions: 100, icon: '🗄️', level: 'متوسط', description: 'قواعد البيانات' },
    { id: 101, category: 'data', name: 'Big Data', sessions: 100, icon: '📦', level: 'متقدم', description: 'البيانات الضخمة' },
    { id: 102, category: 'data', name: 'Data Visualization', sessions: 100, icon: '📉', level: 'متوسط', description: 'عرض البيانات' },
    { id: 103, category: 'data', name: 'Tableau', sessions: 100, icon: '📊', level: 'متوسط', description: 'تيبلو' },
    { id: 104, category: 'data', name: 'Power BI', sessions: 100, icon: '📊', level: 'متوسط', description: 'باور بي آي' },
    { id: 105, category: 'data', name: 'Statistics', sessions: 100, icon: '📐', level: 'متوسط', description: 'الإحصاء' },
    { id: 106, category: 'data', name: 'R Programming', sessions: 100, icon: '📊', level: 'متوسط', description: 'لغة R' },
    { id: 107, category: 'data', name: 'ETL Processes', sessions: 100, icon: '⚙️', level: 'متوسط', description: 'عمليات ETL' },
    { id: 108, category: 'data', name: 'Spark', sessions: 100, icon: '✨', level: 'متقدم', description: 'Apache Spark' },
    { id: 109, category: 'data', name: 'Data Engineering', sessions: 100, icon: '🏗️', level: 'متقدم', description: 'هندسة البيانات' },
    { id: 110, category: 'data', name: 'dbt', sessions: 100, icon: '🔧', level: 'متوسط', description: 'Data Build Tool' },

    // ===== الحوسبة السحابية (10 كورس) =====
    { id: 111, category: 'cloud', name: 'AWS Basics', sessions: 100, icon: '☁️', level: 'مبتدئ', description: 'أساسيات AWS' },
    { id: 112, category: 'cloud', name: 'AWS Advanced', sessions: 100, icon: '⚡', level: 'متقدم', description: 'AWS المتقدم' },
    { id: 113, category: 'cloud', name: 'Google Cloud', sessions: 100, icon: '🔵', level: 'متوسط', description: 'جوجل كلود' },
    { id: 114, category: 'cloud', name: 'Azure', sessions: 100, icon: '🔷', level: 'متوسط', description: 'أزور' },
    { id: 115, category: 'cloud', name: 'Kubernetes', sessions: 100, icon: '☸️', level: 'متقدم', description: 'كوبرنيتس' },
    { id: 116, category: 'cloud', name: 'Serverless', sessions: 100, icon: '⚡', level: 'متقدم', description: 'السيرفر ليس' },
    { id: 117, category: 'cloud', name: 'Cloud Architecture', sessions: 100, icon: '🏗️', level: 'متقدم', description: 'هندسة السحابة' },
    { id: 118, category: 'cloud', name: 'Terraform', sessions: 100, icon: '🏔️', level: 'متقدم', description: 'تيرافورم' },
    { id: 119, category: 'cloud', name: 'Microservices', sessions: 100, icon: '🔧', level: 'متقدم', description: 'الميكروسيرفيسز' },
    { id: 120, category: 'cloud', name: 'CI/CD Cloud', sessions: 100, icon: '🔄', level: 'متوسط', description: 'النشر المستمر' },

    // ===== DevOps (5 كورس) =====
    { id: 121, category: 'devops', name: 'Git & GitHub', sessions: 100, icon: '📦', level: 'مبتدئ', description: 'Git و GitHub' },
    { id: 122, category: 'devops', name: 'CI/CD', sessions: 100, icon: '🔄', level: 'متوسط', description: 'النشر المستمر' },
    { id: 123, category: 'devops', name: 'Docker', sessions: 100, icon: '🐳', level: 'متوسط', description: 'داكر' },
    { id: 124, category: 'devops', name: 'Linux Administration', sessions: 100, icon: '🐧', level: 'متوسط', description: 'إدارة لينكس' },
    { id: 125, category: 'devops', name: 'Monitoring', sessions: 100, icon: '👁️', level: 'متقدم', description: 'المراقبة' }
];

// ===== عناوين السيشنات لكل تخصص =====
const sessionTitles = {
    web: [
        'مقدمة HTML', 'العناصر الأساسية', 'النصوص والقوائم', 'الروابط والصور','الجداول',
        'النماذج', 'HTML5 Features', 'SEO Basics', 'Accessibility', 'Semantic HTML',
        'CSS الأول', 'Selectors', 'Box Model', 'Colors', 'Typography',
        'Flexbox', 'Grid Layout', 'Position', 'Z-Index', 'Media Queries',
        'JavaScript الأول', 'المتغيرات', 'أنواع البيانات', 'العمليات', 'الشروط',
        'if/else', 'Switch', 'الحلقات', 'for Loop', 'while Loop',
        'الدوال', 'Parameters', 'Return', 'Scope', 'Arrow Functions',
        'Arrays', 'Array Methods', 'Objects', 'Object Methods', 'JSON',
        'DOM', 'Selecting Elements', 'Events', 'Event Listener', 'Form Handling',
        'AJAX', 'Fetch API', 'Promises', 'Async/Await', 'Error Handling',
        'Local Storage', 'Modules', 'ES6+ Features', 'Classes', 'Inheritance',
        'React الأول', 'JSX', 'Components', 'Props', 'State',
        'useState', 'useEffect', 'Conditional Rendering', 'Lists', 'Forms in React',
        'Context API', 'useContext', 'Reducer', 'Custom Hooks', 'Best Practices',
        'Routing', 'React Router', 'Dynamic Routes', 'Protected Routes', 'API Integration',
        'HTTP Methods', 'CRUD Operations', 'Error Boundaries', 'Performance', 'Optimization',
        'Testing React', 'Unit Tests', 'Integration Tests', 'Debugging', 'Deployment',
        'Build Tools', 'Webpack', 'Vite', 'TypeScript Intro', 'TypeScript Advanced',
        'Next.js Basics', 'SSR', 'SSG', 'API Routes', 'Middleware',
        'Authentication', 'JWT', 'OAuth', 'Security Best Practices', 'Caching',
        'GraphQL Basics', 'Apollo Client', 'Queries', 'Mutations', 'Subscriptions',
        'MongoDB', 'Mongoose', 'CRUD Operations', 'Aggregation', 'Indexes',
        'PostgreSQL', 'SQL Basics', 'Joins', 'Transactions', 'Performance',
        'Authentication', 'Sessions', 'Cookies', 'Security', 'Best Practices',
        'Deployment', 'VPS', 'Nginx', 'SSL', 'Monitoring'
    ],
    mobile: [
        'مقدمة Flutter', 'Dart Basics', 'Variables', 'Data Types', 'Functions',
        'OOP in Dart', 'Null Safety', 'Widgets', 'StatelessWidget', 'StatefulWidget',
        'Layouts', 'Row & Column', 'Stack', 'Container', 'Padding',
        'Navigation', 'Routes', 'Named Routes', 'Arguments', 'Pop',
        'State Management', 'setState', 'Provider', 'ChangeNotifier', 'Consumer',
        'HTTP Requests', 'REST API', 'JSON', 'Future', 'Async/Await',
        'Firebase Setup', 'Authentication', 'Firestore', 'Realtime DB', 'Storage',
        'Local Storage', 'SharedPreferences', 'SQLite', 'Files', 'Cache',
        'Camera', 'Image Picker', 'Location', 'Maps', 'GPS',
        'Push Notifications', 'FCM', 'Local Notifications', 'Badges', 'Sounds',
        'Animations', 'Implicit', 'Explicit', 'Curves', 'Hero',
        'Forms', 'Validation', 'Text Fields', 'Dropdowns', 'Date Picker',
        'Lists', 'ListView', 'GridView', 'Slivers', 'Infinite Scroll',
        'Testing', 'Unit Tests', 'Widget Tests', 'Integration Tests', 'TDD',
        'Performance', 'Profiling', 'Memory', 'Optimizations', 'Lazy Loading',
        'Publishing', 'Play Store', 'App Store', 'Signing', 'Screenshots',
        'Maps Integration', 'Google Maps', 'Map Markers', 'Polyline', 'Geolocation',
        'Payments', 'In-App Purchase', 'Stripe', 'PayPal', 'Subscriptions',
        'Social Auth', 'Google Sign-In', 'Facebook', 'Apple Sign-In', 'Twitter'
    ],
    game: [
        'مقدمة Unity', 'Interface', 'GameObjects', 'Components', 'Transform',
        'Rigidbody', 'Colliders', 'Physics', 'Materials', 'Prefabs',
        'Scripts', 'MonoBehaviour', 'Update', 'FixedUpdate', 'LateUpdate',
        'Input System', 'Keyboard', 'Mouse', 'Touch', 'Controller',
        'Movement', 'Jump', 'Sprint', 'Crouch', 'Slide',
        'Animation', 'Animator', 'Animation Clips', 'Transitions', 'Blend Tree',
        'Sprites', 'Sprite Editor', 'Sprite Atlas', '2D Physics', 'TileMaps',
        'UI', 'Canvas', 'Text', 'Image', 'Buttons',
        'Audio', 'Sound Effects', 'Music', '3D Audio', 'Mixer',
        'Particles', 'Shuriken', 'Emission', 'Lifetime', 'Velocity',
        'Lighting', 'Point Light', 'Directional', 'Spotlight', 'Shadows',
        'Materials', 'Shaders', 'Textures', 'Normal Maps', 'PBR',
        'Terrain', 'Trees', 'Grass', 'Brushes', 'Heightmaps',
        'AI Basics', 'NavMesh', 'Agents', 'Obstacles', 'Moving Agents',
        'Pathfinding', 'A* Algorithm', 'Waypoints', 'Follow', 'Patrol',
        'State Machine', 'States', 'Transitions', 'Animation Events', 'Trigger',
        'Combat System', 'Health', 'Damage', 'Weapons', 'Projectiles',
        'Game Manager', 'Score', 'Lives', 'Game Over', 'Pause',
        'Save System', 'PlayerPrefs', 'JSON Save', 'Cloud Save', 'Achievements',
        'Level Design', 'Flow', 'Difficulty', 'Pacing', 'Playtesting',
        'Multiplayer', 'Networking', 'Lobby', 'Sync', 'RPC'
    ],
    cyber: [
        'مقدمة الأمن', 'CIA Triad', 'أنواع التهديدات', 'Attack Vectors', 'Threat Actors',
        'Network Basics', 'OSI Model', 'TCP/IP', 'Ports', 'Protocols',
        'Firewalls', 'Types', 'Rules', 'NAT', 'PAT',
        'VPN', 'Tunneling', 'IPSec', 'SSL/TLS', 'VPN Types',
        'التشفير', 'Symmetric', 'Asymmetric', 'Hashing', 'Digital Signature',
        'Authentication', 'Passwords', 'MFA', 'Biometrics', 'SSO',
        'Authorization', 'RBAC', 'Permissions', 'Access Control', 'OAuth',
        'Pen Testing', 'Reconnaissance', 'Scanning', 'Enumeration', 'Vulnerability',
        'SQL Injection', 'XSS', 'CSRF', 'LFI/RFI', 'SSRF',
        'Linux Basics', 'Commands', 'Permissions', 'Users', 'Services',
        'Kali Linux', 'Tools', 'Nmap', 'Metasploit', 'Burp Suite',
        'Network Scanning', 'Vulnerability Scan', 'Port Scan', 'Service Detection', 'OS Detection',
        'Malware', 'Types', 'Analysis', 'Detection', 'Removal',
        'Social Engineering', 'Phishing', 'Pretexting', 'Baiting', 'Tailgating',
        'Web Security', 'OWASP Top 10', 'WAF', 'Headers', 'CSP',
        'Cryptography', 'AES', 'RSA', 'SHA', 'PGP',
        'Forensics', 'Evidence', 'Imaging', 'Timeline', 'Reporting',
        'Incident Response', 'Detection', 'Containment', 'Eradication', 'Recovery',
        'Cloud Security', 'IAM', 'S3 Security', 'Shared Responsibility', 'Compliance',
        'Malware Analysis', 'Static', 'Dynamic', 'Sandboxing', 'Reverse Engineering'
    ],
    ai: [
        'مقدمة ML', 'What is ML', 'Types of Learning', 'Supervised', 'Unsupervised',
        'Data Collection', 'Data Cleaning', 'Feature Engineering', 'Data Splitting', 'EDA',
        'Linear Regression', 'Hypothesis', 'Cost Function', 'Gradient Descent', 'Implementation',
        'Logistic Regression', 'Classification', 'Sigmoid', 'Decision Boundary', 'Multi-class',
        'Decision Trees', 'Entropy', 'Information Gain', 'Pruning', 'Random Forest',
        'SVM', 'Kernel', 'Hyperplane', 'Support Vectors', 'SMO',
        'KNN', 'Distance Metrics', 'K-Means', 'Hierarchical', 'DBSCAN',
        'Neural Networks', 'Perceptron', 'Activation', 'Layers', 'Backpropagation',
        'Deep Learning', 'CNN', 'RNN', 'LSTM', 'GRU',
        'TensorFlow', 'Keras', 'Layers', 'Models', 'Training',
        'PyTorch', 'Tensors', 'Autograd', 'NN Module', 'Datasets',
        'NLP', 'Tokenization', 'Embedding', 'RNN', 'Attention',
        'Transformers', 'BERT', 'GPT', 'Fine-tuning', 'Prompting',
        'Computer Vision', 'Image Processing', 'CNN Architecture', 'Object Detection', 'Segmentation',
        'Reinforcement Learning', 'Agent', 'Environment', 'Policy', 'Q-Learning',
        'GANs', 'Generator', 'Discriminator', 'Training', 'Applications',
        'Model Evaluation', 'Metrics', 'Confusion Matrix', 'Cross Validation', 'Bias/Variance',
        'Hyperparameters', 'Grid Search', 'Random Search', 'Bayesian', 'AutoML',
        'MLOps', 'Pipelines', 'Versioning', 'Monitoring', 'Deployment'
    ],
    data: [
        'مقدمة البيانات', 'What is Data Science', 'Data Types', 'Data Sources', 'Data Ecosystem',
        'Python Basics', 'Variables', 'Data Types', 'Operators', 'Control Flow',
        'Functions', 'Modules', 'Packages', 'Virtual Environments', 'pip',
        'NumPy', 'Arrays', 'Operations', 'Broadcasting', 'Indexing',
        'Pandas', 'Series', 'DataFrame', 'Selection', 'Filtering',
        'Data Cleaning', 'Missing Values', 'Duplicates', 'Data Types', 'String Operations',
        'Visualization', 'Matplotlib', 'Line Plots', 'Bar Charts', 'Scatter Plots',
        'Seaborn', 'Statistical Plots', 'Heatmaps', 'Pair Plots', 'Themes',
        'Statistics', 'Descriptive', 'Mean', 'Median', 'Mode',
        'Probability', 'Distributions', 'Hypothesis', 'P-value', 'CI',
        'SQL', 'SELECT', 'WHERE', 'JOIN', 'GROUP BY',
        'Aggregation', 'Subqueries', 'Window Functions', 'CTEs', 'Optimization',
        'Tableau', 'Connecting', 'Charts', 'Calculations', 'Dashboards',
        'Power BI', 'Data Modeling', 'DAX', 'Visuals', 'Publishing',
        'Excel', 'Functions', 'Pivot Tables', 'Charts', 'Macros',
        'ETL', 'Extract', 'Transform', 'Load', 'Pipelines',
        'Big Data', 'Hadoop', 'Spark', 'Data Lakes', 'Data Warehouses',
        'Machine Learning', 'Scikit-learn', 'Models', 'Evaluation', 'Pipelines',
        'Data Engineering', 'Architecture', 'Streaming', 'Batch', 'Real-time'
    ],
    cloud: [
        'مقدمة السحابة', 'What is Cloud', 'Benefits', 'IaaS', 'PaaS',
        'SaaS', 'Public', 'Private', 'Hybrid', 'Multi-cloud',
        'AWS Intro', 'Regions', 'Availability Zones', 'Services', 'Free Tier',
        'EC2', 'Instances', 'AMI', 'Security Groups', 'Auto Scaling',
        'S3', 'Buckets', 'Storage Classes', 'Lifecycle', 'Versioning',
        'Lambda', 'Functions', 'Triggers', 'Layers', 'Serverless',
        'VPC', 'Subnets', 'Route Tables', 'Internet Gateway', 'NAT',
        'IAM', 'Users', 'Roles', 'Policies', 'Groups',
        'Databases', 'RDS', 'DynamoDB', 'ElastiCache', 'Redshift',
        'Docker', 'Containers', 'Images', 'Dockerfile', 'Docker Compose',
        'Kubernetes', 'Architecture', 'Pods', 'Services', 'Deployments',
        'Networking', 'Load Balancer', 'Ingress', 'DNS', 'CloudFront',
        'Serverless', 'Lambda', 'API Gateway', 'DynamoDB', 'Cognito',
        'Security', 'KMS', 'Secrets Manager', 'GuardDuty', 'Inspector',
        'Monitoring', 'CloudWatch', 'Logs', 'Alarms', 'Dashboards',
        'CI/CD', 'CodePipeline', 'CodeBuild', 'CodeDeploy', 'GitHub Actions',
        'Infrastructure as Code', 'CloudFormation', 'Terraform', 'Ansible', 'Pulumi',
        'Cost Management', 'Billing', 'Budgets', 'Cost Explorer', 'Savings Plans',
        'Migration', 'Assessment', 'Planning', 'Migration', 'Validation'
    ],
    devops: [
        'مقدمة DevOps', 'What is DevOps', 'Culture', 'Principles', 'Lifecycle',
        'Git Basics', 'Init', 'Add', 'Commit', 'Push',
        'Branching', 'Merge', 'Rebase', 'Conflict', 'Workflows',
        'GitHub', 'Remote', 'Pull Requests', 'Code Review', 'Protected Branches',
        'Git Flow', 'Feature Branches', 'Hotfixes', 'Release', 'Versioning',
        'Linux Basics', 'Shell', 'Commands', 'Permissions', 'Processes',
        'Bash Scripting', 'Variables', 'Conditionals', 'Loops', 'Functions',
        'Docker', 'Images', 'Containers', 'Dockerfile', 'Docker Compose',
        'Container Orchestration', 'Swarm', 'Kubernetes', 'Helm', 'Services',
        'CI/CD', 'Jenkins', 'GitLab CI', 'GitHub Actions', 'CircleCI',
        'Testing', 'Unit Tests', 'Integration', 'E2E', 'Automation',
        'Configuration Management', 'Ansible', 'Chef', 'Puppet', 'Terraform',
        'Monitoring', 'Prometheus', 'Grafana', 'ELK Stack', 'Datadog',
        'Logging', 'Centralized', 'Logstash', 'Fluentd', 'Splunk',
        'Security', 'SAST', 'DAST', 'Secrets', 'Container Scanning',
        'Infrastructure', 'IaC', 'CloudFormation', 'Terraform', 'Pulumi',
        'Microservices', 'Architecture', 'API Gateway', 'Service Mesh', 'Observability',
        'Deployment Strategies', 'Blue-Green', 'Canary', 'Rolling', 'Feature Flags',
        'Best Practices', 'Documentation', 'Communication', 'Automation', 'Feedback'
    ]
};

// ===== محتوى السيشنات =====
const sessionContent = {
    web: [
        { theory: 'HTML هي لغة ترميز النص التشعبي. تُستخدم لإنشاء هيكل صفحات الويب. كل عنصر محاط بوسوم.', code: '<!DOCTYPE html>\n<html>\n<head>\n  <title>صفحتي</title>\n</head>\n<body>\n  <h1>مرحباً!</h1>\n</body>\n</html>' },
        { theory: 'العناصر الأساسية: html, head, body, h1-h6, p, div, span', code: '<h1>عنوان رئيسي</h1>\n<h2>عنوان فرعي</h2>\n<p>فقرة نصية</p>' },
        { theory: 'الروابط تُنشأ بـ <a href="url">نص الرابط</a>', code: '<a href="https://google.com">زيارة جوجل</a>\n<a href="page.html">صفحة أخرى</a>' },
        { theory: 'الصور تُدرج بـ <img src="url" alt="وصف">', code: '<img src="photo.jpg" alt="وصف الصورة" width="300">' },
        { theory: 'القوائم: ul للقوائم غير المرتبة، ol للقوائم المرتبة', code: '<ul>\n  <li>عنصر 1</li>\n  <li>عنصر 2</li>\n</ul>' },
        { theory: 'الجداول تُنشأ بـ table, tr, td, th', code: '<table border="1">\n  <tr><th>الاسم</th><th>العمر</th></tr>\n  <tr><td>أحمد</td><td>25</td></tr>\n</table>' },
        { theory: 'النماذج تُستخدم لجمع البيانات من المستخدم', code: '<form action="submit.php" method="POST">\n  <input type="text" name="name">\n  <button type="submit">إرسال</button>\n</form>' },
        { theory: 'CSS تُستخدم لتنسيق HTML. يمكن إضافتها بـ style أو ملف خارجي', code: '<style>\nh1 { color: blue; }\n</style>' },
        { theory: 'Selectors: element, .class, #id', code: 'h1 { color: red; }\n.myClass { font-size: 20px; }\n#myId { background: gray; }' },
        { theory: 'Box Model: content, padding, border, margin', code: '.box {\n  padding: 20px;\n  border: 1px solid black;\n  margin: 10px;\n}' },
        { theory: 'Flexbox نظام تخطيط مرن للعناصر', code: '.container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}' },
        { theory: 'Grid Layout نظام تخطيط ثنائي البعد', code: '.container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}' },
        { theory: 'Media Queries للتصميم المتجاوب', code: '@media (max-width: 768px) {\n  .container {\n    grid-template-columns: 1fr;\n  }\n}' },
        { theory: 'JavaScript لغة برمجة للمتصفح', code: 'let name = "أحمد";\nconsole.log("مرحباً " + name);' },
        { theory: 'الدوال في JavaScript', code: 'function greet(name) {\n  return "مرحباً " + name;\n}\nconsole.log(greet("أحمد"));' }
    ],
    mobile: [
        { theory: 'Flutter إطار عمل من Google لبناء تطبيقات متعددة المنصات', code: 'void main() {\n  runApp(MyApp());\n}' },
        { theory: 'Dart لغة البرمجة المستخدمة مع Flutter', code: 'void main() {\n  var name = "أحمد";\n  print("مرحباً $name");\n}' },
        { theory: 'StatelessWidget واجهة لا تتغير', code: 'class MyApp extends StatelessWidget {\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      home: Text("مرحباً")\n    );\n  }\n}' },
        { theory: 'StatefulWidget واجهة تتغير بناءً على الحالة', code: 'class Counter extends StatefulWidget {\n  @override\n  State<Counter> createState() => _CounterState();\n}' },
        { theory: 'Layouts: Row للعرض الأفقي، Column للعمودي', code: 'Row(\n  children: [\n    Icon(Icons.star),\n    Text("تقييم")\n  ]\n)' },
        { theory: 'ListView لعرض قائمة من العناصر', code: 'ListView.builder(\n  itemCount: items.length,\n  itemBuilder: (context, index) {\n    return ListTile(title: Text(items[index]));\n  }\n)' },
        { theory: 'Navigation بين الصفحات', code: 'Navigator.push(\n  context,\n  MaterialPageRoute(\n    builder: (context) => SecondPage()\n  )\n);' },
        { theory: 'State Management مع Provider', code: 'ChangeNotifierProvider(\n  create: (context) => MyProvider(),\n  child: MyApp(),\n);' },
        { theory: 'HTTP Requests مع http package', code: 'final response = await http.get(\n  Uri.parse("https://api.example.com/data")\n);' }
    ],
    game: [
        { theory: 'Unity محرك ألعاب متعدد المنصات', code: 'public class Player : MonoBehaviour\n{\n    void Start()\n    {\n        Debug.Log("بدأ اللعب!");\n    }\n}' },
        { theory: 'GameObject الكائن الأساسي في Unity', code: 'GameObject player = new GameObject("Player");' },
        { theory: 'Transform للتحكم في الموقع والحجم والدوران', code: 'transform.position = new Vector3(0, 5, 0);\ntransform.localScale = Vector3.one * 2;' },
        { theory: 'Rigidbody للفيزياء', code: 'Rigidbody rb = GetComponent<Rigidbody>();\nrb.AddForce(Vector3.up * 10);' },
        { theory: 'Input.GetAxis لحركة اللاعب', code: 'float move = Input.GetAxis("Horizontal");\ntransform.Translate(move * speed * Time.deltaTime, 0, 0);' },
        { theory: 'Collision detection للكشف عن التصادمات', code: 'void OnCollisionEnter(Collision collision)\n{\n    Debug.Log("تصادم!");\n}' },
        { theory: 'Animation للتحريك', code: 'Animator anim = GetComponent<Animator>();\nanim.SetTrigger("Jump");' },
        { theory: 'UI Elements للواجهة', code: 'public Text scoreText;\nscoreText.text = "النتيجة: " + score;' }
    ],
    cyber: [
        { theory: 'الأمن السيبراني حماية الأنظمة من التهديدات', code: '# تحليل الثغرات\nnmap -sV target.com' },
        { theory: 'CIA Triad: السرية، السلامة، التوفر', code: '# تشفير كلمة المرور\nimport hashlib\nhashlib.sha256(b"password").hexdigest()' },
        { theory: 'التشفيرSymmetric نفس المفتاح للتشفير وفك التشفير', code: 'from Crypto.Cipher import AES\ncipher = AES.new(key, AES.MODE_ECB)' },
        { theory: 'Authentication التحقق من الهوية', code: '# التحقق من كلمة المرور\nimport bcrypt\nbcrypt.checkpw(password, hashed)' },
        { theory: 'SQL Injection حقن قواعد البيانات', code: '# مثال على حماية\nquery = "SELECT * FROM users WHERE id = %s"\ncursor.execute(query, (user_id,))' },
        { theory: 'XSS حقن سكريبت في صفحات الويب', code: '<!-- حماية من XSS -->\nimport html\nescaped = html.escape(user_input)' },
        { theory: 'Penetration Testing اختبار الاختراق', code: '# استخدام Metasploit\nmsfconsole\nuse exploit/windows/smb/ms17_010_eternalblue' },
        { theory: 'Network Scanning فحص الشبكات', code: 'nmap -sS -sV -O target_network' }
    ],
    ai: [
        { theory: 'Machine Learning تعلم الآلة من البيانات', code: 'from sklearn.linear_model import LinearRegression\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)' },
        { theory: 'Linear Regression للانحدار الخطي', code: 'import numpy as np\nX = np.array([[1], [2], [3]])\ny = np.array([2, 4, 6])\nmodel.fit(X, y)' },
        { theory: 'Classification للتصنيف', code: 'from sklearn.tree import DecisionTreeClassifier\nclf = DecisionTreeClassifier()\nclf.fit(X_train, y_train)' },
        { theory: 'Neural Networks الشبكات العصبية', code: 'import tensorflow as tf\nmodel = tf.keras.Sequential([\n  tf.keras.layers.Dense(128, activation="relu"),\n  tf.keras.layers.Dense(10, activation="softmax")\n])' },
        { theory: 'Deep Learning التعلم العميق', code: 'from tensorflow.keras.layers import Conv2D\nConv2D(32, (3, 3), activation="relu")' },
        { theory: 'NLP معالجة اللغة الطبيعية', code: 'from transformers import pipeline\nnlp = pipeline("sentiment-analysis")\nnlp("أحب هذه اللعبة!")' },
        { theory: 'CNN للشبكات العصبية الالتفافية', code: 'model = tf.keras.models.Sequential([\n  Conv2D(32, (3, 3), activation="relu", input_shape=(28, 28, 1)),\n  MaxPooling2D((2, 2)),\n  Flatten(),\n  Dense(10, activation="softmax")\n])' }
    ],
    data: [
        { theory: 'NumPy للمصفوفات والعمليات الرياضية', code: 'import numpy as np\narr = np.array([1, 2, 3, 4, 5])\nprint(arr.mean())' },
        { theory: 'Pandas لتحليل البيانات', code: 'import pandas as pd\ndf = pd.read_csv("data.csv")\nprint(df.head())' },
        { theory: 'DataFrame العمليات الأساسية', code: 'df["new_column"] = df["col1"] + df["col2"]\nprint(df.groupby("category").mean())' },
        { theory: 'Matplotlib للرسوم البيانية', code: 'import matplotlib.pyplot as plt\nplt.plot(x, y)\nplt.show()' },
        { theory: 'SQL للاستعلام من قواعد البيانات', code: 'SELECT name, age FROM users\nWHERE age > 18\nORDER BY name;' },
        { theory: 'Joins لربط الجداول', code: 'SELECT users.name, orders.total\nFROM users\nINNER JOIN orders ON users.id = orders.user_id;' },
        { theory: 'Statistics الإحصاء الوصفي', code: 'print(df["age"].describe())\nprint(df.corr())' },
        { theory: 'Data Visualization التصور البياني', code: 'import seaborn as sns\nsns.heatmap(df.corr(), annot=True)' }
    ],
    cloud: [
        { theory: 'AWS Elastic Compute Cloud للحوسبة', code: '# CLI لإنشاء EC2\naws ec2 run-instances \\\n  --image-id ami-0c55b159cbfafe1f0 \\\n  --instance-type t2.micro' },
        { theory: 'S3 للتخزين البسيط', code: '# رفع ملف لـ S3\naws s3 cp file.txt s3://my-bucket/' },
        { theory: 'Lambda للدوال بدون سيرفر', code: 'def handler(event, context):\n    return {\n        "statusCode": 200,\n        "body": "مرحباً من Lambda!"\n    }' },
        { theory: 'Docker للحوسبة السحابية', code: 'FROM python:3.9\nWORKDIR /app\nCOPY . .\nRUN pip install -r requirements.txt\nCMD ["python", "app.py"]' },
        { theory: 'Kubernetes للتنسيق', code: 'apiVersion: v1\nkind: Pod\nmetadata:\n  name: my-app\nspec:\n  containers:\n  - name: app\n    image: my-app:latest' },
        { theory: 'Terraform للبنى التحتية', code: 'resource "aws_instance" "web" {\n  ami           = "ami-0c55b159cbfafe1f0"\n  instance_type = "t2.micro"\n}' },
        { theory: 'CloudWatch للمراقبة', code: 'aws cloudwatch put-metric-alarm \\\n  --alarm-name cpu-high \\\n  --metric-name CPUUtilization \\\n  --threshold 80' },
        { theory: 'VPC للشبكات الافتراضية', code: 'aws ec2 create-vpc \\\n  --cidr-block 10.0.0.0/16' }
    ],
    devops: [
        { theory: 'Git نظام التحكم في الإصدارات', code: 'git init\ngit add .\ngit commit -m "initial commit"' },
        { theory: 'GitHub للعمل الجماعي', code: 'git clone https://github.com/user/repo.git\ngit push origin main' },
        { theory: 'Docker Compose', code: 'version: "3"\nservices:\n  web:\n    build: .\n    ports:\n      - "3000:3000"' },
        { theory: 'CI/CD للنشر المستمر', code: '# GitHub Actions\nname: Deploy\non: [push]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2' },
        { theory: 'Jenkins للأتمتة', code: 'pipeline {\n  agent any\n  stages {\n    stage("Build") {\n      steps {\n        sh "make build"\n      }\n    }\n  }\n}' },
        { theory: 'Kubernetes PODs', code: 'apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\nspec:\n  containers:\n  - name: nginx\n    image: nginx:1.19' },
        { theory: 'Prometheus للمراقبة', code: 'global:\n  scrape_interval: 15s\nscrape_configs:\n  - job_name: "my-app"\n    static_configs:\n      - targets: ["localhost:9090"]' },
        { theory: 'Ansible للتكوين', code: '---\n- hosts: webservers\n  tasks:\n    - name: Install nginx\n      apt: name=nginx state=present' }
    ]
};

// ===== متغيرات عامة =====
let currentUser = null;
let selectedCategory = 'all';
let currentCourse = null;
let currentSession = null;
let examQuestions = [];
let currentQuestionIndex = 0;
let examAnswers = [];
let examTimer = null;

// ===== تحميل البيانات من localStorage =====
function loadUsers() {
    const users = localStorage.getItem('academyUsers');
    return users ? JSON.parse(users) : [];
}

function saveUsers(users) {
    localStorage.setItem('academyUsers', JSON.stringify(users));
}

function loadCurrentUser() {
    const user = localStorage.getItem('academyCurrentUser');
    return user ? JSON.parse(user) : null;
}

function saveCurrentUser(user) {
    if (user) {
        localStorage.setItem('academyCurrentUser', JSON.stringify(user));
    } else {
        localStorage.removeItem('academyCurrentUser');
    }
}

// ===== تسجيل الدخول =====
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const users = loadUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        currentUser = user;
        saveCurrentUser(user);
        showPage('homePage');
        updateHomePage();
    } else {
        document.getElementById('loginError').textContent = 'البريد الإلكتروني أو كلمة المرور غير صحيحة';
        document.getElementById('loginError').classList.add('show');
    }
});

// ===== التسجيل =====
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirm = document.getElementById('registerConfirm').value;

    if (password !== confirm) {
        document.getElementById('registerError').textContent = 'كلمات المرور غير متطابقة';
        document.getElementById('registerError').classList.add('show');
        return;
    }

    const users = loadUsers();
    if (users.find(u => u.email === email)) {
        document.getElementById('registerError').textContent = 'هذا البريد الإلكتروني مسجل بالفعل';
        document.getElementById('registerError').classList.add('show');
        return;
    }

    const newUser = {
        id: Date.now().toString(),
        name,
        email,
        password,
        enrolledCourses: [],
        completedCourses: [],
        certificates: []
    };

    users.push(newUser);
    saveUsers(users);

    currentUser = newUser;
    saveCurrentUser(newUser);
    showPage('homePage');
    updateHomePage();
});

// ===== تسجيل الخروج =====
function logout() {
    currentUser = null;
    saveCurrentUser(null);
    showPage('loginPage');
}

// ===== عرض الصفحات =====
function showPage(pageId) {
    const pages = ['loginPage', 'registerPage', 'homePage', 'coursePage', 'sessionPage', 'examPage', 'certificatePage'];
    pages.forEach(p => {
        document.getElementById(p).classList.add('hidden');
    });
    document.getElementById(pageId).classList.remove('hidden');
}

// ===== تحديث الصفحة الرئيسية =====
function updateHomePage() {
    if (!currentUser) return;

    document.getElementById('welcomeText').textContent = `مرحباً، ${currentUser.name}! 👋`;
    document.getElementById('userAvatar').textContent = currentUser.name.charAt(0);

    const enrolledCount = currentUser.enrolledCourses ? currentUser.enrolledCourses.length : 0;
    const completedCount = currentUser.completedCourses ? currentUser.completedCourses.length : 0;
    const certCount = currentUser.certificates ? currentUser.certificates.length : 0;

    document.getElementById('enrolledCount').textContent = enrolledCount;
    document.getElementById('completedCount').textContent = completedCount;
    document.getElementById('certificatesCount').textContent = certCount;

    renderCategories();
    renderCourses();
}

// ===== عرض التصنيفات =====
function renderCategories() {
    const grid = document.getElementById('categoriesGrid');
    let html = `<div class="category-card ${selectedCategory === 'all' ? 'active' : ''}" onclick="filterByCategory('all')">
        <div class="category-icon">🌟</div>
        <div class="category-name">الكل</div>
    </div>`;

    categories.forEach(cat => {
        html += `<div class="category-card ${selectedCategory === cat.id ? 'active' : ''}" onclick="filterByCategory('${cat.id}')" style="border-color: ${selectedCategory === cat.id ? cat.color : 'transparent'}">
            <div class="category-icon">${cat.icon}</div>
            <div class="category-name">${cat.name}</div>
        </div>`;
    });

    grid.innerHTML = html;
}

// ===== عرض الكورسات =====
function renderCourses() {
    const grid = document.getElementById('coursesGrid');
    const searchTerm = document.getElementById('searchInput')?.value?.toLowerCase() || '';

    let filteredCourses = courses.filter(course => {
        const matchCat = selectedCategory === 'all' || course.category === selectedCategory;
        const matchSearch = course.name.toLowerCase().includes(searchTerm) || course.description.toLowerCase().includes(searchTerm);
        return matchCat && matchSearch;
    });

    document.getElementById('courseCount').textContent = filteredCourses.length;

    let html = '';
    filteredCourses.forEach(course => {
        const isEnrolled = currentUser?.enrolledCourses?.some(c => c.courseId === course.id);
        const cat = categories.find(c => c.id === course.category);
        
        html += `<div class="course-card" onclick="openCourse(${course.id})">
            <div class="course-header" style="background: ${cat?.color || '#6366f1'}">
                <span class="course-icon">${course.icon}</span>
                <span class="course-title">${course.name}</span>
            </div>
            <div class="course-body">
                <p class="course-description">${course.description}</p>
                <div class="course-meta">
                    <span class="course-badge">${course.level}</span>
                    <span class="course-sessions">${course.sessions} جلسة</span>
                </div>
                ${isEnrolled ? '<div style="color: var(--success); font-weight: bold; margin-top: 10px">✓ مسجل</div>' : '<button class="btn btn-secondary" style="margin-top: 10px; padding: 8px" onclick="event.stopPropagation(); enrollCourse(' + course.id + ')">سجل الآن</button>'}
            </div>
        </div>`;
    });

    grid.innerHTML = html;
}

// ===== فلترة =====
function filterByCategory(catId) {
    selectedCategory = catId;
    renderCategories();
    renderCourses();
}

function filterCourses() {
    renderCourses();
}

// ===== التسجيل في كورس =====
function enrollCourse(courseId) {
    if (!currentUser) return;

    if (!currentUser.enrolledCourses) {
        currentUser.enrolledCourses = [];
    }

    if (!currentUser.enrolledCourses.some(c => c.courseId === courseId)) {
        currentUser.enrolledCourses.push({
            courseId,
            progress: 0,
            sessionsCompleted: []
        });

        const users = loadUsers();
        const userIndex = users.findIndex(u => u.id === currentUser.id);
        if (userIndex !== -1) {
            users[userIndex] = currentUser;
            saveUsers(users);
        }
        saveCurrentUser(currentUser);
    }

    renderCourses();
    openCourse(courseId);
}

// ===== فتح كورس =====
function openCourse(courseId) {
    currentCourse = courses.find(c => c.id === courseId);
    if (!currentCourse) return;

    const cat = categories.find(c => c.id === currentCourse.category);
    const courseProgress = currentUser?.enrolledCourses?.find(c => c.courseId === courseId);

    document.getElementById('courseInfoHeader').innerHTML = `
        <div class="course-page-icon" style="background: ${cat?.color || '#6366f1'}">${currentCourse.icon}</div>
        <div class="course-page-title">
            <h1>${currentCourse.name}</h1>
            <p>${currentCourse.description}</p>
            <div style="display: flex; gap: 15px; margin-top: 10px">
                <span class="course-badge">${currentCourse.level}</span>
                <span class="course-badge" style="background: #e0f2fe; color: #0891b2">${currentCourse.sessions} جلسة</span>
            </div>
            ${courseProgress ? `
                <div style="margin-top: 15px">التقدم: ${courseProgress.progress}%</div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${courseProgress.progress}%"></div>
                </div>
            ` : ''}
        </div>
    `;

    if (!courseProgress) {
        enrollCourse(courseId);
    }

    renderSessions();
    showPage('coursePage');
}

// ===== عرض السيشنات =====
function renderSessions() {
    const list = document.getElementById('sessionsList');
    const courseProgress = currentUser?.enrolledCourses?.find(c => c.courseId === currentCourse?.id);
    const completedSessions = courseProgress?.sessionsCompleted || [];
    const cat = categories.find(c => c.id === currentCourse.category);

    let html = '';
    for (let i = 1; i <= currentCourse.sessions; i++) {
        const isCompleted = completedSessions.includes(i);
        const isLocked = i > 1 && !completedSessions.includes(i - 1) && !isCompleted;
        const titleIndex = (i - 1) % (sessionTitles[cat?.id]?.length || 15);
        const title = sessionTitles[cat?.id]?.[titleIndex] || `Lesson ${i}`;

        html += `<div class="session-item" onclick="${!isLocked ? `openSession(${i})` : ''}" style="opacity: ${isLocked ? 0.6 : 1}; cursor: ${isLocked ? 'not-allowed' : 'pointer'}">
            <div class="session-number">${i}</div>
            <div class="session-info">
                <h3>Session ${i}</h3>
                <p>${title}</p>
            </div>
            <div class="session-status">
                ${isCompleted ? '<span class="completed">✓</span>' : isLocked ? '<span class="locked">🔒</span>' : '<span style="color: var(--primary)">▶</span>'}
            </div>
        </div>`;
    }

    list.innerHTML = html;
}

// ===== فتح سيشن =====
function openSession(sessionNum) {
    currentSession = sessionNum;
    const cat = categories.find(c => c.id === currentCourse.category);
    const contentIndex = (sessionNum - 1) % (sessionContent[cat?.id]?.length || 1);
    const content = sessionContent[cat?.id]?.[contentIndex] || sessionContent.web[0];
    const courseProgress = currentUser?.enrolledCourses?.find(c => c.courseId === currentCourse.id);
    const isCompleted = courseProgress?.sessionsCompleted?.includes(sessionNum);
    
    const difficulty = sessionNum <= 25 ? 'مبتدئ' : sessionNum <= 50 ? 'متوسط' : sessionNum <= 75 ? 'متقدم' : 'احترافي';
    const diffClass = sessionNum <= 25 ? 'difficulty-beginner' : sessionNum <= 50 ? 'difficulty-intermediate' : sessionNum <= 75 ? 'difficulty-advanced' : 'difficulty-professional';

    const sessionTitle = sessionTitles[cat?.id]?.[(sessionNum - 1) % (sessionTitles[cat?.id]?.length || 15)] || `Lesson ${sessionNum}`;

    document.getElementById('sessionContent').innerHTML = `
        <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 30px">
            <div style="background: ${cat?.color || '#6366f1'}; color: white; padding: 15px 25px; border-radius: 10px; font-size: 1.5rem">${currentCourse.icon}</div>
            <div>
                <h2 style="color: var(--gray); font-size: 0.9rem">${currentCourse.name}</h2>
                <h1 style="font-size: 1.5rem; color: var(--dark)">Session ${sessionNum}: ${sessionTitle}</h1>
                <span class="difficulty-badge ${diffClass}">${difficulty}</span>
            </div>
        </div>

        <div style="margin-bottom: 30px">
            <div style="display: flex; justify-content: space-between; margin-bottom: 10px">
                <span>الجلسة ${sessionNum} من 100</span>
                <span>${Math.round((sessionNum / 100) * 100)}%</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${(sessionNum / 100) * 100}%"></div>
            </div>
        </div>

        <h2>📚 الشرح النظري</h2>
        <p>${content.theory}</p>

        <h2>💻 الكود</h2>
        <div class="code-block">${content.code || '// لا يوجد كود لهذا الدرس'}</div>

        <h2>💡 نصيحة</h2>
        <div class="example-box">
            <p>جرب تطبيق ما تعلمته بنفسك. التجربة أفضل طريقة للتعلم!</p>
        </div>

        <div class="session-nav">
            <button ${sessionNum === 1 ? 'disabled' : ''} onclick="openSession(${sessionNum - 1})">◀ السابق</button>
            ${!isCompleted ? `<button class="btn-complete" onclick="completeSession()">✓ إكمال الجلسة</button>` : '<span style="background: var(--success); color: white; padding: 12px 25px; border-radius: 10px; font-weight: bold">✓ مكتملة</span>'}
            <button ${sessionNum === 100 ? 'disabled' : ''} onclick="openSession(${sessionNum + 1})">التالي ▶</button>
        </div>
    `;

    showPage('sessionPage');
}

// ===== إكمال سيشن =====
function completeSession() {
    if (!currentUser || !currentCourse) return;

    const courseProgress = currentUser.enrolledCourses.find(c => c.courseId === currentCourse.id);
    if (!courseProgress) return;

    if (!courseProgress.sessionsCompleted.includes(currentSession)) {
        courseProgress.sessionsCompleted.push(currentSession);
        courseProgress.progress = Math.round((courseProgress.sessionsCompleted.length / 100) * 100);

        const users = loadUsers();
        const userIndex = users.findIndex(u => u.id === currentUser.id);
        if (userIndex !== -1) {
            users[userIndex] = currentUser;
            saveUsers(users);
        }
        saveCurrentUser(currentUser);
    }

    if (currentSession === 100) {
        completeCourse();
    } else {
        alert('تم إكمال الجلسة بنجاح! ✓');
        renderSessions();
        openSession(currentSession);
    }
}

// ===== إكمال كورس =====
function completeCourse() {
    if (!currentUser || !currentCourse) return;

    if (!currentUser.completedCourses) {
        currentUser.completedCourses = [];
    }
    if (!currentUser.certificates) {
        currentUser.certificates = [];
    }

    if (!currentUser.completedCourses.includes(currentCourse.id)) {
        currentUser.completedCourses.push(currentCourse.id);
        currentUser.certificates.push({
            courseId: currentCourse.id,
            courseName: currentCourse.name,
            date: new Date().toISOString(),
            userName: currentUser.name
        });

        const users = loadUsers();
        const userIndex = users.findIndex(u => u.id === currentUser.id);
        if (userIndex !== -1) {
            users[userIndex] = currentUser;
            saveUsers(users);
        }
        saveCurrentUser(currentUser);
    }

    alert('🎉 مبروك! لقد أكملت الكورس بنجاح!');
    showCertificate();
}

// ===== عرض الشهادة =====
function showCertificate() {
    const cert = currentUser?.certificates?.find(c => c.courseId === currentCourse?.id);
    if (!cert) return;

    document.getElementById('certName').textContent = cert.userName;
    document.getElementById('certCourse').innerHTML = `${currentCourse.icon} ${currentCourse.name}`;
    
    const date = new Date(cert.date);
    document.getElementById('certDate').textContent = `📅 تاريخ الإصدار: ${date.toLocaleDateString('ar-EG')}`;

    showPage('certificatePage');
}

// ===== تحميل الشهادة =====
function downloadCertificate() {
    const cert = currentUser?.certificates?.find(c => c.courseId === currentCourse?.id);
    if (!cert) return;

    const content = `
================================
   شهادة إتمام الكورس
   أكاديمية البرمجة
================================

   تم منح هذه الشهادة لـ

   ${cert.userName}

   لإتمام كورس

   ${currentCourse.icon} ${currentCourse.name}

   بتاريخ: ${new Date(cert.date).toLocaleDateString('ar-EG')}
   عدد الجلسات: 100

================================
`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `certificate-${currentCourse.name}.txt`;
    a.click();
}

// ===== التنقل =====
function goHome() {
    updateHomePage();
    showPage('homePage');
}

function goBackFromSession() {
    renderSessions();
    showPage('coursePage');
}

function goBackFromExam() {
    showPage('coursePage');
}

// ===== Tabs =====
function showTab(tab) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');

    document.getElementById('sessionsTab').classList.toggle('hidden', tab !== 'sessions');
    document.getElementById('examsTab').classList.toggle('hidden', tab !== 'exams');
}

// ===== الامتحانات =====
const questions = [
    { q: 'ما هي اللغة المستخدمة لهيكل الصفحة؟', o: ['CSS', 'HTML', 'JavaScript', 'Python'], c: 1 },
    { q: 'ما الفرق بين let و const؟', o: ['لا يوجد فرق', 'const ثابت ولا يتغير', 'let أسرع', 'const أقدم'], c: 1 },
    { q: 'ما هو إطار العمل الأكثر استخداماً للواجهات؟', o: ['Angular', 'Vue', 'React', 'Svelte'], c: 2 },
    { q: 'كيف نربط ملف CSS بالصفحة؟', o: ['<script>', '<style>', '<link>', '<css>'], c: 2 },
    { q: 'ما هو DOM؟', o: ['Database', 'Document Object Model', 'Data Object', 'Domain Model'], c: 1 },
    { q: 'ما هي الكلمة المفتاحية لإنشاء دالة في JS؟', o: ['function', 'func', 'def', 'create'], c: 0 },
    { q: 'ما هو Flexbox؟', o: ['قاعدة بيانات', 'تنسيق العناصر', 'رسم جرافيك', 'تحريك'], c: 1 },
    { q: 'ما الفرق بين == و ===؟', o: ['لا يوجد فرق', '=== المقارنة الصارمة', '== للمقارنة', '=== أبطأ'], c: 1 }
];

function startExam(examType) {
    currentQuestionIndex = 0;
    examAnswers = [];
    examQuestions = [...questions];

    const duration = examType === 1 ? 30 * 60 : 60 * 60;

    document.getElementById('examContent').innerHTML = `
        <div class="exam-card">
            <div style="text-align: center; margin-bottom: 30px">
                <h1 style="color: var(--primary); margin-bottom: 10px">${examType === 1 ? 'امتحان منتصف الكورس' : 'امتحان نهاية الكورس'}</h1>
                <div class="exam-timer" id="examTimer">⏰ ${Math.floor(duration / 60)}:00</div>
            </div>
            <div id="examQuestions"></div>
            <div class="session-nav">
                <button onclick="showPage('coursePage')">العودة للكورس</button>
                <button class="btn-success" onclick="nextQuestion()">السؤال التالي ▶</button>
            </div>
        </div>
    `;

    renderQuestion();
    startTimer(duration);
    showPage('examPage');
}

function renderQuestion() {
    const q = examQuestions[currentQuestionIndex];
    let optionsHtml = '';
    q.o.forEach((opt, idx) => {
        optionsHtml += `<div class="option-item ${examAnswers[currentQuestionIndex] === idx ? 'selected' : ''}" onclick="selectAnswer(${idx})">${opt}</div>`;
    });

    document.getElementById('examQuestions').innerHTML = `
        <div class="question-card">
            <h3>السؤال ${currentQuestionIndex + 1} من ${examQuestions.length}</h3>
            <p style="font-size: 1.2rem; margin-bottom: 20px; color: var(--dark)">${q.q}</p>
            <div class="options-list">${optionsHtml}</div>
        </div>
    `;
}

function selectAnswer(idx) {
    examAnswers[currentQuestionIndex] = idx;
    renderQuestion();
}

function nextQuestion() {
    if (currentQuestionIndex < examQuestions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
    } else {
submitExam();
    }
}

function submitExam() {
    let correct = 0;
    examQuestions.forEach((q, idx) => {
        if (examAnswers[idx] === q.c) correct++;
    });

    const percentage = Math.round((correct / examQuestions.length) * 100);
    const passed = percentage >= 60;

    document.getElementById('examContent').innerHTML = `
        <div class="exam-card" style="text-align: center">
            <h1 style="font-size: 3rem; margin-bottom: 20px">${passed ? '🎉' : '😔'}</h1>
            <h1 style="color: ${passed ? 'var(--success)' : 'var(--danger)'}; margin-bottom: 20px">
                ${passed ? 'تهانينا! لقد نجحت!' : 'للأسف لم تنجح'}
            </h1>
            <div style="font-size: 4rem; font-weight: bold; color: ${passed ? 'var(--success)' : 'var(--danger)'}; margin-bottom: 20px">${percentage}%</div>
            <p style="color: var(--gray); margin-bottom: 30px">
                الإجابات الصحيحة: ${correct} من ${examQuestions.length}
            </p>
            <button class="btn" onclick="showPage('coursePage')">العودة للكورس</button>
        </div>
    `;
}

function startTimer(seconds) {
    let remaining = seconds;
    examTimer = setInterval(() => {
        remaining--;
        const mins = Math.floor(remaining / 60);
        const secs = remaining % 60;
        document.getElementById('examTimer').textContent = `⏰ ${mins}:${secs.toString().padStart(2, '0')}`;

        if (remaining <= 0) {
            clearInterval(examTimer);
            submitExam();
        }
    }, 1000);
}

// ===== تحميل البيانات عند بدء التطبيق =====
window.onload = function() {
    const user = loadCurrentUser();
    if (user) {
        currentUser = user;
        showPage('homePage');
        updateHomePage();
    } else {
        showPage('loginPage');
    }
};