import Product, { ProductTemplateProps } from 'templates/Product'

import perfumesMock from 'components/ProductCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default function Index(props: ProductTemplateProps) {
  return <Product {...props} />
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'chanel-ocean-green' } }],
    fallback: false // enforces next to generate page strictly on build time
  }
}

export async function getStaticProps() {
  const descriptionHTML = `<div id="description-region" role="region" aria-labelledby="description-accordion" aria-hidden="false" class="accordion-is-hidden">
  <div class="product-description-name">Combo Nativa SPA Matcha: Loção Desodorante Corporal 400ml + Refil Loção Corporal 400ml</div>
  <div class="product-description-content reset-allow-bold">
      <p>O <strong>Combo Nativa SPA Matcha</strong> chegou para promover um verdadeiro detox em sua pele.</p><p>&#xFEFF;</p><p>A fórmula de <strong>Nativa SPA</strong> conta com o poder de hidratação do óleo 100% puro de gotas purificadas de quinoa, que ajudam a deixar a pele macia, suave e rejuvenescida. Já sua embalagem em refil é ideal para você garantir hidratação intensa e sua fragrância preferida por muito mais tempo.</p><p><br></p><p><strong>LOÇÃO&nbsp;</strong></p><p><br></p><p>A<strong> Loção Detox Desodorante Corporal Nativa SPA Matcha</strong> elimina as impurezas acumuladas no dia a dia e a poluição em sua pele.</p><p><br></p><p><strong>Matcha</strong> é um ingrediente de efeito detox com propriedades antioxidantes, purificantes e revitalizantes para a pele. Com fragrância fresca, a <strong>Loção Nativa SPA Matcha</strong> também hidrata a pele e desodoriza, deixando aquela mega sensação de maciez e renovação.</p><p><br></p><p><strong>REFIL</strong></p><p><br></p><p>O <strong>Refil Loção Detox Desodorante Corporal Nativa SPA Matcha</strong> combina o poder nutritivo da<strong> Quinoa</strong> com o extrato de <strong>Matcha</strong>, rico em polifenóis e com alto poder antioxidante, além de efeito calmante, que hidrata, perfuma e acalma sua pele. Sua embalagem de refil entrega cuidado, hidratação e perfumação para seu corpo, além de muita praticidade para sua rotina.</p><p><br></p><p><strong>Nenhum produto Eudora é testado em animais, ou seja, este item possui selo Cruelty Free.</strong></p>
  </div>
</div>`

  return {
    props: {
      cover:
        'https://images.unsplash.com/photo-1523293182086-7651a899d37f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      productInfo: {
        title: 'Chanel Ocean Green',
        price: '79,00',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap"
      },
      description: descriptionHTML,
      upcomingProducts: perfumesMock,
      upcomingHighlight: highlightMock,
      recommendedProducts: perfumesMock
    }
  }
}
