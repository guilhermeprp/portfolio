import styled from "styled-components";

export const HomePage = styled.section`
  position: fixed;
  overflow-y: scroll;
  height: 100vh;
  width: 100vw;

  .home-bg-gradient {
    z-index: 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    opacity: 1;
    background-image: linear-gradient(transparent 40%, rgb(1 1 1) 120%);
  }

  .background-video {
    z-index: -1;
    position: fixed;
    top: -100px;
    left: -250px;
    width: 900px !important;
    height: 1000px !important;
    transform: rotate(90deg);
  }

  .home-body {
    height: 500vh;
    width: 100vw;
    position: absolute;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    /*  //  *Double Arrow Right Side Bar Toggle  */
    #menu-expand {
      display: none;
    }

    > label {
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      left: 0;
      transition: 0.5s;
      padding: 20px;
      width: 100px;
      height: 100px;
      z-index: 99;
      > span {
        transition: 0.3s;
        transition-delay: 0.3s;
        svg {
          color: rgba(255, 255, 255, 0.9);
          width: 30px;
        }
      }
    }

    #menu-expand ~ label:hover {
      cursor: pointer;
    }

    #menu-expand:checked ~ label {
      left: 200px;

      > span {
        transform: rotateY(180deg);

        svg#first-arrow {
          animation: arrowAnimation 1s infinite;
          animation-delay: 1s;
        }

        svg#second-arrow {
          animation: arrowAnimation 1s infinite;
          animation-delay: 1.1s;
        }
      }
    }

    /*  //  *Side Bar  */
    #menu-expand:checked ~ .menu {
      width: 200px;
    }

    .menu {
      transition: 0.5s;
      position: fixed;
      overflow: hidden;
      width: 0;
      height: 100vh;
      z-index: 99;
    }

    .row {
      right: 0;
      width: 100%;
      text-align-last: right;
      position: relative;
      align-self: center;

      /*  //  *Home Titles Section  */
      .wrapper {
        .box-titles {
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          place-content: flex-end;
          padding-bottom: 10vh;

          .title1 {
            color: white;
            font-size: 16px;
            font-weight: 100;
            letter-spacing: 10px;
            margin: 0;
          }

          .title2 {
            display: block;
            color: white;
            font-size: 60px;
            letter-spacing: 5px;
            padding-bottom: 5px;
            margin: 0;
            float: right;
            text-align: right;
            text-align-last: right;
          }

          .title3 {
            float: right;
            text-align: end;
            color: white;
            font-size: 22px;
          }

          @media (min-width: 600px) {
            .title1 {
              font-size: 20px;
            }

            .title2 {
              font-size: 100px;
            }

            .title3 {
              font-size: 30px;
            }
          }
        }
      }
    }
  }
  /*  //  *Media Query for Desktop and animations  */
  @media (min-width: 600px) {
    .background-video {
      top: -50px;
      left: 0;
      width: 1920px !important;
      height: 1080px !important;
      transform: rotate(0deg);
    }
  }

  @keyframes arrowAnimation {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.4;
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
