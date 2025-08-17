import Heading from '@/components/atoms/Heading';
import AnimatedSection from '@/components/molecules/AnimatedSection';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2, Users } from 'lucide-react';

interface ExperienceItemProps {
    company: string;
    position: string;
    location: string;
    period: string;
    type: 'work' | 'intern' | 'travel';
    achievements: string[];
    delay?: number;
}

const ExperienceItem = ({ company, position, location, period, type, achievements, delay = 0 }: ExperienceItemProps) => {
    const getTypeColor = () => {
        switch (type) {
            case 'work': return 'text-blue-500 bg-blue-500/10';
            case 'intern': return 'text-green-500 bg-green-500/10';
            case 'travel': return 'text-purple-500 bg-purple-500/10';
            default: return 'text-primary bg-primary/10';
        }
    };

    const getTypeLabel = () => {
        switch (type) {
            case 'work': return 'Tam Zamanlı';
            case 'intern': return 'Stajyer';
            case 'travel': return 'Uluslararası Deneyim';
            default: return '';
        }
    };

    return (
        <motion.div
            className="relative bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
        >
            {/* Timeline dot */}
            <div className="absolute -left-3 top-6 w-6 h-6 bg-primary rounded-full border-4 border-background hidden lg:block" />

            {/* Type badge */}
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-3 ${getTypeColor()}`}>
                {getTypeLabel()}
            </div>

            {/* Header */}
            <div className="mb-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-foreground">{position}</h3>
                    <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {period}
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 text-muted-foreground">
                    <div className="flex items-center">
                        <Building2 className="w-4 h-4 mr-1" />
                        <span className="font-medium text-primary">{company}</span>
                    </div>
                    <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {location}
                    </div>
                </div>
            </div>

            {/* Achievements */}
            <ul className="space-y-2">
                {achievements.map((achievement, index) => (
                    <motion.li
                        key={index}
                        className="flex items-start text-muted-foreground text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: delay + 0.1 + index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        {achievement}
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    );
};

const Experience = () => {
    const experiences: ExperienceItemProps[] = [
        {
            company: "TeknoDev",
            position: "Frontend Developer",
            location: "Antalya, Türkiye",
            period: "Ağustos 2024 – Haziran 2025",
            type: "work",
            achievements: [
                "200+ modüler, sürükle-bırak React bileşeni ile AI destekli website builder geliştirdim",
                "Canlı düzenleme ve dinamik özelleştirme (renk, boyut, içerik, layout) özellikleri ekledim",
                "JS tabanlı class handling, özel tema sistemi, versiyon kontrolü ve RBAC ile global CSS mimarisi geliştirdim",
                "React.memo, useCallback, useMemo ve lazy loading ile performans optimizasyonu sağladım",
                "Context API ile global state yönetimi gerçekleştirdim",
                "SCSS ile responsive, erişilebilir, pixel-perfect UI'lar teslim ettim",
                "REST API entegrasyonu ve güçlü loading/error handling geliştirdim",
                "Agile yaşam döngüsünde sprint, stand-up ve code review süreçlerine katkıda bulundum"
            ],
            delay: 0
        },
        {
            company: "TeknoDev",
            position: "Stajyer Full-Stack Developer",
            location: "Antalya, Türkiye",
            period: "Haziran 2023 – Ekim 2023",
            type: "intern",
            achievements: [
                "Frontend ve backend projelerinde çalıştım",
                "Cypress ile unit testler gerçekleştirdim",
                "Google Analytics ve GitHub kullanarak takip ve işbirliği sağladım",
                "Scrum metodolojisi kullanarak takım ve bağımsız çalışma deneyimi kazandım"
            ],
            delay: 0.2
        },
        {
            company: "Rootek AR-GE",
            position: "Frontend Developer",
            location: "Antalya, Türkiye",
            period: "Ekim 2020 – Mart 2021",
            type: "work",
            achievements: [
                "JavaScript, HTML, CSS ve Bootstrap kullanarak website UI tasarımı ve geliştirme",
                "Takım çalışması ve GitHub ile versiyon kontrolü deneyimi",
                "Web standartlarına uygun, responsive tasarım geliştirme"
            ],
            delay: 0.4
        },
        {
            company: "The Garage BBQ",
            position: "Work & Travel Program",
            location: "Maine, USA",
            period: "Haziran 2022 – Ekim 2022",
            type: "travel",
            achievements: [
                "Hızlı tempolu, çok kültürlü ortamda kasiyer, koşucu ve garson olarak çalıştım",
                "İngilizce akıcılığımı ve kültürlerarası iletişim becerilerimi geliştirdim",
                "Uluslararası deneyim kazanarak farklı çalışma kültürlerini öğrendim",
                "Müşteri hizmetleri ve takım çalışması becerilerimi güçlendirdim"
            ],
            delay: 0.6
        }
    ];

    return (
        <AnimatedSection id="experience" className="py-24 sm:py-32 bg-gradient-experience pt-20 pb-10 md:pt-24 md:pb-10">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <Heading level={2} className="mb-6 text-foreground">İş Deneyimlerim</Heading>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Frontend development alanında edindiğim profesyonel deneyimler, staj süreçlerim ve uluslararası çalışma deneyimim.
                        Farklı ortamlarda kazandığım beceriler ve gerçekleştirdiğim projeler.
                    </p>
                </div>

                {/* Timeline for larger screens */}
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-3 top-6 bottom-6 w-0.5 bg-border hidden lg:block" />

                    <div className="space-y-8">
                        {experiences.map((experience, index) => (
                            <ExperienceItem key={index} {...experience} />
                        ))}
                    </div>
                </div>

                {/* Summary stats */}
                <motion.div
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center p-4 bg-card rounded-lg border border-border">
                        <div className="text-2xl font-bold text-primary mb-1">2+</div>
                        <div className="text-sm text-muted-foreground">Yıl Deneyim</div>
                    </div>
                    <div className="text-center p-4 bg-card rounded-lg border border-border">
                        <div className="text-2xl font-bold text-primary mb-1">4</div>
                        <div className="text-sm text-muted-foreground">Farklı Şirket</div>
                    </div>
                    <div className="text-center p-4 bg-card rounded-lg border border-border">
                        <div className="text-2xl font-bold text-primary mb-1">200+</div>
                        <div className="text-sm text-muted-foreground">Geliştirilen Bileşen</div>
                    </div>
                    <div className="text-center p-4 bg-card rounded-lg border border-border">
                        <div className="text-2xl font-bold text-primary mb-1">1</div>
                        <div className="text-sm text-muted-foreground">Uluslararası Deneyim</div>
                    </div>
                </motion.div>
            </div>
        </AnimatedSection>
    );
};

export default Experience;
