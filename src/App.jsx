import './App.css'
import hero from './assets/hero.png'
import Header from './components/Header'
import Hero from './components/Hero'

const App = () => {
  return (
    <div className="app">
      < Header />
      < Hero 
        imagem = {hero}
        titulo="Ofertas imperdíveis para você"
        subitutlo="Até 30% de desconto em produtos selecionados. Aproveite!"
        textoBotao="Ver ofertas"
      />
      <section className="categories">
        <h2>Categorias</h2>

        <div className="category-list">
          <div className="category-card">
            <span className="category-icon">👕</span>
            <p>Roupas</p>
          </div>

          <div className="category-card">
            <span className="category-icon">📱</span>
            <p>Eletrônicos</p>
          </div>

          <div className="category-card">
            <span className="category-icon">👟</span>
            <p>Calçados</p>
          </div>

          <div className="category-card">
            <span className="category-icon">🎒</span>
            <p>Acessórios</p>
          </div>
        </div>
      </section>

      <section id="produtos" className="products">
        <h2>Produtos em destaque</h2>

        <div className="product-list">
          <div className="product-card">
            <img src="https://placehold.co/240x240/aa3bff/ffffff?text=Tenis" alt="Tênis esportivo" />
            <p className="product-category">Calçados</p>
            <h3>Tênis Esportivo</h3>
            <p className="product-rating">⭐⭐⭐⭐☆ (4.5)</p>
            <p className="product-price">R$ 299,90</p>
            <button className="btn-secondary">Adicionar ao carrinho</button>
          </div>

          <div className="product-card">
            <img src="https://placehold.co/240x240/3b82f6/ffffff?text=Fone" alt="Fone de ouvido bluetooth" />
            <p className="product-category">Eletrônicos</p>
            <h3>Fone de Ouvido Bluetooth</h3>
            <p className="product-rating">⭐⭐⭐⭐⭐ (4.8)</p>
            <p className="product-price">R$ 149,90</p>
            <button className="btn-secondary">Adicionar ao carrinho</button>
          </div>

          <div className="product-card">
            <img src="https://placehold.co/240x240/22c55e/ffffff?text=Mochila" alt="Mochila para notebook" />
            <p className="product-category">Acessórios</p>
            <h3>Mochila para Notebook</h3>
            <p className="product-rating">⭐⭐⭐⭐☆ (4.2)</p>
            <p className="product-price">R$ 189,90</p>
            <button className="btn-secondary">Adicionar ao carrinho</button>
          </div>

          <div className="product-card">
            <img src="https://placehold.co/240x240/f97316/ffffff?text=Relogio" alt="Relógio smartwatch" />
            <p className="product-category">Eletrônicos</p>
            <h3>Relógio Smartwatch</h3>
            <p className="product-rating">⭐⭐⭐⭐⭐ (4.7)</p>
            <p className="product-price">R$ 349,90</p>
            <button className="btn-secondary">Adicionar ao carrinho</button>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="info-card">
          <span className="info-icon">🚚</span>
          <h3>Entrega rápida</h3>
          <p>Receba seus produtos em até 3 dias úteis em todo o Brasil.</p>
        </div>

        <div className="info-card">
          <span className="info-icon">🔒</span>
          <h3>Pagamento seguro</h3>
          <p>Seus dados protegidos com a mais alta tecnologia de criptografia.</p>
        </div>

        <div className="info-card">
          <span className="info-icon">🔄</span>
          <h3>Devolução grátis</h3>
          <p>Não gostou? Devolva em até 7 dias sem nenhum custo.</p>
        </div>
      </section>

      <footer id="contato" className="footer">
        <div className="footer-column">
          <h3>ReactShop</h3>
          <p>A melhor loja virtual para você encontrar tudo o que precisa.</p>
        </div>

        <div className="footer-column">
          <h3>Links úteis</h3>
          <ul>
            <li><a href="#produtos">Produtos</a></li>
            <li><a href="#contato">Contato</a></li>
            <li><a href="#produtos">Sobre nós</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Redes sociais</h3>
          <div className="social-icons">
            <span className="icon-button">📘</span>
            <span className="icon-button">📸</span>
            <span className="icon-button">🐦</span>
          </div>
        </div>

        <p className="copyright">© 2026 ReactShop. Todos os direitos reservados.</p>
      </footer>

    </div>
  )
}

export default App
