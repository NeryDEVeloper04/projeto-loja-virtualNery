const Hero = (titulo, subtitulo , textoBotao, iamgem) => {
    return (
        <section className="banner">
            <div className="banner-text">
                <h1>{titulo}</h1>
                <p>{subtitulo}</p>
                <button className="btn-primary">{textoBotao}</button>
            </div>
            <img className="banner-image" src={props.imagem} alt="Banner de promoção da loja" />
        </section>
    )
}   
export default Hero