import { createGlobalStyle } from 'styled-components';
import 'normalize.css/normalize.css';

export default createGlobalStyle`
  ::selection {
    background-color: #D284FA50;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
	font-family: 'Poppins', sans-serif;
	font-size: 14px;
  }

  html {
    scroll-behavior: smooth;
	font-variant-ligatures: none;
	-webkit-font-variant-ligatures: none;
	text-rendering: optimizeLegibility;
	-moz-osx-font-smoothing: grayscale;
	font-smooth: antialiased;
	-webkit-font-smoothing: antialiased;
	text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
  }

  body {
  	background-color: #FFFFFF;
	line-height: 1.5;
    height: 100vh;
    margin: auto;
    overflow: initial;
    width: 100vw;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Poppins', sans-serif;
    line-height: 1.25;
	margin: 16px 0;
	text-transform: capitalize;
  }

	figure, img, svg, video {
		max-width: 100%;
	}

	figure {
		width: auto !important;
	}

	video {
		display: block;
		width: 100%;
	}

	h1, .h1 {
		margin: 24px 0;
		font-size: 3.2rem;
		font-weight: 700;
		line-height: 1.1;
	}

	h2,	.h2 {
		font-size: 3rem;
	}

	h3,	.h3 {
		font-size: 2.4rem;
	}

	h4,	.h4 {
		font-size: 2rem;
	}

	h5,	.h5 {
		font-size: 1.8rem;
	}

	h6,	.h6 {
		font-size: 1.6rem;
	}

  button, a {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (prefers-reduced-motion: reduce) {
		*,
		*::before,
		*::after {
			animation-duration: 0.001ms !important;
			animation-iteration-count: 1 !important;
			transition-duration: 0.001ms !important;
		}
	}

	.hide:not(:focus):not(:active),
	.hidden:not(:focus):not(:active) {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
		width: 1px;
  }

.modal-body-enter {
	opacity: 0;
  transform: translateY(100%);
}
.modal-body-enter-active {
	opacity: 1;
  transform: translateY(0%);
  transition: all ease 500ms;
}
.modal-body-exit {
	opacity: 1;
  transform: translateY(0%);
}
.modal-body-exit-active {
	opacity: 0;
  transform: translateY(100%);
  transition: all ease 500ms;
}

.modal-overlay-enter {
  opacity: 0;
}
.modal-overlay-enter-active {
  opacity: 1;
  transition: opacity 500ms;
}
.modal-overlay-exit {
  opacity: 1;
}
.modal-overlay-exit-active {
  opacity: 0;
  transition: opacity 500ms;
}
  @keyframes fade-in-bottom {
	0% {
		-webkit-transform: translateY(80%);
				transform: translateY(80%);
		opacity: 0;
	}
	50%{
		opacity: 0;
	}
	100% {
		-webkit-transform: translateY(0);
				transform: translateY(0);
		opacity: 1;
	}
	}
	[data-animation="fadeUp"]{
		animation: fade-in-bottom 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;
	}
`;
