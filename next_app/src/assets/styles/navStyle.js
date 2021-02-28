import styled from "styled-components";

export const NavBar = styled.nav`
  z-index: 99999;
  background: transparent;
  width: 100vw;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 30px;
  padding-left: 15px;
  .header {
    .nav-bar {
      display: flex;
      align-items: center;
      .home-button {
        display: contents;
        #home-logo {
          filter: invert(100%) hue-rotate(190deg) saturate(5) contrast(160%);
          height: 70px;
          margin-top: 5px;
          margin-left: 20px;
          transition: 0.3s;
        }
      }
      .home-button:hover {
        cursor: pointer;
        #home-logo {
          filter: none;
        }
      }
      .box-menu-button {
        // display: flex;
        display: none;
        height: 100%;
        width: 80px;
        background-color: transparent;
        position: absolute;
        align-items: center;
        justify-content: center;
        text-align: -webkit-center;
        right: 50px;
        top: 0;
        .menu-icon-box {
          height: 20px;
          width: 30px;
          background-color: transparent;
          text-align: -webkit-center;

          .menu-icon-bar {
            height: 3px;
            width: 30px;
            background-color: #ffffff;
          }
          .menu-icon-bar-off {
            height: 5px;
            width: 30px;
            background-color: transparent;
          }
        }
      }
      .box-menu-button:hover {
        cursor: pointer;
        .menu-icon-box {
          .menu-icon-bar {
            transition: all 0.3s ease;
            background-color: rgba($color: #000, $alpha: 0.5);
          }
          #mid-bar {
            transition: all 0.2s ease;
            margin-top: 2px;
            margin-bottom: 2px;
            width: 26px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 576px) {
    height: 70px;
    padding-top: 0px;
    padding-left: 0px;
    .header {
      .nav-bar {
        height: 70px;
        .home-button {
          #home-logo {
            height: 50px;
            margin-top: 10px;
            margin-left: 10px;
          }
        }
      }
    }
  }
`;
