import React from 'react';

class SearchBar extends React.Component {  
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    this.setState({ showMenu: !this.state.showMenu });
  }
  
  closeMenu(event) {
    event.preventDefault();
    this.setState({ showMenu: false });
  }
  

  render() {
    return (
      <div>
        <button onClick={this.showMenu}
          onBlur={this.closeMenu}
        >
          Show menu
        </button>
        
        {this.state.showMenu
            ? (
              <div
                className="menu"
              >
                <button> Menu item 1 </button>
                <button> Menu item 2 </button>
                <button> Menu item 3 </button>
              </div>
            )
            : (null)
        }
      </div>
    );
  }
}

export default SearchBar;