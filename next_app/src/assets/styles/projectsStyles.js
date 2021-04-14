import styled from "styled-components";
import project1 from "../images/genshin_dmg_home.png";

export const Projects = styled.section`
  .cards-grid {
    display: flex;
    flex-direction: column;
    .row1,
    .row2 {
      display: flex;
      flex-direction: column;
      margin: 3rem 0;
    }
  }
  .card {
    width: 100%;
    max-height: 300px;
    margin: 2rem 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* object-fit: cover; */
    > div {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      & * {
        margin: 1rem 0;
      }
      > strong {
        font-size: 3rem;
      }
      p {
        font-size: 1.25rem;
      }
      a {
        text-decoration: none;
        max-width: 130px;
        display: flex;
        flex-direction: row;

        &:hover strong,
        &:hover strong svg path {
          color: #7a001d;
        }

        strong {
          margin: 0;
          color: #c10834;
          font-size: 1.5rem;
          width: 100%;
          display: flex;
          align-content: center;

          svg {
            max-height: 1.5rem;
            max-width: 30px;
            margin: 0 10px;
            path {
              color: #c10834;
            }
          }
        }
      }
    }
    #uniphc {
      object-fit: cover;
      transition: 0.5s;
      transform: translateY(-50px) scale(0.8);
      &:hover {
        transform: translateY(-50px) scale(0.9);
      }
    }

    #genshin {
      transition: 0.5s;
      transform: translateY(-70px) scale(0.5);

      &:hover {
        transform: translateY(-70px) scale(0.6);
      }
    }
  }

  @media (min-width: 769px) {
    .cards-grid {
      width: 100%;
      height: 90vh;
      max-height: 100vh;
      justify-content: center;
      .row1,
      .row2 {
        display: flex;
        flex-direction: row;
        .order-1 {
          order: 1;
        }
        order-2 {
          order: 2;
        }
      }
    }

    .card {
      width: 100%;
      height: 100%;
    }
  }
`;
