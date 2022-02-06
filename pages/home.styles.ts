import css from 'styled-jsx/css'

export const styles = css`
@keyframes rotateIcon {
  0% { transform: rotate(0) }
  50% { transform: rotate(360deg) }
  100% { transform: rotate(0) }
}

.home {
  background: #fff;
  color: #333;
  line-height: 1.6;
  font-size: 1em;
  padding-top: 10vh;
  text-align: center;
}

.saying{
  color: #999;
  margin-top: 2em;
  padding-bottom: 2em;
}

.avatar{
  display: block;
  margin: 0 auto;
  width: 5em;
}

div :global(.avatar img) {
  border-radius: 50%;
}

div :global(h1) {
  margin: 2vh 0;
  font-size: 3em;
}

div :global(div div) {
  margin-bottom: 0.5em;
  line-height: 1.6;
}

div :global(a) {
  display: inline-block;
  color: #333;
  text-decoration: none;
}

.links {
  margin-top: 1em;
}

div :global(.links a) {
  text-decoration: underline;
}

.social a {
  font-size: 1.2em;
  margin: 1em;
}

div :global(social a:hover){
  animation-duration: 2s;
  animation-name: rotateIcon;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

.contact{
  margin: 0 auto;
  width: 9em;
  height: 2em;
  cursor: pointer;
  position: relative;
  background: #fff;
}

div :global(.contact a) {
  border: 1px solid #333;
  border-radius: 0.3em;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

.lang {
  padding-top: 2em;
}

div :global(.lang a) {
  font-size: 16px;
  margin: 0 0.5em;
}
div :global(.lang a:hover) {
  text-decoration: underline;
}

.top{
  margin-right: 10px;
}
`
