import Link from 'next/link';
import Button from './components/Button';
import ScrollToTopButton from './components/ScrollToTopButton';

export default function Home() {
  return (
    <div className="w-full">
      <header className="top-0 z-50 sticky bg-white shadow-md">
        <nav className="flex max-sm:flex-col justify-between items-center mx-auto p-4 py-6 max-w-6xl">
          <h1 className="max-sm:mb-2 font-bold text-blue-600 text-2xl">
            SIMULAÇÃO CLÍNICA ABERTA
          </h1>
          <div className="flex gap-6">
            {/* Trocamos <button> por <Link> apontando para os IDs */}
            <Link href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">
              Início
            </Link>
            <Link href="#sobre" className="text-gray-700 hover:text-blue-600 transition-colors">
              Sobre
            </Link>
            <Link href="#desenvolvedor" className="text-gray-700 hover:text-blue-600 transition-colors">
              Desenvolvedor
            </Link>
          </div>
        </nav>
      </header>

      <section
        id="inicio"
        className="flex items-center bg-linear-to-b from-blue-50 to-white min-h-screen"
      >
        <div className="mx-auto px-6 w-full max-w-6xl">
          <div className="text-center">
            <h2 className="mb-6 font-extrabold text-gray-900 text-5xl">
              SIMULAÇÃO CLINICA ABERTA
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-gray-600 text-xl leading-relaxed">
              Bem-vindo à plataforma de simulação clínica aberta, um espaço
              colaborativo dedicado ao aprimoramento das habilidades em
              enfermagem. Explore cenários realistas de simulação clínica,
              aprenda com casos práticos e contribua para o desenvolvimento
              contínuo da plataforma.
            </p>
            <div className="flex justify-center gap-4">
              <Button
                text="Explorar Simulações"
                href="/scenarios"
              />
              <Button
                text="Saiba Mais"
                href='#sobre'
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="flex items-center bg-white min-h-screen">
        <div className="mx-auto px-6 py-26 w-full max-w-6xl">
          <div className="items-center gap-12 grid md:grid-cols-2">
            <div>
              <h2 className="mb-6 font-extrabold text-gray-900 text-4xl">
                AMBIENTE SEGURO E COLABORATIVO
              </h2>
              <p className="mb-6 text-gray-600 text-lg leading-relaxed">
                Este é um espaço para educadores e aprendizes de enfermagem
                compartilharem cenários de simulação clínica, promovendo a troca
                de conhecimentos e a colaboração entre a comunidade.
                Cadastrem, revise ou melhore cenários existentes, contribuindo para
                o crescimento contínuo da plataforma.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-3 font-bold text-blue-600">•</span>
                  <span>Pratique cenários clínicos e desenvolva suas habilidades</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-bold text-blue-600">•</span>
                  <span>Crie e configure cenários para suas turmas</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-bold text-blue-600">•</span>
                  <span>Revise cenários e compartilhe suas experiências</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center items-center bg-blue-100 p-8 rounded-lg min-h-96">
              <p className="font-semibold text-blue-600 text-2xl text-center">
                Imagem ou Conteúdo Visual Aqui
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="desenvolvedor"
        className="flex items-center bg-linear-to-t from-blue-50 to-white min-h-screen"
      >
        <div className="mx-auto px-6 py-26 w-full max-w-6xl">
          <h2 className="mb-12 font-extrabold text-gray-900 text-4xl text-center">
            SOBRE O DESENVOLVEDOR E CONTRIBUIÇÕES
          </h2>

          <div className="gap-12 grid md:grid-cols-2 mb-12">
            <div className="bg-white shadow-lg p-8 rounded-lg">
              <h3 className="mb-4 font-semibold text-gray-900 text-2xl">
                Desenvolvedor
              </h3>
              <p className="mb-4 text-gray-600 leading-relaxed">
                Desenvolvido por Jonatha Carvalho, para ser uma projeto de
                código aberto com o objetivo de democratizar o acesso a simulações clínicas de
                qualidade para educadores e aprendizes de enfermagem.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Entre em contato para dúvidas, sugestões ou para contribuir com o projeto!
              </p>
              <div className="flex gap-4 mt-4">
                <Link href="https://github.com/jowgaze" className="text-blue-600 hover:text-blue-800" target='_blank'>
                  Github
                </Link>
                <Link href="https://www.linkedin.com/in/jonatha-carvalho21/" className="text-blue-600 hover:text-blue-800" target='_blank'>
                  Linkedin
                </Link>
              </div>
            </div>

            <div className="bg-white shadow-lg p-8 rounded-lg">
              <h3 className="mb-4 font-semibold text-gray-900 text-2xl">
                Contribuições
              </h3>
              <p className="mb-4 text-gray-600 leading-relaxed">
                Valorizamos as contribuições da comunidade! Você pode contribuir:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-3 font-bold text-blue-600">✓</span>
                  <span>Criando novos cenários de simulação</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-bold text-blue-600">✓</span>
                  <span>Revisando e melhorando cenários existentes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-bold text-blue-600">✓</span>
                  <span>Reportando problemas e sugerindo melhorias</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-bold text-blue-600">✓</span>
                  <span>Contribuindo com código e novas funcionalidades</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Button
              text="Explorar Simulações"
              href="/scenarios"
            />
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 py-12 text-gray-300">
        <div className="mx-auto px-6 max-w-6xl">
          <div className="gap-8 grid md:grid-cols-3 mb-8">
            <div>
              <h4 className="mb-4 font-semibold text-white">
                Simulação Clínica Aberta
              </h4>
              <p className="text-sm">
                Plataforma colaborativa para ensino de enfermagem
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-white">Links Rápidos</h4>
              <Link href="#inicio" className="block hover:text-white text-sm transition-colors">
                Início
              </Link>
              <Link href="#sobre" className="block hover:text-white text-sm transition-colors">
                Sobre
              </Link>
              <Link href="#desenvolvedor" className="block hover:text-white text-sm transition-colors">
                Desenvolvedor
              </Link>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-white">Contato</h4>
              <div className="flex gap-4 mt-4">
                <Link href="https://github.com/jowgaze" className="text-white hover:text-gray-300" target='_blank'>
                  Github
                </Link>
                <Link href="https://www.linkedin.com/in/jonatha-carvalho21/" className="text-white hover:text-gray-300" target='_blank'>
                  Linkedin
                </Link>
              </div>
            </div>
          </div>
          <div className="pt-8 border-gray-700 border-t text-sm text-center">
            <p>© 2026 Jonatha Sousa Carvalho. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
      <ScrollToTopButton />
    </div>
  );
}
