export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-about flex flex-col justify-center p-4 sm:p-6 md:p-8 md:h-screen md:max-h-screen md:overflow-hidden"
    >
      <div className="w-full max-w-2xl mx-auto md:max-w-4xl">
        <div className="glass-modern rounded-xl md:rounded-3xl p-4 sm:p-6 md:p-8 border-primary backdrop-blur-xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 gradient-text-primary text-center">
            Hakkımda
          </h2>

          <div className="space-y-4 sm:space-y-5 text-left">
            <p className="text-sm sm:text-base md:text-lg text-primary leading-relaxed">
              Frontend geliştirme alanında uzmanlaşmış yazılım geliştiriciyim.
              <span className="font-semibold text-accent"> React</span> ve
              <span className="font-semibold text-accent"> TypeScript</span> ile
              modern web uygulamaları geliştiriyorum.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-primary leading-relaxed">
              <span className="font-semibold text-accent">UI/UX</span> prensipleriyle
              modüler kod yapıları oluşturur, Agile/Scrum ve
              <span className="font-semibold text-accent"> Cypress</span> test otomasyonu kullanırım.
            </p>

            <div className="mt-6 p-4 sm:p-5 md:p-6 glass-modern rounded-lg md:rounded-2xl border-primary backdrop-blur-sm">
              <div className="flex items-center justify-center mb-3">
                <div className="text-2xl sm:text-3xl">💡</div>
              </div>
              <p className="text-sm sm:text-base md:text-lg font-semibold text-primary text-center leading-relaxed">
                İnsanların hayatını kolaylaştıran, teknoloji ile insan odaklı çözümleri birleştiren dijital ürünler üretmek amacım.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}