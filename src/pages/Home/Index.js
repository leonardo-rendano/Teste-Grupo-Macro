import React from 'react';

import { Container,
         MainHome,
         MainTopContent,
         Button, 
         SecondContent,
         ThirdContent,
         MainSecondContent,
         MainThirdContent,
         Button2,
         ProductContainer,
         ProductItem,
         MainLastContentTitle,
         MainLastContentText
         } from './styles';

import { Link } from 'react-router-dom';

import { FaAngleRight } from 'react-icons/fa';

import mainHomeBg from '../../assets/main-home.png';
import mainHomeBg02 from '../../assets/background2.png';
import mainHomeBg03 from '../../assets/background3.png';
import Product01 from '../../assets/product.png';



export default function Home() {
  return(
    <Container>
      <MainHome>
        <img src={mainHomeBg} className="imgBackground" alt="home background" />  
        <img src={mainHomeBg02} className="imgBackground02" alt="home background 2" />
        <div className="bg-white">
          <img src={mainHomeBg03} className="imgBackground03" alt="home background 3" />
        </div>   
      </MainHome>

      <MainTopContent>
        <div className="main-text">
          <div className="text">
            <h1>|</h1> um espaço cheio de <strong>pensamentos</strong> e dilemas
          </div>
        </div>
      </MainTopContent>

        <Button as={Link} className="main-button" to="/produtos">
          confira os produtos
        </Button>

      <SecondContent>
        <div className="second-text">
          <div className="text2">
            <h1>|</h1> <strong>Explore conteúdos</strong> que vão abrir o seu inverso
          </div>
        </div>
      </SecondContent>

      <ThirdContent>
        <div className="third-text">
          <div className="text3">
            <p>
              É um espaço para você navegar por <br />
              conteúdos inteligentes e pessoas <br />
              que gostam de debater as <br />
              principais questões da humanidade.
            </p>
          </div>
        </div>

        <Link to="/quemsomos" className="main-page-link">
            saiba mais
            <div className="arrow">
              <FaAngleRight />
            </div>
        </Link>
      </ThirdContent>

      <MainSecondContent>
        <div className="main-secondContent-text">
          <div className="secondContent-text">
            <h1>|</h1> Encontre os <strong>melhores livros</strong> em diversas plataformas
          </div>
        </div>
      </MainSecondContent>

      <MainThirdContent>
        <div className="main-thirdContent">
          <div className="thirdContent-text2">
            <p>
              Confira a nossa lista de livros com as<br />
              histórias mais incríveis para você <br />
              expandir a sua consciência e abrir os <br />
              seus horizontes.
            </p>
          </div>
        </div>

        <Button2 className="main-button">
          confira os produtos
        </Button2>
      </MainThirdContent>
      
      <ProductContainer>
        <ProductItem>
          <img src={Product01} alt="produto"/>
          <img src={Product01} alt="produto"/>
          <img src={Product01} alt="produto"/>
          <img src={Product01} alt="produto"/>
        </ProductItem>
      </ProductContainer>

      <MainLastContentTitle>
        <div className="last-content-title">
          <div className="last-title">
            <h1>|</h1> Para quem é feito o <br />
            <strong>LOGO?</strong>
          </div>
        </div>
      </MainLastContentTitle>

      <MainLastContentText>
        <div className="last-content-text">
          <div className="last-text">
            <p>
              Foi criado para que <strong>ideias sejam</strong> <br />
              <strong>questionadas,</strong>com objetivo de melhorar <br />
              entendimento do sentido real da vida <br />
              através de conteúdo esclusivo e livros <br />
              escritos para quem deseja entender as <br />
              maiores <strong>questões da humanidade.</strong>
            </p>
          </div>
        </div>
      </MainLastContentText>

    </Container>
  );
}