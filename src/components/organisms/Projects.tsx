import { Utensils, Share2, Satellite } from 'lucide-react';
import Heading from '@/components/atoms/Heading';
import ProjectCard from '@/components/molecules/ProjectCard';
import AnimatedSection from '@/components/molecules/AnimatedSection';

const Projects = () => {
  return (
    <AnimatedSection id="projects" className="py-24 sm:py-32 bg-gradient-to-br from-blue-50 to-slate-100 dark:from-slate-700 dark:to-slate-900">
      <div className="container mx-auto px-4 text-center">
        <Heading level={2} className="mb-12 text-slate-900 dark:text-white">Projelerim</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Restaurant Comparator Web App"
            description="Bu proje, kullanıcıların farklı restoranları karşılaştırabilmesini sağlayan, etkileşimli ve kullanıcı dostu bir web uygulamasıdır. Özellikle online yemek siparişi veren kullanıcılar için tasarlanmıştır. Kullanıcılar restoranların teslimat ücretlerini, hızlarını ve kullanıcı puanlarını karşılaştırarak en iyi seçeneği belirleyebilir. Proje, web scraping teknolojileriyle verileri internetten çekmekte ve Firebase tabanlı bir backend ile bu verileri yönetmektedir. Görsel karşılaştırmalar ve grafikler yardımıyla kullanıcılar kolayca karar verebilir."
            link="#"
            icon={<Utensils size={48} />}
            technologies={["Python", "Flask", "Firebase", "Web Scraping"]}
          />
          <ProjectCard
            title="Mebi – Sosyal Medya Uygulaması"
            description="Mebi, hem mobil hem de web üzerinde çalışan tam kapsamlı bir sosyal medya uygulamasıdır. Kullanıcılar profil oluşturabilir, gönderiler paylaşabilir, diğer kullanıcılarla etkileşime geçebilir ve gerçek zamanlı bildirimler alabilir. Proje, modern yazılım mimarisiyle çok katmanlı bir yapı üzerine kuruludur. Web arayüzü React ile geliştirilirken, mobil taraf Flutter ile yazılmıştır. ASP.NET Core, uygulamanın güçlü bir backend altyapısını sağlar ve tüm sistem Azure üzerinde barındırılır."
            link="#"
            icon={<Share2 size={48} />}
            technologies={["React", "Flutter", "ASP.NET Core", "Azure"]}
          />
          <ProjectCard
            title="Teknofest Model Uydu Yarışması (Ground & Flight Software)"
            description="Bu projede, Teknofest Model Uydu Yarışması için gerçek zamanlı yer ve uçuş yazılımları geliştirdin. Uydu, uçuş sırasında topladığı verileri yer istasyonuna göndermekte, yer istasyonu ise bu verileri anlık olarak görselleştirmektedir. Donanım tarafında Raspberry Pi kullanılırken, yazılım Python ve C dillerinde geliştirildi. Proje, gömülü sistemlerle çalışmak isteyen bir geliştirici için çok önemli bir tecrübe sunmuştur."
            link="#"
            icon={<Satellite size={48} />}
            technologies={["Python", "C", "Raspberry Pi", "Embedded Systems"]}
          />
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Projects;
