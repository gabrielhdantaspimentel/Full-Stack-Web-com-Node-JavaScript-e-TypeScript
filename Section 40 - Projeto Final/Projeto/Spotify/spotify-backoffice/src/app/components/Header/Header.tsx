import styles from './Header.module.scss'
console.log(styles)

export default function Header(){
    return <div className={`header ${styles.header}`}> Logo | <a href="#">Link</a> </div>
}