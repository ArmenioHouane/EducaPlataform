import React from 'react';
import { ComplexNavbar } from '../Shared/Header';
import { FooterWithSitemap } from '../Shared/Footer';


const Cursos: React.FC = () => {
    const languageCourses = [
        { id: 1, title: 'Francês', description: 'Curso completo de francês para iniciantes, intermediários e avançados.' },
        { id: 2, title: 'Inglês', description: 'Curso de inglês focado em conversação, gramática e vocabulário.' },
        { id: 3, title: 'Japonês', description: 'Curso de japonês para todos os níveis, com foco em escrita e conversação.' },
    ];

    const programmingCourses = [
        { id: 4, title: 'JavaScript', description: 'Curso abrangente de JavaScript, desde o básico até avançado.' },
        { id: 5, title: 'Python', description: 'Curso completo de Python, ideal para ciência de dados e desenvolvimento web.' },
        { id: 6, title: 'C#', description: 'Curso de C# para desenvolvimento de aplicações desktop e web.' },
    ];

    const handleSubscribe = (courseId: number) => {
        alert(`Inscrito no curso ${courseId}`);
    };

    return (
        <div className="bg-white dark:bg-gray-800 text-black dark:text-white">
            <ComplexNavbar />
            <div className="container mx-auto py-12">
                <div className="text-center mt-10">
                    <h1 className="text-3xl font-bold mb-4">Cursos de Idiomas</h1>
                    <p className="text-lg mb-8">
                        Bem-vindo à nossa plataforma de cursos de línguas, onde exploramos o mundo através das palavras. Descubra uma ampla gama de cursos projetados para todos os níveis, desde iniciantes até avançados, em idiomas como inglês, espanhol, francês, alemão e muitos outros. Aprenda de forma interativa com instrutores experientes, materiais de estudo envolventes e tecnologia de ponta, tudo projetado para ajudá-lo a alcançar fluência e confiança na língua de sua escolha. Prepare-se para expandir seus horizontes linguísticos conosco!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {languageCourses.map(course => (
                        <div key={course.id} className="bg-gray-100 dark:bg-gray-700 shadow-md rounded-lg p-6">
                            <h2 className="text-xl font-bold mb-2">{course.title}</h2>
                            <p className="text-base mb-4">{course.description}</p>
                            <button className="bg-darkbtncolorlm dark:bg-darkbtncolordm hover:bg-gray-600 text-darkinnercolorlm dark:text-darkinnercolorlm px-4 py-2 rounded-md" onClick={() => handleSubscribe(course.id)}>
                                Inscrever-se
                            </button>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <h1 className="text-3xl font-bold mb-4">Cursos de Programação</h1>
                    <p className="text-lg mb-8">
                        Bem-vindo à nossa plataforma de cursos de programação, onde exploramos o mundo da tecnologia através do código. Descubra uma ampla gama de cursos projetados para todos os níveis, desde iniciantes até avançados, em linguagens como JavaScript, Python, Java, C#, PHP e muitas outras. Aprenda de forma interativa com instrutores experientes, materiais de estudo envolventes e tecnologia de ponta, tudo projetado para ajudá-lo a alcançar proficiência e confiança na linguagem de sua escolha. Prepare-se para expandir seus horizontes tecnológicos conosco!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {programmingCourses.map(course => (
                        <div key={course.id} className="bg-gray-100 dark:bg-gray-700 shadow-md rounded-lg p-6">
                            <h2 className="text-xl font-bold mb-2">{course.title}</h2>
                            <p className="text-base mb-4">{course.description}</p>
                            <button className="bg-darkbtncolorlm dark:bg-darkbtncolordm hover:bg-bgHoverlm dark:hover:bg-bgHoverdm text-darkinnercolorlm dark:text-innerTextColorlm px-4 py-2 rounded-md" onClick={() => handleSubscribe(course.id)}>
                                Inscrever-se
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <FooterWithSitemap />
            
        </div>
    );
};

export default Cursos;
