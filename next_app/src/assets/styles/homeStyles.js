import styled from "styled-components";

export const HomePage = styled.div`
  .home-background {
    height: 120vh;
    opacity: 0.1;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
    margin-top: -50px;
    animation: bgAnimation 3s normal;
  }
  .home-bg-gradient {
    height: 100vh;
    width: 100%;
    z-index: 0;
    opacity: 1;
    background-image: linear-gradient(transparent 60%, #202125 90%);
    position: absolute;
    top: 0;
    left: 0;
  }

  .row {
    right: 0;
    top: 50vh;
    z-index: 1;
    position: absolute;
    width: 100vw;
    text-align-last: right;
    .wrapper {
      padding: 0px 10vw;

      .box-titles {
        display: inline-block;
        width: 70%;
        height: 100%;

        .title1 {
          // color: #c0c0c2;
          color: ${(props) => props.theme.colors.thirdtitle};
          font-size: 20px;
          font-weight: 100;
          letter-spacing: 10px;

          margin: 0;
        }

        .title2 {
          display: block;
          color: white;
          font-size: 100px;
          letter-spacing: 5px;
          padding-bottom: 5px;

          margin: 0;
          text-align-last: right;
          float: right;
          text-align: -webkit-right;
        }

        .title3 {
          float: right;
          text-align: end;
          color: ${(props) => props.theme.colors.subtitle};
          font-size: 30px;
        }
      }
    }
  }

  @media screen and (max-width: 1340px) and (min-width: 769px) {
    .row {
      top: 40vh !important;
    }

    .title3 {
      max-width: 460px;
      text-align: justify;
    }
  }

  @media screen and (max-width: 768px) and (min-width: 577px) {
    .home-background {
      height: 110vh;
    }
    .row {
      top: 65vh;
    }
    .title1 {
      font-size: 16px !important;
      padding-left: 5px !important;
      width: max-content !important;
      display: inline;
      color: #696d79 !important;
    }
    .title2 {
      font-size: 90px !important;
      line-height: 90px !important;
      margin-top: 5px !important;
    }
    .title3 {
      font-size: 20px !important;
      padding-left: 5px !important;
      max-width: 100vw !important;
      width: 80vw !important;
    }
  }

  @media screen and (max-width: 576px) {
    .row {
      width: 90vw;
      left: 20px;
      text-align-last: left;
      float: left;
      top: 60vh;
      .wrapper {
        padding: 0px 10px;
        .box-titles {
          .title1 {
            font-size: 11px;
            text-align-last: left;
            float: left;
            padding-left: 5px;
            width: max-content;
            color: #696d79;
          }
          .title2 {
            font-size: 50px;
            text-align-last: left;
            float: left;
            line-height: 60px;
            margin-top: 5px;
            text-align: -webkit-left;
          }
          .title3 {
            font-size: 16px;
            text-align-last: left;
            float: left;
            padding-left: 5px;
            max-width: 100vw;
            width: 80vw;
            text-align: start;
          }
        }
      }
    }
  }

  @media screen and (max-width: 375px) {
    .row .wrapper {
      padding: 0px 2px;
    }
  }

  @keyframes bgAnimation {
    0% {
      transform: translateY(300px);
      opacity: 0;
    }

    50% {
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 0.1;
    }
  }
`;
