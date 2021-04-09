import styled from "styled-components";

export const HomePage = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  overflow-y: scroll;

  .home-bg-gradient {
    height: 100vh;
    width: 100%;
    z-index: 0;
    opacity: 1;
    background-image: linear-gradient(transparent 40%, rgb(1 1 1) 120%);
    position: fixed;
    top: 0;
    left: 0;
  }

  .background-video {
    z-index: -1;
    position: fixed;
    top: -50px;
  }

  .home-body {
    height: 200vh;
    width: 100vw;
    position: absolute;
    overflow-x: hidden;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: repeat(10, 25%);
    grid-template-areas:
      "vazio1"
      "vazio2"
      "home"
      "skills"
      "projects"
      "contact";
    grid-gap: 25px;

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
      z-index: 1;
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

    #menu-expand:checked ~ .menu {
      width: 200px;
      z-index: 999;
    }

    .menu {
      transition: 0.5s;
      position: fixed;
      overflow: hidden;
      grid-area: header;
      width: 0;
      height: 100vh;
    }

    .row {
      grid-row-start: 2;
      right: 0;
      text-align-last: right;
      position: relative;
      align-self: center;

      .wrapper {
        padding: 0px 5vw;

        .box-titles {
          display: inline-block;
          width: 100%;
          height: 100%;

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
        }
      }
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

  @media screen and (min-width: 600px) {
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
`;
