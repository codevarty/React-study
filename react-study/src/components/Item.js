import prototypes from 'prop-types';
function Item({name, isPacked}) {
  //논리 연산자 && 전에는 숫자를 사용하면 안된다.
  return (
    <li className="item">
      {name}{/*isPacked true인 경우만 뒤의 문장이 실행*/isPacked && ' ✔'}
    </li>
  );
}

Item.propTypes = {
  name: prototypes.string.isRequired,
  isPacked: prototypes.bool.isRequired
};

export default Item;