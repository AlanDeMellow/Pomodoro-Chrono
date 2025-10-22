import './styles/theme.css';
import './styles/global.css';

import { Heading } from './components/Heading';

export function App() {
  return (
    <>
      <Heading attr={123} attr2='String'>
        Ola, mundo 1
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
        dignissimos aut saepe provident quos dolor temporibus delectus veritatis
        dolores! Officiis fuga dolorem vitae eaque facilis a, unde incidunt
        consequatur voluptatem.
      </p>
    </>
  );
}
