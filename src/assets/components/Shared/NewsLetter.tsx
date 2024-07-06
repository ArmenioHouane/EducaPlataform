import '../../styles/Newsletter.css';

const NewsLetter : React.FC = () => {
    return (
        <section id='newsletter'>
            <h3>Newsletter</h3>
            <p>
            Envie seu e-mail para ficar atualizado sobre as últimas novidades em tecnologia</p>
            <div id="newsletter-form">
                <input type="text" placeholder='Endereço de email'/>
                <button>Subscrever a NewsLetter</button>
            </div>
            
        </section>
    )
}

export default NewsLetter