import styles from './button.scss';


function Button(props) {
    return (
      <form action = {props.page} >
            <button className={props.className}>{props.text}</button>
      </form>
    );
  }

  export default Button;