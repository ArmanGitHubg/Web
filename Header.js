import React from "react"


// function Header() {
//     return(<header className="navbar">Header component</ header>)
// }
// export default Header
class Header extends React.Component {
    render() {
        return(
            <header>
                <h2>welcome, {this.props.username}!</h2>
            </header>
        )
    }
}
export default Header;