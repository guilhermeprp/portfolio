import styled from "styled-components";

export const HomePage = styled.div`
  .home-body {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    video {
      z-index: -1;
    }

    .home-bg-gradient {
      height: 100vh;
      width: 100%;
      z-index: 0;
      opacity: 1;
      background-image: linear-gradient(transparent 60%, #010101 90%);
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
            color: ${(props) => props.theme.colors.title};
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
            text-align: right;
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
    .home-body {
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
    .home-body {
      .background-video div {
        width: 100vh !important;
        height: 215vw !important;
        left: -50%;
        position: fixed;
        transform: rotate(-90deg);
        z-index: 0;
      }
      .row {
        z-index: 1;
        width: 90vw !important;
        left: 20px !important;
        text-align-last: left !important;
        float: left !important;
        top: 60vh !important;
        .wrapper {
          padding: 0px 10px !important;
          .box-titles {
            .title1 {
              font-size: 11px !important;
              text-align-last: left !important;
              float: left !important;
              padding-left: 5px !important;
              width: max-content !important;
            }
            .title2 {
              font-size: 50px !important;
              text-align-last: left !important;
              float: left !important;
              line-height: 60px !important;
              margin-top: 5px !important;
              text-align: -webkit-left !important;
            }
            .title3 {
              font-size: 16px !important;
              text-align-last: left !important;
              float: left !important;
              padding-left: 5px !important;
              max-width: 100vw !important;
              width: 80vw !important;
              text-align: start !important;
            }
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
